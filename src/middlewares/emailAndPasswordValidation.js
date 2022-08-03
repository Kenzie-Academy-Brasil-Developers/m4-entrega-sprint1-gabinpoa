import { users } from "../database";
import * as bcrypt from "bcryptjs";

export const emailAndPasswordValidation = (request, response, next) => {
  const { email, password } = request.body;

  const user = users.find((userInDB) => userInDB.email === email);

  const passwordsMatch = bcrypt.compareSync(password, user.password);

  if (user && passwordsMatch) {
    next();
  } else {
    return response
      .status(400)
      .json({ message: "E-mail or password incorrect" });
  }
};
