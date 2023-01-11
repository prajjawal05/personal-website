import Home from '../components/Home';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Skills from '../components/Skills';

export const TABS = {
    HOME: 'HOME',
    EDUCATION: 'EDUCATION',
    PROJECTS: 'PROJECTS',
    WORK_EX: 'WORK_EX',
    SKILLS: 'SKILLS'
};

export const TABS_CONFIG = {
    [TABS.HOME]: {
        title: 'Home',
        Component: Home,
    },
    [TABS.EDUCATION]: {
        title: 'Education',
        Component: Education,
    },
    [TABS.PROJECTS]: {
        title: 'Projects',
        Component: Projects,
    },
    [TABS.WORK_EX]: {
        title: 'Work Experience',
        Component: Work,
    },
    [TABS.SKILLS]: {
        title: 'Skills',
        Component: Skills,
    }
};
