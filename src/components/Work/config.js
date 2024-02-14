import mtlogo from '../../assets/mtlogo.png';
import mktxlogo from '../../assets/mktxlogo.png';
import fsllogo from '../../assets/fsllogo.png';


export const COMPANIES = {
    FSL_STONY_BROOK_AP: "FSL_STONY_BROOK_AP",
    MARKETAXESS: "MARKETAXESS",
    FSL_STONY_BROOK_IS: "FSL_STONY_BROOK_IS",
    MINDTICKLE: "MINDTICKLE",
}

const FSL_WORKEX_AP = [{
    JOB_TITLE: 'Graduate Research Assistant',
    START: 'Aug 2023',
    END: 'May 2024',
    PROJECTS: [
        'Verified usage of Mutation Admission Controllers in the OpenWhisk platform deployed locally on a kind cluster.',
        'Constructed a video transcoding workflow using the Orchestrator pattern, achieving 15% faster processing of large video files through concurrent processing of dynamic segments while also using MongoDB to save parameters required for automated retries.',
    ]
}];

const MKTX_WORKEX = [{
    JOB_TITLE: 'Software Engineer Intern',
    START: 'Jun 2023',
    END: 'Aug 2023',
    PROJECTS: [
        "Collaborated with other tech interns to design and develop workflows for an enhancement in a microservice architecture using Kafka, Redis, WebSockets, React, and Java SpringBoot.",
        "Conducted a PoC project while working with stakeholders to explore the feasibility of a possible solution.",
    ]
}];

const FSL_WORKEX_IS = [{
    JOB_TITLE: 'Graduate Research Assistant',
    START: 'Jan 2023',
    END: 'May 2023',
    PROJECTS: [
        'Instrumented the Durable Task Framework and Azurite in Microsoft Azure, capturing data access patterns and gathering metrics to analyze workflow execution.',
        'Conducted data analysis on the captured metrics, identifying patterns and trends to gain a deeper understanding of workflow behavior.',
    ]
}];

const MINDTICKLE_WORKEX = [{
    JOB_TITLE: 'Software Development Engineer - 2',
    START: 'May 2020',
    END: 'Aug 2022',
    PROJECTS: [
        'Led Authentication and Rule Automation team, driving successful project completion and serving as the primary point of contact for stakeholders.',
        'Implemented highly efficient file uploader system with socket communication, reducing file processing time by 30% and improving user experience.',
        'Designed multi-region routing stack, enabling customized data storage and increasing customer satisfaction.',
        'Introduced GraphQl and led frontend projects, resulting in faster development cycles and improved team productivity.',
    ]
}, {
    JOB_TITLE: 'Software Development Engineer - 1',
    START: 'Jun 2019',
    END: 'Apr 2020',
    PROJECTS: [
        'Developed robust query framework, reducing query execution time by 40% and enhancing scalability for bulk operations.',
        'Architected task processor, decreasing processing time by 50% for large tasks and improving user visibility during operations.',
    ]
}, {
    JOB_TITLE: 'Software Development Intern',
    START: 'Jan 2019',
    END: 'Jun 2019',
    PROJECTS: [
        'Built customer-facing frontend application using React and Redux-Saga, improving user satisfaction by 40% and streamlining rule handling.',
        'Conducted comprehensive study of UI frameworks, contributing to a 30% improvement in development efficiency.',
    ]
}];

export const COMPANY_CONFIGS = {
    [COMPANIES.FSL_STONY_BROOK_AP]: {
        NAME: 'File Systems and Storage Lab, Stony Brook University (in collaboration with IBM Research - Almaden)',
        LINK: 'https://www.fsl.cs.sunysb.edu/',
        LOCATION: 'NY, USA',
        START: 'Aug 2023',
        END: 'May 2024',
        LOGO: fsllogo,
        WORKEX: FSL_WORKEX_AP,
    },
    [COMPANIES.MARKETAXESS]: {
        NAME: <span style={{ whiteSpace: "nowrap" }}>MarketAxess</span>,
        LINK: 'https://www.linkedin.com/company/marketaxess/',
        LOCATION: 'NY, USA',
        START: 'Jun 2023',
        END: 'Aug 2023',
        LOGO: mktxlogo,
        WORKEX: MKTX_WORKEX,
    },
    [COMPANIES.FSL_STONY_BROOK_IS]: {
        NAME: 'File Systems and Storage Lab, Stony Brook University (in collaboration with IBM Research - Almaden)',
        LINK: 'https://www.fsl.cs.sunysb.edu/',
        LOCATION: 'NY, USA',
        START: 'Jan 2023',
        END: 'May 2023',
        LOGO: fsllogo,
        WORKEX: FSL_WORKEX_IS,
    },
    [COMPANIES.MINDTICKLE]: {
        NAME: <span style={{ whiteSpace: "nowrap" }}>MindTickle</span>,
        LINK: 'https://www.linkedin.com/company/mindtickle/',
        LOCATION: 'Pune, India',
        START: 'Jan 2019',
        END: 'Aug 2022',
        LOGO: mtlogo,
        WORKEX: MINDTICKLE_WORKEX,
    }
}
