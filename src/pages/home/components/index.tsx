import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.titleColor};
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  #start-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  #end-container {
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  #logo {
    max-height: 40px;
    margin: 10px 2px 10px 15px;
  }

  @media only screen and (min-width: 768px) {
    #start-container {
      width: 205px;
    }

    #end-container {
      width: 69%;
    }
  }

  @media only screen and (max-width: 767px) {
    #start-container {
      width: 205px;
    }

    #end-container {
      width: 65%;
    }
  }

  @media only screen and (max-width: 687px) {
    #start-container {
      width: 100%;
      justify-content: center;
    }

    #end-container {
      width: 100%;
    }
  }
`;

export const SearchBar = styled.input`
  border: none;
  width: 100%;
  min-height: 30px;
  padding: 0.4em 5.1em 0.4em 0.7em;
  border-radius: 10px;
  color: #666;
  background: #fff;
  font-size: 1em;
  margin-right: 15px;

  &:focus {
    outline: none;
  }
`;
