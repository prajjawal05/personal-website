import { useEffect, useState } from 'react';

import { Layout as AntLayout, Menu, Image, Button } from 'antd';
import styled from "styled-components";
import { Link } from "react-scroll";
import logo from '../../assets/logo.png';
import { TABS_CONFIG, CENTRAL_TABS, TABS } from "../../config/tabs";
import { isElementInView } from '../../utils';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
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
    // min-width: 420px;
`;

const StyledRight = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-end;
`;


const StyledLogo = styled(Image)`
    height: 45px;
    cursor: pointer;
`;

const Layout = () => {
    const [activeTab, setActiveTab] = useState(TABS.HOME);
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            const active = Object.keys(TABS_CONFIG).findLast(isElementInView);
            setActiveTab(active);
        }, [])
    });

    return (
        <StyledHeader style={{
            position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: '#f5f5f5',
            paddingRight: "0px"
        }}>
            <Link activeClass="active"
                to={TABS.HOME}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <StyledLogo src={logo} style={{ height: "45px", width: "auto" }} preview={false} />
            </Link>
            <StyledRight>
                <Button type="primary" onClick={toggleCollapsed} style={{ width: "64px", height: "64px", borderRadius: "0px" }}>
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                {!collapsed && <StyledMenu
                    theme="light"
                    // mode="horizontal"
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={CENTRAL_TABS.map(tab => ({
                        key: tab,
                        label: (
                            <Link activeClass="active"
                                to={tab}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <span>{TABS_CONFIG[tab].menuTitle || TABS_CONFIG[tab].title}</span>
                            </Link>
                        ),
                    }))}
                    selectedKeys={[activeTab]}
                    style={{ borderBottom: "none", backgroundColor: "#f5f5f5" }}
                />}
            </StyledRight>
        </StyledHeader>
    );
}


export default Layout;