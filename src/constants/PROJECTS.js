
import Project from 'models/Project'
import financePic from 'public/financeAppPoster.jpg'
import podiatryPic from 'public/podiatryAppPoster.png'
import headshot from 'public/headshot.jpg'



const financeApp = new Project(
    "Financial App",
    "A web app coded in C# (ASP.NET MVC)",
    "https://github.com/Titaniumstein/FinanceManagerApplication",
    financePic
    
    
)

const podiatryApp = new Project(
    "Podiatry App",
    "A desktop app coded in C# (WPF/WinForms)",
    "https://github.com/Titaniumstein/PodiatryApplication",
    podiatryPic
)

export default [financeApp, podiatryApp];
