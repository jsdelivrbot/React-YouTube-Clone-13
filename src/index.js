import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyARsRzcMi3gHRqYGq0HnoVVz0xFPWb6y2M';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= { videos:[] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos }); //only works when key and property are identical
      // this.setState({ videos: videos })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
