import styled from "styled-components";
import { Typography, Image } from "antd";
import { GithubOutlined, MailOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

import { LINKS } from "../../config/links";
import personalImg from '../../assets/personal.jpg';

const { Title, Text } = Typography;

const StyledLayout = styled.div`
    display: flex;
    justify-content: space-around;
    height: 70vh;
`;

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

const StyledLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 700px;
`;

const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledTitle = styled(Title)`
    letter-spacing: 4px;
    padding-left: 50px;
`;


const StyledAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledListItem = styled.li`
    text-align: left;
`;

const LinkedIn = () => (
<a
    className="App-link"
    href={LINKS.LINKEDIN}
    target="_blank"
    rel="noopener noreferrer"><LinkedinOutlined/></a>
);

const Github = () => (
<a
    className="App-link"
    href={LINKS.GITHUB}
    target="_blank"
    rel="noopener noreferrer"><GithubOutlined/></a>
);

const Instagram = () => (
<a
    className="App-link"
    href={LINKS.GITHUB}
    target="_blank"
    rel="noopener noreferrer"><InstagramOutlined/></a>
  );

const Email = () => (
<a
    className="App-link"
    href={LINKS.EMAIL}
    target="_blank"
    rel="noopener noreferrer"><MailOutlined/></a>
    );

const AboutMe = () => (
    <StyledAboutMe>
        <StyledLayout>
            <StyledLeft>
                <StyledTitle level={4}>Hey there!</StyledTitle>
                <ul>
                    <StyledListItem><Text type="secondary">I am Prajjawal Agarwal, a Graduate Student in Computer Science at Stony Brook University, NY, USA and a past Software Developer Engineer - 2 🚀. I love solving challenging problems, and working through the entire stack.</Text></StyledListItem>
                </ul>
                <ul>
                    <Title level={5} style={{paddingBottom: "15px"}}>Talking about personal stuff</Title>
                    <StyledListItem><Text type="secondary">I am currently pursuing MS in Computer Science at Stony Brook University.</Text></StyledListItem>
                    <StyledListItem><Text type="secondary">I have an experience of working as a full stack web developer for 3 years.</Text></StyledListItem>
                    <StyledListItem><Text type="secondary">I like the area of systems and storage in general.</Text></StyledListItem>
                    <StyledListItem><Text type="secondary">Music and Anime keeps me going.</Text></StyledListItem>
                </ul>
            </StyledLeft>
            <StyledRight>
                <Image src={personalImg} style={{height: "400px"}} preview={false} />
                <br/>
                <StyledSocial>
                    <Text>Connect with me</Text>
                    <StyledLinks>
                        <LinkedIn /> &nbsp;
                        <Instagram /> &nbsp;
                        <Github /> &nbsp;
                        <Email />
                    </StyledLinks>
                </StyledSocial>
            </StyledRight>
        </StyledLayout>
    </StyledAboutMe>
);


export default AboutMe;