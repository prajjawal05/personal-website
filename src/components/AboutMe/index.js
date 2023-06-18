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
    text-align: left;
`;

const StyledDetails = styled(Text)`
    text-align: left;
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
                {/* <StyledTitle level={4}>Hey there!</StyledTitle>
                <ul>
                    <StyledListItem><Text type="secondary">I am Prajjawal Agarwal, a Graduate Student in Computer Science at Stony Brook University, NY, USA. I love solving challenging problems, and working through the entire stack.</Text></StyledListItem>
                </ul>
                <ul>
                    <Title level={5} style={{ paddingBottom: "15px" }}>Talking about personal stuff</Title>
                    <StyledListItem><Text type="secondary">I am currently pursuing MS in Computer Science at Stony Brook University.</Text></StyledListItem>
                    <StyledListItem><Text type="secondary">I have an experience of working as a full stack web developer for 3 years.</Text></StyledListItem>
                    <StyledListItem><Text type="secondary">I like the area of systems and storage in general.</Text></StyledListItem>
                    <StyledListItem><Text type="secondary">Music and Anime keeps me going.</Text></StyledListItem>
                </ul> */}
                <StyledDetails>Hey there!

                    I'm Prajjawal Agarwal, a Graduate Student in Computer Science at Stony Brook University, NY, USA. With a passion for solving challenging problems and a love for working through the entire technology stack, I'm dedicated to making a positive impact in the world of computing.

                    <StyledTitle level={4}>Education and Professional Experience:</StyledTitle>
                    Currently pursuing my MS in Computer Science at Stony Brook University, I have a solid foundation in web development, with three years of experience as a full stack web developer. This hands-on experience has allowed me to gain valuable insights into creating seamless, user-friendly applications that meet the needs of both clients and end-users.

                    <StyledTitle level={4}>Areas of Interest:</StyledTitle>
                    I have a particular affinity for systems and storage, as well as high-level design. Exploring the intricacies of how data is processed, stored, and retrieved fascinates me, and I find great joy in architecting robust and scalable solutions. From conceptualizing system architectures to designing elegant interfaces, I thrive in the realm of high-level design, balancing functionality with aesthetics.

                    <StyledTitle level={4}>Beyond the Tech World:</StyledTitle>
                    When I'm not immersed in coding and debugging, you can find me immersed in the world of music and anime. Music has the incredible ability to uplift my spirits and inspire creativity, while anime provides a perfect escape into captivating storylines and vibrant visuals. These interests keep me energized and balanced, allowing me to approach challenges with a fresh perspective.
                </StyledDetails>
            </StyledLeft>
            <StyledRight>
                <Image src={personalImg} style={{ height: "400px", width: "auto" }} preview={false} />
            </StyledRight>
        </StyledLayout>
    </StyledAboutMe>
);


export default AboutMe;