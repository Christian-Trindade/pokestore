import * as React from "react";
import { useContext } from "react";

import history from "../../../../services/History";
import { StoreContext } from "../../../../services/contexts";

const Logo: React.FC = () => {
  const context = useContext(StoreContext);

  return (
    <>
      <img
        src="/assets/images/logo.svg"
        height={40}
        width={40}
        alt="logo pokemon"
        id="logo"
        onClick={() => history.push("/")}
      />
      <h2 id="title" onClick={() => history.push("/")}>
        {context.title}
      </h2>
    </>
  );
};

export default Logo;
