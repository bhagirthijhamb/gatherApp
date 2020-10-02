# How the application works

1. The app is hosted at https://morning-cliffs-26944.herokuapp.com/
2. The host can type a session room name and click on Create Session button to create a session.
3. Once a session is created Connect button appears, that can be clicked to start the video call.
4. The host can share this session room name with other attendees who can enter the same session room name to join the call.
5. The app works for any number of attendes but at this stage the UI is set for two people. It an be extended to accomodate more attendees.
6. At any time attendees can mute himself and other attendees by unchecking the checkbox next to the microphone icon.
7. They can toggle the video on and off with checkbox next to the camera icon.
8. Attendees can share their screen by choosing the Screen option.
9. An attendee can leave the session by clicking the red call button at the bottom.
10. This will not end the session and the attendees can rejoin the session by entering the same session room name on the home page.
11. Press Home icon (🏠) in the navbar to go back to home page.

**Note: The sessions are created from the backend/ NodeJS server and can be requested by any number of clients by passing the sessionID.**
--------------------------------------------------------------

This project uses the following technologies:

# ReactJS
Front-end library of choice.
# Redux
State management tool for the app
# Router
For managing client-side routing.
# Fontawesome
UI library for implementing icons in the app
# NodeJS
For writing the back-end that includes server and routes for cretaing a sessionId and token for an input provided by the user.
# Express
NodeJS framework for building the backend

-------------------------------------------------------------------------

# Steps to start Node.js server
1. git clone https://github.com/bhagirthijhamb/gatherApp
2. cd gatherApp
3. npm install
4. nodemon
5. Server will start at port 5000

# Steps to start React.js UI
1. Open new terminal
2. cd gatherApp/client
3. npm install
4. npm start
5. Application will open in the browser window (http://localhost:3000/)
