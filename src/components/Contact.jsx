import { Container, Row, Col } from 'react-bootstrap'

function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <Container>
                <Row className="align-items-center g-4">
                    <Col lg={7}>
                        <p className="section-label">Contact</p>
                        <h2>ติดต่อร่วมงานกับผม</h2>
                        <p>
                            ปัจจุบันผมกำลังมองหาโอกาสฝึกงาน
                            หากสนใจสอบถามข้อมูลเพิ่มเติม หรือต้องการพูดคุยเกี่ยวกับผลงาน
                            สามารถติดต่อผมได้ตามช่องทางด้านข้าง
                        </p>
                    </Col>

                    <Col lg={5}>
                        <div className="contact-card">
                            <p>
                                <strong>Phone:</strong> 085-108-9843
                            </p>
                            <p>
                                <strong>Email:</strong> earthcraftchallenge@gmail.com
                            </p>
                            <p>
                                <strong>Address:</strong> อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ 10280
                            </p>
                            <p>
                                <strong>GitHub:</strong> github.com/Rittiporn12
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact