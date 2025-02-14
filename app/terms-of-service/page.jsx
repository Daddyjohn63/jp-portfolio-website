const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          By accessing and using this website, you accept and agree to be bound
          by these Terms of Service. If you do not agree to these terms, please
          do not use this website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
        <p className="mb-4">
          Permission is granted to temporarily access the materials (information
          or software) on my website for personal, non-commercial viewing only.
          This is the grant of a license, not a transfer of title, and under
          this license you may not:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose</li>
          <li>
            Attempt to decompile or reverse engineer any software contained on
            the website
          </li>
          <li>
            Remove any copyright or other proprietary notations from the
            materials
          </li>
          <li>
            Transfer the materials to another person or "mirror" the materials
            on any other server
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
        <p className="mb-4">
          The materials on my website are provided on an 'as is' basis. I make
          no warranties, expressed or implied, and hereby disclaim and negate
          all other warranties including, without limitation, implied warranties
          or conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property or other violation of
          rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
        <p className="mb-4">
          In no event shall I or my suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption) arising out of the use or inability to
          use the materials on my website, even if I or an authorized
          representative has been notified orally or in writing of the
          possibility of such damage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Accuracy of Materials
        </h2>
        <p className="mb-4">
          The materials appearing on my website could include technical,
          typographical, or photographic errors. I do not warrant that any of
          the materials on my website are accurate, complete, or current. I may
          make changes to the materials contained on my website at any time
          without notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
        <p className="mb-4">
          I have not reviewed all of the sites linked to my website and I am not
          responsible for the contents of any such linked site. The inclusion of
          any link does not imply endorsement by me of the site. Use of any such
          linked website is at the user's own risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
        <p className="mb-4">
          I may revise these Terms of Service for my website at any time without
          notice. By using this website, you are agreeing to be bound by the
          then current version of these Terms of Service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p className="mb-4">
          These terms and conditions are governed by and construed in accordance
          with the laws and any disputes relating to these terms and conditions
          will be subject to the exclusive jurisdiction of the courts.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
