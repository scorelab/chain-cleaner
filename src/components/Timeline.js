import React, {Component} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class HeistTimeline extends Component {
    render() {
        return (
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<i className="fa fa-exclamation-triangle fa-2x" style={{marginLeft:"15px", marginTop:"15px"}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<i className="fa fa-exclamation-triangle fa-2x" style={{marginLeft:"15px", marginTop:"15px"}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<i className="fa fa-exclamation-triangle fa-2x" style={{marginLeft:"15px", marginTop:"15px"}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<i className="fa fa-exclamation-triangle fa-2x" style={{marginLeft:"15px", marginTop:"15px"}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    icon={<i className="fa fa-exclamation-triangle fa-2x" style={{marginLeft:"15px", marginTop:"15px"}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social
                        Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                        Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    icon={<i className="fa fa-exclamation-triangle fa-2x" style={{marginLeft:"15px", marginTop:"15px"}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    icon={<i className="fa fa-exclamation-triangle fa-2x" style={{marginLeft:"15px", marginTop:"15px"}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media
                        Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        );
    }
}

// const authCondition = (authUser) => !!authUser;
export default HeistTimeline;
