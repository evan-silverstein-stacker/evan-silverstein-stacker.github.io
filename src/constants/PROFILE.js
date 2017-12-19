import Jobs from './JOBS'
import Education from './EDUCATION'
import Skills from './SKILLS'
import Projects from './PROJECTS'
import AboutMe from './ABOUTME'
import {aboutMeItems} from './ABOUTME'


const PROFILE = {

    

    name: "Evan Silverstein",
    phone: "647-606-9299",
    email: "evandsilverstein@gmail.com",
    address: "Toronto, ON",
    gitHub:{
        link: "https://github.com/Titaniumstein",
        display: "Titaniumstein"
    } ,

    skills: Skills,
    jobs: Jobs,
    education: Education,
    projects: Projects,

    professionalSummary: "A software developer with skills in creating highly robust and maintainable applications. I have developed desktop and web applications using a variety of programming languages and design patterns.",
    interests: "Ice hockey (Adult Safe Hockey League), R&B piano, and chess",
    
    aboutMe: AboutMe,
    aboutMeItems: aboutMeItems,
    // about: "Thanks for visiting my site! I am a software Developer. While working as a consultant in the healthcare industry, I discovered my passion for coding, so I left the industry to pursue that passion. Since then, I have learned C#, JavaScript, and a number of design patterns, which have been used to develop both desktop and web applications. Please check out some of my work featured in my portfolio."




}



export default PROFILE;