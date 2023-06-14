import styled from "styled-components";
import { Typography, Image } from "antd";

import personalImg from '../../assets/personal.jpg';

const { Title, Text } = Typography;

const StyledLayout = styled.div`
    display: flex;
    justify-content: space-around;
    height: 70vh;
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

const AboutMe = () => (
    <StyledAboutMe>
        <StyledLayout>
            <StyledLeft>
                <StyledTitle level={4}>Hey there!</StyledTitle>
                <ul>
                    <StyledListItem><Text type="secondary">I am Prajjawal Agarwal, a Graduate Student in Computer Science at Stony Brook University, NY, USA. I love solving challenging problems, and working through the entire stack.</Text></StyledListItem>
                </ul>
                <ul>
                    <Title level={5} style={{ paddingBottom: "15px" }}>Talking about personal stuff</Title>
                    <StyledListItem><Text type="secondary">I am currently pursuing MS in Computer Science at Stony Brook University.</Text></StyledListItem>
                    <StyledListItem><Text type="secondary">I have an experience of working as a full stack web developer for 3 years.</Text></StyledListItem>
                    <StyledListItem><Text type="secondary">I like the area of systems and storage in general.</Text></StyledListItem>
                    <StyledListItem><Text type="secondary">Music and Anime keeps me going.</Text></StyledListItem>
                </ul>
            </StyledLeft>
            <StyledRight>
                <Image src={personalImg} style={{ height: "400px", width: "auto" }} preview={false} />
            </StyledRight>
        </StyledLayout>
    </StyledAboutMe>
);


export default AboutMe;