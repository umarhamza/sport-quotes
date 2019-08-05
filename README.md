## Notes:
I received a task to build a web app as a test to showcase my skills as a front end developer.

The task was to build a simple sports quote app that allows users to add quotes using a form and display them in a list.

The list of quotes needed to be stored in web storage so that they will not disappear when the page is reloaded.

### My approach
- First I built the page in standard HTML and SCSS ensuring that it is responsive.
- The next step was to make the form interactive and I quickly realised, they’d be a lot of DOM manipulation needed. So I decided to use React Js as it is very good at that.
- I installed create-react-app in the project folder then broke up the HTML into components.
- At first I kept the header and footer as static HTML and created React components for the list and form. But later I will explain why I decided to create a React component for the header and footer as well.
- I used react-autosize-textarea npm package to add better functionality to the quote field - allowing it to expand its height as the user types in their quote.
- I also used simplebar-react npm package to add a scrollbar to the list of quotes when the height of the list exceeds 900px.
- The form was now setup so when the user submits the form, it updates the React component’s state which then updates the list.
- Once the state is updated, then the data submitted from the form gets stored in web storage which will then update the state again when the user reloads the page or closes and opens the app.
- I added some validation to the form to prevent empty characters from being added to the state, web storage and the list.
- This validation was achieved using the HTML5 attribute required as well as adding a fallback which is an if statement to check if both form fields are empty.

### What I could have done better
As mentioned above, I kept the header and footer as static HTML components but when the page loaded, the header shows up unstyled until JavaScript has loaded. This is because I imported the App.scss into the React component.

- I could have tweaked webpack to compile the SCSS into CSS and then load the CSS into the HTML. But since this is just a test web app, I didn’t see the need to over complicate it.

- I could have changed the scrollbar to show up permanently when the list expands over 900px instead of showing the scrollbar on hover. However, I couldn’t find the option to disable auto-hide on the scrollbar.

- I could have made the web app 100% viewport height. This would have added a little more complexity in terms of making it responsive on all devices.

## Disclaimer:
- This is a test project I built to showcase my knowledge.
- I built the app myself based on a design I was given.
- This is not my designs or idea.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
