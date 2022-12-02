import React from "react";
import PropTypes from "prop-types";

import FullPageLayout from "../FullPageLayout";
import Error404 from "../Error404";

export const FullPage404Error = (props) => {
  const { wrapperProps, ...otherProps } = props;

  return (
    <FullPageLayout {...wrapperProps}>
      <Error404 {...otherProps} />
    </FullPageLayout>
  );
};

FullPage404Error.propTypes = {
  wrapperProps: PropTypes.object,
};

export default FullPage404Error;
