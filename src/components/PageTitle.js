import React from 'react';
import PropTypes from 'prop-types';

function NonComponentPageTitle(name) {
  return <p className="page-title">{name}</p>;
}

function FunctionComponentPageTitle(props) {
  const { pageTitle } = props;

  return <p className="page-title">{pageTitle}</p>;
}
FunctionComponentPageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export { NonComponentPageTitle, FunctionComponentPageTitle };
