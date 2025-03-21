import educationIcon from './capelo_icon.png';
import codeIcon from './code_icon.png';
import projectIcon from './project_icon.png';
import mysqlIcon from './mysql_icon.png'
import gitIcon from './git_icon.png'
import vscodeIcon from './vscode_icon.png'
import phpIcon from './php_icon.png'
import apiIcon from './api_icon.png'
import webIcon from './web_icon.png'
import timerProject from './image/project-timer.png'
import toDoListProject from './image/project-to-do-list.png'
export const serviceData = [
    {
        icon: apiIcon,
        title: 'API services',
        description: 'API services enable seamless communication between applications, allowing data exchange and integration with third-party systems...',
        link: '',
    },
    {
        icon: webIcon,
        title: 'Web design',
        description: 'Web development is the process of building, programming...',
        link: '',
    },
    {
        icon: phpIcon,
        title: 'Back End',
        description: 'Back-end development focuses on server-side logic, databases, and APIs, ensuring seamless data processing and application functionality...',
        link: '',
    },
];

export const workerData = [
    {
        title: 'Timer project',
        description: 'Timer created with React',
        bgImage: `url(${timerProject.src})`,
        link: 'https://github.com/YagoB16/ignite-timer',
    },
    {
        title: 'To-do-list project',
        description: 'A to-do list application built with React and TypeScript',
        bgImage:`url(${toDoListProject.src})`,
        link: 'https://github.com/YagoB16/to-do-list-ts',
    },
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: `url(${timerProject.src})`,
        link: '',
    },
    {
        title: 'Web project',
        description: 'Web Design',
        bgImage: `url(${timerProject.src})`,
        link: '',
    },
];

export const infoList = [
    {
        icon: codeIcon,
        title: 'Languages',
        description: 'HTML, CSS, JavaScript, React Js, Next Js',
    },
    {
        icon: educationIcon,
        title: 'Education',
        description: 'B. Computer Science',
    },
    {
        icon: projectIcon,
        title: 'Projects',
        description: 'Built more than 3 projects',
    },
];

export const toolsData = [
    mysqlIcon, gitIcon, vscodeIcon
];
