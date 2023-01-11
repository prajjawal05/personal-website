import { Layout as AntLayout, Menu } from 'antd';
import styled from "styled-components";

import { TABS, TABS_CONFIG } from "../../config/tabs";

const { Header } = AntLayout;

const StyledLayout = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30%;
    height: 30px;
`;

const Layout = ({ onClick }) => (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <Menu
        theme="dark"
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