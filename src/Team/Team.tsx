import React, { useState, useEffect } from "react";
import {
  SectionTeam,
  HeaderSection,
  SmallTitle,
  Title,
} from "../Shared/Styles";
import { useParams } from "react-router-dom";
import { getTeamDetails, getSingleUser } from "../Api/Api";
import UserProfile from "../Users/UserProfile";
import Graph from "../Graph/Graph";
import Loader from "../Shared/Loader";

export type ITeamMembers = {
  id?: string;
  displayName?: string;
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
  location?: string;
};

export type ITeamObj = {
  id?: string;
  name?: string;
  teamLeadId?: string;
  teamMemberIds?: string;
};

const Team = () => {
  const { id } = useParams();
  const [teamMembers, setTeamMembers] = useState<ITeamMembers[]>([]);
  const [teamLead, setTeamLead] = useState<ITeamMembers>({});
  const [TeamDetails, setTeamDetails] = useState<ITeamObj>({});
  const [loading, setLoading] = useState<Boolean>(false);

const fetchTeam = async () => {
    setLoading(true)
    const req = await getTeamDetails(`${id}`);
    if(req) {
      const allTeamMembers = await Promise.all(
        req.teamMemberIds.map((member: string) => getSingleUser(member))
      );
      const getTeamLeadDetails = await getSingleUser(req.teamLeadId);
  
      setTeamMembers(allTeamMembers);
      setTeamLead(getTeamLeadDetails as ITeamMembers);
      setTeamDetails(req);
      setLoading(false)
    }
   
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <>
    {loading ? (
      <Loader />
    ) : (
    <SectionTeam >
           
      <div className="container" data-testid="team">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <HeaderSection>
                  <Title className="text-center">
                    Let's meet with our team members
                  </Title>
                </HeaderSection>
              </div>
              <div className="col-md-12 col-lg-12">
                <SmallTitle>TEAM LEAD</SmallTitle>
                {Object.keys(teamLead).length !== 0 && (
                  <UserProfile
                    name={teamLead.displayName}
                    avatar={teamLead.avatarUrl}
                    firstName={teamLead.firstName}
                    lastName={teamLead.lastName}
                    location={teamLead.location}
                  />
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <SmallTitle>TEAM MEMBERS</SmallTitle>
              </div>
              {teamMembers.map((member) => {
                return (
                  <React.Fragment key={member.id}>
                    <UserProfile
                      name={member.displayName}
                      avatar={member.avatarUrl}
                      firstName={member.firstName}
                      lastName={member.lastName}
                      location={member.location}
                    />
                  </React.Fragment>
                );
              })}
            </div>
            <div className="col-md-8 col-lg-6">
              <Graph
                TeamName={TeamDetails.name}
                NumberOfTeamMembers={TeamDetails.teamMemberIds?.length}
              />
            </div>
      </div>
      
    </SectionTeam>
    )}
    </>
  );
};

export default Team;
