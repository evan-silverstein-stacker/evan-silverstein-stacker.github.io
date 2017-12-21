import React from 'react'
import Game from 'components/Game'
import styles from './styles.css'

class App extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <h1 className={styles.centerText}> Stacker </h1>
                <h3 className={styles.centerText}>
                    Use spacebar to stack blocks and reach the target!
                </h3>
                <div className={styles.gameWrapper}>
                    <Game/>
                </div>
              
            </div>
        )
    }
}

export default App;