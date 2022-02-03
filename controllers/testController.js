exports.helloWorld = (req, res, next) => {
  const response = {
    message: 'hello world'
  };
  return res.send(response);
};
