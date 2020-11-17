import React from 'react';
import PropTypes from 'prop-types';

function PageTitle(name) {
  return <p className="page-title">{name}</p>;
}

function PageTitleWithProps(props) {
  const { pageTitle } = props;

  return <p className="page-title">{pageTitle}</p>;
}
PageTitleWithProps.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export { PageTitle, PageTitleWithProps };
