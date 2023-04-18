import app from "./app";

try {
  app.listen(3000, "localhost");
  console.log("listeng");
} catch (err) {
  console.log(err);
}
