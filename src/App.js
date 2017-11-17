import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'


class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update comonentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "http://www.freemovieposters.net/posters/matrix_the_1999_3131_poster.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://thesouloftheplot.files.wordpress.com/2014/06/poster_fullmetaljacket.jpg"
          },
          {
            title: "Oldboy",
            poster: "https://vignette.wikia.nocookie.net/cinemorgue/images/a/a2/OldBoy.jpg/revision/latest?cb=20141113025503"   
          },
          {
            title: "Star Wars",
            poster: "http://schmoesknow.com/wp-content/uploads/2017/10/POSTER1.jpg" 
          },
          {
            title: "Transportting",
            poster: "http://newsnet.scot/wp-content/uploads/2017/02/Trainspotting.jpg" 
          },       
        ]
      })
    }, 2000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;