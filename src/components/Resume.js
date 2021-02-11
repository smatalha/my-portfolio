import React from 'react'

const Resume = () => {
    return (
        <div id="resume" className="resume">
            <div className="d-flex justify-content-center my-5">
            <h1>Resume</h1>
            </div>
            <div className="container resume-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>August 2020 - Present</h3>
                        <h2>Freelance Web Developer</h2>
                        <h4>Ruby on Rails / React.js</h4>
                        <p> I do design, code and modify websites, from layout to function and according to a client's specifications.</p>
                    </div>
                </div>
                {/* - */}
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
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2010</h3>
                        <h2>Moved to United States of America</h2>
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
            </div>
        </div>
    )
}

export default Resume;