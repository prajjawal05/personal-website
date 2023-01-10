import { Typography } from 'antd';
import styled from 'styled-components';
const { Title, Text } = Typography;

const StyledLayout = styled.div`
display: flex;
justify-content: space-between;

`;

const StyledMeta = styled.div`
display: flex;
flex-direction: column;
align-items: space-between;
`;

const StyledListItem = styled.li`
display: inline-block;
margin: 0 10px;
`;

const StyledList = styled.ul`
`;

const RELEVANT_COURSES = [
    'Data Structures', 'Design and Analysis of Algorithms', 'Database Management Systems', 'Operating System', 'Object Oriented Methodologies', 'Computer Networks', 'Software Engineering', 'Compiler Design'
]

const Courses = () => (
    <>
        <Title level={4}>Relevant Courses</Title>
        <StyledList>
            {RELEVANT_COURSES.map((courseName, index) => (
                <StyledListItem><Text key={index} italic>{courseName}</Text></StyledListItem>
            ))}
        </StyledList>
    </>
);

const Content = () => (
    <Courses />
);


const Header = () => (
    <StyledLayout>
        <Title level={3}>Indian Institute of Information Technology Allahabad</Title>
        <StyledMeta>
            <Text type="secondary">UP, India</Text>
            <Text type="secondary">Jun 2015 - Jul 2019</Text>
        </StyledMeta>
    </StyledLayout>
);

export { Header, Content };
