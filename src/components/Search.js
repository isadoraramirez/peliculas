import React, { Component } from 'react'

class Search extends Component{

    searchRef = React.createRef();

    obtainInformation = (e) => {
        e.preventDefault();

       const term= this.searchRef.current.value;
        
        this.props.informationSearch(term);

    }
   
        render() {
            return(
                <form onSubmit={this.obtainInformation}>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <input ref={this.searchRef} type="text" className="form-control
                            form-control-lg" placeholder="Escribe en nombre de una pelicula"/>

                        </div>

                        <div className="form-group col-md-12">
                            <input type="submit" className="btn btn-lg btn-primary"/>

                        </div>

                    </div>
                </form>
             );
        }
    }


export default Search;