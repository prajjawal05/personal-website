import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Header, Content } from './ItemLayout';
import { EDUCATION_TYPE } from './config';

const { Panel } = Collapse;

const StyledCollapse = styled(Collapse)`
    min-width: 80%;
    max-width: 80%;
    background-color: #ffffff;
`;


const Education = () => (
    <>
        <StyledCollapse
            bordered={false}
            defaultActiveKey={['1']}
            //   expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
        >
        <Panel header={<Header type={EDUCATION_TYPE.MS} />} key="1" className="site-collapse-custom-panel">
            <Content type={EDUCATION_TYPE.MS} />
        </Panel>
        <Panel header={<Header type={EDUCATION_TYPE.UNDERGRAD} />} key="2" className="site-collapse-custom-panel">
            <Content type={EDUCATION_TYPE.UNDERGRAD} />
        </Panel>
        </StyledCollapse>
    </>
  );

  export default Education;