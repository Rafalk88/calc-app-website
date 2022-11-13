import React from "react";

export const Spinner = (props) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h64v64H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01563)" />
      </pattern>
      <image
        id="b"
        width={64}
        height={64}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAKvAAACrwG/q9D+AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPxQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWaLyywAAAFN0Uk5TAAECAwQHCQwRFRocIiMoKSorLDM0Njc4OTo7QERGSktNTk9TVFxeYGZsbXh6gIqMjZKYmqKlrLPExcfN1dbY3N3g4uTl5ufo6ers7fDx8vP19vg5V2JwAAABX0lEQVRYw+2XZ1PCQBCGL4KIJQXUCKhYsKEiduwYFYMFS/b//xfJnQkjN5jcLh90Ju+3y+09k7LZfZex35U7ejiYYniN3ALABQGwBL6m8YAdDthMALEBqdVZEmDmHuDSIABO/NhHAw94BpmgBDgEmaAEMN9lgtpXKMmEKr+wFverl976CeNed/mSiZ03RYlQ8+CjqpB5hYAwGd7DelYpdwsdQdhDZ/+cILQZkXBKKGP2HUCnSACw1MrWGEv0z6TXHbenRlmLOjC6cc5DnbruL9Mt+KlyFGA3DG2lu8tK33loRHVspxdbGQaA/Ajkl5job2pgSctuL2gxzg8sqsufADcGoayf8Z5lohtLxuM7rolubcdiy7WwzdV6FZttC9ve7YCQwxqMkJDHWpyA8JTHmqyQMIG1eQGhhjaa34QrvNUVhH2C2bavAZo6ye7PL2ox/+xk6BoCgDz6kofv6PH/C4RTxj+a9j2pAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export default Spinner;
