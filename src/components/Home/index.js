import styled from "styled-components";
import { Typography, Image } from "antd";

import homeImage from '../../assets/home.gif';

const { Title } = Typography;

const StyledLayout = styled.div`
    display: flex;
    justify-content: space-around;
    height: 70vh;
`;

const StyledLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledTitle = styled(Title)`
    letter-spacing: 4px;
    text-transform: uppercase;
    white-space: nowrap;
    padding-left: 50px;
`;

const Home = () => (
    <StyledLayout>
        <StyledLeft>
            <StyledTitle level={2}>Prajjawal Agarwal</StyledTitle>
            <Title level={3} type="secondary" style={{ whiteSpace: "nowrap" }}>SOFTWARE ENGINEER</Title>
        </StyledLeft>
        <StyledRight>
            <Image src={homeImage} preview={false} />
        </StyledRight>
    </StyledLayout>
);


export default Home;