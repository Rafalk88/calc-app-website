import * as React from "react";

const IconInfo = (props) => (
  <svg
    width={128}
    height={128}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.00781)" />
      </pattern>
      <image
        id="b"
        width={128}
        height={128}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default IconInfo;
