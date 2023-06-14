import styled from "styled-components";
import { Typography } from "antd";

import { GithubOutlined, MailOutlined, InstagramOutlined, LinkedinOutlined, ContainerOutlined } from "@ant-design/icons";

import { LINKS } from "../../config/links";

const { Text } = Typography;

const StyledSocial = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const LinkedIn = () => (
    <a
        className="App-link"
        href={LINKS.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"><LinkedinOutlined /></a>
);

const Github = () => (
    <a
        className="App-link"
        href={LINKS.GITHUB}
        target="_blank"
        rel="noopener noreferrer"><GithubOutlined /></a>
);

const Instagram = () => (
    <a
        className="App-link"
        href={LINKS.INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"><InstagramOutlined /></a>
);

const Email = () => (
    <a
        className="App-link"
        href={LINKS.EMAIL}
        target="_blank"
        rel="noopener noreferrer"><MailOutlined /></a>
);


const Socials = () => (
    <StyledSocial>
        <Text>Connect with me</Text>
        <StyledLinks>
            <LinkedIn /> &nbsp;
            {/* <Instagram /> &nbsp; */}
            <Github /> &nbsp;
            <Email />
        </StyledLinks>
    </StyledSocial>
);

export default Socials;