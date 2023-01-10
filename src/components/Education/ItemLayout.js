import { Typography } from 'antd';
import styled from 'styled-components';

import { EDUCATION_CONFIG } from './config';

const { Title, Text } = Typography;

const StyledLayout = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledMeta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    text-align: right;
`;

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    text-align: left;
`;

const StyledCourse = styled.li`
    display: inline-block;
    margin: 0 10px;
`;

const StyledActivity = styled.li`
    text-align: left;
`;

const StyledList = styled.ul`
    padding: 0;
    text-align: left;
`;

const StyledName = styled(Title)`
    margin-top: 0px;
    margin-bottom: 0px !important;
`;

const StyledSubTitle = styled(Title)`
    text-align: left;
`;

const Courses = ({ type }) => (
    <>
        <StyledSubTitle level={4}>Relevant Courses</StyledSubTitle>
        <StyledList>
            {EDUCATION_CONFIG[type].RELEVANT_COURSES.map((courseName, index) => (
                <StyledCourse><Text key={index} italic>{courseName}</Text></StyledCourse>
            ))}
        </StyledList>
    </>
);

const Extracurriculars = ({ type }) => (
    <>
        <StyledSubTitle level={4}>Extracurriculars</StyledSubTitle>
        <ul>
            {EDUCATION_CONFIG[type].EXTRA_CURRICULARS.map((activity, index) => (
                <StyledActivity><Text key={index} italic>{activity}</Text></StyledActivity>
            ))}
        </ul>
    </>
);

const Content = ({ type }) => (
    <ul>
        <li><Courses type={type} /></li>
        <li><Extracurriculars type={type} /></li>
    </ul>
);


const Header = ({ type }) => {
    const { COLLEGE_NAME: name, LOCATION: location, DURATION: duration, DEGREE: degree } = EDUCATION_CONFIG[type]; 
    return (
        <StyledLayout>
            <StyledInfo>
                <StyledName level={3}>{name}</StyledName>
                <Text type="secondary">{degree}</Text>
            </StyledInfo>
            <StyledMeta>
                <Text type="secondary">{location}</Text>
                <Text type="secondary">{duration}</Text>
            </StyledMeta>
        </StyledLayout>
    );
};

export { Header, Content };
