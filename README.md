This project uses the following technologies for the app

# ReactJS
Front-end library of choice
# Redux
State management tool for the app
# Router
For managing client-side routing.
# Fontawesome
UI library for implementing icons in the app
# NodeJS
For writing the back-end and route for a session
# Express

The seesions are created from the backend/ NodeJS server ans can be requested by any number of clients by passing the sessionID.

### UI

**Note-**

# Steps to start Node.js server
1. git clone https://github.com/bhagirthijhamb/gatherApp
2. cd cognizantProject
3. npm install
4. nodemon
5. Server will start at port 5000

# Steps to start React.js UI
1. Open new terminal
2. cd cognizantProject/client
3. npm install
4. npm start
5. Application will open in the browser window (http://localhost:3000/)

# How the application works
1. The app is hosted at https://morning-cliffs-26944.herokuapp.com/
2. The host can type a sessionId, click on Create Seesion button to create a session.
3. Once a seesion is created connect butto appears tha can be clicked to start the video call
4. The host can share this session id with other attendees
5. The attendees the enter the same session to join the call.
6. The app works for any number of attendes but at this stage the UI set for two people. It an be extended to accomodate more attendees
7. At any time attendee can mute himself and other attendees by unchecking the microphone icon.
8. Can toggle the video on and off with camera icon.
9. Attendees canshare their screen bu choosing the Screen Share option.
9. The attendee can be leave the session by clicking the red call button at the bottom.
10. This  will not end the session and the attendees can rejoin the session by entering the same session id on the home page.
8. 




1. http://localhost:8080/ (UI main screen) displays the list of agents
2. User can select one of the agents by clicking on the agent name to display detailed configuration information about that device.
3. Agent details page displays two tables for with details of cameras and users attached to that agent.
4. User can click on individual camera to see camera details and its recording schedule.
5. Navigation bar at the top can be used to go back to home page at any point in the application.


--------------------------------------------------------------

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



