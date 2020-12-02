import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const Container = styled.div`
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
