import React from 'react';
import PageTitle from 'ui/headers/PageTitle';
import Content from 'ui/headers/Content';
import PROFILE from 'constants/PROFILE';
import headshot from 'public/headshot.jpg';
import Frame from 'ui/Frame';
import PageContent from 'ui/PageContent';
import styles from './styles.css';


class About extends React.Component{
    render(){
        return(
            <div>
                <PageTitle text="About Me"/>
                <PageContent>
                    <div className={styles.frameWrapper}>
                        <Frame caption={PROFILE.name}>
                            <img src={headshot} height="200" width="200"/>
                        </Frame>
                    </div>
                    <div className={styles.summary}>
                        {PROFILE.about}
                    </div>
                </PageContent>
            </div>
        )
    }
}

export default About;