import { BookTwoTone, IdcardTwoTone, PullRequestOutlined, SettingTwoTone, CodeTwoTone } from '@ant-design/icons';

import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Home from '../components/Home';  
import Projects from '../components/Projects';
import Work from '../components/Work';
import Skills from '../components/Skills';

export const TABS = {
    HOME: 'HOME',
    ABOUT_ME: 'ABOUT_ME',
    EDUCATION: 'EDUCATION',
    PROJECTS: 'PROJECTS',
    WORK_EX: 'WORK_EX',
    SKILLS: 'SKILLS'
};

export const TABS_CONFIG = {
    [TABS.HOME]: {
        title: '',
        header: '',
        Component: Home,
    },
    [TABS.ABOUT_ME]: {
        title: 'About Me',
        header: <div><IdcardTwoTone/>&nbsp;&nbsp;About Me</div>,
        Component: AboutMe,
    },
    [TABS.EDUCATION]: {
        title: 'Education',
        header: <div><BookTwoTone/>&nbsp;&nbsp;Education</div>,
        Component: Education,
    },
    [TABS.PROJECTS]: {
        title: 'Projects',
        header: <div><CodeTwoTone/>&nbsp;&nbsp;Projects</div>,
        Component: Projects,
    },
    [TABS.WORK_EX]: {
        title: 'Experience',
        header: <div><PullRequestOutlined/>&nbsp;&nbsp;Experience</div>,
        Component: Work,
    },
    [TABS.SKILLS]: {
        title: 'Skills',
        header: <div><SettingTwoTone/>&nbsp;&nbsp;Skills</div>,
        Component: Skills,
    }
};

export const CENTRAL_TABS = [TABS.EDUCATION, TABS.PROJECTS, TABS.WORK_EX, TABS.SKILLS];
