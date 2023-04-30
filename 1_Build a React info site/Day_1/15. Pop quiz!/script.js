//? 1. Why do we need to `import React from "react"` in our files?
//To use react we need to import into our project
//JSX syntax is defined in React

//? 2. If I were to console.log(page) in index.js, what would show up?
//[object Object], because it' s actually a JS object.

//? 3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```;
//It' s not a single element. For to render in react we need to make a single element.

//? 4. What does it mean for something to be "declarative" instead of "imperative"?
//My english not good enough but declarative is basically if we need to do anything we need to do //from like the beginning.
//But with imperative way/s like react we can use our components anywhere we wantç

//? 5. What does it mean for something to be "composable"?
//I dont know.

import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <img src="./react-logo.png" width="40px" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
