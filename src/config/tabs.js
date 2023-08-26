import { BookTwoTone, IdcardTwoTone, PullRequestOutlined, SettingTwoTone, CodeTwoTone, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Skills from '../components/Skills';
import Conclusion from '../components/Conclusion';

export const TABS = {
    HOME: 'HOME',
    ABOUT_ME: 'ABOUT_ME',
    EDUCATION: 'EDUCATION',
    PROJECTS: 'PROJECTS',
    WORK_EX: 'WORK_EX',
    SKILLS: 'SKILLS',
    CONCLUSION: 'CONCLUSION'
};

export const TABS_CONFIG = {
    [TABS.HOME]: {
        title: '',
        header: '',
        Component: Home,
    },
    [TABS.ABOUT_ME]: {
        title: 'About Me',
        menuTitle: <Avatar style={{ backgroundColor: '#0096FF' }} icon={<UserOutlined />} />,
        header: <div><IdcardTwoTone />&nbsp;&nbsp;About Me</div>,
        // Component: AboutMe,
    },
    [TABS.EDUCATION]: {
        title: 'Education',
        header: <div><BookTwoTone />&nbsp;&nbsp;Education</div>,
        // Component: Education,
    },
    [TABS.WORK_EX]: {
        title: 'Experience',
        header: <div><PullRequestOutlined />&nbsp;&nbsp;Experience</div>,
        // Component: Work,
    },
    [TABS.PROJECTS]: {
        title: 'Projects',
        header: <div><CodeTwoTone />&nbsp;&nbsp;Projects</div>,
        // Component: Projects,
    },
    [TABS.SKILLS]: {
        title: 'Skills',
        header: <div><SettingTwoTone />&nbsp;&nbsp;Skills</div>,
        // Component: Skills,
    },
    [TABS.CONCLUSION]: {
        title: '',
        header: <div></div>,
        // Component: Conclusion,
    }
};

export const CENTRAL_TABS = [TABS.EDUCATION, TABS.WORK_EX, TABS.PROJECTS, TABS.SKILLS, TABS.ABOUT_ME];
export const HOME_TABS_ORDER = [
    TABS.HOME, TABS.ABOUT_ME, TABS.EDUCATION, TABS.PROJECTS, TABS.WORK_EX, TABS.SKILLS, TABS.CONCLUSION
]