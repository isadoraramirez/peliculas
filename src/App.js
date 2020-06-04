import React,{Component} from 'react';
import Search from './components/Search'

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
       //.then(result => this.setState({ movies : result.title}))
       .then(result => console.log(result))
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
          ><h1>Busca Peliculas</h1></p>

          <Search
           informationSearch={this.informationSearch}
           />
          

        </div>
         {this.state.word}
     
    </div>
  );
 }
}

export default App;
