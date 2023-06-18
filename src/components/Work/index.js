import { Collapse, Divider } from 'antd';
import { Header } from '../Education/ItemLayout';
import styled from 'styled-components';
import { WorkInfo, CompanyInfo } from './ItemLayout';
import { COMPANIES, COMPANY_CONFIGS } from './config';

const { Panel } = Collapse;

const StyledCollapse = styled(Collapse)`
    /* min-width: 80%;
    max-width: 80%; */
    background-color: #ffffff;
`;

const StyledWork = styled.ul`
    padding-left: 30px;
    padding-right: 0px;
    padding-top: 10px;
`;

const Work = () => {
    return (
        <StyledCollapse
            bordered={false}
            defaultActiveKey={['0']}
            //   expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
        >
            {Object.values(COMPANIES).map((cname, index) => {
                console.log(cname, COMPANY_CONFIGS[cname]);
                const { WORKEX } = COMPANY_CONFIGS[cname];
                return (
                    <Panel header={<CompanyInfo cname={cname} />} key={index} className="site-collapse-custom-panel">
                        <StyledWork>
                            {
                                WORKEX.map((work, workInd) => (
                                    <li>
                                        <WorkInfo key={workInd} {...work} cname={cname} />
                                        {workInd != WORKEX.length - 1 && <Divider />}
                                    </li>
                                ))
                            }

                        </StyledWork>
                    </Panel>
                )
            })}
        </StyledCollapse>
    );

};

export default Work;