import { Container, Row, Col } from 'react-bootstrap'

function About() {
    return (
        <section id="about" className="section about-section">
            <Container>
                <Row className="align-items-start g-5">
                    <Col lg={6}>
                        <p className="section-label">เกี่ยวกับฉัน</p>

                        <h2>
                            ผมเป็นนักศึกษา Computer Science ที่กำลังพัฒนาทักษะด้าน
                            Software Development, Data, AI และ Automation
                        </h2>

                        <p>
                            ปัจจุบันผมกำลังศึกษาในระดับปริญญาตรี สาขาวิทยาการคอมพิวเตอร์
                            และนวัตกรรมการพัฒนาซอฟต์แวร์ มหาวิทยาลัยศรีปทุม โดยมีพื้นฐานด้าน
                            Full-Stack Development, System Design, Front-end และ Back-end
                            Development รวมถึง Data Analysis, AI Model Development, Model
                            Training และ Workflow Automation
                        </p>

                        <p>
                            ผมชอบเรียนรู้การทำงานของ Software System การวิเคราะห์ปัญหา
                            การออกแบบแนวทางแก้ไขที่ใช้งานได้จริง และการพัฒนาแอปพลิเคชันให้ดีขึ้น
                            ผ่านการเขียนโปรแกรม การทดสอบ และการเรียนรู้อย่างต่อเนื่อง
                        </p>
                    </Col>

                    <Col lg={6}>
                        <div className="education-box">
                            <p className="education-label">การศึกษา</p>

                            <div className="education-item">
                                <div>
                                    <h5>วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์</h5>
                                    <p>มหาวิทยาลัยศรีปทุม</p>
                                    <small>เกรดเฉลี่ยปัจจุบัน: 3.93</small>
                                </div>
                                <span>2023 - ปัจจุบัน</span>
                            </div>

                            <div className="education-item">
                                <div>
                                    <h5>แผนการเรียน English-Mathematics Program</h5>
                                    <p>โรงเรียนสมุทรปราการ</p>
                                    <small>เกรดเฉลี่ย: 3.10</small>
                                </div>
                                <span>2020 - 2023</span>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* <Row className="mt-5">
                    <Col lg={12}>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h3>3+</h3>
                                <p>Projects Completed</p>
                            </div>

                            <div className="stat-card">
                                <h3>3.93</h3>
                                <p>Current GPX</p>
                            </div>

                            <div className="stat-card">
                                <h3>2026</h3>
                                <p>TA Workshop Experience</p>
                            </div>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </section>
    )
}

export default About