import React from "react";

const SettingsIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a-settings)" fillOpacity={0.7} d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="a-settings"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b-settings" transform="scale(.04167)" />
      </pattern>
      <image
        id="b-settings"
        width={24}
        height={24}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHvSURBVEiJrdY/T1RBFAXwn1pZSEEHLDRWUFhYKMQtaKyExMTQC41UUmqklJgt7MRSChuFLyANkvUbaEWg0wQsrITSBIs7T8bH7O4zeJLJZs7cOTsz99+jGWbwHadpHOF2w72NsIHH2XwlcQNxucAtYRPtjLuOL9n8c+IqtLGFxUF/+AR7WBbPsIoOjjGW2Y0lrpNsjtKePTztJb6UDEbTfALbWMdUwX4qrW0nWxhJGsWbbKZTXBTLeF9aaOMQ4xcQH08a7V4Gq/hQ4Oexi5M0PmKuYLedNP6gHkXXcFDjXuC1eO+RNF7hJdZqtgdJ4y/MiJjuisjIHTqPrxgunHYY32o3mRQ3/JQ0p4kQW8EsWjWRXTwoiFdYwE6NayWtFeEPp30EjhWunGEIP/usn5Yy+V9waZDBFRG3v3A1/eYnuosfInlKmBNZ/TbjWriJ+7hBOGJDOOZEOCoX2NPbyfu4l3FT4lm7eINb9U0dEYI51kS0LIg3HxKO38fzmu26COueeKacaHMiWo7T2KmdvMK5RMvxP0rFhAj7YqnYwqMLiFdYFoXzHKpyPZKdpl+5nnRWrqtbj+pTrolm0bThnDhrOIcaNJwKi3iHOxnXFelfYTZxFdqiBzwcJN4LG6K2VGjc9JtiWjxD9dlyqJBEJfwGxTN1mTD2UB8AAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export default SettingsIcon;
