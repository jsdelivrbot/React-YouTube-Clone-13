import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML.
const App = function() {
  return <div>Hi there</div>;
}
// Take this component's generated HTML and insert it into the DOM
ReactDom.render(App)
