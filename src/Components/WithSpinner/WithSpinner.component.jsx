import React from 'react';

import { ThunderLoading, Container } from './WithSpinner.styles';

//CustomLoadingComp=caso queira mostrar alguma outra coisa
//no lugar do componente padrao de loading
//um exemplo pode ser visto no component "ContactMessage"
const WithSpinner = (WrappedComponent, CustomLoadingComp) => {
  return ({ isLoading, ...props }) => isLoading ?
    CustomLoadingComp ?
      <CustomLoadingComp />
      :
      (
        <Container>
          <ThunderLoading />
        </Container>
      )
    :
    (
      <WrappedComponent {...props} />
    )
}

export default WithSpinner;
