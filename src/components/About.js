import React from 'react'

const About = () => {
    const [header] = React.useState ({ subHeading: "About Me", text: "Hello World! My name is Md Abu Talha Mian, Please call me Talha.  I'm a recent graduate from the Flatiron School Manhattan Campus, studying Full Stack Development and Software Engineering"});

    const [state] = React.useState ([
        {id:1, title: "Name:", text: "Md Abu Talha Mian"},
        {id:2, title: "Email:", text: "sma.talha@gamil.com"},
        {id:3, title: "Phone:", text: "+1-347-481-9925"},
        {id:4, title: "LinkedIn:", text: "https://www.linkedin.com/in/mdabutalhamian"},
    ]);
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="main_header">{header.subHeading}</h1>
                    <p className="main_context">{header.text}</p>
                    <div className="common_border"></div>
                </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about_img">
                            <img src="/images/talha.png" alt="talha"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about_info">
                            <h1>Hi There</h1>
                            <div className="about_info_p1">
                                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis
                            </div>
                            <div className="about_info_p2">
                                nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit
                            </div>
                        </div>
                        <div className="contact_info">
                            <div className="row">
                                {state.map(info => (
                                <div className="col-6">
                                    <strong>{info.title}</strong>
                                    <p>{info.text}</p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
