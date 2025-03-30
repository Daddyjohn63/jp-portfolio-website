// 'use client';
// import CookieConsent from 'react-cookie-consent';
// import { useEffect } from 'react';

// export default function CookieConsentBanner() {
//   useEffect(() => {
//     // Check if user has already made a choice
//     const consent = localStorage.getItem('website_cookie_consent');
//     if (consent === 'true') {
//       // If accepted, load Google Analytics
//       loadGoogleAnalytics();
//     }
//   }, []);

//   const loadGoogleAnalytics = () => {
//     // Create and load the GA script
//     const script = document.createElement('script');
//     script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
//     script.async = true;
//     document.head.appendChild(script);

//     // Initialize GA
//     window.dataLayer = window.dataLayer || [];
//     function gtag() {
//       window.dataLayer.push(arguments);
//     }
//     gtag('js', new Date());
//     gtag('config', process.env.NEXT_PUBLIC_GA_ID);
//   };

//   const handleAccept = () => {
//     localStorage.setItem('website_cookie_consent', 'true');
//     loadGoogleAnalytics();
//   };

//   const handleDecline = () => {
//     localStorage.setItem('website_cookie_consent', 'false');
//     // Disable Google Analytics
//     window['ga-disable-' + process.env.NEXT_PUBLIC_GA_ID] = true;
//   };

//   return (
//     <CookieConsent
//       location="bottom"
//       buttonText="Accept"
//       declineButtonText="Decline"
//       cookieName="website_cookie_consent"
//       style={{
//         background: '#2B373B',
//         fontSize: '14px',
//         padding: '1rem',
//         alignItems: 'center',
//         zIndex: 999
//       }}
//       buttonStyle={{
//         background: '#ffe4c4',
//         color: '#000',
//         fontSize: '14px',
//         padding: '0.5rem 1rem'
//       }}
//       declineButtonStyle={{
//         background: '#2B373B',
//         color: '#fff',
//         fontSize: '14px',
//         padding: '0.5rem 1rem'
//       }}
//       expires={365}
//       onAccept={handleAccept}
//       onDecline={handleDecline}
//     >
//       This website uses cookies to enhance your experience. By continuing to
//       visit this site you agree to our use of cookies.
//     </CookieConsent>
//   );
// }
