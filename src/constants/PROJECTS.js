
import Project from 'models/Project'
import financePic from 'public/financeAppPoster.jpg'
import podiatryPic from 'public/podiatryAppPoster.png'
import headshot from 'public/headshot.jpg'
import React from 'react'



const financeApp = new Project(
    "Financial App",
    "ASP.NET MVC",
    "This web app tracks expenses",
    "https://github.com/Titaniumstein/FinanceManagerApplication",
    "fa fa-dollar" 
)

const podiatryApp = new Project(
    "Podiatry App",
    "WPF/WinForms",
    "This desktop app manages a podiatric clinic",
    "https://github.com/Titaniumstein/PodiatryApplication",
    "fa fa-medkit"
)

const pickAppHockey = new Project(
    "PickApp Hockey",
    "React/Redux",
    "This web app predicts the business of a given outdoor public rink",
    "https://github.com/Titaniumstein/PickAppHockey_Client",
    "fa-snowflake-o"
)

const stacker = new Project(
    "Stacker",
    "React",
    'This web app is based on the arcade game "stacker"',
    "https://github.com/Titaniumstein/PickAppHockey_Client",
    "fa-gamepad"
)

const hangman = new Project(
    "Hangman",
    "React",
    'This web app is based on the game "hangman"',
    "https://github.com/Titaniumstein/PickAppHockey_Client",
    "fa-gamepad"
)



export default [financeApp, podiatryApp, pickAppHockey, stacker, hangman];
