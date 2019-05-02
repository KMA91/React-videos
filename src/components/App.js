import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {

  state = {
    snippets: [],
    mainVideo: []
  }

  onSubmit = async (term) => {
    const response = await youtube.get("https://www.googleapis.com/youtube/v3/search", {
      params: { q: term }
    })
    this.setState({
      snippets: response.data.items,
      mainVideo: response.data.items[0]
    });
    console.log(response);
    console.log(this.state);
  }

  render() {
    return (
      <div>
      <SearchBar onSubmit={this.onSubmit}/>
      <VideoDetail videos={this.state.videos}/>
      <VideoList />
      </div>
    )
  }
}

export default App;
