import { Collapse, Divider } from 'antd';
import styled from 'styled-components';
import WorkInfo from './ItemLayout';
import { WORKS } from './config';

const Projects = () => {
    return (
        <div>
            {WORKS.map((work, index) => (
                <>
                    <WorkInfo key={index} {...work} />
                    {index != WORKS.length - 1 && <Divider />}
                </>
            ))}
        </div>
    );

};

  export default Projects;