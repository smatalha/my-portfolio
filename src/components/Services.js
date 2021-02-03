// import React from 'react'
// import {
//     FaGithub,
//     FaCircleNotch,
//     FaApple,
//     FaFileVideo,
//     FaSearchDollar,
// } from "react-icons/fa";


// const Services = () => {
//     const [header] = React.useState({
//     mainHeader: "SERVICES",
//     subHeading: "My Services",
//     text:
//         "I'm passionate about what i do. I follow my Dream.",
//     });
//         const [state] = React.useState([
//     {
//         id: 1,
//         icon: <FaGithub className="common_icons" />,
//         heading: "Web Development",
//         text:
//         "Lorem Ipsum is simply dummy text of the printing typesetting\
//         industry. simply dummy",
//     },
//     {
//         id: 2,
//         icon: <FaCircleNotch className="common_icons" />,
//         heading: "Web Design",
//         text:
//         "Lorem Ipsum is simply dummy text of the printing typesetting\
//         industry. simply dummy",
//     },
//     {
//         id: 3,
//         icon: <FaApple className="common_icons" />,
//         heading: "App Devlopment",
//         text:
//         "Lorem Ipsum is simply dummy text of the printing typesetting\
//         industry. simply dummy",
//     },
//     {
//         id: 4,
//         icon: <FaFileVideo className="common_icons" />,
//         heading: "Video Editing",
//         text:
//         "Lorem Ipsum is simply dummy text of the printing typesetting\
//         industry. simply dummy",
//     },
//     {
//         id: 5,
//         icon: <FaSearchDollar className="common_icons" />,
//         heading: "SEO Expert",
//         text:
//         "Lorem Ipsum is simply dummy text of the printing typesetting\
//         industry. simply dummy",
//     },
//     ]);
//     return (
//         <div className="services">
//             <div className="container">
//                 <div className="services_header">
//                     <div className="common">
//                         <h3 className="heading">{header.mainHeader}</h3>
//                         <h1 className="main_header">{header.subHeading}</h1>
//                         <p className="main_context">{header.text}</p>
//                         <div className="common_border"></div>
//                     </div>
//                     <div className="row">
//                         {state.map((info) => (
//                         <div className="col-4">
//                             <div className="services_box">
//                                 {info.icon}
//                                 <div className="services_box_header">{info.heading}</div>
//                                 <div className="services_box_text">
//                                     {info.text}
//                                 </div>
//                             </div>
//                         </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Services;
