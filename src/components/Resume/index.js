import React from 'react';
import PageTitle from 'ui/headers/PageTitle';
import Section from './Section';
import styles from './styles.css';
import Content from 'ui/headers/Content';
import Header from './Header';
import ProfessionalSummary from './ProfessionalSummary'
import TechnicalSkills from './TechnicalSkills';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Interests from './Interests';
import PROFILE from 'constants/PROFILE';
import PageContent from 'ui/PageContent';




class Resume extends React.Component{
    render(){
        return(
            <div>
                <PageTitle text="Resume"/>
                <PageContent>
                    <div className={styles.resume}>
                        <Header profile={PROFILE}/>
                        <ProfessionalSummary text={PROFILE.professionalSummary}/>
                        <TechnicalSkills skills={PROFILE.skills}/>
                        <WorkExperience jobs={PROFILE.jobs}/>
                        <Education jobs={PROFILE.education}/>
                        <Interests text={PROFILE.interests}/>
                    </div>
                </PageContent>
            </div>
        )
    }
}
export default Resume;


// function GetTechSkills(){
//     let dotNet = new Skill(
//         1,
//         ".Net",
//         "C#, ASP.NET MVC, WPF, WCF, RabbitMQ, Castle Windsor, Entity Framework"
//         );
//     let javaScript = new Skill(
//         2,
//         "JavaScript",
//         "React, Redux, Node, Express, Inversify, Bookshelf"
//         );
//     let databses = new Skill(
//         3,
//         "Databases",
//         "SQL Server, PostgreSQL, MongoDB"
//         );
//     let codingPractices = new Skill(
//         4,
//         "Coding Practices",
//         "Domain-driven design, n-tier architecture, dependency injection, aspect-oriented programming, repository and unit-of-work pattern, command query separation"
//         );

//     return [dotNet, javaScript, databses, codingPractices];
// }

// function GetJobExperiences(){
//     let financeApp = new Experience(
//         1,
//         "2016-Present",
//         "FinanceManagerApplication",
//         "Freelance, Toronto, ON",
//         [
//             new ExpItem(
//                 0,
//                 "A web application for tracking monetary expenses (FinanceManagerApplication)"
//             ),
//             new ExpItem(
//                 1,
//                 "The frontend was developed using ASP.NET MVC, Bootstrap, and jQuery"
//             ),
//             new ExpItem(
//                 1,
//                 "The backend was composed of a single bounded context (FinanceContext) for handling financial data"
//             ),
//             new ExpItem(
//                 1,
//                 "Client-server communication was enabled through WCF and RabbitMQ"
//             ),
//             new ExpItem(
//                 1,
//                 "Cross-cutting concerns such as logging, caching, and performance metrics were implemented through aspect-oriented programming"
//             )
//         ]
//         );

//         let podiatryApp = new Experience(
//             1,
//             "2016-Present",
//             "Podiatry Application",
//             "Freelance, Toronto, ON",
//             [
//                 new ExpItem(
//                     0,
//                     "A multi-user desktop application for managing a podiatry practice (PodiatryApplication)"
//                 ),
//                 new ExpItem(
//                     1,
//                     "The frontend was developed using WPF and WinForms based on the Model-View-Presenter (MVP) pattern"
//                 ),
//                 new ExpItem(
//                     1,
//                     "The backend was composed of two separate bounded contexts (PatientContext, FinanceContext) for handling patient and financial data"
//                 ),
//                 new ExpItem(
//                     1,
//                     "Communication between the frontend and backend was achieved through WCF"
//                 ),
//                 new ExpItem(
//                     1,
//                     "Cross-cutting concerns such as logging, caching, and performance metrics were implemented through aspect-oriented programming"
//                 )
//             ]
//         );

//         let CRG = new Experience(
//             1,
//             "2014-2016",
//             "Research Associate",
//             "Cornerstone Research Group Inc., Burlington, ON",
//             [
//                 new ExpItem(
//                     0,
//                     "Programmed economic models in Excel using VBA with the objective of demonstrating cost-effectiveness for various pharmaceutical products and medical devices"
//                 ),
//             ]
//         );



//     return [financeApp, podiatryApp, CRG];
// }

// function GetAcademicExperiences(){
// }



