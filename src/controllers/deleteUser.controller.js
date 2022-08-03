import { deleteUserService } from "../services/deleteUser.service";

export const deleteUserController = (request, response) => {
  const userDeleted = deleteUserService(request.userIndex);

  return response.json(userDeleted);
};
