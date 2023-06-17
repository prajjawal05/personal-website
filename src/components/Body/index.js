import { Typography, Layout } from 'antd';
import { useMemo } from 'react';
import styled from 'styled-components';

import { UpOutlined } from "@ant-design/icons";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";

import { TABS_CONFIG, TABS } from "../../config/tabs";

const { Content } = Layout;
const { Title } = Typography;

const StyledTitle = styled(Title)`
    text-align: left;
`;

const StyledContent = styled(Content)`
    margin-top: 48px;
    padding: 0 75px 50px 50px;
`;


const StyledMore = styled(Title)`
    letter-spacing: 2px;
    white-space: nowrap;
    padding-left: 50px;
    cursor: pointer;
    color: black;
    &: hover {
        color: blue;
    }
`;


const Body = () => {
    return (
        <div className="App">
            <header>
                {useMemo(() => Object.entries(TABS_CONFIG).map(([tab, { header, Component }]) => (
                    <StyledContent id={tab}>
                        {!!header && <StyledTitle level={1}>{header}</StyledTitle>}
                        <Fade>
                            <Component />
                        </Fade>
                    </StyledContent>
                )), [])}

                <Link
                    activeClass="active"
                    to={TABS.HOME}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <StyledMore level={4} style={{ textAlign: "center" }}>
                        <Jump forever animation="fromBottom" maxHeight={5} duration={1500}>
                            <UpOutlined />
                        </Jump>
                        <br />
                        Go back to top
                    </StyledMore>
                </Link>
            </header>
        </div>
    );
};


export default Body;