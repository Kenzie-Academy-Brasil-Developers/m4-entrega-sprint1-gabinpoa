import { users } from "../database";

export const deleteUserService = (userIndex) => {
  users.splice(userIndex);
  return "User deleted";
};
