import express from "express";

const app = express();
const Port = process.env.PORT || 8800;

app.get("/", (req, res) => {
  return res.json({
    status: "success",
    message: "Hello from Docker🐳",
  });
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
