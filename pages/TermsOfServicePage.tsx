
import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-charcoal dark:text-white mb-6">Terms of Service</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none text-slate dark:text-light-slate">
        <p>Last updated: October 26, 2025</p>
        <p>
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the aetherai.com website (the "Service") operated by Aether AI ("us", "we", or "our").
        </p>
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>
        
        <h2>1. Accounts</h2>
        <p>
          When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        
        <h2>2. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of Aether AI and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
        </p>

        <h2>3. Links To Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Aether AI. Aether AI has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
        </p>

        <h2>4. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>

        <h2>5. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
        </p>

        <h2>6. Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
