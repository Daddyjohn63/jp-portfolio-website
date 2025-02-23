'use client';

import ReactCookieBot from 'react-cookiebot';

const CookieBotConsent = () => {
  const domainGroupId = '008bf995-0224-4cfa-b2ff-4961832b2d91';

  return <ReactCookieBot domainGroupId={domainGroupId} />;
};

export default CookieBotConsent;
