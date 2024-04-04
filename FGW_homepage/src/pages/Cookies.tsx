import { Button } from '@/components/ui/button'

function TextBlock({
  title,
  children,
}: {
  title: string
  children: JSX.Element[] | JSX.Element | string
}) {
  return (
    <div className='py-6'>
      <h2 className='text-lg font-medium mb-4'>{title}</h2>
      <p>{children}</p>
    </div>
  )
}
function Cookies() {
  return (
    <main className='bg-slate-950 dark pb-20 px-4'>
      <div className='header py-20 text-gray-200 text-center page-header-svg'>
        <h1 className='scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl'>
          Cookie Policy for FutureGreenWorld (FGW)
        </h1>
        <p className='text-center text-sm text-gray-300 mt-5'>
          Last updated: [30/09/2023]
        </p>
      </div>
      <div className='max-w-5xl mx-auto text-gray-400/100 py-4'>
        <TextBlock title='1. Introduction'>
          FutureGreenWorld uses cookies on the FGW website. By using our
          website, you consent to the use of cookies. Our Cookies Policy
          explains what cookies are, how we use cookies, how third-parties we
          may partner with may use cookies on the service, your choices
          regarding cookies, and further information about cookies.
        </TextBlock>
        <TextBlock title='2. What Are Cookies?'>
          Cookies are small pieces of text sent to your web browser by a website
          you visit. A cookie file is stored in your web browser and allows the
          Service or a third-party to recognize you and make your next visit
          easier and the Service more useful to you.
        </TextBlock>
        <TextBlock title='3. How FutureGreenWorld Uses Cookies?'>
          When you use and access the FGW service, we may place a number of
          cookie files in your web browser. We use cookies for the following
          purposes: to enable certain functions of the service, to provide
          analytics, to store your preferences, to enable advertisements
          delivery, including behavioral advertising.
        </TextBlock>
        <TextBlock title='4. Types of Cookies Used'>
          <>
            Session Cookies: We use Session Cookies to operate our Service.{' '}
            <br /> - Preference Cookies: We use Preference Cookies to remember
            your preferences and various settings. <br />- Security Cookies: We
            use Security Cookies for security purposes. <br /> - Analytics
            Cookies: We use Analytics Cookies to track information about how the
            Service is used so that we can make improvements.
          </>
        </TextBlock>
        <TextBlock title='5. Third-party Cookies'>
          In addition to our own cookies, we may also use various third-parties
          cookies to report usage statistics of the Service, deliver
          advertisements on and through the Service, and so on.
        </TextBlock>
        <TextBlock title='6. Your Choices Regarding Cookies'>
          You have the option to either accept or refuse these cookies and know
          when a cookie is being sent to your computer. If you choose to refuse
          our cookies, you may not be able to use some portions of our Service.
        </TextBlock>
        <TextBlock title='8. Contact Us'>
          <>
            If you have any questions about our Cookie Policy, please contact
            us: - By email:{' '}
            <Button variant={'link'} className='px-0' asChild>
              <a href='mailto:support@futuregreenworld.com'>
                support@futuregreenworld.com
              </a>
            </Button>
          </>
        </TextBlock>
        <TextBlock title='Changes to This Cookie Policy'>
          We may update our Cookie Policy from time to time. We will notify you
          of any changes by posting the new Cookie Policy on this page. You are
          advised to review this Cookie Policy periodically for any changes.
        </TextBlock>
      </div>
    </main>
  )
}

export default Cookies
