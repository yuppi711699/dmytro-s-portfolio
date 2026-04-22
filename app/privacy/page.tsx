import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/content/profile";

export default function PrivacyPolicy() {
  const privacyHtml = `
<h1>Privacy Policy</h1>
<p><strong>Scope.</strong> This Privacy Policy explains how personal information is handled when you visit this website (the &ldquo;Site&rdquo;). The Site is a portfolio website and is not directed to children.</p>

<h2>1. Information we collect</h2>
<h3>Automatically collected (standard web logs)</h3>
<p>When you access the Site, technical information may be processed automatically by the hosting provider and content delivery infrastructure, such as IP address, device and browser type, operating system, referring page, pages viewed, timestamps, and diagnostic/security data.</p>

<h3>Information you provide</h3>
<p>If you contact the site owner outside the Site (for example, by email or phone), you will provide information you choose to share (e.g., name and contact details, and the content of your message).</p>

<h2>2. How we use information</h2>
<ul>
  <li>To deliver, secure, and maintain the Site (availability, performance, abuse prevention).</li>
  <li>To troubleshoot and improve reliability (e.g., error investigation).</li>
  <li>To respond to inquiries you initiate.</li>
</ul>

<h2>3. Legal authority (Canada &amp; United States)</h2>
<p><strong>Canada (PIPEDA).</strong> Personal information is handled with your knowledge and consent except where permitted or required by law. Processing of technical data needed to operate and secure the Site may occur as part of providing the service.</p>
<p><strong>United States.</strong> Personal information is processed as reasonably necessary to operate and secure the Site and to respond to requests. Depending on your state and circumstances, you may have additional privacy rights (see Section 8).</p>

<h2>4. Cookies and analytics</h2>
<p>This Site does not intentionally use advertising cookies. The hosting provider may use essential cookies or similar technologies required to deliver the Site securely and efficiently. If analytics are enabled in the future, this policy will be updated to describe what is used and available choices.</p>

<h2>5. Sharing and disclosure</h2>
<p>We do not sell personal information. We may share information with service providers that help run the Site (for example, hosting and content delivery) strictly for the purposes described above. We may also disclose information if required by law, to protect rights and safety, or to investigate abuse.</p>

<h2>6. Hosting and cross-border processing</h2>
<p>The Site is hosted by a third-party provider (e.g., Vercel). Information may be processed in the United States or other jurisdictions where service providers operate. Those jurisdictions may have different privacy laws than your place of residence.</p>

<h2>7. Data retention and security</h2>
<p>Technical logs are retained for as long as reasonably necessary for security, troubleshooting, and operational purposes, and then deleted or de-identified where feasible. Reasonable administrative and technical safeguards are used; however, no method of transmission or storage is 100% secure.</p>

<h2>8. Your rights</h2>
<p><strong>Canada.</strong> You may request access to personal information and request corrections, subject to legal exceptions.</p>
<p><strong>United States (state privacy laws).</strong> Depending on your state and whether the law applies, you may have rights to request access, deletion, or correction of certain personal information, and to opt out of certain sharing. This Site does not sell personal information.</p>

<h2>9. Contact</h2>
<p>If you have privacy questions or requests, contact the site owner by phone: ${profile.phone}</p>

<h2>10. Changes</h2>
<p>This Privacy Policy may be updated from time to time. Changes will be posted on this page.</p>
  `;

  return (
    <main className="min-h-screen bg-[#050505] text-neutral-300 py-24 px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div
          className="
            text-sm leading-relaxed text-neutral-400 
            [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:text-white [&>h1]:mb-8 
            [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-white [&>h2]:mt-12 [&>h2]:mb-4 
            [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-3 
            [&>h4]:text-lg [&>h4]:font-medium [&>h4]:text-neutral-300 [&>h4]:mt-6 [&>h4]:mb-2 
            [&>p]:mb-4 
            [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4 [&>li]:mb-1
            [&>a]:text-blue-400 [&>a]:underline [&>a]:underline-offset-4 hover:[&>a]:text-blue-300
          "
          dangerouslySetInnerHTML={{ __html: privacyHtml }}
        />
      </div>
    </main>
  );
}
