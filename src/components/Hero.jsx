import { useEffect, useState } from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'

import profile from '../assets/profile.png'



function Hero() {

    const words = [

        'นักศึกษา Computer Science',

        'Full-Stack Developer',

        'Software Developer',

        'AI & LLM Model Training',

        'n8n Automation Developer',

        'Software Quality Learner'

    ]



    const [text, setText] = useState('')

    const [wordIndex, setWordIndex] = useState(0)

    const [isDeleting, setIsDeleting] = useState(false)



    useEffect(() => {

        const currentWord = words[wordIndex]

        const speed = isDeleting ? 45 : 85



        const timeout = setTimeout(() => {

            if (!isDeleting) {

                setText(currentWord.substring(0, text.length + 1))



                if (text === currentWord) {

                    setTimeout(() => setIsDeleting(true), 1200)

                }

            } else {

                setText(currentWord.substring(0, text.length - 1))



                if (text === '') {

                    setIsDeleting(false)

                    setWordIndex((prevIndex) => (prevIndex + 1) % words.length)

                }

            }

        }, speed)



        return () => clearTimeout(timeout)

    }, [text, isDeleting, wordIndex])



    return (

        <section id="home" className="hero-section">

            <Container>

                <Row className="align-items-center hero-row">

                    <Col xl={5} lg={5} md={12} className="hero-left">

                        <div className="hero-line"></div>



                        <p className="hero-label">Portfolio | Full-Stack Developer</p>



                        <h1>

                            Hi, I'm Rittiporn<br />

                            Software Developer

                        </h1>



                        <h3 className="typing-text">

                            {text}

                            <span className="typing-cursor">|</span>

                        </h3>



                        <p className="hero-description">

                            ผมเป็นนักศึกษา Computer Science และ Software Development ที่สนใจด้าน

                            Full-Stack Development, Front-end, Back-end, Data Analysis,

                            AI Model Development, Workflow Automation และการพัฒนา Software Quality

                            ให้ระบบใช้งานได้จริงและมีประสิทธิภาพมากขึ้น

                        </p>



                        <div className="hero-buttons">

                            <Button href="#projects" className="primary-btn">

                                ดูผลงาน

                            </Button>



                            <Button href="#contact" className="secondary-btn">

                                ติดต่อฉัน

                            </Button>

                        </div>

                    </Col>



                    <Col xl={4} lg={4} md={12} className="hero-image-col">

                        <div className="profile-wrapper">

                            <img src={profile} alt="Rittiporn Phungphat" className="profile-img" />

                        </div>

                    </Col>



                    <Col xl={3} lg={3} md={12} className="hero-right">

                        <div className="side-info">

                            <h5>ABOUT ME</h5>

                            <p>

                                ผมชอบเรียนรู้การทำงานของ Software System ตั้งแต่การออกแบบระบบ,

                                การพัฒนา Web Application, การวิเคราะห์ข้อมูล ไปจนถึงการปรับปรุง

                                User Experience ให้ใช้งานง่ายและตอบโจทย์ผู้ใช้จริง

                            </p>

                            <a href="#about">

                                Learn more <i className="bi bi-arrow-right"></i>

                            </a>

                        </div>



                        <div className="side-info">

                            <h5>MY WORK</h5>

                            <p>

                                ผลงานของผมมีทั้ง Full-Stack Web Application, AI Chatbot,

                                Data Preparation, API Integration, Software Testing

                                และ Automation Workflow ด้วย n8n

                            </p>

                            <a href="#projects">

                                Browse portfolio <i className="bi bi-arrow-right"></i>

                            </a>

                        </div>



                        <div className="social-links">

                            <a href="https://github.com/Rittiporn12" target="_blank" rel="noreferrer">

                                <i className="bi bi-github"></i>

                            </a>

                            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">

                                <i className="bi bi-linkedin"></i>

                            </a>

                            <a href="mailto:earthcraftchallenge@gmail.com">

                                <i className="bi bi-envelope-fill"></i>

                            </a>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

    )

}



export default Hero