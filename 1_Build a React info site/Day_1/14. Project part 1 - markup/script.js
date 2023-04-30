/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

const myElement = (
  <div>
    <img src="./react-logo.png" width="40px" />
    <h1>Fun fact about React</h1>
    <ul>
      <li>Something_0</li>
      <li>Something_1</li>
      <li>Something_2</li>
      <li>Something_3</li>
    </ul>
  </div>
);

ReactDOM.render(myElement, document.querySelector("#root"));
