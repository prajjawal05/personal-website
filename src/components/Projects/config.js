const PROJECT_TYPE = {
    PERSONAL: "PERSONAL Project",
    RESEARCH: "RESEARCH Project",
    CLASSROOM: "CLASSROOM Project"
}

export const PROJECTS = {
    2023: [{
        NAME: 'Comparing Mallocs',
        TYPE: PROJECT_TYPE.CLASSROOM,
        START: 'Jan 2023',
        END: 'May 2023',
        TECHNOLOGIES: [
            'Python', 'Linux', 'Perf', 'Shell', 'Valgrind'
        ],
        DESCRIPTION: [
            'Compared the different memory allocators using a given set of benchmarks.',
        ],
        GITHUB: 'https://github.com/prajjawal05/comparing-mallocs',
    }, {
        NAME: 'NYC Airbnb - A Data Driven Stay',
        TYPE: PROJECT_TYPE.CLASSROOM,
        START: 'Jan 2023',
        END: 'May 2023',
        TECHNOLOGIES: [
            'React', 'd3.js', 'Python', 'Flask'
        ],
        DESCRIPTION: [
            'Created dashboards containing graphs like Starburst and NYC map to help tenants and homeowners.',
            <>The project was selected for Stars of CSE 564 Spring 2023 <a
                className="App-link"
                href={"https://www.youtube.com/playlist?list=PLyCRt3MN8s8MhiREiB0vV-aDhwx-huCb0"}
                target="_blank"
                rel="noopener noreferrer">Playlist</a>.</>,
        ],
        GITHUB: 'https://github.com/prajjawal05/ny-aribnb',
    }, {
        NAME: 'Personal Website',
        TYPE: PROJECT_TYPE.PERSONAL,
        START: 'Jan 2023',
        END: 'Present',
        TECHNOLOGIES: [
            'React', 'CSS'
        ],
        DESCRIPTION: [
        ],
        GITHUB: 'https://github.com/prajjawal05/personal-website',
    }],
    2022: [{
        NAME: 'Fault Tolerant Sharded Key Value Store',
        TYPE: PROJECT_TYPE.CLASSROOM,
        START: 'Sep 2022',
        END: 'Dec 2022',
        TECHNOLOGIES: [
            'C++'
        ],
        INFO: 'Contact me to get access to the codebase.',
        DESCRIPTION: [
            'The store was built in an incremental manner as a part of Distributed Systems class.',
            'RAFT consensus was implemented.'
        ]
    }, {
        NAME: 'Smart Audio Book reader',
        TYPE: PROJECT_TYPE.CLASSROOM,
        START: 'Sep 2022',
        END: 'Dec 2022',
        TECHNOLOGIES: [
            'Kivy',
            'Python',
            'Microsoft Azure'
        ],
        DESCRIPTION: [
            'The project was done as a part of Human Computer Interaction class.',
            'The application would convert any PDF into an audio book across platforms.',
            'All the interaction was done using Microsoft Azure Cognitive services.'
        ],
        GITHUB: 'https://github.com/prajjawal05/book-reading-assistant',
    }],
    2020: [{
        NAME: 'Reaction Maker',
        TYPE: PROJECT_TYPE.PERSONAL,
        START: 'Jul 2020',
        TECHNOLOGIES: [
            'Python', 'React', 'AWS DynamoDB', 'AWS Cloudfront', 'AWS Lambda'
        ],
        DESCRIPTION: [
            'An extensible framework that would sit over any UI to make reactions like instagram live.',
            'It was used in Zoom calls during company events.'
        ],
        GITHUB: 'https://github.com/prajjawal05?tab=repositories&q=app-reactions&type=&language=&sort=',
    }],
    2018: [{
        NAME: 'Learning Based CPU Frequency Governor ',
        TYPE: PROJECT_TYPE.RESEARCH,
        START: 'Jan 2018',
        END: 'Jun 2018',
        INFO: 'Contact me to get access to the paper and report.',
        TECHNOLOGIES: [
            'Linux', 'C++'
        ],
        DESCRIPTION: [
            'Study of frequency and temperature of CPU cores to create a governor that maintains frequency to save energy.',
            'Built a Linear regression model for frequency and temperature.'
        ]
    }],
    2017: [{
        NAME: 'Modelling Synchronization in Many-Core Processors',
        TYPE: PROJECT_TYPE.RESEARCH,
        START: 'Aug 2017',
        END: 'Nov 2017',
        INFO: 'Contact me to get access to the paper and report.',
        TECHNOLOGIES: [
            'Petrinet', 'Markov Chain'
        ],
        DESCRIPTION: [
            'Modelled many core processors with sophisticated caching architecture and interconnection structure using Stochastic Petrinet.',
        ]
    }, {
        NAME: 'Laptop Recommendation Expert Systems',
        TYPE: PROJECT_TYPE.CLASSROOM,
        START: 'Aug 2017',
        END: 'Nov 2017',
        TECHNOLOGIES: [
            'Prolog'
        ],
        DESCRIPTION: [
            'The project was done as a part of Artificial Intelligence class.',
            'A recommendation system that would suggest laptops to users based upon various parameters',
        ],
        GITHUB: 'https://github.com/prajjawal05/LaptopRecommendation-ExpertSystem',
    }, {
        NAME: 'Grade Portal',
        TYPE: PROJECT_TYPE.CLASSROOM,
        START: 'Aug 2017',
        END: 'Nov 2017',
        TECHNOLOGIES: [
            'Java', 'Java Swing', 'JDBC'
        ],
        DESCRIPTION: [
            'The project was done as a part of Software Engineering class.',
            'It can be used to manage grades of students.'
        ],
        GITHUB: 'https://github.com/prajjawal05/Grade-Portal',
    }],
    2016: [{
        NAME: 'Human Resource Management System',
        TYPE: PROJECT_TYPE.CLASSROOM,
        START: 'Aug 2016',
        END: 'Nov 2016',
        TECHNOLOGIES: [
            'Java', 'Java Swing', 'JDBC'
        ],
        DESCRIPTION: [
            'The project was done as a part of Object Oriented Methodologies class.',
            'It can be used to manage, request and grant leaves.',
        ],
        GITHUB: 'https://github.com/prajjawal05/HRMS-Java-Project',
    }]
}