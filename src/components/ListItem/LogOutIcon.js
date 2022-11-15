import React from "react";

const LogOutIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a-logout)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="a-logout"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b-logout" transform="scale(.01563)" />
      </pattern>
      <image
        id="b-logout"
        width={64}
        height={64}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARxSURBVHic7ZpNaBZXFIafmDTWJEpq1FKt9Qergl1URZNWixTUTYlFBLtpty4EwR/QhUiLFXHhxqiIunEh0nZhq0Vb2oIoXQhtbakLf0IbqyZq/Gs1GxPN18VJdObMTfy+uefORPheGPhOuPPe97y5M/fOuRfKKCMvrABu9F0rctaSC9qBQt/VnpeIirw6RhKPIhctw/LodCihbEDeAvJG2YC8BeSNNAZUAuuAFmCWrZzUaAKWksE/dBjwBc/m79vAqJRcBXWlxaYIx3GgyoPrudhLUvhbKbmsDPhL8Rwi0JpiI0nRZ0k/7KwM+NLB9akHnxONQLfqpBUY58FpZUADcEFxPQEWe3DGUA9cVR20A5M8ea0MAJgMdCi+DmCMJy8AexRxD7DQgNfSAID3EG1Rzv2+pLOBx4p0sy9pH6wNANhC8lGY70P4gyL8A7tpJoQBVcCfivdUWrK3gd4IUS+wyF/jU4QwAOTxjOouAO+mIfpKkXxrJLAfoQwAOKm4vymVYDTwSJEsMBQIYQ1YpLh7gFdLIVitCH41FghhDQD4TfGvcTUaaBX3kYoP2+nKDEdUvLLYG2uID/9e4DU7XU8RegS8Tvxl2A3UFnPjYiXsfABxEN4ASC6Rl+gGrkegUcVn7HVlhtMq1rk5DZih4nNmcrKH1v6mbuAyYLqKW83kZA+tvSgDxqv4ipWaHNCm4gm6gcuAOhX/ZyYnezxQsc7NCV34eMlYVD+ymAWqVR+PdAPXCNBi8tw/9IXWnjDaZUCXiosaNkMUI1X8UDdwGaCfm1fM5MRxPfL7WqA+6lVclAFazDQzOXGsQky41vc7BPS0d1U3cBlwScV6YWSF74CJwBvA94H60Np1bk4DLqi4yUxO9nhHxTo3JxqJTx03eTFnggpEezSXucXcWIUsfqI3zgujMSiaiOdwD9nYjcH1CDwGflJ/+8RaXQb4WMU/ImXyorCcuHt3KLKYMERQi2iO5tBcCkG1g2Ctrcag2EBceycplvSfK5LrvBijYCRy+DKq/bM0RA3IyilKtMNEYljsJK65C49N0u2KrBvZLxyqmEPya3arD2ENUlSIEraS/lhMSNQBF4lr/QeDx/ZDRVoAjuKYU3NEJXCMpM4PrDrY5yD33ns3QgVwkKS+FstOXkYqrC4T8hwJlcABh65fgOHWnU0g+T4oAF+TLDxkgVG4h/3fhNnJAuTz8paj08tkOzvMQV7GWsctkmV9c0wdoPMeYBdhR0MNsqjRW/cFZHSGql0kMJ7k9nP/1YEcpbVcNdYC60mu8KLPfLBhPxCGkzxBpj+gdiP1hTT1hArkk3YPcHeQflrweOFZFDqakUQnDdKmEzmsdBZZrLQh54z7K9B1wFhgCjATSfx9Bj+I2YYcejjhod0MNcA2kt8OIa4HyPJ2RCaZlYgGRNxt7BPvRF6Ao7NKxgfVwDLkpNl90id9DzkM3UygLbosip2VyLy9EHm+ZyDl8Hqe7Tp1Af8idfvLSPX2Z+B3SihjlVFGGWWUiv8Bl03r1EAPRUkAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export default LogOutIcon;
