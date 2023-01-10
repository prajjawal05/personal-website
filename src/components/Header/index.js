import styled from "styled-components";

const StyledLayout = styled.div`
display: flex;
justify-content: space-between;
padding: 0 30%;
height: 30px;
`;

const Layout = () => (
    <StyledLayout>
        <span>Home     </span>
        <span>Education     </span>
        <span>Projects    </span>
        <span>Work Experience     </span>
        <span>Skills      </span>
    </StyledLayout>

);


export default Layout;