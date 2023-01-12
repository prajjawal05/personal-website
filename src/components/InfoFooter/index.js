import { Divider, Layout as AntLayout, Typography } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import styled from 'styled-components';

import { LINKS } from '../../config/links';

const { Text } = Typography;
const { Footer: AntFooter } = AntLayout;

const StyledFooter = styled(AntFooter)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledConnection = styled(Text)`
  display: flex;
  justify-content: center;

`
const LinkedIn = () => (
  <a
    className="App-link"
    href={LINKS.LINKEDIN}
    target="_blank"
    rel="noopener noreferrer">LinkedIn</a>
);

const Github = () => (
  <a
    className="App-link"
    href={LINKS.GITHUB}
    target="_blank"
    rel="noopener noreferrer">Github</a>
);
 
const Footer = () => (
    <StyledFooter style={{ position: 'sticky', bottom: 0, zIndex: 1, width: '100%' }}>
        <Text>
          Made with React <HeartTwoTone/>.
        </Text>
        <Text>
          Connect with me over: &nbsp; <LinkedIn/> <Divider type="vertical" style={{'background-color':'black'}}/> <Github/>
        </Text>
    </StyledFooter>
);

export default Footer;