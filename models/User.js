const moongoose = require("mongoose");
const { Schema } = moongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema);
