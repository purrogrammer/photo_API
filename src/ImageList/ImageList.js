import React from "react"

const ImageList = (props) => {

    return ( 
        <div> 
            { props.images.map(( {id, largeImageURL, tags}) => {

            return (
                <div key={id}>
                    <img src={largeImageURL} alt={tags}/>

                    <button>View</button>

                </div>
            )
            })}

        </div>
    )
}

export default ImageList