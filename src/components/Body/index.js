import { Typography, Layout } from 'antd';
import { useMemo } from 'react';
import styled from 'styled-components';

import Fade from "react-reveal/Fade";

import { TABS_CONFIG } from "../../config/tabs";

const { Content } = Layout;
const { Title } = Typography;

const StyledTitle = styled(Title)`
    text-align: left;
`;

const StyledContent = styled(Fade)`
`;

const Body = () => {
    // const Component = useMemo(() => TABS_CONFIG[currTab].Component, [currTab]);
    return useMemo(() => Object.entries(TABS_CONFIG).map(([tab, { header, Component }]) => (
        <Content id={tab}>
            <div className="App">
                <header className="App-header" >
                    {!!header && <StyledTitle level={1}>{header}</StyledTitle>}
                    <StyledContent>
                        <Component />
                    </StyledContent>
                </header>
            </div>
        </Content>
    )), []);
};


export default Body;