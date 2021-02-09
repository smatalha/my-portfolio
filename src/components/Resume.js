

import React from 'react'

const Resume = () => {
    return (
        <div id="resume" className="resume">
            <div className="d-flex justify-content-center my-5">
            <h1>Resume</h1>
            </div>
            <div className="container resume-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>May 2020 - August 2020</h3>
                        <h2>Flatiron School</h2>
                        <h4>Software Engineering</h4>
                        <p>Learned fundamental understanding of CS principles such as Object-Oriented Programming and Data Structures on top of Ruby On Rails , React.js </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2015-2020</h3>
                        <h2>Professional Driver</h2>
                        <h4>Uber/Lyft/Juno/Yellow Taxi</h4>
                        <p> Valid TLC license holder; master routes using app technology, determine customer preferred routes, and build a strong relationship with customers with a sense of urgency, kindness, and safety</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>March 2014 - April 2014</h3>
                        <h2>New York University</h2>
                        <h4>AutoCAD Certification Course</h4>
                        <p> Learned design and drafting software application AutoCAD.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>April -2014 -- Feb-2015</h3>
                        <h2>AutoCAD Draftsman</h2>
                        <h4>NYCB Engineering Group</h4>
                        <p> Conducted on-site survey & field measurement, collaborated with clients regarding project goals and progress. Created conceptual designs, developed and revised CAD drawings, built physical models for client presentations. Presented drawings to the Dept of Buildings for plan examination, reviewed and discussed plans with examiners to secure plan approvals.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2010</h3>
                        <p>Moved To United States Of America</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2012-2013</h3>
                        <h2>Customer Service Associate</h2>
                        <h4>Duane Reade</h4>
                        <p>Engages customers and patients by greeting them and offering assistance with products and services. Resolves customer issues and answers questions to ensure a positive customer experience. Registers sales on assigned cash register, collects cash, provides customers with courteous, fair, friendly, and efficient checkout service. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2002- 2006</h3>
                        <h2>National University of Bangladesh</h2>
                        <h4>Bachelor Of Commerce, Major in Accounting</h4>
                        <p> Learned financial accounting, management accounting, auditing, and taxation. The curriculum also includes intermediate coursework in business law and economics, and general coverage of management theory, and business mathematics and business statistics.</p>
                    </div>
                </div>
                {/* - */}
                {/* <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2014-2015</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet soluta quod temporibus deleniti laboriosam voluptatum nisi illo veritatis consectetur distinctio corporis accusamus porro fugiat, architecto repudiandae iusto animi explicabo. </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Resume;



// import React from 'react'
// import Contact from './Contact'

// const Resume = () => {
//     return (
//         <div>
//             <section id="resume">
//                 <div className="common">
//                     <h1 className="main_header">Resume</h1>
//                     {/* <p className="main_content">{header.text}</p> */}
//                     <div className="common_border"></div>
//                 </div>
//                 <div className="row education">
//                     <div className="col-6">
//                         <div className="three columns header-col">
//                             <h1>
//                                 <span> Education</span>
//                             </h1>
//                         </div>
//                     </div>
//                     <div className="col-6">
//                         <div className="nine columns main-col">
//                             <div className="row item">
//                                 <div className="twelve columns">
//                                     <h3>Flatiron School</h3>
//                                     <p className="info">
//                                         Software Engineering Immersive
//                                         <span>.</span>
//                                         <em className="date">
//                                             Aug
//                                             2020
//                                         </em>
//                                     </p>
//                                     <p>Established fundamental understanding of CS principles such as Object-Oriented Programming and Data Structures</p>
//                                 </div>
//                             </div>
//                             <div className="row item">
//                                 <div className="twelve columns">
//                                     <h3>New York University</h3>
//                                     <p className="info">
//                                         AutoCAD Certification Course
//                                         <span>.</span>
//                                         <em className="date">
//                                             March
//                                             2014
//                                         </em>
//                                     </p>
//                                     <p>Learned design and drafting software application AutoCAD.</p>
//                                 </div>
//                             </div>
//                             <div className="row item">
//                                 <div className="twelve columns">
//                                     <h3>National University of Bangladesh</h3>
//                                     <p className="info">
//                                         Bachelor Of Commerce, Major in Accounting
//                                         <span>.</span>
//                                         <em className="date">
//                                             Dec
//                                             2006
//                                         </em>
//                                     </p>
//                                     <p>Learned financial accounting, management accounting, auditing, and taxation. The curriculum also includes intermediate coursework in business law and economics, and general coverage of management theory, and business mathematics and business statistics.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row work">
//                     <div className="col-6">
//                         <div className="three columns header-col">
//                             <h1>
//                                 <span> Work</span>
//                             </h1>
//                         </div>
//                     </div>
//                     <div className="col-6">
//                         <div className="nine columns main-col">
//                             <div className="row item">
//                                 <div className="twelve columns">
//                                     <h3>Professional Driver</h3>
//                                     <p className="info">
//                                         Uber/Lyft/Juno/Yellow Taxi
//                                         <span>.</span>
//                                         <em className="date">
//                                             Oct
//                                             2015-2020
//                                         </em>
//                                     </p>
//                                     <p>Valid TLC license holder; master routes using app technology, determine customer preferred routes, and build a strong relationship with customers with a sense of urgency, kindness, and safety</p>
//                                 </div>
//                             </div>
//                             <div className="row item">
//                                 <div className="twelve columns">
//                                     <h3>AutoCAD Draftsman</h3>
//                                     <p className="info">
//                                         NYCB Engineering Group
//                                         <span>.</span>
//                                         <em className="date">
//                                             April -2014 --
//                                             Feb-2015
//                                         </em>
//                                     </p>
//                                     <p>● Conducted on-site survey & field measurement, collaborated with clients regarding project goals and progress. <p>
//                                     </p> ● Created conceptual designs, developed and revised CAD drawings, built physical models for client presentations.</p>
//                                     <p>● Presented drawings to the Dept of Buildings for plan examination, reviewed and discussed plans with examiners to secure plan approvals</p>
//                                 </div>
//                             </div>
//                             {/* <div className="row item">
//                                 <div className="twelve columns">
//                                     <h3>Bachelor Of Commerce, Major in Accounting</h3>
//                                     <p className="info">
//                                         Bachelor Of Commerce, Major in Accounting
//                                         <span>.</span>
//                                         <em className="date">
//                                             Dec
//                                             2006
//                                         </em>
//                                     </p>
//                                     <p>Learned financial accounting, management accounting, auditing, and taxation. The curriculum also includes intermediate coursework in business law and economics, and general coverage of management theory, and business mathematics and business statistics.</p>
//                                 </div>
//                             </div> */}
//                         </div>
//                     </div>
//                 </div>
//             <Contact />
//             <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
//             </section>
//         </div>
//     )
// }

// export default Resume







// // import React from 'react'

// // const Resume = () => {
// //     const [header] = React.useState ({ subHeading: "Resume ", text: "Hello World! My name is Md Abu Talha Mian, Please call me Talha.  I'm a recent graduate from the Flatiron School Manhattan Campus, studying Full Stack Development and Software Engineering"});    

// //     const [state] = React.useState ([
// //         {id:1, title: "Name:", text: "Md Abu Talha Mian"},    
// //         {id:2, title: "Email:", text: "sma.talha@gamil.com"},
// //         {id:3, title: "Phone:", text: "+1-347-481-9925"},
// //         {id:4, title: "LinkedIn:", text: "https://www.linkedin.com/in/mdabutalhamian"},
// //     ]);
// //     return (
// //         <div className="resume">    
// //             <div className="container">
// //                 <div className="common">
// //                     <h1 className="main_header">{header.subHeading}</h1>
// //                     {/* <p className="main_content">{header.text}</p> */}
// //                     <div className="common_border"></div>
// //                 </div>
// //                 <div className="row h-650 alignCenter">
// //                     <div className="col-6">
// //                         <div className="title">
// //                             <h1>
// //                                 <span>Education</span>
// //                             </h1>
// //                         </div>
// //                     </div>
// //                     <div className="col-6">
// //                         <div className="resume_info">
// //                             <h1>Flatiron School</h1>
// //                             <h3>Software Engineering Immersive• Aug 2020</h3>
// //                             <div className="resume_info_p1">
// //                                 Established fundamental understanding of CS principles such as Object-Oriented Programming and Data Structures
// //                             </div>
// //                         </div>
// //                         <div className="resume_info">
// //                             <h1>New York University</h1>
// //                             <h3>AutoCAD Certification Course• March 2014</h3>
// //                             <div className="resume_info_p1">
// //                                 Learned design and drafting software application AutoCAD.
// //                             </div>
// //                         </div>
// //                         <div className="resume_info">
// //                             <h1>National University of Bangladesh</h1>
// //                             <h3>Bachelor Of Commerce, Major in Accounting• Dec 2006</h3>
// //                             <div className="resume_info_p1">
// //                                 Learned financial accounting, management accounting, auditing, and taxation. The curriculum also includes intermediate coursework in business law and economics, and general coverage of management theory, and business mathematics and business statistics.
// //                             </div>
// //                         </div>
// //                         {/* <div className="contact_info">
// //                             <div className="row">
// //                                 {state.map(info => (
// //                                 <div className="col-6">    
// //                                     <strong>{info.title}</strong>
// //                                     <p>{info.text}</p>
// //                                 </div>
// //                                 )
// //                                 )
// //                                 }
// //                             </div>
// //                         </div> */}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Resume;
