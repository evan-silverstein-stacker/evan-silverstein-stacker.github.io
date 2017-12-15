import React from 'react'
import styles from './styles.css'
import Label from './Label'

class Header extends React.Component{
    render(){
        let profile = this.props.profile;
        
        return(
            <div >
                <div className={styles.name}> {profile.name} </div>
                <div>
                    <Label caption="Mobile"> {profile.phone} </Label>
                    <Label caption="Email"> {profile.email} </Label>
                    <Label caption="GitHub">
                        <a href={profile.gitHub.link} target="_blank">{profile.gitHub.display}</a>
                    </Label>
                </div>

            </div>
        )
    }
}

export default Header;