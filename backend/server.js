const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3001;

app.post("/login", (req, res) => {
  const code = req.body.code;
  let spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "6c3198a53fac4098ad2067196e71b282",
    clientSecret: "2fc9fe34bd604349a4ffbff53f11e5b1",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.listen(PORT || 3001, () => {
  console.log("Server is listening on port 3001");
});
