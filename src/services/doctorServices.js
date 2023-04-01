import bcrypt from "bcrypt";
import userRepositories from "../repositories/doctorRepositories.js";
import { v4 as uuidV4 } from "uuid";
import errors from "../errors/index.js";

async function create({ name, email, password ,specialty,city }) {
  const { rowCount } = await userRepositories.findByEmail(email);
  if (rowCount) throw errors.duplicatedEmailError(email).message;

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepositories.create({ name, email, password: hashPassword,specialty,city });
}

async function signin({ email, password }) {
  const {
    rowCount,
    rows: [user],
  } = await userRepositories.findByEmail(email);
  if (!rowCount) throw errors.invalidCredentialsError().message;

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw errors.invalidCredentialsError().message;

  const token = uuidV4();
  await userRepositories.createSession({ token, userId: user.id });

  return token;
}

export default {
  create,
  signin,
};