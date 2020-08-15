const express = require("express");
const userRoutes = require("./Routes/user");
const app = express();
const mongo = require("mongoose");
const morgan = require("morgan");

const port = process.env.PORT || 5000;

mongo.connect(
  "mongodb+srv://silverpoision:Silver@1671@test-proj.nknii.mongodb.net/orders?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Connected to DB");
  }
);

app.listen(port, (err) => {
  console.log(`Server Started at port ${port}`);
});

//Middlewares
app.use(express.json());

//Router
app.use("/api/", userRoutes);
app.use(morgan("tiny"));

//404 error Handler
app.use((_, res) => {
  return res.status(404).send("404 You are on a wrong way!!");
});

//Error Handler
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  res.status(err.statusCode).json({
    success: false,
    status: err.status,
    message: err.message,
  });
};

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  mode = "production";

  if (mode === "development") {
    sendErrorDev(err, res);
  } else if (mode === "production") {
    sendErrorProd(err, res);
  }
});