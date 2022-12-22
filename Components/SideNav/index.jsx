import React from "react";
import style from "./style.module.css";

//import icons
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const SideNav = (props) => {
  if (props.navData === null) {
    return <></>;
  } else {
    return (
      <>
        <div className={style.sideNav}>
          <div
            style={{ background: "black", height: "20px", borderRadius: "5px" }}
          >
            <BsFillArrowLeftSquareFill className={style.openArrow} />
          </div>
          <div
            style={{
              background: "var(--color)",
              padding: "5px 10px",
              borderRadius: "5px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: " 0 0 10px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            {props.navData.map((item, index) => {
              return (
                <div
                  className={style.sideNav__item}
                  key={index}
                  title={item.title}
                >
                  <a href={item.tag} className={style.sideNavIcon}>
                    {item.icon}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default SideNav;
