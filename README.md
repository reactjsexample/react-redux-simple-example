# react-redux-simple-example

Created by **ReactJSExample** [https://github.com/reactjsexample](https://github.com/reactjsexample)

Full source code available at [https://github.com/reactjsexample/react-redux-simple-example](https://github.com/reactjsexample/react-redux-simple-example)

## The Best Way To Learn Redux

If you are new to React Redux, this project is a quick and easy way to learn React Redux.

### Good Things About This React Redux Example

* Uses Large Scale Architecture for Redux.
* Does not explain, just shows the code.
* Gives you 1 way, using the latest coding techniques.
* Lets you compare the same app without Redux to see the differences.

![react-redux-simple-example-screen-shot](https://github.com/reactjsexample/react-redux-simple-example/blob/master/src/assets/images/react-redux-simple-example-screen-shot.png)

## Table of Contents

- [About The Author](#about-the-author)
- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [How To Install](#how-to-install)
  - [How To Run](#how-to-run)
- [How To Convert a React App to Redux](#how-to-convert-a-react-app-to-redux)
  - [Compare My Example Apps](#compare-my-example-apps)
- [Software Libraries Used](#software-libraries-used)
- [Installing The Libraries](#installing-the-libraries)

## About The Author

**JC Lango** is a UI Architect and UI Developer for large scale web applications at several Fortune 500 companies.

He is an expert in **Angular**, **Polymer**, and **React** and maintains these sites at Github:

- **AngularExample** [https://github.com/angularexample](https://github.com/angularexample)
- **PolymerExample** [https://github.com/polymerexample](https://github.com/polymerexample)
- **ReactJSExample** [https://github.com/reactjsexample](https://github.com/reactjsexample)

JC may be available to work remote, and can be contacted at these links:

- LinkedIn: [https://www.linkedin.com/in/jclango](https://www.linkedin.com/in/jclango)
- Email: [jobs@jclango.com](mailto:jobs@jclango.com)

## Project Setup

### Prerequisites

You need to have Node and NPM installed on your PC.

[Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### How To Install

Download the source code using git or else download and unzip the zip file.

Open a terminal window and go to the project root folder.

You need to have npm installed globally.

Run `npm i` to install the required libraries.

### How To Run

Open a terminal window and make sure you are in the project root folder.

Run the following command for a dev server.

#### `npm start`

Open your browser and go to [http://localhost:3000](http://localhost:3000)

The browser will automatically reload if you change any of the source files.

Open the browser's Developer Tools window to see any errors in the Console.

## How To Convert a React App to Redux

These are the basic steps to convert your existing React app to Redux:

- [Install Redux](#install-redux) Follow the instructions here.
- Create the appStore.js.
- Add Provider in the index.js.
- For each component:
  - Create a directory for each component.
  - Create ?ActionTypes, ?Actions.js, ?Reducer.js. 
  - Delete all references to "state"
  - Change "this.setState()" to "this.props.yourAction()"
  - Change "this.state." to "this.props."
  - Add mapStateToProps, mapDispatchToProps, and connect.
- In the appReducer, use combineReducers (if you have more than one).

### Compare My Example Apps

Just take a look at these 2 example apps, in my github:

[react-simple-example](https://github.com/reactjsexample/react-simple-example)

[react-redux-simple-example](https://github.com/reactjsexample/react-redux-simple-example)

They are the same application, except one uses Redux.

You can see exactly what changes were done to convert the React app to React Redux.

## Software Libraries Used

These are the main packages used in this app:

- ReactJS 16.8.4
- React Redux 7.1.0

For a complete list, see the [package.json](https://github.com/reactjsexample/react-redux-example/blob/master/package.json) file.

For installation instructions, see [Installing The Libraries](#installing-the-libraries)

### Installing The Libraries

**Note**: If you have downloaded this project, all the libraries will be installed when you run the npm install as described in the [How To Install](#how-to-install) section above.

In that case you don't need to do any of the following steps.

It is included here,
in case you want to build a new project from scratch on your own.

It also provides documentation on each library and its purpose. 

#### Install React

There are a few different ways to create your React App.

Start by reading [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html)

If you use the [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) command, it will install the React library packages.

#### Install Redux

There are several packages you will need to install Redux.

##### Install React Redux

[React Redux](https://react-redux.js.org/) is Redux for React.

You need to install both **Redux** and **React Redux**.

`npm i -s redux`

`npm i -s react-redux`

##### Install Redux Devtools

[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) is a Chrome Extension.
You need that for debugging with Redux.

Install it from your Chrome browser.

You will need to modify your code to use this properly.

**Note**: You should also install the library package.

`npm i --save-dev redux-devtools-extension`

Then follow [these instructions](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm) to setup your code to use the plugin most effectively.

After the app is set up and running in Chrome,
open the **Developer Tools**,
and then select the **Redux** top menu tab.
You will be able to see the state store.

#### Install Prettier

[Prettier](https://prettier.io/) is a tool to format your code in a consistent way.

**Prettier** is not required for this project,
but it is a good practice to install it for each project,
because it helps to make the code more readable. 

`npm i --save-dev prettier`

Note: **--save-dev** saves it under the **devDependencies** section,
where it available during development, but not is not used during the build process.

I use [JetBrains WebStorm](https://www.jetbrains.com/webstorm/) as my code editor,
and under Preferences/Tools, I add File Watchers for Prettier  that automatically run Prettier on file save.

---
