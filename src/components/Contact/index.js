import React from 'react';
import PageTitle from 'ui/headers/PageTitle';
import Content from 'ui/headers/Content';
import PROFILE from 'constants/PROFILE';
import PageContent from 'ui/PageContent';
import Item from 'ui/Item';
import styles from './styles.css';


class About extends React.Component{
    render(){
        return(
            <div>
                <PageTitle text="Contact Info"/>
                <PageContent>
                    {/* <div className={styles.container}> */}
                    <div className={styles.item}>
                        <Item label="Mobile:"> {PROFILE.phone} </Item>
                        <Item label="Email:"> {PROFILE.email} </Item>


                    </div>
                </PageContent>
            </div>
        )
    }
}

export default About;