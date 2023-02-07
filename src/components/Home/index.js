import styled from "styled-components";
import { Typography, Image, Tooltip } from "antd";

import home from '../../assets/home.gif';
import link from '../../assets/link.png';
import { useCallback } from "react";
import { TABS, TABS_CONFIG } from "../../config/tabs";

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
                <Tooltip title={TABS_CONFIG[TABS.ABOUT_ME].title}>
                    <StyledTitle level={2} onClick={handleNameClick} >
                        Prajjawal Agarwal<Image src={link} style={{height: "10px", verticalAlign: "super", width: "auto"}} preview={false} />
                    </StyledTitle>
                </Tooltip>
                <Title level={3} type="secondary" style={{ whiteSpace: "nowrap", margin: "12px 0" }}>SOFTWARE ENGINEER</Title>
            </StyledLeft>
            <StyledRight>
                <Image src={home} style={{height: "400px", width: "auto"}} preview={false} />
            </StyledRight>
        </StyledLayout>
    );
};


export default Home;