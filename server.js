const express = require('express');
// const router = express.Router();
const cors = require('cors');
const path = require('path');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server started on port 5000");
});

app.use(cors());

const apiKey = process.env.TOKBOX_API_KEY;
const secret = process.env.TOKBOX_SECRET;

if (!apiKey || !secret) {
  console.error(
    "========================================================================================");
  console.error("");
  console.error("Missing TOKBOX_API_KEY or TOKBOX_SECRET");

  console.error(
    "=========================================================================================");
  process.exit();
}

const OpenTok = require("opentok");
const opentok = new OpenTok(apiKey, secret);

const roomToSessionIdDictionary = {};

// returns the room name, given a session ID that was associated with it
function findRoomFromSessionId(sessionId) {
  return _.findKey(roomToSessionIdDictionary, function (value) { return value === sessionId; });
}

// route to generate sessionId and token for the input (name) entered by the user from front-end
app.get("/room/:name", function (req, res) {
  var roomName = req.params.name;
  var sessionId;
  var token;
  console.log(
    "attempting to create a session associated with the room: " + roomName
  );

  // if the room name is associated with a session ID, fetch that
  if (roomToSessionIdDictionary[roomName]) {
    sessionId = roomToSessionIdDictionary[roomName];

    // generate token
    token = opentok.generateToken(sessionId);
    res.setHeader("Content-Type", "application/json");
    res.send({
      apiKey: apiKey,
      sessionId: sessionId,
      token: token,
    });
  }
  // if this is the first time the room is being accessed, create a new session ID
  else {
    opentok.createSession({ mediaMode: "routed" }, function (err, session) {
      if (err) {
        console.log(err);
        res.status(500).send({ error: "createSession error:" + err });
        return;
      }

      roomToSessionIdDictionary[roomName] = session.sessionId;

      // generate token
      token = opentok.generateToken(session.sessionId);
      res.setHeader("Content-Type", "application/json");
      res.send({
        apiKey: apiKey,
        sessionId: session.sessionId,
        token: token,
      });
    });
  }
});


// Serve static assest if in production
if(process.env.NODE_ENV === 'production'){
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}