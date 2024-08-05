import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/JobTrackerImage.jpg";
import projImg2 from "../assets/img/TodoAppImage.jpg";
import projImg3 from "../assets/img/QuizAppImage.jpg";
import projImg4 from "../assets/img/EcomAppImage.jpg";
import projImg5 from "../assets/img/KafkaAppImage.jpg";
import projImg6 from "../assets/img/ReactiveAppImage.jpg";
import projImg7 from "../assets/img/AsyncWebApp.jpg";
import projImg8 from "../assets/img/AOPAppImage.jpg";
import projImg9 from "../assets/img/OAuthAppImage.jpg";
import projImg10 from "../assets/img/SecurityAppImage.jpg";
import projImg11 from "../assets/img/CreditScoreImage.jpg";
import projImg12 from "../assets/img/ClaimSystemImage.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Credit Score Analysis Tool",
      description: " Description: Automated credit score evaluation platform integrating data frommultiple sources to provide real-time scoring and predictive analytics. Utilized microservices architecture for scalability and efficiency",
      url:"https://github.com/Rahulrgd/Credit-Score-Analysis-Tool",
      imgUrl: projImg11,
    },
    {
      title: "Claims Processing System",
      description: " Description: It is a centralized platform designed to e ciently manage and process insurance claims, incorporating real-time updates and automation to streamline the claims handling process.",
      url:"https://github.com/Rahulrgd/Claims-Processing-System",
      imgUrl: projImg12,
    },
    {
      title: "Job Tracker",
      description: "A singleJob-Tracker is a full-stack application designed to streamline job application management. It allows users to store details about their job applications, track progress, and collaborate effectively.",
      url:"https://github.com/Rahulrgd/Job-Tracker",
      imgUrl: projImg1,
    },
    {
      title: "Todo App",
      description: "Designed an intuitive task management system  using React.js. Seamlessly integrated with a backend application, enhancing productivity",
      url:"https://github.com/Rahulrgd/Spring-Todo-part2",
      imgUrl: projImg2,
    },
    {
      title: "Quiz App",
      description: "MicroQuiz Hub is an application that explores microservices architecture by implementing quiz-related services. It consists of two microservices: 'Question Services' and 'Quiz Services.'",
      url:"https://github.com/Rahulrgd/Micro-Services-Quiz-Question-Example-",
      imgUrl: projImg3,
    },
    {
      title: "E-Commerce Webapp (Microservices Arcitectire)",
      description: "Welcome to the E-Commerce Web Application project! In this repository, we've built a microservices-based application for an online store.",
      url:"https://github.com/Rahulrgd/Microservices---E-Commerce",
      imgUrl: projImg4,
    },
    {
      title: "Sample Kafka Project",
      description: "This project demonstrates how to create a Kafka-based system with two modules: delivery-boy (producer) and end-user (consumer).",
      url:"https://github.com/Rahulrgd/Kafka-Project",
      imgUrl: projImg5,
    },
    {
      title: "Reactive Link",
      description: "This project demonstrates how to build two Spring Boot applications: one using traditional Spring Web and the other using reactive Spring WebFlux. The applications are designed to communicate with each other using WebClient, showcasing asynchronous and non-blocking API calls.",
      url:"https://github.com/Rahulrgd/ReactiveLink",
      imgUrl: projImg6,
    },
    {
      title: "AsyncFlow",
      description: "This reactive web application demonstrates the power of asynchronous programming using Spring WebFlux and R2DBC. By leveraging reactive principles, we achieve non-blocking data retrieval, allowing threads to continue processing other tasks while waiting for responses.",
      url:"https://github.com/Rahulrgd/AsyncFlow",
      imgUrl: projImg7,
    },
    {
      title: "Spring AOP Project",
      description: "This project demonstrates the implementation of Aspect-Oriented Programming (AOP) concepts using Spring AOP. It includes examples of advice types (e.g., @Before, @After, @Around) and pointcut expressions.",
      url:"https://github.com/Rahulrgd/Spring-AOP-Project",
      imgUrl: projImg8,
    },
    {
      title: "OAuth2 With Spring Boot",
      description: "This project demonstrates OAuth 2 authentication using Google APIs. It leverages the oauth2client dependency in Spring Boot.",
      url:"https://github.com/Rahulrgd/OAuth-2-with-SpringBoot",
      imgUrl: projImg9,
    },
    {
      title: "Spring Security Authentication and Autherization",
      description: "This project demonstrates the implementation of security using Spring Boot 3.0 and JSON Web Tokens (JWT). It includes the following features:User registration and login with JWT authentication, Password encryption using BCrypt, Role-based authorization with Spring Security, Customized access denied handling, Logout mechanism, Refresh token",
      url:"https://github.com/Rahulrgd/Spring-Security-Authentication-Authorization",
      imgUrl: projImg10,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br />
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
