import { Router } from "express";
import { createUserController } from "../controllers/createUser.controller";
import { deleteUserController } from "../controllers/deleteUser.controller";
import { listUsersController } from "../controllers/listUsers.controller";
import { loginUserController } from "../controllers/loginUser.controller";
import { readProfileController } from "../controllers/readProfile.controller";
import { updateUserController } from "../controllers/updateUser.controller";
import { admValidation } from "../middlewares/admValidation";
import { emailAndPasswordValidation } from "../middlewares/emailAndPasswordValidation";
import { emailAvailabilityAuth } from "../middlewares/emailAvailabilityAuth";
import { idValidation } from "../middlewares/idValidation";
import { tokenValidation } from "../middlewares/tokenValidation";

export const userRouter = Router();

userRouter.post("", emailAvailabilityAuth, createUserController);

userRouter.post("/login", emailAndPasswordValidation, loginUserController);

userRouter.get("", tokenValidation, listUsersController);

userRouter.get(
  "/profile",
  tokenValidation,
  admValidation,
  readProfileController
);

userRouter.patch("/:id", tokenValidation, updateUserController);

userRouter.delete("/:id", idValidation, deleteUserController);
