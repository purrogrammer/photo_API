import React from "react"

const ImageSearch = (props) => {

    return (
         
        <div>   

        <form onSubmit={props.handleGetRequest}>  
        
               <input type="text" autocomplete="off" name="searchValue" placeholder="search for images"/>

               ]<button>Search</button>
               
            </form>
        </div>
    )
}

export default ImageSearch