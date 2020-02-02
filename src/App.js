import React from 'react'
import ImageList from './ImageList/ImageList'
import ImageSearch from './ImageSearch/ImageSearch'

const API_KEY = "15111393-121da1262b291eee2cb4bf7c7"


class App extends React.Component {
  
  state= {
    images: [],
    error: null
  }

  handleMakeRequest = async (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.searchValue.value
    const request = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchValue}&per_page=15`)
    const results = await request.json()
    if (!searchValue) {
      this.setState({ error: "Please provide a search value" })
    } else {
      this.setState({ images: results.hits, error: null })
    }
  }

render() {

    return (

      <div> 
        <ImageSearch handleMakeRequest={this.handleMakeRequest} />
         {
           this.state.error !== null ?
           <div style={ {color:"#fff", textAlign:"center" }}>{this.state.error }</div> :
          <ImageList images={this.state.images} />
         }  
         </div>

       )
    }
  }

export default App
