import { Image, Typography, Divider, Tooltip } from 'antd';
import styled from 'styled-components';

import Socials from "../Socials"

const { Title } = Typography;

const StyledConc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 400px;
`;

const Conclusion = () => (
    <StyledConc>
        <Title level={2}>Want to have a chat?</Title>
        <br />
        <Socials />
    </StyledConc>
);

export default Conclusion;