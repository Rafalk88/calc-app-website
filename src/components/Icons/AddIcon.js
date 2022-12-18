import * as React from "react";

const AddIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a-AddIcon)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="a-AddIcon"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b-AddIcon" transform="scale(.04167)" />
      </pattern>
      <image
        id="b-AddIcon"
        width={24}
        height={24}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAE1JREFUSIljYBgFQw2kQjHNwH4oJhow0cghoxYMIgsYsYilMjAwhOFQbwylz+KQX8XAwDAbWYDmPiAVjOaDUQswAQuJ6pfRxBWjgKYAAOQyB4j76xISAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export default AddIcon;
