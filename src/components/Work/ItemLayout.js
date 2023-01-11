import { Typography, Tooltip } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons';
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

const StyledCompanyName = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledLinkedIn = styled.a`
    display: flex;
    align-items: center;
    margin-left: 5px;
    cursor: pointer;
    &:hover {
        color: #ADD8E6;
    }
`;


const WorkInfo = ({ ...workInfo }) => {
    const { JOB_TITLE: title, COMPANY: cname, LINKEDIN: linkedIn, LOCATION: location, DURATION: duration, PROJECTS: projects } = workInfo; 
    return (
        <StyledProject>
            <StyledProjectMeta>
                <StyledInfo>
                    <StyledName level={4}>{title}</StyledName>
                    <StyledCompanyName>
                        <Text italic>{cname}</Text>
                        {!!linkedIn && (
                            <StyledLinkedIn href={linkedIn} target="_blank" rel="noreferrer noopener">
                                <LinkedinOutlined style={{ fontSize: '16px' }} />
                            </StyledLinkedIn>
                        )}
                    </StyledCompanyName>
                </StyledInfo>
                <StyledMeta>
                    <Text type="secondary">{location}</Text>
                    <Text type="secondary">{duration}</Text>
                </StyledMeta>
            </StyledProjectMeta>
            <ul>
                {projects.map((desc, index) => 
                    <StyledDescriptionItem key={index}>
                        <StyledDescription>{desc}</StyledDescription>
                    </StyledDescriptionItem>
                )}
            </ul>
        </StyledProject>
    );
};

export default WorkInfo;
