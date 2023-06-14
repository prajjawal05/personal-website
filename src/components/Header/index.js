import { useCallback } from 'react';

import { Layout as AntLayout, Menu, Image } from 'antd';
import styled from "styled-components";
import { Link } from "react-scroll";
import logo from '../../assets/logo.png';
import { TABS_CONFIG, CENTRAL_TABS, TABS } from "../../config/tabs";

const { Header } = AntLayout;

const StyledHeader = styled(Header)`
    display: flex;
    justify-content: space-between;
    .ant-menu-item {
        font-size: 14px;
    }
`;

const StyledMenu = styled(Menu)`
    justify-content: flex-end;
    min-width: 420px;
`;

const StyledRight = styled.div`
    display: flex;
    min-width: 300px;
    justify-content: center;
`;


const StyledLogo = styled(Image)`
    height: 45px;
    cursor: pointer;
`;

const Layout = () => {
    return (
        <StyledHeader style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: '#f5f5f5' }}>
            <Link activeClass="active"
                to={TABS.HOME}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <StyledLogo src={logo} style={{ height: "45px", width: "auto" }} preview={false} />
            </Link>
            <StyledRight>
                <StyledMenu
                    theme="light"
                    mode="horizontal"
                    items={CENTRAL_TABS.map(tab => ({
                        key: tab,
                        label: (
                            <Link activeClass="active"
                                to={tab}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                {TABS_CONFIG[tab].menuTitle || TABS_CONFIG[tab].title}
                            </Link>
                        ),
                    }))}
                    style={{ borderBottom: "none", backgroundColor: "#f5f5f5" }}
                />
                {/* <StyledDivider type="vertical" />
                <Tooltip title={TABS_CONFIG[TABS.ABOUT_ME].title}>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        items={[{
                            key: TABS.ABOUT_ME,
                            label: (
                                <Link activeClass="active"
                                    to={TABS.ABOUT_ME}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>

                                </Link>
                            ),
                        }]}
                        style={{ borderBottom: "none", backgroundColor: "#f5f5f5" }}
                        onSelect={({ key }) => navigateTo(key)}
                    />
                </Tooltip> */}
            </StyledRight>
        </StyledHeader>
    );
}


export default Layout;