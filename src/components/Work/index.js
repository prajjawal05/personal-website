import { Collapse } from 'antd';
import styled from 'styled-components';
import WorkInfo from './ItemLayout';
import { WORKS } from './config';

const Projects = () => {

    return (
        <>
            {WORKS.map((work, index) => (
                <WorkInfo key={index} {...work} />
            ))}
        </>
    );

};

  export default Projects;