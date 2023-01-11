import { Typography } from 'antd';
import { useMemo } from 'react';
import styled from 'styled-components';

import { TABS_CONFIG } from "../../config/tabs";

const { Title } = Typography;

const StyledTitle = styled(Title)`
`;


const Body = ({ currTab }) => {
    const Component = useMemo(() => TABS_CONFIG[currTab].Component, [currTab]);
    return (
        <div className="App">
            <header className="App-header" >
                <StyledTitle level={1}>{TABS_CONFIG[currTab].title}</StyledTitle>
                <Component />
            </header>
        </div>
    );
};


export default Body;