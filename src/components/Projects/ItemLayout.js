import { Typography, Tooltip } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { PROJECTS } from './config';

const { Title, Text } = Typography;

const StyledProject = styled.div`
    margin-bottom: 20px;    
`;


const StyledProjectMeta = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledMeta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    text-align: right;
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
`;

const StyledGithub = styled.a`
    display: flex;
    align-items: center;
    margin-left: 5px;
    cursor: pointer;
    &:hover {
        color: #ADD8E6;
    }
`;


const ProjectInfo = ({ ...projectInfo }) => {
    const { NAME: name, TECHNOLOGIES: techs, DURATION: duration, TYPE: type, DESCRIPTION: descriptions, GITHUB: github, INFO: info = '' } = projectInfo; 
    return (
        <StyledProject>
            <StyledProjectMeta>
                <StyledInfo>
                    <StyledProjectName>
                        <Tooltip title={info}>
                            <StyledName level={4}>{name}</StyledName>
                        </Tooltip>
                        {!!github && (
                            <StyledGithub href={github} target="_blank" rel="noreferrer noopener">
                                <GithubOutlined />
                            </StyledGithub>
                        )}
                    </StyledProjectName>
                    <StyledTechList>
                        {techs.map((tech, index) => (
                            <StyledTech><Text key={index} italic>{tech}</Text></StyledTech>
                        ))}
                    </StyledTechList>
                </StyledInfo>
                <StyledMeta>
                    <Text type="secondary">{type}</Text>
                    <Text type="secondary">{duration}</Text>
                </StyledMeta>
            </StyledProjectMeta>
            {!!descriptions.length && (
                <ul>
                    {descriptions.map((desc, index) => 
                        <StyledDescriptionItem key={index}>
                            <StyledDescription>{desc}</StyledDescription>
                        </StyledDescriptionItem>
                    )}
                </ul>
            )}
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
