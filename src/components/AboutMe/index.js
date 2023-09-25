import { useContext } from "react";
import styled from "styled-components";
import { Typography, Image } from "antd";

import { ScreenContext } from "../../config/context";
import personalImg from '../../assets/personal.jpg';

const { Title, Text } = Typography;

const StyledLayout = styled.div`
    display: flex;
    flex-direction: ${prop => prop.horizontal ? "row" : "column"};
    justify-content: space-around;
    height: auto;
`;


const StyledLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: ${prop => prop.horizontal ? "900px" : ""};
`;

const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 80px 0;
`;

const StyledTitle = styled(Title)`
    text-align: left;
`;

const StyledDetails = styled(Text)`
    text-align: left;
    padding: 0 25px;
`;


const StyledAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
`;

const StyledListItem = styled.li`
    text-align: left;
`;

const AboutMe = () => {
    const width = useContext(ScreenContext);

    return (
        <StyledAboutMe>
            <StyledLayout horizontal={width > 1350}>
                <StyledLeft horizontal={width > 1350}>
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
                {/* {width >= 1500 && */}
                <StyledRight>
                    <Image src={personalImg} style={{ maxHeight: "400px", maxWidth: "550px" }} preview={false} />
                </StyledRight>
                {/* } */}
            </StyledLayout>
        </StyledAboutMe>
    )
};


export default AboutMe;