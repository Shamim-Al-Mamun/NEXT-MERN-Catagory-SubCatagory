require("dotenv").config();
const cors = require("cors");
const express = require("express");

const connection = require("./config/database");

const catagories = require("./routes/catagories.route");

const app = express();
app.use(express.json());



// enables cors----------------------------------------------------------->
// app.use(cors());
app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type", "Authorization"],
    exposedHeaders: ["sessionId", "Authorization"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);


//Database connection------------------------------------------------------>
connection();


//application routes------------------------------------------------------->
app.use("/api/catagories", catagories);


// <------------------deployment------------------------------------------->
// __dirname = path.resolve();
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/client/build")));
// }
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });
// <------------------deployment------------------------------------------->


//Server------------------------------------------------------------------->
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});