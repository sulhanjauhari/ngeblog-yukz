import React from "react";

const Linkedin: React.FC<IconProps> = props => {
  const { width = "50px", height = "50px" } = props;

  return (
    <div className="my-icons icon-linkedin" css={{ width, height }}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100">
        <g id="linkedin-icon">
          <path d="M0,30v70h22V30H0z M12,90h-2V40h2V90z" />
          <path d="M58,30l-6,8.57V30H30v70h22V52h26v48h22V52V32v-2H58z M42,90h-2V40h2V90z M90,90h-2V42H61.81l1.4-2H90V90z" />
          <path d="M0,0v22h22V0H0z M12,12h-2v-2h2V12z" />
        </g>
      </svg>
    </div>
  );
};

export default Linkedin;
