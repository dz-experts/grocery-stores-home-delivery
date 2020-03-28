import React, { Suspense } from "react";

const withSuspense = WrappedComponent => {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <WrappedComponent {...props} />
    </Suspense>
  );
};

export { withSuspense };
