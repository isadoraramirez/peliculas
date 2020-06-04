import React,{Component} from 'react';
import Search from './components/Search';
import Result from './components/Result';

class App extends Component{

    state = {
      word: '',
      movies : []
    }

    consultApi = () => {
      const url = `https://www.omdbapi.com/?apikey=60fc1083&s=${this.state.word}`;
      //console.log(url);
      //aca podria haver usado axios 
      fetch(url)
       .then(answer => answer.json())
       //.then(data => console.log(data.Search))
       .then(data => this.setState ({movies: data.Search}))
    }

//toma el texto insertado en el buscador y lo pasa al padre:
  informationSearch = (word) => {
     this.setState({
       word
     },() => {
       this.consultApi();
     })
  }

    render() {
      return(
      <div className="app container">
     
        <div className="jumbotron">
          <p className="lead text-center"
          >
            <h1>Film Posters</h1>
            <h2>Find your favorite movie poster</h2>
            </p>

          <Search
           informationSearch={this.informationSearch}
           />
          

        </div>
         <Result
         films= {this.state.movies}
         
         />
     
    </div>
  );
 }
}

export default App;
