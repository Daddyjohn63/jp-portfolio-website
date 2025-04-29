export const ErrorState = ({ error, reset }) => {
  const isNotFound = error?.name === 'NotFoundError';
  const isApiError = error?.name === 'ApiError';
  const isCMSError = error?.name === 'CMSError';

  const getErrorIcon = () => {
    if (isNotFound) return '🔍';
    if (isApiError) return '🌐';
    if (isCMSError) return '📡';
    return '⚠️';
  };

  const getErrorTitle = () => {
    if (isNotFound) return 'Not Found';
    if (isApiError) return 'API Error';
    if (isCMSError) return 'CMS Error';
    return 'Something went wrong';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
      <div className="text-6xl mb-4" role="img" aria-label="Error icon">
        {getErrorIcon()}
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {getErrorTitle()}
      </h2>
      <p className="text-gray-600 text-center max-w-md mb-4">
        {error?.message || 'An unexpected error occurred'}
      </p>
      {process.env.NODE_ENV === 'development' && error?.technical && (
        <div className="w-full max-w-md">
          <p className="text-sm text-red-500 mb-4 p-2 bg-red-50 rounded whitespace-pre-wrap font-mono">
            {error.technical}
          </p>
        </div>
      )}
      {reset && (
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          aria-label="Try again to load the content"
        >
          Try Again
        </button>
      )}
    </div>
  );
};
