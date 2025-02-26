import typing_img from "../../assets/typing speed.png"
import portfolio_img from "../../assets/portfolio.png"

const ProjectData = [
    {
        id:"1",
        title: "Typing Speed Tester App",
        desc:"The Typing Speed Tester is a React-based tool that helps users improve their typing speed and accuracy with features like random passages, performance metrics, and real-time feedback.",
        tech:"React, Localstorage, Text-to-speech, Tailwind, Routering",
        image:typing_img,
        category: "Frontend" || "All",
        github_link:"https://github.com/Hemil08/Typing-Speed-Tester-APP",
        demo_link:"https://typing-speed-tester-1qdx5da60-hemils-projects-1b8396ff.vercel.app/"
    },
    {
        id:"2",
        title:"Personal Portfolio Website",
        desc:"A personal portfolio website showcasing skills, projects, and achievements, designed to highlight expertise and creativity while providing a platform for professional opportunities.",
        tech:"React, Tailwind, Routering, Google Sheets",
        image:portfolio_img,
        category:"Frontend"|| "All",
        github_link:"https://github.com/Hemil08/portfolio-website",
        demo_link:"https://hemil-portfolio.vercel.app/",
    }
]

export default ProjectData;