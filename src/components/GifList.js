import React, {Component} from 'react'

const GifList = (props) =>{
        let gifArray = []
        props.gifs.forEach(element => {
            gifArray.push(<li><img src={element.images.original.url}></img></li>)
        });
        console.log('gifs', props.gifs)
        return gifArray

}

export default GifList