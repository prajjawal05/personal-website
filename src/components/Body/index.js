import { Typography, Layout } from 'antd';
import { useMemo } from 'react';
import styled from 'styled-components';

import { TABS_CONFIG } from "../../config/tabs";

const {Content} = Layout;
const { Title } = Typography;

const StyledTitle = styled(Title)`
    text-align: left;
`;

const StyledContent = styled.div`
`;


const Body = ({ currTab, navigateTo }) => {
    const Component = useMemo(() => TABS_CONFIG[currTab].Component, [currTab]);
    return (
        <Content>
            <div className="App">
                <header className="App-header" >
                    {!!TABS_CONFIG[currTab].header && <StyledTitle level={1}>{TABS_CONFIG[currTab].header}</StyledTitle>}
                    <StyledContent>
                        <Component navigateTo={navigateTo} />
                    </StyledContent>
                </header>
            </div>
        </Content>
    );
};


export default Body;