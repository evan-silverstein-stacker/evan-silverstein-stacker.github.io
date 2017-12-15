import Skill from 'models/Skill';
import Experience from 'models/Experience';
import ExpItem from 'models/ExpItem';


const dotNet = new Skill(
    1,
    ".Net",
    "C#, ASP.NET MVC, WPF, WCF, RabbitMQ, Castle Windsor, Entity Framework"
    );
const javaScript = new Skill(
    2,
    "JavaScript",
    "React, Redux, Node, Express, Inversify, Bookshelf"
    );
const databses = new Skill(
    3,
    "Databases",
    "SQL Server, PostgreSQL, MongoDB"
    );
const codingPractices = new Skill(
    4,
    "Coding Practices",
    "Domain-driven design, n-tier architecture, dependency injection, aspect-oriented programming, repository and unit-of-work pattern, command query separation"
    );

export default [dotNet, javaScript, databses, codingPractices];
