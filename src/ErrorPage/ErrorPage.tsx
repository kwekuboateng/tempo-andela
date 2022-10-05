import React from 'react';

interface IError {
    error?: any,
    resetErrorBoundary?: () => void
}

const ErrorPage = ({error, resetErrorBoundary}: IError) => {
  return (
    <div className='text-center' role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button className='btn btn-primary' onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default ErrorPage