export const admValidation = (request, response, next) => {
  const { user } = request;

  if (user.isAdm === false) {
    return response.status(401).json({ message: "User is not adm" });
  } else {
    next();
  }
};
