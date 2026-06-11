import { Container, Row, Col } from 'react-bootstrap'

function Experience() {
    return (
        <section id="experience" className="section experience-section">
            <Container>
                <p className="section-label">Experience</p>
                <h2>ประสบการณ์การทำงาน</h2>

                <Row className="mt-4">
                    <Col lg={12}>
                        <div className="experience-card">
                            <div className="experience-header">
                                <div>
                                    <h4>Teaching Assistant (TA)</h4>
                                    <p className="experience-company">
                                        AI-Powered Automation using n8n Workshop
                                    </p>
                                    <p className="experience-location">
                                        มหาวิทยาลัยเกษตรศาสตร์ บางเขน
                                    </p>
                                </div>

                                <span className="experience-date">พฤษภาคม 2026</span>
                            </div>

                            <div className="experience-content">
                                <p>
                                    ได้ปฏิบัติหน้าที่เป็นผู้ช่วยสอนใน Workshop หัวข้อ
                                    AI-Powered Automation using n8n โดยช่วยดูแลและให้คำแนะนำผู้เข้าร่วม
                                    ระหว่างการทำกิจกรรมแบบ Hands-on
                                </p>

                                <ul>
                                    <li>
                                        ช่วยแนะนำผู้เข้าร่วมในการใช้งาน n8n เพื่อสร้าง Workflow Automation เบื้องต้น
                                    </li>
                                    <li>
                                        ช่วยตรวจสอบและแก้ไขปัญหาเกี่ยวกับ Workflow, การตั้งค่า Node และ Execution Error
                                    </li>
                                    <li>
                                        สนับสนุนผู้สอนในการอธิบายขั้นตอนของ Workshop และช่วยให้ผู้เข้าร่วมสามารถทำตามกิจกรรมได้
                                    </li>
                                    <li>
                                        ได้รับประสบการณ์จริงด้าน Automation Concept, Workflow Testing และ User Support
                                    </li>
                                </ul>
                            </div>

                            <div className="experience-tags">
                                <small>n8n</small>
                                <small>Workflow Automation</small>
                                <small>Teaching Assistant</small>
                                <small>Troubleshooting</small>
                                <small>User Support</small>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Experience