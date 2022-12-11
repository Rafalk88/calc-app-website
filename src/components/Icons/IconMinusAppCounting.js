import * as React from "react";
import PropTypes from "prop-types";

const IconMinusAppCounting = (props) => {
  const { className, onClick, disabled, ...otherProps } = props;

  return (
    <button
      className={`${className ? ` ${className}` : ""}`}
      type={"button"}
      disabled={disabled}
      onClick={onClick}
    >
      <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...otherProps}
      >
        <path
          fill="url(#a-IconMinusAppCounting)"
          fillOpacity={0.7}
          d="M0 0h24v24H0z"
        />
        <defs>
          <pattern
            id="a-IconMinusAppCounting"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use
              xlinkHref="#b-IconMinusAppCounting"
              transform="scale(.04167)"
            />
          </pattern>
          <image
            id="b-IconMinusAppCounting"
            width={24}
            height={24}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAB2SURBVEiJ7ZXBDYAgDEUfHhjLOB7O4WzgGHhQEwK9CFWj4SU99j9oIIU/YYEZCECsLA+4I6vANQTn5SRBy8nzWs9QkwiiPLlqDMCgHFrQBe8LUvKnNl7onYR+4IEb9H/QBbqCoJjrJcGiKBCzLPsm8ty0Mr/JBsDNVg8TyF+AAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </button>
  );
};

IconMinusAppCounting.propTypes = {
  className: PropTypes.string,
  disable: PropTypes.any,
  onClick: PropTypes.func,
};

export default IconMinusAppCounting;
