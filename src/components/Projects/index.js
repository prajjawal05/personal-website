import { Collapse } from 'antd';
import styled from 'styled-components';
import { Header, Content } from './ItemLayout';
import { PROJECTS } from './config';

const { Panel } = Collapse;

const StyledCollapse = styled(Collapse)`
    /* min-width: 80%;
    max-width: 80%; */
    background-color: #ffffff;
`;


const Projects = () => {
    const years = Object.keys(PROJECTS).sort();
    years.reverse();

    return (
        <>
            <StyledCollapse
                accordion
                bordered={false}
                defaultActiveKey={years[0]}
                className="site-collapse-custom-collapse"
            >
            {years.map(year => (
                <Panel header={<Header year={year} />} key={year}>
                    <Content year={year} />
                </Panel>
            ))}
            </StyledCollapse>
        </>
    );

};

  export default Projects;