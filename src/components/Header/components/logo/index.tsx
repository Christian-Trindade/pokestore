import React, { useContext } from "react";
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
      />
      <h2 id="title">{context.title}</h2>
    </>
  );
};

export default Logo;
