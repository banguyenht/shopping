const User = require("../models/users");
const ErrorHandler = require("../ultils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "samples/people",
      url: "https://res.cloudinary.com/dia6mgkk1/image/upload/v1682495655/samples/people/boy-snow-hoodie.jpg",
    },
  });
  const token = user.getJwtToken();
  res.status(201).json({
    success: true,
    user,
    token: token,
  });
});
