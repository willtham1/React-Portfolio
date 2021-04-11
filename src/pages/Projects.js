// import React, { useState } from "react";
// import "./style.css";

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <>
//       <Jumbotron>
//         <Container>
//           <Row>
//             <Col size="md-12">
//               <h1>Full Stack Projects</h1>
//               <p>
//                 All projects display the use of several coding languages for
//                 example: NodeJS, JavaScript, HTML, CSS, React, SQL, MongoDB.
//                 Feel free to take a look at some of my projects and reach out with
//                 any questions. Click the button below to see any of the live demo!
//               </p>
//             </Col>
//           </Row>

//           <Row>
//             <Contact />
//           </Row>
//         </Container>
//       </Jumbotron>

//       <Container>
//         <Row>
//           <Col size="md-12">
//             <Carousel activeIndex={index} onSelect={handleSelect}>
//               <Carousel.Item>
//                 <Image
//                   className="d-block w-100"
//                   src={Project1}
//                   alt="WeatherDashboard"
//                 />
//                 <Carousel.Caption>
//                   <h3>Weather Dashboard Demo</h3>
//                   <Button
//                     variant="outline-dark"
//                     href=""
//                     target="_blank"
//                   >
//                     Click
//                   </Button>
//                 </Carousel.Caption>
//               </Carousel.Item>

//               <Carousel.Item>
//                 <Image
//                   className="d-block w-100"
//                   src={Project2}
//                   alt="WorkDay Scheduler"
//                 />
//                 <Carousel.Caption>
//                   <h3>WorkDay Scheduler Demo</h3>
//                   <Button
//                     variant="outline-dark"
//                     href=""
//                     target="_blank"
//                   >
//                     Click
//                   </Button>
//                 </Carousel.Caption>
//               </Carousel.Item>

//               <Carousel.Item>
//                 <Image
//                   className="d-block w-100"
//                   src={Project3}
//                   alt="Password Generator"
//                 />
//                 <Carousel.Caption>
//                   <h3>Password Generator Demo</h3>
//                   <Button
//                     variant="outline-dark"
//                     href=""
//                     target="_blank"
//                   >
//                     Click
//                   </Button>
//                 </Carousel.Caption>
//               </Carousel.Item>

//               <Carousel.Item>
//                 <Image
//                   className="d-block w-100"
//                   src={Project4}
//                   alt="Note Taker"
//                 />
//                 <Carousel.Caption>
//                   <h3>Note Taker Demo</h3>
//                   <Button
//                     variant="outline-dark"
//                     href=""
//                     target="_blank"
//                   >
//                     Click
//                   </Button>
//                 </Carousel.Caption>
//               </Carousel.Item>

//               <Carousel.Item>
//                 <Image
//                   className="d-block w-100"
//                   src={Project5}
//                   alt="Fitness Tracker"
//                 />
//                 <Carousel.Caption>
//                   <h3>Fitness Tracker Demo</h3>
//                   <Button
//                     variant="outline-dark"
//                     href=""
//                     target="_blank"
//                   >
//                     Click
//                   </Button>
//                 </Carousel.Caption>
//               </Carousel.Item>

//               <Carousel.Item>
//                 <Image
//                   className="d-block w-100"
//                   src={Project6}
//                   alt="Budget Tracker"
//                 />
//                 <Carousel.Caption>
//                   <h3>Budget Tracker Demo</h3>
//                   <Button
//                     variant="outline-dark"
//                     href=""
//                     target="_blank"
//                   >
//                     Click
//                   </Button>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default ControlledCarousel;