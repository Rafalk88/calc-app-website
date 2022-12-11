import * as React from "react";
import PropTypes from "prop-types";

const IconPlusAppCounting = (props) => {
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
          fill="url(#a-IconPlusAppCounting)"
          fillOpacity={0.7}
          d="M0 0h24v24H0z"
        />
        <defs>
          <pattern
            id="a-IconPlusAppCounting"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#b-IconPlusAppCounting" transform="scale(.04167)" />
          </pattern>
          <image
            id="b-IconPlusAppCounting"
            width={24}
            height={24}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADKSURBVEiJ3ZUxCgIxEEWfYiGIrM1abs5iYS/iDcRTiTewUFtP4RG0dAsVEUstHGVWwrIhiYofwoQh/DfJBAYiq6b2BhgATU/PK7AEtjppgCNwC7QO4kldAEMg8axcqyOeL0BI86cSDYgmV0Auq7IajoCxxFUswNnx/O/1wFllT5QDE+CichuJfZVrAVMgtZl89QYpsHjL9SSuqwL+u8k2tWMDZrEB1q9Ypo81+RTBu+BpeIy5kCMzg+LQz4AR0PWsfA/MgZ2nTzXdAbPPO4DFqydtAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </button>
  );
};

IconPlusAppCounting.propTypes = {
  className: PropTypes.string,
  disable: PropTypes.any,
  onClick: PropTypes.func,
};

export default IconPlusAppCounting;
