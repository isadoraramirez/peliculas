import React,{Component} from 'react';
import Search from './components/Search'

class App extends Component{

    state = {
      word: 'holaqlalalala'
    }

//toma el texto insertado en el buscador y lo pasa al padre:
  informationSearch = (word) => {
     this.setState({
       word
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
