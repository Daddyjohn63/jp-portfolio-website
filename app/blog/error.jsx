'use client';

import { ErrorState } from '@/components/common/Error-state';

export default function Error({ error, reset }) {
  return (
    <div className="container mt-[1rem]">
      <ErrorState error={error} reset={reset} />
    </div>
  );
}
