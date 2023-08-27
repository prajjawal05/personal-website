import { Image, Typography, Divider, Tooltip } from 'antd';
import styled from 'styled-components';
import { SKILLS_CONFIG } from './config';

const { Title } = Typography;

const StyledSkills = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 18px;
    padding-top: 10px;
`;

const StyledLogos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const StyledImage = styled(Image)`
    margin-left: 10px;
    margin-right: 10px;
`;

const Skills = () => (
    <StyledSkills>
        {Object.entries(SKILLS_CONFIG).map(([type, config]) => (
            <div key={type} style={{ marginBottom: "10px" }}>
                <Title level={3} style={{ textAlign: "left" }}>{config.title}</Title>
                <Divider style={{ marginTop: "0px" }} />
                <StyledLogos>
                    {config.stacks.map(({ name, logo }) => (
                        <Tooltip title={name}>
                            <StyledImage preview={false} src={logo} style={{ height: "40px", width: "40px", marginBottom: "10px" }} />
                        </Tooltip>
                    ))}
                </StyledLogos>
            </div>
        ))}
    </StyledSkills>
);

export default Skills;

// menu active item
// change resume link
// preview resume
// resume download