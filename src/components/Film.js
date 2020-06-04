import React from 'react'

const Film = (props) => {

    
    

     return (
        <div className= "col-12">
             <div className="card">
                <img src={props.film.Poster}/>  
             </div>
            
             
        </div>
     )
}
export default Film;
