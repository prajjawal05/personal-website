import { Typography } from 'antd';
import styled from 'styled-components';
import Education from "../Education";


const { Title } = Typography;

const StyledTitle = styled(Title)`

`;


const Body = () => (
    <div className="App">
        <header className="App-header" >
            <StyledTitle align={"left"} level={1}>Education</StyledTitle>
          <Education />
        </header>
      </div>
);


export default Body;