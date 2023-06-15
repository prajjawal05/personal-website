import { useEffect, useState } from 'react';

import { Layout as AntLayout, Menu, Image } from 'antd';
import styled from "styled-components";
import { Link } from "react-scroll";
import logo from '../../assets/logo.png';
import { TABS_CONFIG, CENTRAL_TABS, TABS } from "../../config/tabs";
import { isElementInView } from '../../utils';

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
    const [activeTab, setActiveTab] = useState(TABS.HOME);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            const active = Object.keys(TABS_CONFIG).findLast(isElementInView);
            setActiveTab(active);
        }, [])
    });
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
                    selectedKeys={[activeTab]}
                    style={{ borderBottom: "none", backgroundColor: "#f5f5f5" }}
                />
            </StyledRight>
        </StyledHeader>
    );
}


export default Layout;