import jwt from "jsonwebtoken";
import { users } from "../database";

export const tokenValidation = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response.status(400).json({ message: "Missing Token" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "Invalid Token" });
    }

    request.user = users.find((user) => user.id === decoded.id);

    if (!request.user) {
      return response.status(400).json({ message: "Unauthorized" });
    }
    next();
  });
};
