import { useCallback } from 'react';

import { Layout as AntLayout, Menu, Divider, Avatar, Tooltip, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from "styled-components";
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
    min-width: 367px;
`;

const StyledRight = styled.div`
    display: flex;
    min-width: 300px;
    justify-content: center;
`;

const StyledDivider = styled(Divider)`
    height: auto;
`;

const StyledLogo = styled(Image)`
    height: 45px;
    cursor: pointer;
`;

const Layout = ({ onClick, currTab }) => {
    const handleLogoClick = useCallback(() => {
        onClick(TABS.HOME);
    }, [onClick]);

    return (
        <StyledHeader style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: 'white' }}>
        <StyledLogo src={logo} style={{ height: "45px" }} preview={false} onClick={handleLogoClick} />
        <StyledRight>
            <StyledMenu
                theme="light"
                mode="horizontal"
                selectedKeys={[currTab]}
                items={CENTRAL_TABS.map(tab => ({
                    key: tab,
                    label: TABS_CONFIG[tab].title,
                }))}
                onSelect={({ key }) => onClick(key)}
                style={{ borderBottom: "none" }}
            />
            <StyledDivider type="vertical" />
            <Tooltip title={TABS_CONFIG[TABS.ABOUT_ME].title}>
                <Menu
                    theme="light"
                    mode="horizontal"
                    selectedKeys={[currTab]}
                    items={[{
                        key: TABS.ABOUT_ME,
                        label: <Avatar style={{ backgroundColor: '#0096FF' }} icon={<UserOutlined />} />,
                    }]}
                    style={{ borderBottom: "none" }}
                    onSelect={({ key }) => onClick(key)}
                />
            </Tooltip>
        </StyledRight>
        </StyledHeader>
    );
}


export default Layout;