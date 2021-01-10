import React from "react";

const Twitter: React.FC<IconProps> = props => {
  const { width = "50px", height = "50px" } = props;

  return (
    <div className="my-icons icon-twitter" css={{ width, height }}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100">
        <g id="twitter-icon">
          <path
            d="M88,21l9-10l-14,5L67,9L48,22v14L5,16l10,17l-8-1l11,18l-7,1l14,19L0,81l32,10l45-17l12-43l11-12L88,21z M78.12,32.78
l - 9.39, 33.65L31.69, 80.43l - 3.25 - 1.02l12.02 - 5.29L28.97, 58.53l5.48 - 0.78l - 8.1 - 13.25l7.56, 0.95l - 4.02 - 6.83L58, 51.68V27.27l10.07 - 6.89
l5.04, 2.21"
          />
        </g>
      </svg>
    </div>
  );
};

export default Twitter;
