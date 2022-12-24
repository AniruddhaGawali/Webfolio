import React from "react";
import style from "./style.module.css";

const Error404 = (props) => {
  React.useEffect(() => {
    document.getElementById("vid").play();
  }, []);

  return (
    <div className={style.wrapper}>
      <video controls autoplay id="vid" className={style.video} loop={true}>
        <source src="/error.mp4" type="video/mp4" />
      </video>
      <div className={`${style.errorTitle} ${style.glitch}`}>
        <span aria-hidden="true">Error 404</span>
        Error 404
        <span aria-hidden="true">Error 404</span>
      </div>
      <div className={`${style.errorText}  ${style.glitch}`}>
        <span>
          {props.msg
            ? props.msg
            : "The page you are looking for does not exist"}
        </span>
        {props.msg ? props.msg : "The page you are looking for does not exist"}
        <span>
          {props.msg
            ? props.msg
            : "The page you are looking for does not exist"}
        </span>
      </div>
    </div>
  );
};

export default Error404;
