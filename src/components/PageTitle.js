import React from 'react'

function PageTitle (name) {
  return <p className="page-title">{name}</p>
}

function PageTitleWithProps (props) {
  return <p className="page-title">{props.pageTitle}</p>
}

export { PageTitle, PageTitleWithProps }
