import { Typography, Tooltip, Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { PROJECTS } from './config';

const { Title, Text } = Typography;

const StyledProject = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;    
`;


const StyledProjectMeta = styled.div`
`;

const StyledMeta = styled.div`
    text-align: right;
    min-width: 100px;
`;

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    text-align: left;
`;

const StyledTechList = styled.ul`
    padding: 0;
    text-align: left;
    margin-bottom: 10px;
`;

const StyledTech = styled.li`
    display: inline-block;
    margin: 0 10px;
`;

const StyledName = styled(Title)`
    margin-top: 0px;
    margin-bottom: 0px !important;
    display: contents;
`;

const StyledYear = styled(Title)`
    margin-top: 0px;
    margin-bottom: 0px !important;
    text-align: left;
`;

const StyledDescriptionItem = styled.li`
    text-align: left;
`;

const StyledDescription = styled(Text)`
`;

const StyledProjectName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const StyledViewProjBtn = styled(Button)`
    margin: 12px 0;
    cursor: pointer;
    background-color: #B3E5FC;
    width: fit-content;
    &:hover {
        color: #ADD8E6;
    }
`;

const StyledGithub = styled.a`
    display: flex;
    justify-content: end;
    align-items: center;
    margin-left: 5px;
    cursor: pointer;
`;

const StyledLeft = styled.div`
`;
const StyledRight = styled.div`
`;


const ProjectInfo = ({ ...projectInfo }) => {
    const { NAME: name, TECHNOLOGIES: techs, DURATION: duration, START: start, END: end, TYPE: type, DESCRIPTION: descriptions, GITHUB: github, INFO: info = '' } = projectInfo;
    return (
        <StyledProject>
            <StyledLeft>
                <StyledInfo>
                    <StyledProjectName>
                        <Tooltip title={info}>
                            <StyledName level={4}>{name}</StyledName>
                        </Tooltip>
                    </StyledProjectName>
                    <StyledTechList>
                        {techs.map((tech, index) => (
                            <StyledTech><Text key={index} italic>{tech}</Text></StyledTech>
                        ))}
                    </StyledTechList>
                </StyledInfo>
                {!!descriptions.length && (
                    <ul>
                        {descriptions.map((desc, index) =>
                            <StyledDescriptionItem key={index}>
                                <StyledDescription>{desc}</StyledDescription>
                            </StyledDescriptionItem>
                        )}
                    </ul>
                )}
            </StyledLeft>
            <StyledRight>
                <StyledMeta>
                    <span style={{ display: "inline-block" }}>{start}</span> {!!end && <>- <span style={{ display: "inline-block" }}>{end}</span></>}
                </StyledMeta>
                {!!github && (
                    <StyledGithub href={github} target="_blank" rel="noreferrer noopener">
                        <StyledViewProjBtn size="medium" type="primary">
                            <Text>View on <GithubOutlined style={{ fontSize: '20px' }} /></Text>
                        </StyledViewProjBtn>
                    </StyledGithub>
                )}
            </StyledRight>
        </StyledProject>
    );
};

const Content = ({ year }) => (
    <ul>
        {PROJECTS[year].map((projectInfo, index) => (
            <li key={index}><ProjectInfo {...projectInfo} /></li>
        ))}
    </ul>
);

const Header = ({ year }) => (
    <StyledYear level={3}>{year}</StyledYear>
);

export { Header, Content };
