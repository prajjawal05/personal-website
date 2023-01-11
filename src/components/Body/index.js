import { Typography } from 'antd';
import styled from 'styled-components';
import Education from "../Education";
import Projects from "../Projects";
import Work from "../Work";

const { Title } = Typography;

const StyledTitle = styled(Title)`s
`;


const Body = () => (
    <div className="App">
        <header className="App-header" >
            <StyledTitle level={1}>Work</StyledTitle>
            <Work />
        </header>
      </div>
);


export default Body;