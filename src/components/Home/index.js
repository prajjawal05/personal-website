import styled from "styled-components";
import { Typography, Image } from "antd";

import home from '../../assets/home.gif';
import { useCallback } from "react";
import { TABS } from "../../config/tabs";

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
    cursor: pointer;
    &: hover {
        color: blue;
    }
`;

const Home = ({ navigateTo }) => {
    const handleNameClick = useCallback(() => {
        navigateTo(TABS.ABOUT_ME);
    }, [navigateTo]);

    return (
        <StyledLayout>
            <StyledLeft>
                <StyledTitle level={2} onClick={handleNameClick} >Prajjawal Agarwal</StyledTitle>
                <Title level={3} type="secondary" style={{ whiteSpace: "nowrap" }}>SOFTWARE ENGINEER</Title>
            </StyledLeft>
            <StyledRight>
                <Image src={home} style={{height: "400px"}} preview={false} />
            </StyledRight>
        </StyledLayout>
    );
};


export default Home;