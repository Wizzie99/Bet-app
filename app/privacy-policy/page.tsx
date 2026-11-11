import type { Metadata } from "next";
import type { ReactNode } from "react";

import s from "./privacy.module.css";

const title = "Privacy Policy";
const description =
  "How Boston Exclusive Transportation LLC collects, uses, and shares personal information when you book a ride or use the website.";

const DSAR = "https://app.termly.io/dsar/080bbf98-9dd2-4ddb-a76f-2be696c521a4";
const COOKIE = "https://www.bostonexclusivetransportation.com/cookie/";
const EMAIL = "info@bostonexclusivetransportation.com";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title, description, url: "/privacy-policy", type: "website" },
};

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className={s.page}>
      <article className={s.shell}>
        <header className={s.header}>
          <h1 className={s.h1}>PRIVACY POLICY</h1>
          <p className={s.updated}>Last updated November 10, 2026</p>
        </header>

        <div className={s.prose}>
          <p>
            This Privacy Notice for <strong>Boston Exclusive Transportation LLC</strong> (&quot;
            <strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; or &quot;<strong>our</strong>
            &quot;) describes how and why we may access, collect, store, use, and/or share (&quot;
            <strong>process</strong>&quot;) your personal information when you use our services
            (&quot;<strong>Services</strong>&quot;), including when you:
          </p>
          <ul className={s.list}>
            <li>
              Visit our website at{" "}
              <Ext href="https://www.bostonexclusivetransportation.com/">
                https://www.bostonexclusivetransportation.com/
              </Ext>{" "}
              or any website of ours that links to this Privacy Notice
            </li>
            <li>Book a ride or otherwise use our transportation services</li>
            <li>Engage with us in other related ways, including any marketing or events</li>
          </ul>
          <p>
            <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you
            understand your privacy rights and choices. We are responsible for making decisions
            about how your personal information is processed. If you do not agree with our policies
            and practices, please do not use our Services. If you still have any questions or
            concerns, please contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>

          <h2 className={s.h2}>SUMMARY OF KEY POINTS</h2>
          <p>
            <strong>
              <em>
                This summary provides key points from our Privacy Notice. You can find more detail
                on any topic by using the <a href="#toc">table of contents</a> below.
              </em>
            </strong>
          </p>
          <p>
            <strong>What personal information do we process?</strong> When you visit, use, or
            navigate our Services, we may process personal information depending on how you
            interact with us, such as your name, contact details, trip details, and website
            activity. Learn more about{" "}
            <a href="#personalinfo">personal information you disclose to us</a>.
          </p>
          <p>
            <strong>Do we process any sensitive personal information?</strong> We do not process
            sensitive personal information.
          </p>
          <p>
            <strong>Do we store your payment card details?</strong> No. Online bookings, customer
            accounts, and payments are handled by our booking provider, Limo Anywhere. Learn more
            about <a href="#payment">payment data</a>.
          </p>
          <p>
            <strong>Do we collect any information from third parties?</strong> We may collect
            information from public databases, marketing partners, social media platforms, and
            other outside sources. Learn more about{" "}
            <a href="#othersources">information collected from other sources</a>.
          </p>
          <p>
            <strong>How do we process your information?</strong> We process your information to
            provide, improve, and administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. Learn more about{" "}
            <a href="#infouse">how we process your information</a>.
          </p>
          <p>
            <strong>Do we sell your personal information?</strong> We do not sell your personal
            information for money. We do use cookies and similar tools for analytics and
            advertising, which some US state laws treat as &quot;sharing&quot; or a
            &quot;sale.&quot; You can opt out at any time. Learn more about{" "}
            <a href="#uslaws">your US privacy rights</a>.
          </p>
          <p>
            <strong>What are your rights?</strong> Depending on where you live, you may have
            certain rights regarding your personal information. Learn more about{" "}
            <a href="#privacyrights">your privacy rights</a>.
          </p>
          <p>
            <strong>How do you exercise your rights?</strong> The easiest way is by submitting a{" "}
            <Ext href={DSAR}>data subject access request</Ext>, or by contacting us. We will
            consider and act upon any request in accordance with applicable data protection laws.
          </p>

          <h2 id="toc" className={s.h2}>
            TABLE OF CONTENTS
          </h2>
          <div className={s.toc}>
            <a href="#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a>
            <a href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
            <a href="#legalbases">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</a>
            <a href="#whoshare">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>
            <a href="#cookies">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a>
            <a href="#inforetain">6. HOW LONG DO WE KEEP YOUR INFORMATION?</a>
            <a href="#infominors">7. DO WE COLLECT INFORMATION FROM MINORS?</a>
            <a href="#privacyrights">8. WHAT ARE YOUR PRIVACY RIGHTS?</a>
            <a href="#DNT">9. CONTROLS FOR DO-NOT-TRACK FEATURES</a>
            <a href="#uslaws">10. WHAT PRIVACY RIGHTS DO UNITED STATES RESIDENTS HAVE?</a>
            <a href="#policyupdates">11. DO WE MAKE UPDATES TO THIS NOTICE?</a>
            <a href="#contact">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
            <a href="#request">
              13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            </a>
          </div>

          <h2 id="infocollect" className={s.h2}>
            1. WHAT INFORMATION DO WE COLLECT?
          </h2>
          <h3 id="personalinfo" className={s.h3}>
            Personal information you disclose to us
          </h3>
          <p className={s.short}>
            <strong>In Short:</strong> We collect personal information that you provide to us.
          </p>
          <p>
            We collect personal information that you voluntarily provide to us when you book a
            ride, register on the Services, express an interest in obtaining information about us
            or our Services, participate in activities on the Services, or otherwise contact us.
          </p>
          <p>
            <strong>Personal Information Provided by You.</strong> The personal information we
            collect depends on how you interact with us and the Services. It may include:
          </p>
          <ul className={s.list}>
            <li>names</li>
            <li>phone numbers</li>
            <li>email addresses</li>
            <li>mailing and billing addresses</li>
            <li>pickup and drop-off addresses, flight details, and other trip information</li>
            <li>job titles and company names (for business accounts)</li>
            <li>usernames</li>
            <li>contact preferences</li>
          </ul>
          <p id="sensitiveinfo">
            <strong>Sensitive Information.</strong> We do not process sensitive information.
          </p>
          <p id="payment">
            <strong>Payment Data and Customer Accounts.</strong> If you make a payment or create a
            customer account, your payment card details, account password, and related information
            are collected, handled, and stored by our booking and payment provider,{" "}
            <strong>Limo Anywhere</strong>. We do not store your full payment card number or your
            password. You can find Limo Anywhere&apos;s privacy notice here:{" "}
            <Ext href="https://www.limoanywhere.com/policy/">
              https://www.limoanywhere.com/policy/
            </Ext>
            .
          </p>
          <p>
            All personal information that you provide to us must be true, complete, and accurate,
            and you must notify us of any changes to such personal information.
          </p>

          <h3 className={s.h3}>Information automatically collected</h3>
          <p className={s.short}>
            <strong>In Short:</strong> Some information — such as your Internet Protocol (IP)
            address and/or browser and device characteristics — is collected automatically when you
            visit our Services.
          </p>
          <p>
            We automatically collect certain information when you visit, use, or navigate the
            Services. This information does not reveal your specific identity (like your name or
            contact information) but may include device and usage information, such as your IP
            address, browser and device characteristics, operating system, language preferences,
            referring URLs, device name, country, location, information about how and when you use
            our Services, and other technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our internal analytics and
            reporting purposes.
          </p>
          <p>
            Like many businesses, we also collect information through cookies and similar
            technologies. You can find out more in our Cookie Notice: <Ext href={COOKIE}>{COOKIE}</Ext>.
          </p>
          <p>The information we collect includes:</p>
          <ul className={s.list}>
            <li>
              <em>Log and Usage Data.</em> Service-related, diagnostic, usage, and performance
              information our servers automatically collect when you access or use our Services,
              such as your IP address, device information, browser type and settings, pages viewed,
              date/time stamps, and error reports.
            </li>
            <li>
              <em>Device Data.</em> Information about the computer, phone, tablet, or other device
              you use to access the Services, such as IP address, device identifiers, browser type,
              hardware model, Internet service provider, and operating system.
            </li>
            <li>
              <em>Location Data.</em> Information about your device&apos;s location, which can be
              precise or imprecise depending on your device settings. You can opt out by refusing
              access or disabling your device&apos;s location setting, although some parts of the
              Services may not work as a result.
            </li>
          </ul>

          <h3 className={s.h3}>Google API</h3>
          <p>
            Our use of information received from Google APIs will adhere to the{" "}
            <Ext href="https://developers.google.com/terms/api-services-user-data-policy">
              Google API Services User Data Policy
            </Ext>
            , including the{" "}
            <Ext href="https://developers.google.com/terms/api-services-user-data-policy#limited-use">
              Limited Use requirements
            </Ext>
            .
          </p>

          <h3 id="othersources" className={s.h3}>
            Information collected from other sources
          </h3>
          <p className={s.short}>
            <strong>In Short:</strong> We may collect limited data from public databases, marketing
            partners, and other outside sources.
          </p>
          <p>
            To enhance our ability to provide relevant marketing, offers, and services to you and
            to keep our records up to date, we may obtain information about you from other sources,
            such as public databases, joint marketing partners, affiliate programs, data providers,
            and other third parties. This information may include mailing addresses, job titles,
            email addresses, phone numbers, intent data (user behavior data), IP addresses, social
            media profiles, and social media URLs, for purposes of targeted advertising and event
            promotion.
          </p>

          <h2 id="infouse" className={s.h2}>
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </h2>
          <p className={s.short}>
            <strong>In Short:</strong> We process your information to provide, improve, and
            administer our Services, communicate with you, for security and fraud prevention, and
            to comply with law. We may also process your information for other purposes only with
            your prior explicit consent.
          </p>
          <p>
            <strong>
              We process your personal information for a variety of reasons, depending on how you
              interact with our Services, including:
            </strong>
          </p>
          <ul className={s.list}>
            <li>
              <strong>To provide our transportation services.</strong> We use your information to
              schedule, dispatch, and complete your rides, including sharing trip details with your
              assigned chauffeur.
            </li>
            <li>
              <strong>To facilitate account creation and authentication.</strong> We may process
              your information so you can create and log in to your account and keep it in working
              order.
            </li>
            <li>
              <strong>To respond to inquiries and offer support.</strong> We may process your
              information to respond to your questions and resolve any issues with your service.
            </li>
            <li>
              <strong>To send administrative information.</strong> We may send you booking
              confirmations, trip updates, changes to our terms and policies, and similar
              information.
            </li>
            <li>
              <strong>To fulfill and manage your bookings.</strong> We may process your information
              to manage your reservations, payments, cancellations, and refunds.
            </li>
            <li>
              <strong>To enable communication with your chauffeur.</strong> We may process your
              information so you and your chauffeur can contact each other about your trip.
            </li>
            <li>
              <strong>To request feedback.</strong> We may contact you about your experience with
              our Services.
            </li>
            <li>
              <strong>To send marketing and promotional communications.</strong> If this is in line
              with your marketing preferences. You can opt out at any time (see &quot;
              <a href="#privacyrights">WHAT ARE YOUR PRIVACY RIGHTS?</a>&quot;).
            </li>
            <li>
              <strong>To deliver targeted advertising.</strong> We may display personalized content
              and advertising based on your interests and location. See our Cookie Notice:{" "}
              <Ext href={COOKIE}>{COOKIE}</Ext>.
            </li>
            <li>
              <strong>To post testimonials.</strong> With your permission, we may post testimonials
              on our Services that contain personal information.
            </li>
            <li>
              <strong>To protect our Services.</strong> Including fraud monitoring and prevention.
            </li>
            <li>
              <strong>To administer prize draws and competitions.</strong>
            </li>
            <li>
              <strong>
                To evaluate and improve our Services, marketing, and your experience,
              </strong>{" "}
              including identifying usage trends and measuring the effectiveness of our promotional
              campaigns.
            </li>
            <li>
              <strong>To comply with our legal obligations.</strong> Including responding to legal
              requests and establishing, exercising, or defending our legal rights.
            </li>
          </ul>

          <h2 id="legalbases" className={s.h2}>
            3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
          </h2>
          <p className={s.short}>
            <strong>In Short:</strong> We only process your personal information when we believe it
            is necessary and we have a valid legal reason to do so under applicable law, such as
            with your consent, to comply with laws, to provide you with services, to protect your
            rights, or to fulfill our legitimate business interests.
          </p>
          <p>
            <strong>
              <u>
                <em>If you are located in Canada, this section applies to you.</em>
              </u>
            </strong>
          </p>
          <p>
            We may process your information if you have given us specific permission (express
            consent) to use your personal information for a specific purpose, or in situations
            where your permission can be inferred (implied consent). You can{" "}
            <a href="#withdrawconsent">withdraw your consent</a> at any time.
          </p>
          <p>
            In some exceptional cases, we may be legally permitted to process your information
            without your consent, including, for example:
          </p>
          <ul className={s.list}>
            <li>
              If collection is clearly in the interests of an individual and consent cannot be
              obtained in a timely way
            </li>
            <li>For investigations and fraud detection and prevention</li>
            <li>For business transactions provided certain conditions are met</li>
            <li>
              If it is contained in a witness statement and the collection is necessary to assess,
              process, or settle an insurance claim
            </li>
            <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
            <li>
              If we have reasonable grounds to believe an individual has been, is, or may be a
              victim of financial abuse
            </li>
            <li>
              If it is reasonable to expect that collection with consent would compromise the
              availability or accuracy of the information and the collection is reasonable for
              purposes related to investigating a breach of an agreement or a contravention of the
              laws of Canada or a province
            </li>
            <li>
              If disclosure is required to comply with a subpoena, warrant, court order, or rules
              of the court relating to the production of records
            </li>
            <li>
              If it was produced by an individual in the course of their employment, business, or
              profession and the collection is consistent with the purposes for which the
              information was produced
            </li>
            <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
            <li>If the information is publicly available and is specified by the regulations</li>
            <li>
              We may disclose de-identified information for approved research or statistics
              projects, subject to ethics oversight and confidentiality commitments
            </li>
          </ul>

          <h2 id="whoshare" className={s.h2}>
            4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h2>
          <p className={s.short}>
            <strong>In Short:</strong> We may share information in specific situations described in
            this section and/or with the following categories of third parties.
          </p>
          <p>
            <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may
            share your data with third-party vendors, service providers, contractors, or agents
            (&quot;<strong>third parties</strong>&quot;) who perform services for us or on our
            behalf and require access to such information to do that work. We have contracts in
            place with our third parties designed to help safeguard your personal information. This
            means they cannot do anything with your personal information unless we have instructed
            them to do it. They will also not share your personal information with any organization
            apart from us. They also commit to protect the data they hold on our behalf and to
            retain it for the period we instruct.
          </p>
          <p>The categories of third parties we may share personal information with are:</p>
          <ul className={s.list}>
            <li>Booking, dispatch, and order fulfillment service providers</li>
            <li>Payment processors</li>
            <li>User account registration and authentication services</li>
            <li>Website hosting and cloud computing service providers</li>
            <li>Data storage service providers</li>
            <li>Communication and collaboration tools</li>
            <li>Finance and accounting tools</li>
            <li>Data analytics services</li>
            <li>Performance monitoring and testing tools</li>
            <li>Product engineering and design tools</li>
            <li>AI platforms</li>
            <li>Sales and marketing tools</li>
            <li>Ad networks, retargeting platforms, and social networks</li>
            <li>Affiliate marketing programs</li>
            <li>Government entities (where required by law)</li>
          </ul>
          <p>We also may need to share your personal information in the following situations:</p>
          <ul className={s.list}>
            <li>
              <strong>Business Transfers.</strong> We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to another company.
            </li>
            <li>
              <strong>Affiliates.</strong> We may share your information with our affiliates, in
              which case we will require those affiliates to honor this Privacy Notice. Affiliates
              include our parent company and any subsidiaries, joint venture partners, or other
              companies that we control or that are under common control with us.
            </li>
            <li>
              <strong>Business Partners.</strong> We may share your information with our business
              partners to offer you certain products, services, or promotions.
            </li>
          </ul>

          <h2 id="cookies" className={s.h2}>
            5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </h2>
          <p className={s.short}>
            <strong>In Short:</strong> We may use cookies and other tracking technologies to
            collect and store your information.
          </p>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to
            gather information when you interact with our Services. Some online tracking
            technologies help us maintain the security of our Services and your account, prevent
            crashes, fix bugs, save your preferences, and assist with basic site functions.
          </p>
          <p>
            We also permit third parties and service providers to use online tracking technologies
            on our Services for analytics and advertising, including to help manage and display
            advertisements or to tailor advertisements to your interests. These may appear either
            on our Services or on other websites.
          </p>
          <p>
            To the extent these online tracking technologies are deemed to be a &quot;sale&quot; or
            &quot;sharing&quot; (which includes targeted advertising, as defined under applicable
            laws) under US state laws, you can opt out by following the steps in &quot;
            <a href="#uslaws">WHAT PRIVACY RIGHTS DO UNITED STATES RESIDENTS HAVE?</a>&quot;
          </p>
          <p>
            Specific information about how we use such technologies and how you can refuse certain
            cookies is set out in our Cookie Notice: <Ext href={COOKIE}>{COOKIE}</Ext>.
          </p>
          <h3 className={s.h3}>Google Analytics</h3>
          <p>
            We may share your information with Google Analytics to track and analyze the use of the
            Services. The Google Analytics Advertising Features we may use include Remarketing with
            Google Analytics, Google Display Network Impressions Reporting, and Google Analytics
            Demographics and Interests Reporting. To opt out of being tracked by Google Analytics
            across the Services, visit{" "}
            <Ext href="https://tools.google.com/dlpage/gaoptout">
              https://tools.google.com/dlpage/gaoptout
            </Ext>
            . You can opt out of Google Analytics Advertising Features through{" "}
            <Ext href="https://adssettings.google.com/">Ads Settings</Ext> and Ad Settings for
            mobile apps. Other opt-out options include{" "}
            <Ext href="http://optout.networkadvertising.org/">
              http://optout.networkadvertising.org/
            </Ext>{" "}
            and{" "}
            <Ext href="http://www.networkadvertising.org/mobile-choice">
              http://www.networkadvertising.org/mobile-choice
            </Ext>
            . For more information on Google&apos;s privacy practices, please visit the{" "}
            <Ext href="https://policies.google.com/privacy">Google Privacy &amp; Terms page</Ext>.
          </p>

          <h2 id="inforetain" className={s.h2}>
            6. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h2>
          <p className={s.short}>
            <strong>In Short:</strong> We keep your information for as long as necessary to fulfill
            the purposes outlined in this Privacy Notice unless otherwise required by law.
          </p>
          <p>
            We will only keep your personal information for as long as it is necessary for the
            purposes set out in this Privacy Notice, unless a longer retention period is required
            or permitted by law (such as tax, accounting, or other legal requirements). No purpose
            in this notice will require us to keep your personal information for longer than the
            period of time in which you have an account with us.
          </p>
          <p>
            When we have no ongoing legitimate business need to process your personal information,
            we will either delete or anonymize it, or, if this is not possible (for example,
            because it has been stored in backup archives), we will securely store it and isolate
            it from any further processing until deletion is possible.
          </p>

          <h2 id="infominors" className={s.h2}>
            7. DO WE COLLECT INFORMATION FROM MINORS?
          </h2>
          <p className={s.short}>
            <strong>In Short:</strong> We do not knowingly collect data from or market to children
            under 18 years of age or the equivalent age as specified by law in your jurisdiction.
          </p>
          <p>
            We do not knowingly collect, solicit data from, or market to children under 18 years of
            age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly
            sell such personal information. By using the Services, you represent that you are at
            least 18 or the equivalent age in your jurisdiction, or that you are the parent or
            guardian of such a minor and consent to the minor&apos;s use of the Services. If we
            learn that personal information from users under 18 has been collected, we will
            deactivate the account and take reasonable measures to promptly delete such data from
            our records. If you become aware of any data we may have collected from children under
            18, please contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>

          <h2 id="privacyrights" className={s.h2}>
            8. WHAT ARE YOUR PRIVACY RIGHTS?
          </h2>
          <p className={s.short}>
            <strong>In Short:</strong> Depending on where you live, you have rights that give you
            more access to and control over your personal information. You may review, change, or
            terminate your account at any time.
          </p>
          <p>
            In some regions (like Canada), you have certain rights under applicable data protection
            laws. These may include the right (i) to request access and obtain a copy of your
            personal information, (ii) to request rectification or erasure, (iii) to restrict the
            processing of your personal information, (iv) if applicable, to data portability, and
            (v) not to be subject to automated decision-making. In certain circumstances, you may
            also have the right to object to the processing of your personal information. You can
            make such a request by using the contact details in &quot;
            <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>&quot; below.
          </p>
          <p>We will consider and act upon any request in accordance with applicable data protection laws.</p>
          <p id="withdrawconsent">
            <strong>
              <u>Withdrawing your consent:</u>
            </strong>{" "}
            If we are relying on your consent to process your personal information, which may be
            express and/or implied consent depending on the applicable law, you have the right to
            withdraw your consent at any time by contacting us using the details in &quot;
            <a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>&quot; below. This will
            not affect the lawfulness of processing before the withdrawal or, when applicable law
            allows, processing conducted on lawful grounds other than consent.
          </p>
          <p>
            <strong>
              <u>Opting out of marketing and promotional communications:</u>
            </strong>{" "}
            You can unsubscribe from our marketing and promotional communications at any time by
            clicking the unsubscribe link in our emails, replying &quot;STOP&quot; or
            &quot;UNSUBSCRIBE&quot; to our SMS messages, or contacting us using the details in
            &quot;<a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>&quot; below. You
            will then be removed from our marketing lists. We may still send you service-related
            messages, such as booking confirmations and trip updates.
          </p>
          <p>
            <strong>Text messaging.</strong> No mobile information will be shared with third
            parties or affiliates for marketing or promotional purposes. Information sharing with
            subcontractors in support services, such as customer service, is permitted. All other
            use case categories exclude text messaging originator opt-in data and consent; this
            information will not be shared with third parties.
          </p>
          <h3 className={s.h3}>Account Information</h3>
          <p>
            If you would at any time like to review or change the information in your account or
            terminate your account, you can log in to your account settings and update your user
            account, or contact us.
          </p>
          <p>
            Upon your request to terminate your account, we will deactivate or delete your account
            and information from our active databases. However, we may retain some information in
            our files to prevent fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms, and/or comply with applicable legal requirements.
          </p>
          <p>
            <strong>
              <u>Cookies and similar technologies:</u>
            </strong>{" "}
            Most web browsers are set to accept cookies by default. If you prefer, you can usually
            set your browser to remove or reject cookies. Doing so could affect certain features of
            our Services. For more information, please see our Cookie Notice:{" "}
            <Ext href={COOKIE}>{COOKIE}</Ext>.
          </p>
          <p>
            If you have questions or comments about your privacy rights, you may email us at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>

          <h2 id="DNT" className={s.h2}>
            9. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h2>
          <p>
            Most web browsers and some mobile operating systems and applications include a
            Do-Not-Track (&quot;DNT&quot;) feature you can activate to signal your preference not
            to have data about your online browsing activities monitored and collected. At this
            stage, no uniform technology standard for recognizing and implementing DNT signals has
            been finalized. As such, we do not currently respond to DNT browser signals or any
            other mechanism that automatically communicates your choice not to be tracked online.
            If a standard for online tracking is adopted that we must follow in the future, we will
            inform you in a revised version of this Privacy Notice.
          </p>
          <p>
            California law requires us to let you know how we respond to web browser DNT signals.
            Because there currently is no industry or legal standard for recognizing or honoring
            DNT signals, we do not respond to them at this time.
          </p>

          <h2 id="uslaws" className={s.h2}>
            10. WHAT PRIVACY RIGHTS DO UNITED STATES RESIDENTS HAVE?
          </h2>
          <p className={s.short}>
            <strong>In Short:</strong> Whichever US state you live in, including Massachusetts, you
            can ask to access, correct, get a copy of, or delete the personal information we hold
            about you, and opt out of targeted advertising. Some states give you additional rights
            under their own laws. More information is provided below.
          </p>

          <h3 className={s.h3}>Categories of Personal Information We Collect</h3>
          <p>
            The table below shows the categories of personal information we have collected in the
            past twelve (12) months. The examples are illustrative and do not necessarily reflect
            the personal information we collect from you. For a full description, see &quot;
            <a href="#infocollect">WHAT INFORMATION DO WE COLLECT?</a>&quot;
          </p>
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Examples</th>
                  <th>Collected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A. Identifiers</td>
                  <td>
                    Contact details, such as real name, postal address, telephone or mobile number,
                    unique personal identifier, online identifier, Internet Protocol address, email
                    address, and account name
                  </td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>B. Protected classification characteristics under state or federal law</td>
                  <td>
                    Gender, age, date of birth, race and ethnicity, national origin, marital
                    status, and other demographic data
                  </td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>C. Commercial information</td>
                  <td>
                    Booking and trip history, transaction information, and payment records (card
                    details are held by our payment provider, not by us)
                  </td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>D. Biometric information</td>
                  <td>Fingerprints and voiceprints</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>E. Internet or other similar network activity</td>
                  <td>
                    Browsing history, search history, online behavior, interest data, and
                    interactions with our and other websites, applications, systems, and
                    advertisements
                  </td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>F. Geolocation data</td>
                  <td>Pickup and drop-off locations and device location</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>G. Audio, electronic, sensory, or similar information</td>
                  <td>
                    Images and audio, video, or call recordings created in connection with our
                    business activities
                  </td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>H. Professional or employment-related information</td>
                  <td>
                    Business contact details in order to provide our Services at a business level,
                    or job title, work history, and professional qualifications if you apply for a
                    job with us
                  </td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>I. Education information</td>
                  <td>Student records and directory information</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>J. Inferences drawn from collected personal information</td>
                  <td>
                    Inferences drawn from any of the collected personal information listed above to
                    create a profile or summary about, for example, an individual&apos;s preferences
                    and characteristics
                  </td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>K. Sensitive personal information</td>
                  <td />
                  <td>NO</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We may also collect other personal information outside of these categories when you
            interact with us in person, online, by phone, or by mail in the context of:
          </p>
          <ul className={s.list}>
            <li>Receiving help through our customer support channels;</li>
            <li>Participating in customer surveys or contests; and</li>
            <li>Facilitating the delivery of our Services and responding to your inquiries.</li>
          </ul>

          <h3 className={s.h3}>Sources of Personal Information</h3>
          <p>
            Learn more about the sources of personal information we collect in &quot;
            <a href="#infocollect">WHAT INFORMATION DO WE COLLECT?</a>&quot;
          </p>

          <h3 className={s.h3}>How We Use and Share Personal Information</h3>
          <p>
            We do not use your personal information for profiling or automated decisions that
            produce legal or similarly significant effects for you. Learn more about how we use
            your personal information in &quot;
            <a href="#infouse">HOW DO WE PROCESS YOUR INFORMATION?</a>&quot;
          </p>
          <p>We collect and share your personal information through:</p>
          <ul className={s.list}>
            <li>Targeting cookies / marketing cookies</li>
            <li>Social media cookies</li>
            <li>Beacons / pixels / tags</li>
          </ul>

          <h3 className={s.h3}>Will your information be shared with anyone else?</h3>
          <p>
            We may disclose your personal information to our service providers under a written
            contract between us and each service provider. Learn more in &quot;
            <a href="#whoshare">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>&quot;
          </p>
          <p>
            We may use your personal information for our own business purposes, such as internal
            research to improve our Services. This is not considered &quot;selling&quot; your
            personal information.
          </p>
          <p>
            <strong>We do not sell your personal information for money.</strong> However, we allow
            advertising and analytics partners to collect information through cookies, pixels, and
            similar technologies on our website. Under some US state laws, this may be considered a
            &quot;sale&quot; or &quot;sharing&quot; of personal information for targeted
            advertising. In the preceding twelve (12) months, the categories of personal
            information involved were:
          </p>
          <ul className={s.list}>
            <li>Category A. Identifiers (such as IP address and online identifiers)</li>
            <li>Category E. Internet or other similar network activity</li>
            <li>Category F. Geolocation data (approximate location based on IP address)</li>
          </ul>
          <p>The categories of third parties involved are:</p>
          <ul className={s.list}>
            <li>Ad networks</li>
            <li>Retargeting platforms</li>
            <li>Social networks</li>
            <li>Data analytics services</li>
            <li>Affiliate marketing programs</li>
          </ul>
          <p>You can opt out of this at any time (see &quot;How to Exercise Your Rights&quot; below).</p>

          <h3 className={s.h3}>Your Rights</h3>
          <p>Wherever you live in the United States, you may ask us to:</p>
          <ul className={s.list}>
            <li>
              <strong>Confirm</strong> whether or not we are processing your personal data
            </li>
            <li>
              <strong>Access</strong> your personal data
            </li>
            <li>
              <strong>Correct</strong> inaccuracies in your personal data
            </li>
            <li>
              <strong>Delete</strong> your personal data
            </li>
            <li>
              <strong>Provide a copy</strong> of the personal data you previously shared with us
            </li>
            <li>
              <strong>Opt out</strong> of the processing of your personal data for targeted
              advertising or any &quot;sale&quot; or &quot;sharing&quot; of personal data
            </li>
          </ul>
          <p>
            We will not discriminate against you for exercising any of these rights. These rights
            are not absolute, and in certain cases we may decline a request as permitted by law.
            Depending on the state where you live, you may have additional rights under your
            state&apos;s privacy law, such as the right to obtain a list of the specific third
            parties to which we have disclosed personal data.
          </p>

          <h3 className={s.h3}>How to Exercise Your Rights</h3>
          <p>
            To exercise these rights, you can submit a <Ext href={DSAR}>data subject access request</Ext>
            , email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, or use the contact details at
            the bottom of this document.
          </p>
          <p>
            You can opt out of targeted advertising and any &quot;sale&quot; or &quot;sharing&quot;
            of your personal information by disabling cookies in Cookie Preference Settings or by
            contacting us.
          </p>
          <p>
            You can designate an authorized agent to make a request on your behalf. We may deny a
            request from an authorized agent who does not submit proof that they have been validly
            authorized to act on your behalf.
          </p>

          <h3 className={s.h3}>Request Verification</h3>
          <p>
            When we receive your request, we will need to verify your identity to confirm you are
            the person whose information we hold. We will only use personal information provided in
            your request to verify your identity or authority to make the request. If we cannot
            verify your identity from the information we already have, we may ask you for
            additional information for verification, security, or fraud-prevention purposes.
          </p>
          <p>
            If you submit the request through an authorized agent, we may need to collect
            additional information to verify your identity, and the agent will need to provide
            written and signed permission from you to submit the request on your behalf.
          </p>

          <h3 className={s.h3}>Appeals</h3>
          <p>
            If we decline to take action on your request, you may appeal our decision by emailing
            us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will inform you in writing of any
            action taken or not taken in response to the appeal, including a written explanation of
            the reasons. If your appeal is denied, you may submit a complaint to your state
            attorney general.
          </p>

          <h2 id="policyupdates" className={s.h2}>
            11. DO WE MAKE UPDATES TO THIS NOTICE?
          </h2>
          <p className={s.short}>
            <strong>In Short:</strong> Yes, we will update this notice as necessary to stay
            compliant with relevant laws.
          </p>
          <p>
            We may update this Privacy Notice from time to time. The updated version will be
            indicated by an updated &quot;Last updated&quot; date at the top of this Privacy
            Notice. If we make material changes, we may notify you either by prominently posting a
            notice of the changes or by sending you a notification directly. We encourage you to
            review this Privacy Notice frequently.
          </p>

          <h2 id="contact" className={s.h2}>
            12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>
          <p>
            If you have questions or comments about this notice, you may email us at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or contact us by post at:
          </p>
          <address className={s.address}>
            Boston Exclusive Transportation LLC
            <br />
            15 Quarry Ln
            <br />
            Malden, MA 02148
            <br />
            United States
          </address>

          <h2 id="request" className={s.h2}>
            13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </h2>
          <p>
            Depending on the laws where you live, you may have the right to request access to the
            personal information we collect from you, details about how we have processed it,
            correct inaccuracies, or delete it. You may also have the right to withdraw your
            consent to our processing of your personal information. These rights may be limited in
            some circumstances by applicable law. To request to review, update, or delete your
            personal information, please fill out and submit a{" "}
            <Ext href={DSAR}>data subject access request</Ext>.
          </p>
        </div>
      </article>
    </div>
  );
}
