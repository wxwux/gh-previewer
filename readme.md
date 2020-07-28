This is a small app that allows you to preview information about a GitHub organization.
The information includes company basic data and its pinned and owned repositories also.

The stack:

+ React
+ Styled-components
+ Apollo Client 3
+ Webpack
+ Jest for Unit Testing
+ Cypress for E2E Testing

To use this app you need to provide your personal GitHub access token.
To achieve it, please follow these steps:

+ Create your token ((this article could help you with it) [https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token])
+ rename file **env.expample.json** to **env.json**
+ fill in the field **ACCESS_TOKEN** with the token you generated at the first step
