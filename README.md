# Overview and how to run

Hi there this is a simple app that renders list of react repositories from [Github Graphql API v4](https://developer.github.com/v4/).

In order to run the app locally:
2. Create an `.env.local` file with this content:
```
REACT_APP_GITHUB_API_ENDPOINT = https://api.github.com/graphql
REACT_APP_GITHUB_ACCESS_TOKEN = your-token
```
3. Run `npm run start` or `docker-compose up --build`


// [sb] TODO also add a description for npm scripts to readme file 
// [sb] TODO add tests using snapshots and integration tests