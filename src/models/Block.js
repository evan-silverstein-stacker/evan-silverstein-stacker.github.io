import GameSettings from 'constants/GameSettings';
import Direction from '../constants/Direction'

let index = 0; // allows for components to update properly (by setting key)

function Block(game){
    this.id = index ++
    this.getLeftPixels = ()=> {return this.horizontalPercent/100 * game.screenWidthPixels;}
    this.getTopPixels = ()=> {return this.verticalPercent/100 * game.screenHeightPixels;}
    this.width = GameSettings.blockWidth;
    this.height = GameSettings.blockHeight;

    this.verticalPercent = 2;
    this.horizontalPercent = 0;
    this.interval = null;
    this.isPlaced = false;
    this.moveDirection = Direction.none;
    this.layersOffset = 0; // this will be set by stacker.js 


    this.getIntervalSeconds = ()=>{
        let positionChange = GameSettings.percentToIncrementBlockPosition/100;
        let time = game.getSecondsForBlockToCrossScreen();
        let result = time*positionChange
        return time*positionChange;
    }



    this.beginAnimation = () => {
        this.moveDirection = Direction.right;
        this.interval = setInterval(this.animation,this.getIntervalSeconds()*1000);
    } 

    this.setBlockDown= ()=> {
        clearInterval(this.interval);
        this.moveDirection = Direction.down;
        this.interval = setInterval(this.animation, 10);
    }


    this.animation = ()=>{
        this.setMoveDirection();
        if(this.moveDirection === Direction.none)
        {
            this.placedBlock();            
            return;
        }
        if(this.moveDirection === Direction.left || this.moveDirection === Direction.right)
        {
            this.changeHorizontalPosition();
        }
        else{
            this.changeVerticalPosition();
        }

        this.onPositionChangedCallback();
        
    }



    this.changeHorizontalPosition = ()=>{
        let quality = 1;
        if(this.moveDirection === Direction.left){quality = -1;}
        this.horizontalPercent = this.horizontalPercent + GameSettings.percentToIncrementBlockPosition * quality;
    }

    this.changeVerticalPosition = ()=>{
        let quality = 1;
        if(this.moveDirection === Direction.up){quality = -1;}
        this.verticalPercent = this.verticalPercent + 1 * quality;
    }

    this.snapToGrid=(horizontalPercent)=>{
        this.horizontalPercent = horizontalPercent*100;
        this.onPositionChangedCallback();
        
    }



    this.setMoveDirection = ()=>{
        if(this.moveDirection === Direction.left && this.horizontalPercent<=0){
            this.moveDirection = Direction.right;
        }
        else if(this.moveDirection === Direction.right && this.horizontalPercent >= 100 - (this.width/GameSettings.screenWidthPixels)*100){
            this.moveDirection = Direction.left;
        }
        else if(this.moveDirection === Direction.up && this.verticalPercent <= 0){
            this.moveDirection = Direction.down;
        }
        else if(this.moveDirection === Direction.down
         && this.verticalPercent >= 100 - ((this.height + this.layersOffset)/GameSettings.screenHeightPixels)*100) {
            this.moveDirection = Direction.none;            
        }
    }

    this.placedBlock = ()=>{
        this.isPlaced = true;        
        clearInterval(this.interval);
        game.blockWasPlaced(this);
        this.snapToBottom();
        
    }


    this.snapToBottom=()=>{
        this.verticalPercent =  100 - ((this.height + this.layersOffset)/GameSettings.screenHeightPixels)*100;
        this.onPositionChangedCallback();
    }

}




export default Block;