import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyARsRzcMi3gHRqYGq0HnoVVz0xFPWb6y2M';

// Create a new component. This component should produce some HTML.
// const App = () => {} is the same as const App = function() {}

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
// Take this component's generated HTML and insert it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
