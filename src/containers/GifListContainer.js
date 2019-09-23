import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component{
    constructor(){
        super()
        this.state = {gifs: []}
    }

    componentDidMount(){
        this.updateGifs('dogs')
    }

    updateGifs = (searchTerm) => {
        console.log('updating gifs',searchTerm)
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(json => {
            this.setState({gifs: json.data}
        )})
    }

    render(){
        return (
            <div>
            <GifSearch applySearch={this.updateGifs}/>
            <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}