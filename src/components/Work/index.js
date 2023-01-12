import { Collapse, Divider } from 'antd';
import styled from 'styled-components';
import WorkInfo from './ItemLayout';
import { WORKS } from './config';

const StyledWork = styled.div`
    padding-left: 30px;
    padding-right: 18px;
    padding-top: 10px;
`;

const Work = () => {
    return (
        <StyledWork>
            {WORKS.map((work, index) => (
                <>
                    <WorkInfo key={index} {...work} />
                    {index != WORKS.length - 1 && <Divider />}
                </>
            ))}
        </StyledWork>
    );

};

  export default Work;