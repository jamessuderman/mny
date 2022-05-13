import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);
export default User;
