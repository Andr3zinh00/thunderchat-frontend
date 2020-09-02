import React from 'react'

const WithSpinner = (isLoading, WrappedComponent) => {
  return (...props) => isLoading ? <ThunderLoading /> : (
    <WrappedComponent {...props} />
  )
}

export default WithSpinner;
