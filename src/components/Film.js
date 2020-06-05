import React from 'react'

const Film = (props) => {

  
     const {Poster,Year, Title}=props.film;
    

     return (
        <div className= "col-3">
             <div className="Card.Body">
                  <img src={Poster} class="img-responsive" alt={Year} className="card-img-top"  />
                  <div className="Card.Body">
                     <p className="Card.Text">Titulo: {Title}</p> 
                     <p className="Card.Text">Año: {Year}</p>  
                     <a href= {Poster}  rel="noopener noreferrer" target="_blank" className="btn btn-secondary btn-block">Ver Poster</a> 
        
                  </div>
                 
               
             </div>
            
             
        </div>
     )
}
export default Film;
