import styled from "styled-components";
import { Typography, Image } from "antd";

import { DownOutlined, ContainerOutlined } from "@ant-design/icons";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";

import Socials from "../Socials";

import { LINKS } from "../../config/links";

import home from '../../assets/home.gif';
// import home from '../../assets/night-home.gif';
import { TABS } from "../../config/tabs";

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
// #1d2536
// #263249

const StyledTitle = styled(Title)`
    letter-spacing: 4px;
    white-space: nowrap;
    padding-left: 50px;
    // color: white;
`;

const StyledMore = styled(Title)`
    letter-spacing: 2px;
    white-space: nowrap;
    padding-left: 50px;
    cursor: pointer;
    color: black;
    &: hover {
        color: blue;
    }
`;

const Resume = () => (
    <a
        className="App-link"
        href={LINKS.RESUME}
        target="_blank"
        rel="noopener noreferrer"><ContainerOutlined /></a>
);


const Home = () => {
    return (
        <>
            <StyledLayout>
                <StyledLeft>
                    <StyledTitle level={2}>
                        My name is Prajjawal Agarwal
                    </StyledTitle>
                    <Title level={3} type="secondary" style={{ whiteSpace: "nowrap", margin: "12px 0" }}>I am a Software Engineer</Title>
                    <br />
                    <Socials />
                </StyledLeft>
                <StyledRight>
                    <Image src={home} style={{ height: "400px", width: "auto" }} preview={false} />
                    <div>
                        <Text>Resume:&nbsp; <Resume /></Text>
                    </div>
                </StyledRight>
            </StyledLayout>
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