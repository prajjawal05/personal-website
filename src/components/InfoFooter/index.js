import { Layout as AntLayout, Typography } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import styled from 'styled-components';

const { Text } = Typography;
const { Footer: AntFooter } = AntLayout;

const StyledFooter = styled(AntFooter)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Footer = () => (
    <StyledFooter>
        <Text>
          Made with React <HeartTwoTone/>.
        </Text>
        <Text>
          Codebase <a
            className="App-link"
            href="https://github.com/prajjawal05/personal-website"
            target="_blank"
            rel="noopener noreferrer">here</a>.
        </Text>
    </StyledFooter>
);

export default Footer;