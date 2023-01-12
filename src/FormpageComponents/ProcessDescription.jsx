import React from "react";
import "./Formpage.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ProcessDescription = () => (
  <div id="process-container">
    <h2>The Process</h2>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Application Received
        </h3>
        <p>
          Nothing to do! Your application has been received and is under review
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Meeting</h3>
        <p>
          Our team will reach out to set up a short meeting to review details
          and get to know you!
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Mentorship</h3>

        <p>
          If you signed up for mentorship, hang tight while we match you with an
          alumni! In the meantime feel free to attend one of the networking
          events
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Alumni</h3>

        <p>
          If you've signed up to just join the alumni network and connect with
          similar interests, hang tight while we organize your information!
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">First Connections</h3>
        <h4 className="vertical-timeline-element-subtitle">Welcome!</h4>
        <p>
          Now that you have made your first connections, whether through the
          mentorship or the alumni group, you are part of the growing DKC alumni
          network{" "}
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement />
    </VerticalTimeline>
  </div>
);

export default ProcessDescription;
