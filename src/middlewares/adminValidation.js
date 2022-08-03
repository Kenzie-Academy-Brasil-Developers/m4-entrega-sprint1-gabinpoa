export const adminValidation = (request, response, next) => {
  const { user } = request;

  if (user.isAdm === false) {
    return response.status(401).json({ message: "Unauthorized" });
  } else {
    next();
  }
};
