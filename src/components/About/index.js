import React from 'react';
import PageTitle from 'ui/headers/PageTitle';
import Content from 'ui/headers/Content';
import PROFILE from 'constants/PROFILE';
import headshot from 'public/headshot.jpg';
import Frame from 'ui/Frame';
import PageContent from 'ui/PageContent';
import styles from './styles.css';
import CardMain from './CardMain';
import CardSub from './CardSub';




class About extends React.Component{
    render(){
        var about = PROFILE.aboutMe;
        var cardMain = <div className={styles.cardMain}>
                            <CardMain
                            img={about.image}
                            cardTitle={about.title}
                            cardContent={about.content}
                            />
                        </div>

        var cardSubComps = PROFILE.aboutMeItems.map((about)=>{
            return(
                    <div className={styles.cardSub}>
                        <CardSub
                        icon={about.image}
                        cardTitle={about.title}
                        cardContent={about.content}
                        />
                    </div>
            )
        })
        return(
            <div>
                <PageTitle text="About Me"/>
                <PageContent>
                    <div className={styles.container}>
                        {cardMain}
                        {/* </div> */}
                        <div className={styles.cardItemsWrapper}>
                            {cardSubComps}
                        </div>
                    </div>
                </PageContent>
            </div>
        )
    }
}

export default About;