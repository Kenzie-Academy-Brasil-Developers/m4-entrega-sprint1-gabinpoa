import { listUsersService } from "../services/listUsers.service";

export const listUsersController = (request, response) => {
  const users = listUsersService();

  return response.json(users);
};
