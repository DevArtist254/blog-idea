exports.getAllPost = (req, res) => {
  res.status(200).json({
    backendTest: 'hello world',
  });
};

exports.createAPost = (req, res) => {
  const foo = req.body;

  console.log(foo);
  res.status(200).json({
    feedback: `${foo.foo}`,
  });
};
