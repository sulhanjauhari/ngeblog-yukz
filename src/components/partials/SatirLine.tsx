import React from "react";
import { css } from "@emotion/core";
import { getTheme } from "../../utils/theme";

/*
 * a line divider
 * "Satir" is divider for each part of room or people groups in java culture
 */

const SatirLine: React.FC = () => (
  <div
    className="satir-line"
    css={css`
      margin: 10px 0;
      display: flex;
      align-items: center;

      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${getTheme("--text-color")};
      }
    `}></div>
);

export default SatirLine;
