import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, IndexRoute } from 'react-router-dom';
import About from 'components/About';
import Resume from 'components/Resume';
import Portfolio from 'components/Portfolio';
import Contact from 'components/Contact';
import NavBar from 'Components/NavBar';
import styles from './styles.css';

class App extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.navbar}>
                        <NavBar/>
                    </div>
                    <div className={styles.page}>
                        <Switch>
                            <Route exact path='/' component={Portfolio}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/resume' component={Resume}/>
                            <Route exact path='/contact' component={Contact}/>

                        </Switch>
                    </div>
                </div>
            </div>

        )
    }
}

export default App;