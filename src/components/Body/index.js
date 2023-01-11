import { Typography } from 'antd';
import styled from 'styled-components';
import Education from "../Education";
import Projects from "../Projects";

const { Title } = Typography;

const StyledTitle = styled(Title)`s
`;


const Body = () => (
    <div className="App">
        <header className="App-header" >
            <StyledTitle level={1}>Education</StyledTitle>
            <Education />
            <StyledTitle level={1}>Projects</StyledTitle>
            <Projects />
        </header>
      </div>
);


export default Body;