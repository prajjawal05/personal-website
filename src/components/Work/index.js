import { Collapse } from 'antd';
import styled from 'styled-components';
import WorkInfo from './ItemLayout';
import { WORKS } from './config';

const Projects = () => {
    return (
        <div>
            {WORKS.map((work, index) => (
                <WorkInfo key={index} {...work} />
            ))}
        </div>
    );

};

  export default Projects;