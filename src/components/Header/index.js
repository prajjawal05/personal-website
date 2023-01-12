import { Layout as AntLayout, Menu } from 'antd';
import styled from "styled-components";

import { TABS, TABS_CONFIG } from "../../config/tabs";

const { Header } = AntLayout;

const StyledMenu = styled(Menu)`
    justify-content: center;
    .ant-menu-item {
        font-size: 18px;
    }
`;

const Layout = ({ onClick }) => (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <StyledMenu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={TABS.HOME}
        items={Object.entries(TABS_CONFIG).map(([tab, conf]) => ({
          key: tab,
          label: conf.title,
        }))}
        onSelect={({ key }) => onClick(key)}
      />
    </Header>
//     <StyledLayout>
//         {Object.entries(TABS_CONFIG).map(([tab, conf]) => (
//             <span key={tab} onClick={() => onClick(tab)}>
//                 {conf.title}
//             </span>
//         ))}
//     </StyledLayout>
);


export default Layout;