import Contact from "@/components/Contact/Contact";

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "80px", maxWidth: "1200px", margin: "0 auto" }}>
      <Contact />
      <div>
        <p>
          We respect your privacy and will only use your personal data to
          administer your account and provide requested products/services. We
          may contact you about our products/services and other content of
          interest.
        </p>
        <p>
          Opt-out anytime. See our Privacy Policy for details on how to
          unsubscribe and how we protect your privacy. By submitting, you allow
          Plant supervision to process your info for requested content.
        </p>
        <p>
          By clicking submit below, you consent to allow Plant supervision to
          store and process the personal information submitted above to provide
          you the content requested.
        </p>
      </div>
    </div>
  );
}
