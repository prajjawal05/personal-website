import { Typography, Tooltip } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { COMPANY_CONFIGS } from './config';
const { Title, Text } = Typography;

const StyledLayout = styled.div`
    display: flex;
    justify-content: space-between;
`;

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
    ::marker {
        font-size: 0.7em;
        color: black;
    }
`;

const StyledImage = styled.img`
    &:hover {
        background-color: #ADD8E6;
    }
`;

const StyledDescription = styled(Text)`
`;

const StyledCompanyName = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledLink = styled.a`
    display: flex;
    align-items: center;
    margin-left: 5px;
    cursor: pointer;
`;


const WorkInfo = ({ cname, ...workInfo }) => {
    const { JOB_TITLE: title, DURATION: duration, PROJECTS: projects } = workInfo;
    const { WORKEX: workex } = COMPANY_CONFIGS[cname];

    return (
        <StyledProject>
            <StyledProjectMeta>
                <StyledInfo>
                    <StyledName level={4}>{title}</StyledName>
                </StyledInfo>
                {workex.length > 1 && <StyledMeta>
                    <Text type="secondary">{duration}</Text>
                </StyledMeta>
                }
            </StyledProjectMeta>
            <ul style={{ "marginTop": "12px", "marginBottom": "36px" }}>
                {projects.map((desc, index) =>
                    <StyledDescriptionItem key={index}>
                        <StyledDescription>{desc}</StyledDescription>
                    </StyledDescriptionItem>
                )}
            </ul>
        </StyledProject>
    );
};

const CompanyInfo = ({ cname }) => {
    const { NAME: name, LOCATION: location, DURATION: duration, LINK: link, LOGO: logo } = COMPANY_CONFIGS[cname];
    return (
        <StyledLayout>
            <StyledInfo>
                <StyledCompanyName>
                    <StyledName level={3}>{name}</StyledName>
                    {!!link && (
                        <Tooltip title={"Open Page"}>
                            <StyledLink href={link} target="_blank" rel="noreferrer noopener" onClick={e => e.stopPropagation()}>
                                <StyledImage preview={false} src={logo} style={{ height: "20px", width: "20px" }} />
                            </StyledLink>
                        </Tooltip>
                    )}
                </StyledCompanyName>
            </StyledInfo>
            <StyledMeta>
                <Text type="secondary">{location}</Text>
                <Text type="secondary">{duration}</Text>
            </StyledMeta>
        </StyledLayout>
    );
};

export { WorkInfo, CompanyInfo };
