Typescript + React + Webpack Boilerplate
=======================================

Base project for setting up a frontend application using Typescript and React. Heavily based off of Dan Abromov's [React Transform Boilerplate](https://github.com/gaearon/react-transform-boilerplate).

Prerequisites
----------------------------------

* Webpack `npm install -g webpack`
* Typescript `npm install -g typescript`
* Typescript Definition Manager (TSD) `npm install -g tsd`

Installation
--------------------------------------
* npm install
* tsd install

Running the Dev Server
--------------------------------------
After setting up the project, type `npm start` to start the Express dev server.

Compiling for production
---------------------------------------
To compile the Javascript bundle for production, use `npm run build`.

Todos
-------------------------------------

There's an open PR in DefinitelyTyped for ReactDOM that needs to be merged in (https://github.com/borisyankov/DefinitelyTyped/pull/6228). You can edit the file manually (it's pretty small) after installing the definitions.
