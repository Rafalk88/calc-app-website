import React from "react";

const Spinner = (props) => (
  <svg
    width={128}
    height={128}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a-Spinner)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="a-Spinner"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b-Spinner" transform="scale(.00781)" />
      </pattern>
      <image
        id="b-Spinner"
        width={128}
        height={128}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default Spinner;
