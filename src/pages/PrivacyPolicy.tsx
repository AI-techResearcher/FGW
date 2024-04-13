function TextBlock({
  title,
  children,
}: {
  title: string
  children: JSX.Element[] | JSX.Element | string
}) {
  return (
    <div className='py-6'>
      <h2 className='text-lg font-medium mb-4 text-gray-300'>{title}</h2>
      <p>{children}</p>
    </div>
  )
}
function PrivacyPolicy() {
  return (
    <main className='bg-slate-950 dark pb-20 px-4'>
      <div className='header py-20 text-gray-200 text-center page-header-svg'>
        <h1 className='scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl'>
          Privacy Policy
        </h1>
      </div>
      <div className='max-w-5xl mx-auto text-gray-400/100 py-4'>
        <p>
          Your privacy is important to FutureGreenWorld. This privacy policy
          (“Policy”) applies to the FutureGreenWorld sites and services and
          tells you how personal information is collected, used, disclosed, and
          protected by FutureGreenWorld. This statement includes both
          FutureGreenWorld's European Union - U.S. Safe Harbor Privacy Statement
          and the Website Privacy Statements.
        </p>
        <TextBlock title='Changes to This Policy'>
          We may change this Policy from time to time. If we make any changes to
          this Policy, we will change the “last updated” date above. If there
          are material changes to this Policy, we will notify you more directly.
          We encourage you to check this Policy whenever you use our Web sites
          and services to understand how your personal information is used
        </TextBlock>
        <TextBlock title='Information Collected'>
          <>
            We collect information from you in various ways when you use our Web
            sites and services. We may also supplement this information with
            information from other companies. We collect two general types of
            information, namely personal information and aggregate data. As used
            in this Policy, the term “personal information” means information
            that specifically identifies an individual (such as a name and email
            address), and demographic and other information when directly linked
            to information that can identify an individual. <br />
            <br /> Our definition of personal information does not include
            “aggregate” data. Aggregate data is information we collect about a
            group or category of services or users from which individual user
            identities have been removed. In other words, no personal
            information is included in aggregate data. Aggregate data helps us
            understand trends in our users needs so that we can better consider
            new features or otherwise tailor our services. This Policy in no way
            restricts or limits our collection and use of aggregate data, and we
            may share aggregate data about our users with third parties for
            various purposes, including to help us better understand our
            customer needs and improve our services and for advertising and
            marketing purposes.
            <br />
            <br />
            The following are the specific types of information we collect from
            you Information You Give Us. We collect information you give us on
            our Web site and when you register for and use our services.
            Examples include the following:
            <br />
            <br />
            Registration and Profile Information. When you register to use our
            services or update your profile, we may collect various kinds of
            information about you including, your name and email address; your
            title, company and other profile information you provide;
            demographic information; and information you upload like photos,
            files, and documents.
            <br />
            <br />
            Payment Information. If you choose to use a paid FutureGreenWorld's
            account or service, our payment processing vendor collects your
            credit card information and billing address.
            <br />
            <br /> Third-Party Account Information. When you connect our
            services to your marketplace accounts on third-party websites, we
            collect the login and authentication information necessary to
            maintain the connection, as well as any information downloaded from
            these third-party websites, such as order and inventory information.
            <br />
            <br />
            Submissions and Customer Service. From time to time we may use
            surveys, contests or sweepstakes requesting personal or demographic
            information and customer feedback.
            <br />
            <br />
            Automatically Collected Information. We automatically receive
            certain types of information when you interact with our Web pages,
            services and communications. For example, it is standard for your
            Web browser to automatically send information to every Web site you
            visit, including ours. That information includes your computer's IP
            address, access times, your browser type and language, and referring
            Web site addresses. We may also collect information about the type
            of operating system you use, your account activity, and files and
            pages accessed or used by you
            <br />
            <br />
            Cookies and Web Beacons. We may also use certain kinds of technology
            such as cookies and Web beacons to collect information. Among other
            things, the use of cookies and Web beacons enables us to improve our
            Web sites and emails by seeing which areas and features are most
            popular, to count the number of computers accessing our Web site, to
            personalize and improve your experience, to record your preferences,
            and to allow you to visit our Web site without re-entering your
            member ID and/or password. A cookie is a small amount of data which
            is sent to your browser from a Web site's computers and stored on
            your computer's hard drive. Most browsers automatically accept
            cookies as the default setting. You can modify your browser setting
            to reject our cookies or to prompt you before accepting a cookie by
            editing your browser options. However, if a browser is set not to
            accept cookies or if a user rejects a cookie, some portions of the
            Web site and services may not function properly.
            <br />
            <br />
            For example, you may not be able to sign in and access certain Web
            page features or services. A Web beacon is an electronic image, also
            called a “gif,” that may be used on our Web pages to deliver
            cookies, count visits and compile statistics on usage and campaign
            effectiveness or in our emails to tell if an email has been opened
            and acted upon
          </>
        </TextBlock>
        <TextBlock title='Use of Personal Information'>
          <>
            In general, we use your personal information to process your
            requests or transactions, to provide you with information or
            services you request, to inform you about other information, events,
            promotions, products or services we think will be of interest to
            you, to facilitate your use of, and our administration and operation
            of, the Web site and services and to otherwise serve you and our
            users. For example, we may use your personal information:
            <br />
            <br />
            To request feedback and to enable us to develop, customize and
            improve the Web site and our publications, products and services;
            <br />
            <br />
            To conduct marketing analysis, to send you surveys or newsletters,
            to contact you about services, products, activities, special events
            or offers from FutureGreenWorld or our partners and for other
            marketing, informational, product or service development and
            promotional purposes;
            <br />
            <br />
            To send you a welcoming email and to contact you about your use of
            the Web site and services; to respond to your emails, submissions,
            comments, requests or complaints; to perform after-sales services;
            to anticipate and resolve problems with our service; to respond to
            customer support inquiries, for assistance with our product and
            service development; and to inform you of updates to products and
            services from FutureGreenWorld that better meet your needs;
            <br />
            <br />
            To send and receive order and inventory information from third-party
            websites in which you have an account for the purposes of the
            services of our websites;
            <br />
            <br />
            To contact you if you win a contest; and for other purposes about
            which we notify you. FutureGreenWorld may store and process personal
            information in the United States and other countries.
            <br />
            <br />
            FutureGreenWorld adheres to the U.S. Department of Commerce's Safe
            Harbor privacy principles regarding the collection, use, and
            retention of personal information from the European Union. For more
            information about the Safe Harbor Principles, please visit the U.S.
            Department of Commerce's Website at http://export.gov/safeharbor/.
          </>
        </TextBlock>
        <TextBlock title='Sharing of Personal Information'>
          <>
            FutureGreenWorld reserves the right to share aggregated demographic
            information about our customers, sales, and traffic to our partners
            and advertisers. We will not give, sell, rent, share, or trade any
            of your personal information or any data that you store using our
            services to any third party except as outlined in this Policy or
            with your consent. We may disclose information to a third party to
            (a) comply with laws or respond to lawful requests and legal
            process, (b) to protect FutureGreenWorld, agents, customers, and
            others including to enforce our agreements, policies and terms of
            use or (c) in the good faith belief that disclosure is needed to
            respond to an emergency, or protect the personal safety of any
            person.
            <br />
            <br />
            FutureGreenWorld provides you with opportunities to connect with
            third party services and includes product features that by their
            nature share information with those third party services. Those
            services can see your merchantorder information, inventory
            information and counts, shipment tracking numbers and other related
            information. If you choose to use any such third party services, we
            may facilitate sharing of your information with those services. Your
            use of such services is not governed by FutureGreenWorld's terms or
            privacy policy.
            <br />
            <br />
            FutureGreenWorld does not control the services of those third
            parties or how they use your information and documents. Be sure to
            review the terms and the privacy policies of those third parties
            before using their services.
            <br />
            <br />
            We may share personal information in connection with an acquisition,
            merger, or sale of all or a substantial portion of our business,
            with or to another company. In any such event, you will receive
            notice if your data is transferred and becomes subject to a
            substantially different privacy policy.
          </>
        </TextBlock>
        <TextBlock title='Network and Information Security'>
          <>
            FutureGreenWorld takes reasonable steps to protect information we
            collect from you to prevent loss, misuse and unauthorized access,
            disclosure, alteration, and destruction. In addition, highly
            confidential personal information such as credit card number and
            password that we request from you on our Web site is protected with
            encryption, such as Secured Socket Layer (SSL) protocol, during
            transmission over the Internet.
            <br />
            <br />
            The servers on which information is stored are kept in a controlled
            environment with limited access. While we take reasonable efforts to
            guard personal information we knowingly collect directly from you,
            no security system is impenetrable. In addition, we cannot guarantee
            that any passively-collected personal information you choose to
            store on our systems are maintained at adequate levels of protection
            to meet specific needs or obligations you may have relating to that
            information.
            <br />
            <br />
            Your account information and access to our service is accessible
            only through the use of an individual user ID and password. To
            protect the confidentiality of personal information, you must keep
            your password confidential and not disclose it to any other person.
            Please advise us immediately if you believe your password has been
            misused. In addition, always logout and close your browser when you
            finish your session. Please note that we will never ask you to
            disclose your password in an unsolicited phone call or email.
          </>
        </TextBlock>
        <TextBlock title='Updating and Accessing Personal Information'>
          If your personal information changes in any way, we invite you to
          correct or update your information as soon as possible. You can make
          updates to your profile information by logging into your account on
          FutureGreenWorld at any time. You can also request changes or access
          to your information by emailing FutureGreenWorld.
        </TextBlock>
        <TextBlock title='Choice/Opt-Out'>
          FutureGreenWorld may send you communications or data regarding our Web
          sites and services, including but not limited to (i) notices about
          your use of our Web sites and services, including any notices
          concerning violations of use, (ii) updates, and (iii) promotional
          information and materials regarding our products and services. You may
          opt-out of receiving promotional emails from FutureGreenWorld by
          following the opt-out instructions provided in those emails. Opt-out
          requests will not apply to transactional service messages, such as
          security alerts and notices about your current account and services.
        </TextBlock>
        <TextBlock title='Return & Refund Policy'>
          Thanks for shopping at FutureGreenWorld. If, however, you are not
          entirely satisfied with your purchase, we're here to help. Please read
          below for further details.
        </TextBlock>
        <TextBlock title='Returns'>
          You have 30 (change this) calendar days to return an item from the
          date you received it. To be eligible for a return, your item must be
          unused and in the same condition that you received it. Your item must
          be in the original packaging. Your item needs to have the receipt or
          proof of purchase.
        </TextBlock>
        <TextBlock title='Refunds'>
          Once we receive your item, we will inspect it and notify you that we
          have received your returned item. We will immediately notify you on
          the status of your refund after inspecting the item. If your return is
          approved, we will initiate a refund to your credit card (or original
          method of payment). You will receive the credit within a certain
          amount of days, depending on your card issuer's policies.
        </TextBlock>
        <TextBlock title='Shipping'>
          You will be responsible for paying for your own shipping costs for
          returning your item. Shipping costs are nonrefundable. If you receive
          a refund, the cost of return shipping will be deducted from your
          refund. If you have any questions on how to return your item to us,
          contact us directly.
        </TextBlock>
        <TextBlock title='Enforcement'>
          If you have any questions about this Policy, you should first contact
          us at FutureGreenWorld.
        </TextBlock>
        <TextBlock title='Contacting Us'>
          Any questions about this Policy should be addressed to
          FutureGreenWorld.
        </TextBlock>
      </div>
    </main>
  )
}

export default PrivacyPolicy
