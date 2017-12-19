
import Project from 'models/Project'
import financePic from 'public/financeAppPoster.jpg'
import podiatryPic from 'public/podiatryAppPoster.png'
import headshot from 'public/headshot.jpg'
import sportsPoster from 'public/sportsPoster.jpg'
import Icon from 'ui/Icon';



const general = {
    title: "General Info",
    headerTitle: "me",
    image: headshot,
    content: "Thanks for visiting my site! I am a software developer. While working as a consultant in the healthcare industry, I discovered my passion for coding, so I left the industry to pursue that passion. Since then, I have learned C#, JavaScript, and a number of design patterns, which have been used to develop both desktop and web applications. Please check out some of my work featured in my portfolio.",
}

const sports = {
    title: "Sports",
    headerTitle: "Test 1", // not needed
    image: "fa fa-futbol-o",
    content: "I have been playing ice hockey for most of my life and I continue to play in a league (Adult Safe Hockey League) every week. Also, I recently started playing organized softball in the summer (Toronto Sports Social Club)."
}

const chess = {
    title: "Chess",
    headerTitle: "Test 1", // not needed
    image: "fa fa-braille",
    content: "I recently started playing chess in my spare time (chess.com). My favorite opening is the Fried Liver Attack."
}

const piano = {
    title: "Piano",
    headerTitle: "Test 2", // not needed
    image: "fa fa-music",
    content: "I love to play R&B piano in my spare time. However, my repetoire of songs mainly includes Disney classics."
}

// const podiatryApp = new Project(
//     "Podiatry App",
//     "A desktop app coded in C# (WPF/WinForms)",
//     "https://github.com/Titaniumstein/PodiatryApplication",
// )

export const aboutMeItems = [sports, chess, piano]
export default general;
