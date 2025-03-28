import { Loader2 } from 'lucide-react';

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px]">
      <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
      <p className="text-lg text-gray-600 mt-4">Loading...</p>
    </div>
  );
};

export default LoadingState;
