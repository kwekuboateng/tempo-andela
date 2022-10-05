import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from "victory";

interface GraphProp {
  NumberOfTeamMembers?: number;
  TeamName?: string;
}

const Graph = ({ NumberOfTeamMembers, TeamName }: GraphProp) => {
  const data = [{ NumberOfTeamMembers, TeamName }];
  return (
    <>
      {NumberOfTeamMembers !== undefined && (
        <div>
          <h4>Graph showing number of team members per team</h4>
          <VictoryChart domainPadding={10} theme={VictoryTheme.material}>
            <VictoryAxis
              key={1}
              tickValues={[NumberOfTeamMembers]}
              tickFormat={[`${TeamName}`]}
            />
            <VictoryAxis dependentAxis tickFormat={(x) => x} />
            <VictoryStack colorScale={"warm"}>
              <VictoryBar
                data={data}
                x={"TeamName"}
                y={"NumberOfTeamMembers"}
              />
            </VictoryStack>
          </VictoryChart>
        </div>
      )}
    </>
  );
};

export default Graph;
