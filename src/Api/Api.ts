import axios from "axios";
const instance = axios.create({
  baseURL: "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com",
});

const getAllTeams = async () => {
  try {
    const getTeams = await instance.get("/teams/");
    return getTeams.data;
  } catch (error) {
    return error;
  }
};

const getTeamDetails = async (id: string) => {
  try {
    const teamMember = await instance.get(`/teams/${id}`);
    return teamMember.data;
  } catch (error) {
    return error;
  }
};

const getAllUsers = async () => {
  try {
    const getUsers = await instance.get("/users/");
    return getUsers.data;
  } catch (error) {
    return error;
  }
};

const getSingleUser = async (id: string) => {
  try {
    const singleUser = await instance.get(`/users/${id}`);
    return singleUser.data;
  } catch (error) {
    return error;
  }
};

export { getAllTeams, getAllUsers, getSingleUser, getTeamDetails };
