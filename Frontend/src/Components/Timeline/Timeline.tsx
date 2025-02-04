import React from "react";
// import {
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { motion } from "framer-motion";
import "./Timeline.scss";

// interface TimelineCardProps {
//   timeline: {
//     title: string;
//     date: string;
//     iconBg: string;
//     point?: string; // Assuming 'point' is a string, modify as needed
//   };
//   position?: string;
// }

// const TimelineCard: React.FC<TimelineCardProps> = ({ timeline, position }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5 }}
//   >
//     <VerticalTimelineElement
//       contentArrowStyle={{ borderRight: "7px solid #782a84" }}
//       date={timeline.date}
//       iconStyle={{ background: timeline.iconBg }}
//       icon={<div></div>}
//       position={position}
//     >
//       <div>
//         <h3 className="text-white text-[24px] font-bold">{timeline.title}</h3>
//         <p className="text-secondary text-[16px] font-semibold"></p>
//       </div>
//       <ul className="mt-5 list-disc ml-5 space-y-2">{timeline.point}</ul>
//     </VerticalTimelineElement>
//   </motion.div>
// );

const Timeline: React.FC = () => {
  let items = [
    {
      date: "Feb 3rd",
      event: "Scholarship Awareness Session",
      description: "",
      state: "Virtual",
    },
    {
      date: "Feb 7th",
      event: "Opening Registrations",
      description: "",
      state: "",
    },
    {
      date: "Feb 15th",
      event: "Closing Registrations + Proposal Submissions Ending",
      description: "",
      state: "",
    },
    {
      date: "Feb 22nd",
      event: "Announcing Finalists",
      description: "",
      state: "",
    },
    {
      date: "Mar 02nd",
      event: "Final Hackathon & Award Ceremony",
      description: "",
      state: "Onsite",
    },
  ];

  function timelineItem(
    date: string,
    event: string,
    state: string,
    index: number
  ) {
    console.log(index % 2);
    return (
      <div
        className={`timeline-4 ${index % 2 === 0 ? "left" : "right"}-4`}
        key={index}
      >
        <div
          className={` opacity-90 rounded card gradient-custom${
            index % 2 === 0 ? "-4" : ""
          }`}
        >
          <div className="card-body p-4">
            <i className="fas fa-brain fa-2x mb-3"></i>
            <b>
              <h4 className="text-white">{event}</h4>
            </b>
            <p className="small text-white mb-4">{state}</p>
            <p className="text-white">{date}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="site-section local-bootstrap remove-top-pad"
      id={"timeline"}
    >
      <div className="container py-5" id="timeLineComponentContainor">
        <div
          className="timelineHead"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="shape" id="timeLineComponentShape">
            <h1 className="font-sfont font-semibold tracking-wider">
              <span>Hackaholics 6.0 Timeline</span>
            </h1>
          </div>
        </div>
        <div className="timeLineContainorOuter">
          <div className="timeLineContainor">
            <div className="row py-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="site-section-heading">
                  {/* <h2>
                  <span>Timeline</span>
                </h2> */}
                </div>
              </div>
            </div>
            <div
              className="main-timeline-4 text-white"
              id="timeLineComponentDiv"
            >
              {items.map((item, index) => {
                return timelineItem(item.date, item.event, item.state, index);
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
