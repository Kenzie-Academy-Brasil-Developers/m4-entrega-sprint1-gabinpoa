export const readProfileController = (request, response) => {
  const { user } = request;

  return response.json(user);
};
