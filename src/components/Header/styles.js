import { css } from "@emotion/react";

export const header = css`
  height: 60px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;


    & > ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      
      & > li {
        
        cursor: pointer;


        & > a {
          text-decoration none;
          color: #333;
        }
      }
    }
  }

`;

export const menuLi = css`
  padding: 10px;
  border-radius: 50%;
  font-size: 20px;
  border: 2px solid #dbdbdb;
  width: 45px;
  height: 45px;
  box-sizing: border-box;
`
export const headerIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  width: 35px;
  height: 35px;
  box-sizing: border-box;
  color: #333;
`;