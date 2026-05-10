export const dynamic = "force-dynamic";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Privacy <span className="text-primary">Policy</span></h1>
      <div className="max-w-4xl prose prose-invert">
        <p className="text-sm text-foreground/50 mb-8">Last Updated: May 2026</p>

        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
        <p className="mb-6">
          We collect minimal personal information. This may include your IP address, browser type, and device information collected through cookies to improve our website's performance and user experience.
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Use of Cookies</h2>
        <p className="mb-6">
          We use cookies to track user behavior on our site and to manage our affiliate links (e.g., GCLID tracking). We comply with Google Consent Mode V2, allowing you to manage your cookie preferences.
        </p>

        <h2 className="text-2xl font-bold mb-4">3. Third-Party Links</h2>
        <p className="mb-6">
          Our website contains links to third-party casino sites. These sites have their own privacy policies, and we are not responsible for their practices.
        </p>

        <h2 className="text-20 font-bold mb-4">4. Data Security</h2>
        <p className="mb-6">
          We implement appropriate security measures to protect your information from unauthorized access or disclosure.
        </p>

        <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
        <p className="mb-6">
          Under the GDPR and UK data protection laws, you have the right to access, rectify, or erase your personal data. Contact us if you wish to exercise these rights.
        </p>
      </div>
    </div>
  );
}
