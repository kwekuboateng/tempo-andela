## How the problem and/or solution was approached
- First of all, I created a react application written in typescript

- I created the various components such as 
- `Teams (displays list of all teams`, 
    I list all teams using a datatable with pagination and a global search input by name
- `Team (displays details of a single team with it's leader and members and a Graph`, 
    A user can get to this component from the Teams component by click Team Details button
    and fetches a single team by appending the id to the teams endpoint
- `Graph (Graph showing number of team members per team)`, 
- `Users (displays single user)`
- `Api (makes all server request)`
- `ErrorPage (displays a fallback component when there is an error`

- 
## Information on how to run the application
## Clone app
### `git clone https://github.com/kwekuboateng/tempo-andela.git`

In the project directory, you can run:

## Run app 
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build app 
### `npm build` 
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The app can be hosted on netlify or any other hosting platform

## Test app
### `npm run test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npx cypress` to run e2e testing

