import { Modal } from "antd";
import resumePdf from '../../assets/resume.pdf';
import { Document, Page } from 'react-pdf';

const Resume = () => (
    <div>
        <Document file={resumePdf} onLoadError={e => console.log(e)}>
            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={'550'} />
        </Document>
    </div>
);

const ResumePreview = () => (
    <Modal open={false} maskClosable width={610}>
        <Resume />
    </Modal>
)

export default ResumePreview;