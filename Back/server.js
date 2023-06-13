const express = require('express')
const cors = require('cors');
const router = require('./Router/routes');
const connectDB = require('./config/db');

const app = express();
connectDB();
app.use(cors());

app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("HELLO");
});

const port = process.env.port || 2999;
app.listen(port, console.log(`server is running on ${port}`));
