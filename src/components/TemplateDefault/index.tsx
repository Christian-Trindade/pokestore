import React, { useState, useRef } from "react";
import { debounce } from "lodash";
import { StylesProvider } from "@material-ui/core/styles";

import { SearchContext } from "../../services/contexts";
import history from "../../services/History";

import { Container, Body } from "../../components/ui";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const TemplateDefault: React.FC = ({ children }) => {
  const [search, setSearch] = useState<string>("");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    delayedQuery(e.target.value);
  };

  const delayedQuery = useRef(
    debounce((text) => {
      if (window.location.pathname.split("/")[1] == "product") {
        setSearch(text);
        if (!text) return;
        history.push(`/?search=${text}`);
        window.location.reload();
        return;
      }

      let searchParam = "/";
      setSearch(text);
      searchParam = text ? `?search=${text}` : "/";
      window.history.pushState(searchParam, searchParam, searchParam);
    }, 500)
  ).current;

  return (
    <SearchContext.Provider value={search}>
      <StylesProvider injectFirst>
        <Container>
          <Header handleChangeSearch={handleChangeSearch} />
          <Body>{children}</Body>
          <Footer />
        </Container>
      </StylesProvider>
    </SearchContext.Provider>
  );
};

export default TemplateDefault;
