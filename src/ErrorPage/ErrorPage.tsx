import React from 'react';
import {ErrorContainer} from '../Shared/Styles'

interface IError {
    error?: any,
    resetErrorBoundary?: () => void
}

const ErrorPage = ({error, resetErrorBoundary}: IError) => {
  return (
    <ErrorContainer role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message !== null ? error.message : error}</pre>
      <button className='btn btn-primary' onClick={resetErrorBoundary}>Try again</button>
    </ErrorContainer>
  )
}

export default ErrorPage