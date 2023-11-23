import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server started");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Your server started in port : " + PORT);
})