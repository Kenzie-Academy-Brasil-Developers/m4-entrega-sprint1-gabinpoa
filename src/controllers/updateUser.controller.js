import { updateUserService } from "../services/updateUser.service";

export const updateUserController = async (request, response) => {
  const user = await updateUserService(request.body, request.userIndex);

  return response.json(user);
};
