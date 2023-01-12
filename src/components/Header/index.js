import { Layout as AntLayout, Menu, Divider, Avatar, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from "styled-components";

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

const Layout = ({ onClick, currTab }) => (
    <StyledHeader style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: 'white' }}>
      <span>Prajjawal Agarwal</span>
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
        <Tooltip title={"About Me"}>
            <Menu
                theme="light"
                mode="horizontal"
                selectedKeys={[currTab]}
                items={[{
                    key: TABS.ABOUT_ME,
                    label: <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />,
                }]}
                style={{ borderBottom: "none" }}
                onSelect={({ key }) => onClick(key)}
            />
        </Tooltip>
      </StyledRight>
    </StyledHeader>
);


export default Layout;