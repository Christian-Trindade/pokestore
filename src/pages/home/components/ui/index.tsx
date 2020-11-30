import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Popover from "@material-ui/core/Popover";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.titleColor};
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;

  #start-container {
    width: 205px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: center;
  }

  #end-container {
    padding: 15px 0px 15px 15px;
    width: 60vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  #logo {
    max-height: 40px;
    margin: 10px 2px 10px 15px;
  }

  @media only screen and (min-width: 867px) {
    #end-container {
      width: 72vw;
    }
  }

  @media only screen and (max-width: 687px) {
    #start-container {
      width: 100%;
      justify-content: center;
    }

    #end-container {
      width: 100%;
      padding-right: 15px;
    }
  }

  @media only screen and (max-width: 360) {
    #end-container {
      padding-right: 0px;
    }
  }
`;

export const SearchBar = styled(TextField)`
  border: none;
  width: 85%;
  border-radius: 10px;
  color: #666;
  background: #fff;
  font-size: 1em;

  &:focus {
    outline: none;
  }
`;

export const Body = styled.div`
  width: 100%;
  padding: 15px 10px 15px 10px;
  box-sizing: border-box;

  h2 {
    line-height: 1.4;
    font-family: Helvetica, Arial, sans-serif;
    color: rgb(102, 102, 102);
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

export const Footer = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.footerBg};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.footerTextColor};
  font-family: Helvetica, Arial, sans-serif;
  font-size: small;
  box-sizing: border-box;

  address {
    width: 60%;
  }

  @media only screen and (max-width: 478px) {
    font-size: 0.7rem;
  }
`;
