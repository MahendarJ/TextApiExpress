import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const postUser = (req, res) => {
  const data = req.body;
  users.push({ id: uuidv4(), ...data });
  res.send("Added successfully");
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`Deleted user with id ${id}`);
};

export const patchUser = (req, res) => {
  const { id } = req.params;
  const { Fname, Lname, Age } = req.body;
  const foundUser = users.find((user) => user.id === id);

  if (Fname) foundUser.Fname = Fname;
  if (Lname) foundUser.Lname = Lname;
  if (Age) foundUser.Age = Age;
  res.send(`User with id:${id} successfully updated`);
};
