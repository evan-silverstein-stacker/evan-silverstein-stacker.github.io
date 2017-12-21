import React from 'react'

class Stats extends React.Component{
    render(){
        let game = this.props.game;
        return(
            <div>
                <div> Lives: {game.lives} </div>
                <div> Layers completed: {game.currentLayer + "\/" + game.maxLayers} </div>

            </div>
        )
    }
}

export default Stats;