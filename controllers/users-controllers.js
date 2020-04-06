const uuid = require("uuid/v4");

const HttpError = require("../models/http-error");

const dummyUsers = [
  {
    id: "u1",
    name: "Tom Jerry",
    email: "test@test.com",
    password: "123456",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: dummyUsers });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = dummyUsers.find((u) => u.email === email);

  if (hasUser) {
    throw new HttpError(
      "Could not create user, email already exists.",
      422
    );
  }

  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  };

  dummyUsers.push(createdUser);

  res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = dummyUsers.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError(
      "Could not identify user, credentials seem to be wrong.",
      401
    );
  }

  res.json({ message: "Logged in" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
