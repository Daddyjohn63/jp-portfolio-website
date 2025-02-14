const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy & Cookie Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          This Privacy & Cookie Policy explains how I collect, use, and protect
          your personal information when you use my website. I am committed to
          ensuring your privacy is protected and I comply with applicable data
          protection laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Information I Collect
        </h2>
        <h3 className="text-xl font-semibold mb-3">2.1 Contact Form</h3>
        <p className="mb-4">
          When you use my contact form, I collect the following information:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Message content</li>
        </ul>
        <p className="mb-4">
          This information is used solely for the purpose of responding to your
          inquiry and will not be shared with third parties.
        </p>

        <h3 className="text-xl font-semibold mb-3">2.2 Analytics</h3>
        <p className="mb-4">
          I use Google Analytics to understand how visitors interact with my
          website. This service may collect:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>IP address (anonymized)</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Pages visited</li>
          <li>Time and duration of visits</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
        <p className="mb-4">
          My website uses cookies to enhance your browsing experience. These
          include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Essential cookies: Required for the website to function properly
          </li>
          <li>
            Analytics cookies: Used by Google Analytics to collect anonymous
            usage data
          </li>
        </ul>
        <p className="mb-4">
          You can control and/or delete cookies as you wish through your browser
          settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Data Storage and Security
        </h2>
        <p className="mb-4">
          I implement appropriate security measures to protect your personal
          information. Contact form submissions are stored securely and accessed
          only by me.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Access your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request deletion of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          6. Updates to This Policy
        </h2>
        <p className="mb-4">
          I may update this privacy policy from time to time. Any changes will
          be posted on this page.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Contact Me</h2>
        <p className="mb-4">
          If you have any questions about this Privacy & Cookie Policy, please
          contact me through my contact form.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
