import React from "react";

const Facebook: React.FC<IconProps> = props => {
  const { width = "50px", height = "50px" } = props;
  return (
    <div className="my-icons icon-facebook" css={{ width, height }}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100">
        <g id="facebook-icon">
          <path d="M85,26.5V0H25v36.5H12.5v27H25V100h30V63.5h30v-27H55v-10H85z M75,46.5v7H45V90H35V53.5H22.5v-7H35V10h40v6.5H45v30H75z" />
        </g>
      </svg>
    </div>
  );
};

export default Facebook;
