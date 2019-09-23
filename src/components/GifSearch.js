import React, {Component} from 'react'

export default class GifSearch extends Component{
    constructor(){
        super()
        this.state = {searchTerm: ''}
    }

    submitSearch = (e) => {
        e.preventDefault()
        console.log(this.state.searchTerm)
        this.props.applySearch(this.state.searchTerm)
    }

    render(){
        return(
            <form onSubmit={this.submitSearch}>
                <input type='text' value={this.state.searchTerm} onChange={(event)=>{this.setState({searchTerm:event.target.value})}}/>
                <input type='submit' value='Search'/>
            </form>
        )
    }
}