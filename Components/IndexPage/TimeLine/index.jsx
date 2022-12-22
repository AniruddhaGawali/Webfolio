import React from "react";
import style from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

library.add(fas, fab);

const TimeLine = (props) => {
  const { width } = useWindowDimensions();
  return (
    <>
      {/* {console.log(temp)} */}
      <div className={style.wrapper}>
        <div className={style.title}>
          <h2 id="projects">Timeline</h2>
        </div>

        <VerticalTimeline lineColor="var(--color)">
          {props.timelineData.map((item, index) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "whitesmoke",
                  color: "#181a1b",
                  boxShadow: "0 3px 0 var(--pink)",
                  border: "1px solid #ccc",
                }}
                dateClassName={style.date}
                contentArrowStyle={{ borderRight: "7px solid #ccc" }}
                date={item.date}
                iconStyle={{
                  background: "linear-gradient(var(--gradient))",
                  background: "-moz-linear-gradient(var(--gradient))",
                  background: "-webkit-linear-gradient(var(--gradient))",
                  boxShadow: "0 0 0 4px var(--color)",
                  color: "#fff",
                }}
                icon={<FontAwesomeIcon icon={item.icon} />}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                {width > 1170 ? null : (
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.date}
                  </h4>
                )}

                {/* <h4 className="vertical-timeline-elemen
                t-subtitle">
                  Miami, FL
                </h4> */}
                <p>{item.desc}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default TimeLine;
