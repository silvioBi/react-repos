# Overview and how to run

Hi there this is a simple app that renders list of react repositories from [Github Graphql API v4](https://developer.github.com/v4/).

In order to run the app locally:
1. In your browser console `localStorage.setItem('GITHUB_API_TOKEN', 'the-long-token-you-were-given')`
2. Create an `.env.local` file with content `REACT_APP_GITHUB_API_ENDPOINT = https://api.github.com/graphql`
3. Run `npm run start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


// [sb] TODO also add the other scripts to readme file 