export const EDUCATION_TYPE = {
    UNDERGRAD: 'UNDERGRAD',
    MS: 'MS'
}

export const EDUCATION_CONFIG = {
    [EDUCATION_TYPE.UNDERGRAD]: {
        COLLEGE_NAME: 'Indian Institute of Information Technology Allahabad',
        DEGREE: 'Bachelor of Technology in Information Technology',
        LOCATION: 'UP, India',
        START: 'Jun 2015',
        END: 'Jul 2019',
        RELEVANT_COURSES: [
            'Data Structures', 'Design and Analysis of Algorithms', 'Database Management Systems', 'Operating System', 'Object Oriented Methodologies', 'Computer Networks', 'Software Engineering', 'Compiler Design'
        ],
        EXTRA_CURRICULARS: [
            'Elected member of Placement committee (2018) that dealt with companies coming to campus to hire.',
            'Member of Acoustics and Media Society (2017).',
            'Organised Photobooth during Cultural Festival of IIITA (2017).',
            'Winner of Counter Strike 1.6 tournament in Fragfest (2017).',
            'Taught underprivileged students as part of Prayaas (2016), a society led by undergrads.',
        ],
    },
    [EDUCATION_TYPE.MS]: {
        COLLEGE_NAME: 'SUNY Stony Brook University',
        DEGREE: 'Master of Science in Computer Science',
        LOCATION: 'NY, USA',
        START: 'Aug 2022',
        END: 'May 2024',
        RELEVANT_COURSES: [
            'Distributed Systems', 'Human Computer Interaction', 'Operating Systems', 'Data Visualisation'
        ],
        EXTRA_CURRICULARS: [
            'Graduate Teaching Assistant for Programming Abstractions - CSE 216 (Fall 2022 and Spring 2023) under Prof. Ritwik Banerjee.',
        ],
    }
}