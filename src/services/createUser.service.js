import { v4 as uuidv4 } from "uuid";
import { users } from "../database";
import * as bcrypt from "bcryptjs";

export const createUserService = async ({ name, email, isAdm, password }) => {
  const newUser = {
    name,
    email,
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
    id: uuidv4(),
  };

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ ...newUser, password: hashedPassword });

  return newUser;
};
