import React from 'react';
import Stacker from 'models/Stacker';
import Block from './Block';
import Stats from './Stats';
import styles from './styles.css';
import GameSettings from 'constants/GameSettings';



class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            game: new Stacker(),
        }

        this.keyPressHandler = this.keyPressHandler.bind(this);
        this.printUpdatedGame = this.printUpdatedGame.bind(this);
        this.startNewGame = this.startNewGame.bind(this);

    }

    componentDidUpdate(){
        document.getElementById("game").focus();
        
    }

    componentDidMount(){
        this.startNewGame();
        
    }

    

    render(){
        let game = this.state.game;
        let style = {
            position: 'relative',
            width: game.screenWidthPixels + 'px',
            height: game.screenHeightPixels + 'px',
        }

        let barStyle = {
            position: 'absolute',
            height: '5px',
            width: game.screenWidthPixels + 'px',
            bottom: GameSettings.blockHeight * GameSettings.maxLayers + "px"
        }

        let blockViewCollection =this.getBlocksComponents(game);
    
        
        return(
            <div>
                {this.GameResults(game)}
                <div className={styles.dashWrapper} style={{width:style.width}}>
                    <Stats game={game}/>
                    <button className={styles.btn} id='startBtn' onClick={() => {this.startNewGame()}}> New Game </button>
                </div> 
                <div className={styles.screen} id="game" style={style}>
                    <div className={styles.bar} style={barStyle}/> 
                    {blockViewCollection}
                </div>
            </div>
        )
    }

    getBlocksComponents(game){
        let blockViewCollection = [];
        for(let i = 0; i < game.blocks.length; i++){
                let block = game.blocks[i];
                blockViewCollection.push(<Block key={block.id} block={block}/> );                 
        }

        if(!game.isGameOver()){
            blockViewCollection.push(<Block key={game.activeBlock.id} block={game.activeBlock}/>)
        }
        return blockViewCollection;
    }

    GameResults(game){
        if(!game.isGameOver()){return}
        let text = (game.lives>0)? "you won!": "you lost!";
        return (
            <div className={styles.gameResultText}>
                {text}
            </div>
        )
        
    }

    startNewGame(){
        
        let game = new Stacker();
        game.onGameUpdatedCallback = (game)=>(this.printUpdatedGame(game));
        document.addEventListener('keyup', this.keyPressHandler)
        document.getElementById('startBtn').blur();
        // document.getElementById("game").focus();
        this.setState({
            game: game,
        })
    }

    keyPressHandler(e){


        document.removeEventListener('keyup', this.keyPressHandler)

        // press spacebar
        if(e.keyCode === 32){
            this.state.game.nextLayerAttempt()
        } 
        
    }

    printUpdatedGame(game){
        if(!game.isGameOver()){
            document.addEventListener('keyup', this.keyPressHandler);
        }
        this.setState({game: game});
            
        
                   
        
  
    }
  
}


export default Game;

