import { useContext } from "react";
import styled from "styled-components";
import { Typography, Image, Button } from "antd";

import { DownOutlined, ContainerOutlined } from "@ant-design/icons";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";

import Socials from "../Socials";

import { LINKS } from "../../config/links";

import home from '../../assets/home.gif';
// import home from '../../assets/night-home.gif';
import { TABS } from "../../config/tabs";
import { ScreenContext } from "../../config/context";


const { Text, Title } = Typography;

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
    white-space: pre-line;
`;

const StyledMore = styled(Title)`
    letter-spacing: 2px;
    white-space: nowrap;
    cursor: pointer;
    color: black;
    &: hover {
        color: blue;
    }
`;
const Home = () => {
    const width = useContext(ScreenContext);
    return (
        <>
            <StyledLayout>
                <StyledLeft>
                    <StyledTitle level={2}>
                        My name is Prajjawal Agarwal
                    </StyledTitle>
                    <Title level={3} type="secondary" style={{ whiteSpace: "pre-line", margin: "12px 0" }}>I am a Software Engineer</Title>
                    <br />
                    <Socials />
                </StyledLeft>
                {width >= 1100 &&
                    <StyledRight>
                        <Image src={home} style={{ height: "400px", width: "550px" }} preview={false} />
                    </StyledRight>
                }
            </StyledLayout >
            <Link
                activeClass="active"
                to={TABS.ABOUT_ME}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <StyledMore level={4} style={{ textAlign: "center" }}>
                    Know more about me
                    <br />
                    <br />
                    <Jump forever animation="fromBottom" maxHeight={5} duration={1500}>
                        <DownOutlined />
                    </Jump>
                </StyledMore>
            </Link>
        </>
    );
};


export default Home;