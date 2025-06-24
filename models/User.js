import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  translation: { type: [String], default: [] },
  summary: { type: [String], default: [] },
  title: { type: [String], default: [] },
  tags: { type: [String], default: [] },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
