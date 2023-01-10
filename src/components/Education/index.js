import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Header as UndergradHeader, Content as UndergradContent } from './Undergrad';

const { Panel } = Collapse;

const StyledCollapse = styled(Collapse)`
    min-width: 80%;
    max-width: 80%;
`


const Education = () => (
    <StyledCollapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      className="site-collapse-custom-collapse"
    >
      <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
        <p>SBU</p>
      </Panel>
      <Panel header={<UndergradHeader />} key="2" className="site-collapse-custom-panel">
        <UndergradContent />
      </Panel>
    </StyledCollapse>
  );

  export default Education;