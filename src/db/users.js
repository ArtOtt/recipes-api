import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionTocken: { type: String, select: false },
  },
});

export const UserModel = mongoose.model("User", UserSchema);

export function getAllUsers() {
  return UserModel.find();
}

export function getUserByEmail(email) {
  return UserModel.findOne({ email });
}

export async function creatUser(values) {
  return await new UserModel(values).save().then((user) => user.toObject());
}
