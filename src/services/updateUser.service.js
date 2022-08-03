import { users } from "../database";
import * as bcrypt from "bcryptjs";

export const updateUserService = async (
  { name, email, password },
  userIndex
) => {
  let newUser = {
    updatedOn: new Date(),
  };

  if (name) {
    newUser.name = name;
  }

  if (email) {
    newUser.email = email;
  }

  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.password = hashedPassword;
  }

  users[userIndex] = { ...users[userIndex], ...newUser };

  return users[userIndex];
};
