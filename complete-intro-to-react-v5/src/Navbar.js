/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const Navbar = () => {
  const [padding, setPadding] = useState(15);
  const color = "pink";

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${color};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me</Link>
      <span
        css={css`
          font-size: 60px;
        `}
        role="img"
        aria-label="logo"
      >
        🐩
      </span>
    </header>
  );
};

export default Navbar;
