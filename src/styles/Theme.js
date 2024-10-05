import { css } from "styled-components";
import "./font.css";

export const Theme = {
  fonts: {
    logo: css`
      font-family: "HakgyoansimPuzzleTTF-Black", sans-serif;
      font-size: 30px;
    `,
    default: css`
      font-family: "Pretendard", sans-serif;
      font-size: 13px;
    `,
    title: css`
      font-family: "Pretendard", sans-serif;
      font-size: 35px;
      font-weight: 600;
    `,
    other: css`
      font-family: "", sans-serif;
    `,
  },
  colors: {
    white: "#fff",
    black: "#000",
    black2: "#333332",
    gray: "#9A9A9A",
    gray2: "#c4c4c4",
    gray3: "#E9E9E9",
    red: "#EA6868",
  },
  breakpoints: {},
};
