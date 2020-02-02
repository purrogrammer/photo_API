import React from 'react'
import ImageSearch from './ImageSearch/ImageSearch'


const API_KEY = "15111393-121da1262b291eee2cb4bf7c7"

const url = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo`


class App extends React.Component {
  
  state= {
    images: []
  }

handleGetRequest = async () => {
  
  const request = await fetch(url)

  const response = await request.json()

  this.setState({ images: response.hits })

}

// build-in method 
componentDidMount() {

  this.handleGetRequest()
}

  render() {
    return (

      <div> 
        <ImageSearch handleGetRequest={this.handleGetRequest}/>
      </div>
    )

  }
}

export default App;
