const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    mesg: "Hellp",
  });
});
// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
