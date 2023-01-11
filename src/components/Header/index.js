import styled from "styled-components";
import { TABS_CONFIG } from "../../config/tabs";

const StyledLayout = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30%;
    height: 30px;
`;

const Layout = ({ onClick }) => (
    <StyledLayout>
        {Object.entries(TABS_CONFIG).map(([tab, conf]) => (
            <span key={tab} onClick={() => onClick(tab)}>
                {conf.title}
            </span>
        ))}
    </StyledLayout>
);


export default Layout;