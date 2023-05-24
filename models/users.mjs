import mongoose from "mongoose";

const { Schema } = mongoose;

const UsersSchema = new Schema({
  user: String,
  password: String,
});

const Users = mongoose.model("users", UsersSchema);

export default Users;
