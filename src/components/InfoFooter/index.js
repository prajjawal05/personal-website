import { Divider, Layout as AntLayout, Typography } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import styled from 'styled-components';

import { LINKS } from '../../config/links';

const { Text } = Typography;
const { Footer: AntFooter } = AntLayout;

const StyledFooter = styled(AntFooter)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Email = () => (
  <a
    className="App-link"
    href={LINKS.EMAIL}
    style={{ cursor: "pointer" }}
    target="_blank"
    rel="noopener noreferrer">here</a>
);

const Footer = () => (
  <StyledFooter style={{ position: 'sticky', bottom: 0, zIndex: 1, width: '100%', height: '50px', paddingTop: '15px' }}>
    <Text>
      Email me <Email />
    </Text>
  </StyledFooter>
);

export default Footer;