const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {


    const r = await axios.put(
      ' https://api.chatengine.io/users/',
      { username: username, secret: username, frist_name: username },
      { headers: { "private-key": "dd90418e-0fc9-4e49-9051-3d2df6c9e576" } },


    )
    return res.status(r.status).json(r.data)



  } catch (err) {
    return res.status(err, response.status).json(err.response.data)


  }




});

app.listen(3001);