import Skill from 'models/Skill';
import Experience from 'models/Experience';
import ExpItem from 'models/ExpItem';


const WebDev = new Experience(
    1,
    "2017 (10 Weeks)",
    "Web Development",
    "BrainStation, Toronto, ON",
    [

        new ExpItem(
            0,
            "Specialization in the MERN stack"
        ),
        new ExpItem(
            0,
            "Developed PickApp Hockey, a web application for improving shinny in Toronto"
        ),
        new ExpItem(
            1,
            "Used: React, Redux, Node, Express"
        ),
    ]
);

const MAEP = new Experience(
    1,
    "2013-2014",
    "MA Economic Policy",
    "McMaster University, Hamilton, ON",
    [

        new ExpItem(
            0,
            "Specialization in health economics"
        ),

    ]
);

const kine = new Experience(
    1,
    "2007-2013",
    "BSc (Hons) Kinesiology and Health Science",
    "York University, Toronto, ON",
    [

        new ExpItem(
            0,
            "Dean’s Honour Roll (2011/12, 2012/13)"
        ),

    ]
);

export default [WebDev, MAEP, kine];


