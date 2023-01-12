import { BookTwoTone, IdcardTwoTone, PullRequestOutlined, SettingTwoTone, CodeTwoTone } from '@ant-design/icons';

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
        header: <div><IdcardTwoTone/> Home</div>,
        Component: Home,
    },
    [TABS.EDUCATION]: {
        title: 'Experience',
        header: <div><BookTwoTone/> Experience</div>,
        Component: Education,
    },
    [TABS.PROJECTS]: {
        title: 'Projects',
        header: <div><CodeTwoTone/> Projects</div>,
        Component: Projects,
    },
    [TABS.WORK_EX]: {
        title: 'Experience',
        header: <div><PullRequestOutlined/> Experience</div>,
        Component: Work,
    },
    [TABS.SKILLS]: {
        title: 'Skills',
        header: <div><SettingTwoTone/> Skills</div>,
        Component: Skills,
    }
};
