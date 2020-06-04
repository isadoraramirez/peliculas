import React from 'react'

const Film = (props) => {

  
     const {Poster,Year, Title}=props.film;
    

     return (
        <div className= "col-3">
             <div className="card-body">
                  <img src={Poster} alt={Year} className="card-img-top"  />
                  <div className="card-body">
                     <p className="card-text">Titulo: {Title}</p> 
                     <p className="card-text">Año: {Year}</p>  
                     <a href= {Poster} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">Ver Poster</a> 
        
                  </div>
                 
               
             </div>
            
             
        </div>
     )
}
export default Film;
