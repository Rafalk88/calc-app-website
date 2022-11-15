import React from "react";

const SupportIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a-support)" fillOpacity={0.7} d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="a-support"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b-support" transform="scale(.04167)" />
      </pattern>
      <image
        id="b-support"
        width={24}
        height={24}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAeAAAAHgB6vJq9gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKLSURBVEiJndVNaFVHFAfw3zyDEDVaY6UlgrpQKkIgrqLSQqmNQdD4VcQudOVSUSNoK9VKxRZKa0opGEEUQZEYRfxAQYrRQvxo1YpYCirqRhFci8txcefq5XHfy9OBC3POnPn/Z875z7lQwX4MoTPG6F0+zMAfuIV72FK1bh924ROcwVG0NAjeietYhC8xjNZqgj/RUXDsxtoGwJtwFVOxMBFNKonTgYsFxxxcRNMIBF9jT5oPYG7V+jj0VmKMd/A4hPBzCGF+jPFfnMexEEKT2qMd19L8NLryhRBCC85ia87WjK9wDt8n3yYM1roJfsLKwmn/xzcpI39hGW5XbxqFI9hRjwRfpJy3FnwTsBansCKlerDsZDnJd2UkWIAbmCyT6LISjEkyRc2sVcCcZHuBZJtMikXw26kWLakGn6e4W+iOMaqnkpzk22R31QAfn3L+W6rLKox/gzOCFEdho0zntcCvoKcmRgMPaiH+rgF+Db11978neAsuY72s/0x8ZwJ0jwDek+LuYxam1yXAGKzEj+irAz5UzHlSzVAeU0qAeamIu7A6KaG1BHwYvaiU3HhGGQl8jH/wEdpkT71D1j66E/g4XMIG/IeH+CEB7MhBy0igH5+mdNxN9iEMpoCxKQXLC31nJi6VgZbYzqfJASwpMA/IXu4i9Fddu20E0NyeXpHpGWbjprfjuqxhvcSrgl+M8Vmq0+EQQnuM8WHRxiM8kP1KncSHsg45mPLfKesnzdiKNTWkXHby5TgoE8wLWIy9KWBzqkE/Pkt1GcaEOu+lqLRKAXw0nuZBffgVHxQ2zpX1mQUNtJOc5EQCb8YF7Ax5pUMIS7EuLUY8l/14nmhghBCm4HdMQ8Bx/PIaiqIKDHfRV9EAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export default SupportIcon;
