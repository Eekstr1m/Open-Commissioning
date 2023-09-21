import s from "./Privacy&Therms.module.scss";

export default function ThermsPage() {
  return (
    <section className={s.container}>
      <div>
        <h1 className={s.privacy_title}>Terms of Service</h1>
        <i>Version 1, 24.09.2023</i>
      </div>
      <div>
        <div>
          <div className={s.title}>1. Acceptance of Terms</div>
          <div className={s.text}>
            <p>
              Welcome to Open Commissioning (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;). We value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your personal data
              when you visit our website or use our services.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>2. Use of Our Website</div>
          <div className={s.text}>
            <p>
              You must be at least 18 years old to use our website. You agree to
              use our website and services in compliance with all applicable
              laws and regulations.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>3. User Accounts</div>
          <div className={s.text}>
            <p>
              If you create an account on our website, you are responsible for
              maintaining the confidentiality of your account information,
              including your password. You agree to notify us immediately of any
              unauthorized use of your account.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>4. User Content</div>
          <div className={s.text}>
            <p>
              You may have the opportunity to submit content to our website,
              including but not limited to comments, reviews, and user-generated
              content. By submitting content, you grant us a non-exclusive,
              royalty-free, worldwide license to use, reproduce, modify, and
              display your content.
            </p>
            <p>
              You agree not to submit content that is unlawful, defamatory,
              infringing on intellectual property rights, or violates the rights
              of others. We reserve the right to remove or edit content at our
              discretion.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>5. Intellectual Property</div>
          <div className={s.text}>
            <p>
              All content on our website, including text, graphics, logos, and
              images, is the property of Open Commissioning or its licensors and
              is protected by copyright and other intellectual property laws.
            </p>
            <p>
              You may not use our intellectual property without our written
              consent.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>6. Disclaimer of Warranties</div>
          <div className={s.text}>
            <p>
              Our website and services are provided &quot;as is&quot; and
              &quot;as available&quot; without any warranties, express or
              implied. We make no representations or warranties regarding the
              accuracy, completeness, or reliability of our content or services.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>7. Limitation of Liability</div>
          <div className={s.text}>
            <p>
              We shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from the use of our
              website or services.
            </p>
          </div>
        </div>
        <div>
          <div className={s.title}>8. Changes to Terms</div>
          <div className={s.text}>
            <p>
              We reserve the right to update these Terms of Service at any time.
              We will notify you of any changes by posting the updated terms on
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
