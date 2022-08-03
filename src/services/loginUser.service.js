import jwt from "jsonwebtoken";
import { users } from "../database";

export const loginUserService = ({ email }) => {
  const { id } = users.find((user) => user.email === email);
  const token = jwt.sign({ id: id }, "SECRET_KEY", { expiresIn: "24h" });

  return token;
};
