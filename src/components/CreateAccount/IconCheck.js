import * as React from "react";

const IconCheck = (props) => (
  <svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a-IconCheck)" d="M0 0h19v19H0z" />
    <defs>
      <pattern
        id="a-IconCheck"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b-IconCheck" transform="scale(.04167)" />
      </pattern>
      <image
        id="b-IconCheck"
        width={24}
        height={24}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhgAAAIYBT1XerAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFWSURBVEiJ1ZM/S8NAGMaftymxg+Kms6AoVsTEwbV2aRfRSWc3v4CIuDr0W3QvabWIglu/QUGw0Fyxm+Dq4h+M5+KV5HLp5WIWny2X5Pd73twF+E/pjDYX5LVCbnB/65Jz66HFnPXwOuUGJ7r4vXwJgOrhSn+Qi0CCi0wkfxIkwCMSKyu8zZwGiM6nPDJrAeVME2iai/jFALvGAhP4/lr/OXZMPX97544tz6jeajOnoYMT0VDAAek/8JhbI/ruvWGu2xxXSnJzAGe65tYXrwo4EDqmHnNrBH4NQIDvX4vzB8dLvXfTzxKZCAA6I7fOOb8KwcW8twQMOOen08hENJSbT+4pmptG2VykQMBJVri8oUpB8PlxBOAmAz+2ocoSANB6LNuWbXsA9tLCdc0jAkNJanhEkFJiBI8JNBJjuFKQIMkETxRIktWscG2a40qp+7SxmDs4z/wACrys/RdX3kcAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export default IconCheck;
