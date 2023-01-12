import { Image } from 'antd';
import styled from 'styled-components';

import constructionImg from '../../assets/under-construction.jpeg';

const StyledImage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Skills = () => (
    <StyledImage>
        <Image preview={false} src={constructionImg} style={{height: "680px", width: "980px"}}/>
    </StyledImage>
);

export default Skills;

// Todo: work on Skills section
// Todo: add a link to the resume