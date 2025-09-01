import { css } from "styled-components";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 200px;
  box-sizing: border-box;

  & > ul > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    /* background-color: aquamarine; */
    border-bottom: 1px solid #dbdbdb;
    padding: 0 20px;
    box-sizing: border-box;
    color: #333;
    font-size: 14px;

    & > div {
      display: flex;
      gap: 20px;
    }
  }
`;
