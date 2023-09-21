import s from "./Privacy&Therms.module.scss";

export default function PrivacyPage() {
  return (
    <section className={s.container}>
      <div>
        <h1 className={s.privacy_title}>Privacy policy</h1>
        <i>Version 1, 24.09.2023</i>
      </div>
      <div>
        <div>
          <div className={s.title}>1. Introduction</div>
          <div className={s.text}>
            <p>
              Welcome to Open Commissioning (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;). We value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your personal data
              when you visit our website or use our services.
            </p>
            <p>
              We are not obliged to have a data protection officer, so any
              inquiries about our use of your personal data should be addressed
              to the contact details above. By accessing or using our website or
              services, you consent to the practices described in this Privacy
              Policy.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>2. Information We Collect</div>
          <div className={s.text}>
            <p>We may collect the following types of personal information:</p>
            <p>
              Contact Information: Name, email address, phone number, or other
              identifiers. Usage Data: Information about your interactions with
              our website, including IP address, browser type, pages viewed, and
              access times. Cookies and Tracking Technologies: We may use
              cookies and similar technologies to enhance your experience on our
              website. Payment Information: If applicable, we may collect
              payment and billing information for transactions on our website.
              Other Information: Any other information you choose to provide
              voluntarily.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>3. How We Use Your Information</div>
          <div className={s.text}>
            <p>
              We may use your personal information for the following purposes:
            </p>
            <p>
              Provide and maintain our website and services. Respond to your
              requests, comments, or questions. Send you updates, newsletters,
              or promotional materials. Process transactions and send
              transaction notifications. Improve and personalize your experience
              on our website. Monitor and analyze usage patterns and trends.
              Comply with legal obligations and protect our rights.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>4. Disclosure of Your Information</div>
          <div className={s.text}>
            <p>We may share your personal information with:</p>
            <p>
              Service Providers: Third-party companies or individuals who assist
              us in operating our website and providing services. Legal
              Requirements: To comply with legal obligations, respond to legal
              requests, or protect our rights. Business Transfers: In connection
              with a merger, acquisition, or sale of all or a portion of our
              assets. With Your Consent: When you give us explicit permission to
              share your information.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>5. Your Rights</div>
          <div className={s.text}>
            <p>You have certain rights regarding your personal information:</p>
            <p>
              Access: You can request access to the personal information we hold
              about you. Correction: You can request corrections to inaccurate
              or incomplete data. Deletion: You can request the deletion of your
              personal information under certain circumstances. Data
              Portability: You can request the transfer of your data to another
              party.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>6. Security</div>
          <div className={s.text}>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access or disclosure. However, no method of
              transmission over the internet or electronic storage is entirely
              secure.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>7. Changes to This Privacy Policy</div>
          <div className={s.text}>
            <p>
              We reserve the right to update this Privacy Policy at any time. We
              will notify you of any changes by posting the updated policy on
              this page.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>8. Contact Us</div>
          <div className={s.text}>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our practices, please contact us at Phone number: +123456789
              Email: info@example.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
