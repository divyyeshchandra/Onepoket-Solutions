const express = require("express");

const app = express();
app.use(express.json());

app.get("/getReq", (req, res) => {
  res.send({
    Message: "Hello World!",
  });
});

app.post("/postReq", (req, res) => {
  const data = req.body.data;
  res.send({
    Message: data,
  });
});

app.patch("/pathReq", (req, res) => {
  const data = req.body.data;
  //data="Hello World!"
  //Modify into the Resource
  res.send({
    Message: data,
  });
});

app.delete("/deleteReq", (req, res) => {
  const data = req.body.data;
  //data="Hello World!"
  //Deleting data in Db
  res.send({
    Message: data,
  });
});

const start = () => {
  app.listen(3000, () => {
    console.log("Server Started at 3000");
  });
};

start();
//nodemon question1.js in current Dir to start the server
