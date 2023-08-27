import { useContext } from 'react';
import { Layout as AntLayout, Typography } from 'antd';
import styled from 'styled-components';

import { LINKS } from '../../config/links';
import { ScreenContext } from "../../config/context";

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

const Footer = () => {
  const width = useContext(ScreenContext);
  const isMobile = width < 700;
  return !isMobile && (
    <StyledFooter style={{ position: 'sticky', bottom: 0, zIndex: 1, width: '100%', height: '50px', paddingTop: '15px' }}>
      <Text>
        Email me <Email />
      </Text>
    </StyledFooter>
  )
};

export default Footer;