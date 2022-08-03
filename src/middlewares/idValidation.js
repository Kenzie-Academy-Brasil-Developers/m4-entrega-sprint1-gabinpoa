import { users } from "../database";

export const idValidation = (request, response, next) => {
  const { id } = request.params;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return response.status(400).json("User not found");
  } else {
    request.userIndex = id;
    next();
  }
};
