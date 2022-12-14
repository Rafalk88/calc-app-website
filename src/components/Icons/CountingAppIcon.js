import React from "react";

export const CountingAppIcon = (props) => (
  <svg
    width={80}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a=CountingAppIcon)" d="M0 0h80v80H0z" />
    <defs>
      <pattern
        id="a=CountingAppIcon"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b=CountingAppIcon" transform="scale(.00781)" />
      </pattern>
      <image
        id="b=CountingAppIcon"
        width={128}
        height={128}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default CountingAppIcon;
