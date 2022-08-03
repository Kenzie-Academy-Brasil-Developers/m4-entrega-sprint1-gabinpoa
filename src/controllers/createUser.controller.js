import { createUserService } from "../services/createUser.service";

export const createUserController = async (request, response) => {
  const user = await createUserService(request.body);

  return response.status(201).json(user);
};
