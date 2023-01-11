import { Typography } from 'antd';
import { useMemo } from 'react';
import styled from 'styled-components';

import { TABS_CONFIG } from "../../config/tabs";

const { Title } = Typography;

const StyledTitle = styled(Title)`
    text-align: left;
`;

const StyledContent = styled.div`
    padding: 15px 48px 0px 24px;
`;


const Body = ({ currTab }) => {
    const Component = useMemo(() => TABS_CONFIG[currTab].Component, [currTab]);
    return (
        <div className="App">
            <header className="App-header" >
                <StyledTitle level={1}>{TABS_CONFIG[currTab].title}</StyledTitle>
                <StyledContent>
                    <Component />
                </StyledContent>
            </header>
        </div>
    );
};


export default Body;