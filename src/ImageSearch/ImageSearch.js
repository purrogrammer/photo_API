import React from "react"

const ImageSearch = (props) => {

    return (
         
        <div>   

            <h1 className="header">Find a free photo!</h1>

        <form onSubmit={props.handleGetRequest}>  
        
               <input type="text" autoComplete="off" name="searchValue" placeholder="search for images" />

               <button>Search</button>

            </form>
        </div>
    )
}

export default ImageSearch