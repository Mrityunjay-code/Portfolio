import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/final Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `https://drive.google.com/file/d/1xNBwJZ3e3uy24_lEM7tJBX83OwFoahH0/view?usp=share_link/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
//   "https://drive.google.com/file/d/1xNBwJZ3e3uy24_lEM7tJBX83OwFoahH0/view?usp=share_link";

// function ResumeNew() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>

//         <Row className="resume">
//           <Document file={resumeLink} className="d-flex justify-content-center">
//             <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;
pdfjs.GlobalWorkerOptions.workerSrc = `https://drive.google.com/file/d/1xNBwJZ3e3uy24_lEM7tJBX83OwFoahH0/view?usp=share_link/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/file/d/1xNBwJZ3e3uy24_lEM7tJBX83OwFoahH0/view?usp=share_link";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div>
          <Container fluid className="resume-section">
            <Particle />
           <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
            </Row>
            <br/>
            <p className="para"> <strong className="purple">Statement of Originality:</strong> A paragraph stating that this is your work and that it is confidential. It should also indicate if any parts of the portfolio should not be copied.<br/>
               <strong className="purple">Work Philosophy:</strong> A brief description of your beliefs about yourself and the industry you hope to enter.<br/>
               <strong className="purple">Resume:</strong> An overview of your skills and work experience. You may also choose to include documentation of your certifications, diplomas, degrees, awards, professional memberships, or community service experiences.<br/>
               <strong className="purple">Work samples:</strong>  When selecting items for your portfolio, consider what work will best demonstrate your skills, competencies, and achievements, especially in relation to the type of work you’d be doing for this potential employer.<br/>
              <strong className="purple">Works in Progress:</strong>  List career-related projects or activities you are currently working on that would add to your list of skills and qualifications for that career field.<br/>
               <strong className="purple">Academic Plan of Study:</strong> You can include a copy of your transcript which includes the classes you have taken and grades you have earned in those classes, as well as a listing of those classes you plan to take.<br/>
              <strong className="purple">References:</strong> A list of three to five people who can verify your professional qualifications. Professional references may include faculty members, internship supervisors, employment supervisors and supervisors of other activities such as community service projects.</p>
   
            </Container>
            </div>
           
        
    
  )
}

export default ResumeNew

