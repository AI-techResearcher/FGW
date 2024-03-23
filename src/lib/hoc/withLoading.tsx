import React, { lazy, Suspense, ReactElement } from 'react';

// Define a type representing the lazily loaded component
type LazyLoadedComponentType = React.ComponentType<unknown>;

// Define a higher-order component (HOC) for lazy loading
const withLazyLoading = (
  // The importComponent function should return a promise resolving to an object with a 'default' property
  importComponent: () => Promise<{ default: LazyLoadedComponentType }>
): React.FC => {
  // Create a LazyComponent using React's lazy function
  const LazyComponent = lazy(importComponent);

  // Loader component displayed while the lazy component is loading
  function Loader() {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 '>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white'></div>
        </div>
      </div>
    );
  }

  // WithLazyLoading function, a React component that renders the LazyComponent inside a Suspense
  return function WithLazyLoading(props): ReactElement {
    return (
      <Suspense fallback={<Loader />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};

// Export the withLazyLoading HOC
export default withLazyLoading;
