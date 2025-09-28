
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-charcoal dark:text-white mb-6">Privacy Policy</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none text-slate dark:text-light-slate">
        <p>Last updated: October 26, 2025</p>
        <p>
          Aether AI ("us", "we", or "our") operates the aetherai.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>

        <h2>1. Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes to provide and improve our Service to you.
        </p>
        <h3>Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>
          While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Cookies and Usage Data</li>
        </ul>

        <h2>2. Use of Data</h2>
        <p>
          Aether AI uses the collected data for various purposes:
        </p>
        <ul>
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our Service</li>
        </ul>

        <h2>3. Security of Data</h2>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>

        <h2>4. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
