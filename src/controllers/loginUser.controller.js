import { loginUserService } from "../services/loginUser.service";

export const loginUserController = (request, response) => {
  const token = loginUserService(request.body);

  return response.json({ token: token });
};
