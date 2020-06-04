import React, { Component } from 'react';
import Film from './Film'

class Result extends Component {
    showFilms= () =>{

        const films = this.props.films;

        console.log(films)

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {films.map(film=>
                        <Film key={films.id}>
                         pelicula  
                        </Film>
                        )}
                </div>
            </React.Fragment>
        )
    }

        render(){
            return (
                <React.Fragment>
                    { this.showFilms() }
                </React.Fragment>
              
            );
        }
    }

    export default Result;