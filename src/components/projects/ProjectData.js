import typing_img from "../../assets/typing speed.png"
import portfolio_img from "../../assets/portfolio.png"
import bbc_img from "../../assets/bbc-clone.png"
import event from "../../assets/event.png"
import expense from "../../assets/expense.png"
import marco from "../../assets/marco.png"

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
        title:"BBC News Clone App",
        desc:"A modern, responsive BBC News clone built with React, Tailwind CSS, and Firebase, featuring news browsing, search, commenting, and user authentication.",
        tech:"React.js, Tailwind, Routering,Firebase Authentication",
        image:bbc_img,
        category:"Frontend"|| "All",
        github_link:"https://github.com/Hemil08/BBC-News-Clone-App",
        demo_link:"https://bbcnewscloneapp.vercel.app/",
    },
    {
        id:"3",
        title:"Personal Portfolio Website",
        desc:"A personal portfolio website showcasing skills, projects, and achievements, designed to highlight expertise and creativity while providing a platform for professional opportunities.",
        tech:"React, Tailwind, Routering, Google Sheets",
        image:portfolio_img,
        category:"Frontend"|| "All",
        github_link:"https://github.com/Hemil08/portfolio-website",
        demo_link:"https://hemil-portfolio.vercel.app/",
    },
    {
        id:"4",
        title:"Event Management System",
        desc:"A Django-powered Event Management System with user roles, event registration, and real-time email and in-app notifications.",
        tech:"Django, Python, Jinja Template, Authentication",
        image:event,
        category:"Backend"|| "All",
        github_link:"https://github.com/Hemil08/Event-Management-System",
        demo_link:"",
    },
    {
        id:"5",
        title:"Expense Tracker App",
        desc:"A Django-based recursive category and subcategory system with nested display and Django admin integration for hierarchical data management.",
        tech:"Django, Python, Jinja Template, Authentication",
        image:expense,
        category:"Backend"|| "All",
        github_link:"https://github.com/Hemil08/Expense-Tracker-APP",
        demo_link:"",
    },
    {
        id:"6",
        title:"Todo App",
        desc:"A collaborative Django To-Do app with task management, team invitations, subtasks, comments, and real-time progress tracking.",
        tech:"Django, Python, Jinja Template, Authentication",
        image:"",
        category:"Backend"|| "All",
        github_link:"https://github.com/Hemil08/todo_project",
        demo_link:"",
    },
    {
        id:"7",
        title:"Marco Restaurant Website",
        desc:"A fully responsive clone of the Marco website, built with modern web technologies featuring smooth animations, reusable components, and SEO-friendly design.",
        tech:"React,Tailwind",
        image:marco,
        category:"Frontend"|| "All",
        github_link:"https://github.com/Hemil08/todo_project",
        demo_link:"https://marcoproject-r1iugx15s-hemils-projects-1b8396ff.vercel.app/",
    },
]

export default ProjectData;