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
    ]
}];

const FSL_WORKEX = [{
    JOB_TITLE: 'Graduate Research Assistant',
    DURATION: 'Jan 2023 - May 2023',
    PROJECTS: [
        'Instrumented Durable Task Framework and Azurite to learn about the data access patterns and gather metrics when running a workflow in Microsoft Azure.'
    ]
}];

const MINDTICKLE_WORKEX = [{
    JOB_TITLE: 'Software Development Engineer - 2',
    DURATION: 'May 2020 - Aug 2022',
    PROJECTS: [
        'Took complete ownership over the Authentication and Rule Automation team for a while, leading them in each project and becoming a POC for all stakeholders.',
        'Implemented a file uploader system that processes the file with socket communication to the frontend. It was eventually used as a platform for other uploads on top of which other teams built domain services.',
        'Designed multi region routing stack for serving different customer traffic from different regions. This was essential to onboard companies wanting their data in only particular region.',
        'Introduced GraphQl and led frontend projects within the team while introducing latest upgrades for faster development cycles.'
    ]
}, {
    JOB_TITLE: 'Software Development Engineer - 1',
    DURATION: 'Jun 2019 - Apr 2020',
    PROJECTS: [
        'Built a query framework for frontend and backend that would maintain user selections across filters. This resulted in ease of bulk operations and increased usage.',
        'Architected a processor that would break any large task into chunks and decrease the time taken. This also improved the end user visibility through the states maintained.'
    ]
}, {
    JOB_TITLE: 'Software Development Intern',
    DURATION: 'Jan 2019 - Jun 2019',
    PROJECTS: [
        'Built a customer facing frontend application using React and Redux-Saga for serving automation rules. This was done as a part of UI overhaul.',
        'Did a comprehensive study comparing UI frameworks which was used when deciding a path for company stack.'
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
