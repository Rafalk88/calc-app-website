import React from "react";

const Logo = (props) => (
  <svg
    width={132}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h132v50H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="matrix(.00842 0 0 .02222 0 0)" />
      </pattern>
      <image
        id="b"
        width={119}
        height={45}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default Logo;
