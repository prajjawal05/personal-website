import mtlogo from '../../assets/mtlogo.png';
import mktxlogo from '../../assets/mktxlogo.png';
import fsllogo from '../../assets/fsllogo.png';


export const COMPANIES = {
    MARKETAXESS: "MARKETAXESS",
    FSL_STONY_BROOK: "FSL_STONY_BROOK",
    MINDTICKLE: "MINDTICKLE",
}


const MKTX_WORKEX = [{
    JOB_TITLE: 'Software Engineer Intern',
    DURATION: 'Jun 2023 - Aug 2023',
    PROJECTS: [
        "Collaborated with a team of tech interns to develop a trade ticket feature using MarketAxess' new technology stack.",
        "Conducted a proof of concept project and worked closely with stakeholders to explore the feasibility and potential of the solution.",
        "Assisted the Rates Tech team by completing small tasks within short sprints, contributing to the successful delivery of projects.",
    ]
}];

const FSL_WORKEX = [{
    JOB_TITLE: 'Graduate Research Assistant',
    DURATION: 'Jan 2023 - May 2023',
    PROJECTS: [
        'Instrumented the Durable Task Framework and Azurite in Microsoft Azure, capturing data access patterns and gathering metrics to analyze workflow execution.',
        'Conducted data analysis on the captured metrics, identifying patterns and trends to gain a deeper understanding of workflow behavior.',
    ]
}];

const MINDTICKLE_WORKEX = [{
    JOB_TITLE: 'Software Development Engineer - 2',
    DURATION: 'May 2020 - Aug 2022',
    PROJECTS: [
        'Led Authentication and Rule Automation team, driving successful project completion and serving as the primary point of contact for stakeholders.',
        'Implemented highly efficient file uploader system with socket communication, reducing file processing time by 30% and improving user experience.',
        'Designed multi-region routing stack, enabling customized data storage and increasing customer satisfaction.',
        'Introduced GraphQl and led frontend projects, resulting in faster development cycles and improved team productivity.',
    ]
}, {
    JOB_TITLE: 'Software Development Engineer - 1',
    DURATION: 'Jun 2019 - Apr 2020',
    PROJECTS: [
        'Developed robust query framework, reducing query execution time by 40% and enhancing scalability for bulk operations.',
        'Architected task processor, decreasing processing time by 50% for large tasks and improving user visibility during operations.',
    ]
}, {
    JOB_TITLE: 'Software Development Intern',
    DURATION: 'Jan 2019 - Jun 2019',
    PROJECTS: [
        'Built customer-facing frontend application using React and Redux-Saga, improving user satisfaction by 40% and streamlining rule handling.',
        'Conducted comprehensive study of UI frameworks, contributing to a 30% improvement in development efficiency.',
    ]
}];

export const COMPANY_CONFIGS = {
    [COMPANIES.MARKETAXESS]: {
        NAME: 'MarketAxess',
        LINK: 'https://www.linkedin.com/company/marketaxess/',
        LOCATION: 'NY, USA',
        DURATION: 'Jun 2023 - Aug 2023',
        LOGO: mktxlogo,
        WORKEX: MKTX_WORKEX,
    },
    [COMPANIES.FSL_STONY_BROOK]: {
        NAME: 'File Systems and Storage Lab, Stony Brook University',
        LINK: 'https://www.fsl.cs.sunysb.edu/',
        LOCATION: 'NY, USA',
        DURATION: 'Jan 2023 - May 2023',
        LOGO: fsllogo,
        WORKEX: FSL_WORKEX,
    },
    [COMPANIES.MINDTICKLE]: {
        NAME: 'MindTickle',
        LINK: 'https://www.linkedin.com/company/mindtickle/',
        LOCATION: 'Pune, India',
        DURATION: 'Jan 2019 - Aug 2022',
        LOGO: mtlogo,
        WORKEX: MINDTICKLE_WORKEX,
    }
}
