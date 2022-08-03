import { users } from "../database";

export const emailAvailabilityAuth = (request, response, next) => {
  const { email } = request.body;

  const userIndex = users.findIndex((user) => user.email === email);

  if (userIndex !== -1) {
    return response
      .status(400)
      .json({ message: "E-mail is alredy being used" });
  } else {
    next();
  }
};
