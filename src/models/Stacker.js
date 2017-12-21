import Block from './Block';
import GameSettings from 'constants/GameSettings';
import Direction from '../constants/Direction'


function Stacker(){
    this.screenWidthPixels = GameSettings.screenWidthPixels; 
    this.screenHeightPixels = GameSettings.screenHeightPixels; 
    this.lives = GameSettings.numLives;
    this.maxLayers = GameSettings.maxLayers;
    this.grid = initializeGrid(GameSettings.numGridCols);
    this.blocks =[];
    this.activeBlock = new Block(this);
    this.currentLayer = 0;
    this.onGameUpdatedCallback = null;
    
    
    this.getSecondsForBlockToCrossScreen = ()=> {
        let time = GameSettings.startingSecondsForBlockToCrossScreenWidth;
        let speedChange = (GameSettings.percentToIncrementAnimationSpeed/100)*this.currentLayer;
        let newTime = time*(1-speedChange);
        return newTime;
    }


        
    this.blockWasPlaced=(block)=>{
        this.blocks.push(block);
        this.currentLayer = getMaxColValue(this.grid);
        this.activeBlock = new Block(this);
        //if(this.isGameOver()){this.activeBlock = null};
        
        this.onGameUpdatedCallback(this);
    }
    
    this.nextLayerAttempt = ()=>{
        if(this.isGameOver()){return console.log(new Error("game is over"));}
        let block = this.activeBlock;
        snapBlockToGrid(block, this.screenWidthPixels, this.grid);
        if(!this.isLayerCorrectlyPlaced(this.grid)){this.lives -= 1};             
        this.activeBlock.setBlockDown();

    }

    this.isLayerCorrectlyPlaced = (grid)=>{
        return (getMaxColValue(grid) > this.currentLayer);
    }



    this.isGameOver=()=>{
        if(this.lives === 0){return true;}
        if(this.currentLayer === this.maxLayers){return true;}
        return false;  
       
    }


}

function getMaxColValue(grid){
    let layer = 0;
    for(let i = 0; i < grid.length; i++){
        layer = Math.max(layer, grid[i]);
    }
    return layer;
}

function initializeGrid(numCols){
    let grid = [];
    for(let i = 0; i < numCols; i++){
        grid[i] = 0;

    }
    return grid;
}


function snapBlockToGrid(block, screenWidthPixels, grid){
    let gridCol = null;
    let colwidthPixels = screenWidthPixels/grid.length;
    let blockPixelPosition = block.getLeftPixels();
    let result = blockPixelPosition/colwidthPixels;
    let quotient = Math.floor(result);
    let remainder = result % 1;
    gridCol = quotient; //snap left
    let snapBias = 0.2;
    let cutoff = (block.moveDirection === Direction.right)? snapBias: 1-snapBias;
    if(remainder>cutoff){gridCol += 1}; // snap right
    gridCol = Math.min(gridCol,grid.length-1);
    block.layersOffset = (grid[gridCol] * block.height);    
    grid[gridCol] += 1
    block.snapToGrid(gridCol/grid.length);
    
}

export default Stacker;