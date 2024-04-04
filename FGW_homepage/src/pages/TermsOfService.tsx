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
function TermsAndCondition() {
  return (
    <main className='bg-slate-950 dark pb-20 px-4'>
      <div className='header py-20 text-gray-200 text-center page-header-svg'>
        <h1 className='scroll-m-20 text-3xl font-medium tracking-tight lg:text-4xl'>
          Terms of Service Agreement
        </h1>
      </div>
      <div className='max-w-5xl mx-auto text-gray-400/100 py-4'>
        <p>
          Welcome to FutureGreenWorld! By using this Site, the services
          available at this Site, and any service, software, application,
          plug-in, component, functionality, or program created by
          FutureGreenWorld (together, the “Services”), you are agreeing to the
          following terms and conditions. These terms and conditions, along with
          any other policies or guidelines posted on this Site, shall govern
          your use of this Site and the Services, whether directly or through a
          third-party site. Please read them carefully before using this Site or
          the Services. Should you have any questions concerning this Agreement,
          please contact support@FutureGreenWorld .com. By visiting this Site
          and/or by completing the registration process for the Services, you
          represent and warrant that you have read, understand, have the legal
          capacity to, and hereby agree to be legally bound by these terms and
          conditions. FutureGreenWorld is available for online retailers.
          REGISTRANTS BETWEEN THE AGES OF 13 AND 18, HOWEVER, MUST HAVE A PARENT
          ASSIST IN THE COMPLETION OF REGISTRATION.
        </p>
        <TextBlock title='A. MODIFICATIONS TO THIS AGREEMENT'>
          We reserve the right, at our sole discretion, to change, modify or
          otherwise alter these terms and conditions at any time. You can find
          the most recent version of these terms and conditions on the Site,
          with the date of last modification noted above. Such modifications
          shall become effective immediately upon the posting thereof.
          Therefore, we encourage you to check the date of our terms and
          conditions whenever you visit this Site to check if they have been
          updated. You must review this agreement on a regular basis to keep
          yourself apprised of any changes. If you do not agree to the revised
          terms and conditions, your sole recourse is to immediately stop all
          use of the Services. Your continued use of the Services following the
          posting of modifications will constitute your acceptance of the
          revised terms and conditions. Should you have any questions regarding
          the use of our Site, please reach us at support@FutureGreenWorld .com.
        </TextBlock>
        <TextBlock title='B. YOUR REGISTRATION OBLIGATIONS'>
          To obtain and use the Services, you will be required to register with
          FutureGreenWorld by completing a registration form and designating a
          user ID and password. When registering with FutureGreenWorld you agree
          to: (a) provide true, accurate, current and complete information about
          yourself as prompted by the Service’s registration form (such
          information being the “Registration Data”) and (b) maintain and
          promptly update the Registration Data to keep it true, accurate,
          current and complete. If you provide any information that is untrue,
          inaccurate, not current or incomplete, or we have grounds to suspect
          that such information is untrue, inaccurate, not current or
          incomplete, we may suspend or terminate your account and refuse any
          and all current or future use of the Services (or any portion
          thereof). You may not authorize any third party to access or use the
          Services on your behalf. You are responsible for maintaining the
          confidentiality of the user ID and password, and are fully responsible
          for all activities that occur under your user ID or password. You
          agree to immediately notify FutureGreenWorld of any unauthorized use
          of your user ID or password or any other breach of security.
          FutureGreenWorld cannot and will not be liable for any loss or damage
          arising from any unauthorized use of your account.
        </TextBlock>
        <TextBlock title='C. CONSENT TO ELECTRONIC COMMUNICATIONS AND SOLICITATION'>
          By registering with FutureGreenWorld, you understand that we may send
          you communications or data from FutureGreenWorld regarding the
          Services, including but not limited to (i) notices about your use of
          the Services, including any notices concerning violations of use, (ii)
          updates, and (iii) promotional information and materials regarding
          FutureGreenWorld’s products and services, via electronic mail. We give
          you the opportunity to opt-out of receiving electronic mail from us by
          following the opt-out instructions provided in the message.
        </TextBlock>
        <TextBlock title='D. USER CONDUCT/ACCEPTABLE USE POLICY'>
          Unauthorized use of the FutureGreenWorld service, or the resale of
          said service without our prior written consent, is expressly
          prohibited. You shall not copy, sell, transfer, distribute, publish,
          or assign your license to our services in any format to any third
          party. In addition, you may not use the Services in any way that
          violates applicable federal, state, or international law, or for any
          unlawful purpose. Further, you may not use the Services to send,
          receive, or download messages or materials that are inappropriate or
          violate the intellectual property rights of FutureGreenWorld or
          others. To the extent that the Services provide Users an opportunity
          to retrieve and send inventory and order information from User’s
          marketplace accounts (“User Content”), you hereby represent and
          warrant that you have all necessary rights in and to all User Content
          you provide and all information contained therein. By registering to
          use the Services, you understand and acknowledge that FutureGreenWorld
          and its contractors retain an irrevocable, royaltyfree, worldwide
          license to use, copy, and publicly display such content for the sole
          purpose of providing to you the Services for which you have
          registered. In the event that you give FutureGreenWorld the right to
          distribute your content, additional terms may apply to
          FutureGreenWorld’s usage or distribution of this content. You continue
          to retain all ownership rights in any User Content you provide and
          shall remain solely responsible for your conduct, your User Content,
          and any material or information transmitted to other Users for
          interaction with other Users. FutureGreenWorld does not claim any
          ownership rights in any User Content. Content posted by Users and
          other non-FutureGreenWorld contributors are generally not reviewed by
          FutureGreenWorld. FutureGreenWorld shall have the right, but not the
          obligation, to reject, refuse to post, or otherwise monitor all
          content displayed by users, and may remove or require users to remove
          all content that FutureGreenWorld, in its sole discretion, deems to be
          (a) inconsistent with FutureGreenWorld’s strategic mission and vision
          (including but not limited to content that contains undesirable images
          of or links or references to tobacco and alcohol products, profanity,
          pornography, violence or prejudicial content) and/or these Terms of
          Use; or (b) possibly in violation of applicable law. In addition,
          FutureGreenWorld has the right to remove any content if
          FutureGreenWorld has reason to believe that displaying such content
          may infringe the rights of a third party or subject FutureGreenWorld
          to expense or liability. Please notify us by ticket submission from
          our help page regarding any content that you believe might violate
          applicable law or your intellectual property rights or contain
          undesirable images of or links or references to tobacco and alcohol
          products, profanity, pornography, violence, prejudicial content, or
          content that is obscene, lewd, lascivious, filthy, excessively
          violent, harassing, or otherwise objectionable. FutureGreenWorld
          reserves the right, in its sole discretion, to determine whether and
          what action to take in response to each such notification, and any
          action or inaction in a particular instance shall not dictate or limit
          FutureGreenWorld’s response to a future complaint. You acknowledge and
          agree that FutureGreenWorld shall not assume or have any liability for
          any action or inaction by FutureGreenWorld with respect to any User
          Content. Additionally, FutureGreenWorld reserves the right, without
          limitation, to terminate your access to and use of the Site and
          Services if, in our view, your conduct fails to meet any of the
          following guidelines for User conduct: 1. You may not attempt to harm,
          disrupt, or otherwise engage in activity that diminishes, the
          FutureGreenWorld Site, computer systems and network, or the Services.
          2. You may not attempt to interfere with any other person’s use of the
          Services. 3. You may not misrepresent your identity or impersonate any
          person. 4. You may not attempt to gain access to any account,
          computers or networks related to the Services without authorization.
          5. You may not attempt to obtain any data through any means from the
          Services, except if we intend to provide or make it available to you.
          6. You may not attempt to charge others to use the Services either
          directly or indirectly. 7. You may not use the Services to participate
          in pyramid schemes or chain letters. 8. You may not use the Services
          to send, either directly or indirectly, any unsolicited bulk e-mail or
          communications or unsolicited commercial e-mail or communications. 9.
          You may not use the Services for defaming, abusing, harassing,
          stalking, threatening or otherwise violating the legal rights of
          others. 10. You may not use the Services to send or otherwise make
          available, any material protected by intellectual property laws unless
          you own or control the rights to such material or have received all
          necessary consents. 11. You may not use the Services to send or
          otherwise making available any material that contains viruses, Trojan
          horses, worms, corrupted files, or any other similar software that may
          damage the operation of another’s computer or property. 12. You may
          not use the Services to download any material sent by another User of
          the Services that you know, or reasonably should know, cannot be
          legally distributed in such manner. 13. You may not use the Services
          to violate any code of conduct or other guidelines which may be
          applicable to the Services or the Site. 14. You may not use the
          Services to harvest or otherwise collecting information about others,
          including e-mail addresses. 15. You may not attempt to modify,
          translate, adapt, edit, copy, decompile, disassemble, reproduce, or
          reverse engineer any information or software used or provided by
          FutureGreenWorld in connection with the FutureGreenWorld Site or
          Services, or any component of the Site itself or derivative works with
          respect thereto. 16. You may not use the Services in a manner that
          results in excessive bandwidth usage, as determined by a
          representative of FutureGreenWorld. Use of the Services on the Site as
          well as use of the Services on any desktop application will be applied
          toward such bandwidth usage. All judgments concerning the
          applicability of these guidelines shall be at the sole and exclusive
          discretion of FutureGreenWorld. FutureGreenWorld reserves the right,
          in its sole discretion, to determine whether and what action to take
          in response to each such notification, and any action or inaction in a
          particular instance shall not dictate or limit FutureGreenWorld’s
          response to a future complaint. You acknowledge and agree that
          FutureGreenWorld shall not assume or have any liability for any action
          or inaction by FutureGreenWorld with respect to any User Content.
          Users shall remain solely responsible for User Content, and any
          material or information transmitted to other Users for interaction
          with other Users.
        </TextBlock>
        <TextBlock title='E. INTELLECTUAL PROPERTY RIGHTS AND NOTICES'>
          Except for the licenses granted herein, you have no right, title or
          interest in or to FutureGreenWorld Services or any content. You agree
          that FutureGreenWorld or its licensors retain all proprietary right,
          title and interest, including copyright and all other intellectual
          property rights, in and to FutureGreenWorld service and content,
          including, without limitation, text, images, and other multimedia
          data. You agree that you will not copy, reproduce, distribute or
          create derivative works from any information, content, software or
          materials provided by FutureGreenWorld, or remove any copyright or
          other proprietary rights notices contained in any such information,
          content, software or materials without the copyright owner’s prior
          written consent. All contents of the FutureGreenWorld’s Site and
          Services including but not limited to design, text, software,
          technical drawings, configurations, graphics, files, and their
          selection and arrangement (“Content”) are: Copyright © 2016
          FutureGreenWorld, and/or the proprietary property of its suppliers,
          affiliates, or licensors. Content may not be reproduced, modified,
          derivative works created from, displayed, performed, published,
          distributed, disseminated, broadcasted or circulated to any third
          party (including, without limitation, the display and distribution of
          the material via a third party Web site or other networked computer
          environment) without the express prior written consent of
          FutureGreenWorld and/or it suppliers, affiliates, or licensors. All
          rights reserved. FutureGreenWorld and the FutureGreenWorld logo are
          including without limitation, either trademarks, service marks or
          registered trademarks of FutureGreenWorld, and may not be copied,
          imitated, or used, in whole or in part, without FutureGreenWorld’s
          prior written permission or that of our suppliers or licensors. Other
          product and company names may be trade or service marks of their
          respective owners. FutureGreenWorld may have patents, patent
          applications, trademarks, copyrights, or other intellectual property
          rights covering subject matter in its Site that are part of the
          Services. Unless we have granted you licenses to our intellectual
          property in these terms and conditions, our providing you with such
          Web pages does not give you any license to our intellectual property.
          Any rights not expressly granted herein are reserved.
        </TextBlock>
        <TextBlock title='F. NOTICES AND PROCEDURE FOR MAKING CLAIMS OF COPYRIGHT INFRINGEMENT'>
          FutureGreenWorld respects copyright law and expects Users to do the
          same. FutureGreenWorld expressly prohibits the use of its Services for
          the illegal transmission of copyrighted material, and will respond if
          notified by content owners to disable copyrighted material from being
          transmitted via its Services. In addition, FutureGreenWorld may
          disable individual accounts if these accounts are found to be
          illegally transferring copyrighted material. If you believe that your
          work has been copied in a way that constitutes copyright infringement,
          please provide FutureGreenWorld’s Agent for Notice of claims of
          copyright or other intellectual property infringement (“Agent”) the
          written information specified below: (1) An electronic or physical
          signature of the person authorized to act on behalf of the owner of
          the copyright interest; (2) A description of the copyrighted work that
          you claim has been infringed upon; (3) A description of where the
          material that you claim is infringing is located on the Site; (4) Your
          address, telephone number, and e-mail address; (5) A statement by you
          that you have a good-faith belief that the disputed use is not
          authorized by the copyright owner, its agent, or the law; (6) A
          statement by you, made under penalty of perjury, that the above
          information in your notice is accurate and that you are the copyright
          owner or authorized to act on the copyright owner’s behalf.
          FutureGreenWorld’s Agents can be reached by submitting a ticket on our
          help page.
        </TextBlock>
        <TextBlock title='G. THIRD PARTY CONTENT, SITES AND SERVICES'>
          All transactions using FutureGreenWorld’s services are between the
          transacting parties only. The Services may contain features and
          functionalities linking you or providing you with certain
          functionality and access to third party content, including Web sites,
          directories, servers, networks, systems, information and databases,
          applications, software, programs, products or services, and the
          Internet as a whole. We may also provide some content to you as part
          of the Services. However, FutureGreenWorld is not an agent of any
          transacting party, nor are we a direct party in any such transaction.
          Any such activities, and any terms associated with such activities,
          are solely between you and the applicable third-party. Similarly, we
          are not responsible for any third party content you access with the
          Services, and you irrevocably waive any claim against us with respect
          to such sites and third-party content. FutureGreenWorld shall have no
          liability, obligation or responsibility for any such correspondence,
          purchase or promotion between you and any such third-party. You should
          make whatever investigation you feel necessary or appropriate before
          proceeding with any online or offline transaction with any of these
          third parties. You are solely responsible for your dealings with any
          third party related to the Services, including the delivery of and
          payment for goods and services. Should you have any problems resulting
          from your use of any third party services, or should you suffer data
          loss or other losses as a result of problems with any of your other
          service providers or any third-party services, we will not be
          responsible unless the problem was the direct result of our breaches.
        </TextBlock>
        <TextBlock title='H. PRIVACY'>
          FutureGreenWorld has established a Privacy Policy to explain to Users
          how their information is collected and used, which you can read on our
          Site. Your use of the Services signifies acknowledgment of and
          agreement to the FutureGreenWorld Privacy Policy. You further
          acknowledge and agree that FutureGreenWorld may disclose your personal
          information if required to do so by law or in the good faith belief
          that such preservation or disclosure is reasonably necessary to comply
          with legal process, to enforce these terms and conditions, or, in its
          sole discretion, to protect the rights, property, or personal safety
          of FutureGreenWorld, its employees, users and third parties, and the
          public, or as otherwise described in the Privacy Policy
        </TextBlock>
        <TextBlock title='I. FutureGreenWorld MAKES NO WARRANTIES'>
          FutureGreenWorld is in no way liable for loss of customer data. Under
          no circumstances will FutureGreenWorld be held accountable for any
          loss of customer data. By becoming a FutureGreenWorld user you, the
          customer, acknowledge that you forfeit the right to hold
          FutureGreenWorld accountable for any and all technical errors,
          including loss of user data (customer data). FutureGreenWorld does not
          guarantee length of service. FutureGreenWorld intends for the
          information contained on its Site and Services to be accurate and
          reliable; however, errors sometimes may occur. In addition,
          FutureGreenWorld may make changes and improvements to the information
          provided herein at any time. FutureGreenWorld PROVIDES ITS SITE AND
          SERVICES “AS IS,” “WITH ALL FAULTS” AND “AS AVAILABLE,” AND THE ENTIRE
          RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, ACCURACY, AND EFFORT IS
          WITH YOU. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,
          FutureGreenWorld, ITS AFFILIATES, RESELLERS, DISTRIBUTORS, SERVICE
          PROVIDERS AND/OR SUPPLIERS (EACH, A “FutureGreenWorld PARTY,” AND
          COLLECTIVELY, THE “FutureGreenWorld PARTIES”) MAKE NO REPRESENTATIONS,
          WARRANTIES OR CONDITIONS, EXPRESS OR IMPLIED. THE FutureGreenWorld
          PARTIES DISCLAIM ANY AND ALL WARRANTIES OR CONDITIONS, EXPRESS,
          STATUTORY AND IMPLIED, INCLUDING WITHOUT LIMITATION (1) WARRANTIES OR
          CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          WORKMANLIKE EFFORT, ACCURACY, TITLE, QUIET ENJOYMENT, NO ENCUMBRANCES,
          NO LIENS AND NON-INFRINGEMENT, (2) WARRANTIES OR CONDITIONS ARISING
          THROUGH COURSE OF DEALING OR USAGE OF TRADE, AND (3) WARRANTIES OR
          CONDITIONS THAT ACCESS TO OR USE OF THE WEB SITES WILL BE
          UNINTERRUPTED OR ERROR-FREE. SOME JURISDICTIONS DO NOT ALLOW THE
          LIMITATION OR EXCLUSION OF CERTAIN WARRANTIES OR CONDITIONS, SO SOME
          OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. THERE ARE NO WARRANTIES
          THAT EXTEND BEYOND THE FACE OF THIS CONTRACT.
        </TextBlock>
        <TextBlock title='J. LIMITATIONS OF LIABILITY'>
          IN NO EVENT WILL ANY FutureGreenWorld PARTY BE LIABLE FOR ANY DAMAGES,
          INCLUDING WITHOUT LIMITATION ANY INDIRECT, CONSEQUENTIAL, SPECIAL,
          INCIDENTAL, OR PUNITIVE DAMAGES ARISING OUT OF, BASED ON, OR RESULTING
          FROM THIS CONTRACT OR YOUR USE OF THE SOFTWARE OR SERVICE, EVEN IF
          SUCH FutureGreenWorld PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
          SUCH DAMAGES. THE EXCLUSION OF DAMAGES UNDER SECTION J IS INDEPENDENT
          OF YOUR EXCLUSIVE REMEDY AND SURVIVES IN THE EVENT SUCH REMEDY FAILS
          OF ITS ESSENTIAL PURPOSE OR IS OTHERWISE DEEMED UNENFORCEABLE. THESE
          LIMITATIONS AND EXCLUSIONS APPLY WITHOUT REGARD TO WHETHER THE DAMAGES
          ARISE FROM (1) BREACH OF CONTRACT, (2) BREACH OF WARRANTY, (3)
          NEGLIGENCE, OR (4) ANY OTHER CAUSE OF ACTION, TO THE EXTENT SUCH
          EXCLUSION AND LIMITATIONS ARE NOT PROHIBITED BY APPLICABLE LAW. SOME
          JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF CERTAIN
          WARRANTIES OR CONDITIONS, SO SOME OF THE ABOVE LIMITATIONS MAY NOT
          APPLY TO YOU. IF YOU ARE DISSATISFIED WITH THE SERVICE, YOU DO NOT
          AGREE WITH ANY PART OF THIS CONTRACT, OR YOU HAVE ANY OTHER DISPUTE OR
          CLAIM WITH OR AGAINST ANY FutureGreenWorld PARTY WITH RESPECT TO THIS
          CONTRACT OR THE SERVICE, THEN YOUR SOLE AND EXCLUSIVE REMEDY IS TO
          DISCONTINUE USING THE SERVICE. In the event that, notwithstanding the
          foregoing disclaimers and indemnification, FutureGreenWorld is found
          responsible to any FutureGreenWorld User for any reason whatsoever,
          FutureGreenWorld’s responsibility shall be limited to the amounts
          actually paid by such user for FutureGreenWorld’s services, and shall
          not include punitive damages or consequential or resulting damages of
          any nature.
        </TextBlock>
        <TextBlock title='K. CHANGES TO THE SERVICE; ADDITIONAL LIABILITY LIMITATION'>
          WE MAY CHANGE THE SOFTWARE AND SERVICE OR DELETE FEATURES AT ANY TIME
          AND FOR ANY REASON. WITHOUT LIMITING THE GENERAL NATURE OF SECTIONS H
          AND I, THE FutureGreenWorld PARTIES ARE NOT RESPONSIBLE OR LIABLE FOR
          (1) ANY CONTENT, INCLUDING WITHOUT LIMITATION, ANY INFRINGING,
          INACCURATE, OBSCENE, INDECENT, THREATENING, OFFENSIVE, DEFAMATORY,
          TORTIOUS, OR ILLEGAL CONTENT, OR (2) ANY THIRD PARTY CONDUCT,
          TRANSMISSIONS OR DATA. IN ADDITION, WITHOUT LIMITING THE GENERALITY OF
          SECTIONS G AND H, FutureGreenWorld IS NOT RESPONSIBLE OR LIABLE FOR
          (1) ANY VIRUSES OR OTHER DISABLING FEATURES THAT AFFECT YOUR ACCESS TO
          OR USE OF THE SOFTWARE AND SERVICES, (2) ANY INCOMPATIBILITY BETWEEN
          THE SOFTWARE AND SERVICES AND OTHER WEB SITES, SERVICES, SOFTWARE AND
          HARDWARE, (3) ANY DELAYS OR FAILURES YOU MAY EXPERIENCE IN INITIATING,
          CONDUCTING OR COMPLETING ANY TRANSMISSIONS OR TRANSACTIONS IN
          CONNECTION WITH THE SOFTWARE AND SERVICES IN AN ACCURATE OR TIMELY
          MANNER, (4) ANY LOSS OF USER DATA, INCLUDING, WITHOUT LIMITATION,
          DAMAGED OR LOST USER FILES, THROUGH USE OF THE SERVICE, INCLUDING,
          WITHOUT LIMITATION, THE DESKTOP SOFTWARE, OR (5) ANY DAMAGES OR COSTS
          OF ANY TYPE ARISING OUT OF OR IN ANY WAY CONNECTED WITH YOUR USE OF
          ANY SOFTWARE AND SERVICES AVAILABLE FROM THIRD PARTIES THROUGH LINKS.
          SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR
          THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR
          CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE EXCLUSIONS AND
          LIMITATIONS MAY NOT APPLY TO YOU
        </TextBlock>
        <TextBlock title='L. INDEMNIFICATION'>
          You agree to indemnify, defend and hold harmless, FutureGreenWorld,
          its affiliates, and their respective officers, directors, employees,
          agents, licensors, representatives, and third party providers, to and
          from and against all losses, expenses, damages and costs, including
          reasonable attorneys’ fees, resulting from any violation of this
          agreement by you. FutureGreenWorld reserves the right to assume, at
          its sole expense, the exclusive defense and control of any matter
          subject to indemnification by you, in which event you will fully
          cooperate with FutureGreenWorld in asserting any available defenses.
        </TextBlock>
        <TextBlock title='M. TERMINATION OF SERVICE'>
          FutureGreenWorld reserves the right to terminate without notice your
          password, account or use of FutureGreenWorld Services and delete any
          data within FutureGreenWorld service, in our sole discretion, without
          cause and/or without notice. You may terminate your user account upon
          notice to FutureGreenWorld at any time. Upon termination by
          FutureGreenWorld or at your direction, you may request a file of your
          data, which FutureGreenWorld will make available for a fee. You must
          make such request at the notification of termination to receive such
          file within thirty (30) days of termination. Otherwise, ANY DATA YOU
          HAVE STORED ON FutureGreenWorld’S SYSTEMS MAY NOT BE RETRIEVED, and
          FutureGreenWorld shall have no obligation to maintain any data stored
          in your account or to forward any data to you or any third party. In
          addition to other termination provisions, Basic Users (free accounts)
          are subject to termination if: (a) the Basic User does not engage in
          any FutureGreenWorld activity within thirty (30) days of registration,
          or (b) the Basic User does not engage in any FutureGreenWorld activity
          for any period of 120 consecutive days. We will send you an email
          describing the situation and informing you that your account will be
          closed within seven (7) days unless you begin to use the account
          during that period. At the conclusion of that seven (7) day period,
          absent any such activity we will close the account. Any data you may
          have stored will be lost.
        </TextBlock>
        <TextBlock title='N. PAYMENT OF FEES; AUTOMATIC RENEWAL'>
          The fees applicable for FutureGreenWorld service are available at
          www.LovenHate Designs.com and as published within the Services.
          FutureGreenWorld reserves the right to change the Fees or applicable
          charges and to institute new charges at any time, upon thirty (30)
          days prior notice to you (which may be sent by email to the address
          you have most recently provided us). Unless specifically agreed upon
          in writing between User and FutureGreenWorld at the commencement of a
          subscription term, at the conclusion of any service term, whether
          monthly, yearly, or otherwise, FutureGreenWorld will automatically
          renew the service for the same term and will charge the user’s credit
          card or PayPal account on the first day of the renewal term. Payments
          for all single-seat accounts are due within 30 days of billing date.
          The last day of the 14-day trial signifies the due date of first
          payment. If payment is not received by the end of the given 30 day
          time period, user’s account will be frozen and inaccessible until all
          outstanding payments have been processed by FutureGreenWorld. Users
          retain the responsibility for settling all outstanding balances in a
          timely manner and maintaining updated billing information. If not
          complied with, at the end of 90 days, user’s account will be
          deactivated and all data will no longer be retrievable.
        </TextBlock>
        <TextBlock title='O. REFUND OF CHARGES'>
          Except as specifically set forth in this section, all FutureGreenWorld
          services are prepaid for the period selected (monthly, yearly or
          otherwise) and are non-refundable. This includes accounts that are
          renewed in accordance with the previous section. Users on our free
          trial may cancel or downgrade their accounts, free of charge, at any
          time up until 14 days after their account was created. When paying
          users cancel their account, they will not be issued refunds for their
          most recent (or any previous) billing. The single exception to this is
          NON-TRIAL annual subscribers. Annual subscribers who wish to cancel or
          downgrade and request a refund may do so within 30 days of the day on
          which they were charged for their account; in these cases, only a
          partial refund equivalent to 80% of the annual fee will be returned.
          Other requests for refunds may be processed at the sole discretion of
          a FutureGreenWorld staff member. All cancellations and downgrades are
          processed automatically. To cancel or downgrade, please click the link
          or button that says “Cancel” and follow the instructions. If you have
          a question while canceling your account, you must give our email staff
          adequate time to respond to your message. Delays in our support system
          do not qualify as a reason to extend your trial period, or excuse
          canceling after 14 days. Cancellation requests sent via email to
          support@FutureGreenWorld.com will not be processed and will be replied
          to with an automatic response. You must use our form to process your
          cancellation.
        </TextBlock>
        <TextBlock title='P. CHOICE OF LAW AND LOCATION FOR RESOLVING DISPUTES'>
          These Terms of Use shall be governed by and construed in accordance
          with the laws of the State of California, excluding its
          conflicts-of-law principles. Please note that your use of the Services
          may be subject to other local, state, national, and international
          laws. You expressly agree that exclusive jurisdiction for any claim or
          dispute with FutureGreenWorld or relating in any way to your use of
          the Services resides in the courts of California and you further agree
          and expressly consent to the exercise of personal jurisdiction in the
          courts of California in connection with any such dispute including any
          claim involving FutureGreenWorld or its affiliates, subsidiaries,
          employees, contractors, officers, directors, telecommunication
          providers and content providers.
        </TextBlock>
        <TextBlock title='Q. EUROPEAN USERS'>
          By using the FutureGreenWorld Services, Users in the European Union
          understand and consent to the processing of personal information in
          the United States.
        </TextBlock>
        <TextBlock title='R. NOTICES TO FutureGreenWorld'>
          <>You may notify us by e-mail at terms@FutureGreenWorld.com.</>
        </TextBlock>
        <TextBlock title='S. OTHER TERMS'>
          If any part of these terms and conditions are determined to be invalid
          or unenforceable pursuant to applicable law including, but not limited
          to, the warranty disclaimers and liability limitations set forth
          above, then the invalid or unenforceable provision will be deemed
          superseded by a valid enforceable provision that most closely matches
          the intent of the original provision, and the remainder of the
          agreement shall continue in effect. A printed version of these terms
          and conditions and of any notice given in electronic form shall be
          admissible in judicial or administrative proceedings based upon or
          relating to these terms and conditions to the same extent and subject
          to the same conditions as other business documents and records
          originally generated and maintained in printed form. All rights not
          expressly granted herein are reserved.
        </TextBlock>
        <TextBlock title='T. MISCELLANEOUS'>
          FutureGreenWorld may assign this contract, in whole or in part, at any
          time with or without notice to you. You may not assign this contract,
          or any part of it, to any other party. Any attempt by you to do so is
          void. ANY CLAIM RELATED TO THIS CONTRACT OR THE SOFTWARE AND SERVICE
          MUST BE BROUGHT WITHIN ONE YEAR. THE ONE-YEAR PERIOD BEGINS ON THE
          DATE WHEN THE CLAIM FIRST COULD BE FILED. IF IT IS NOT, THEN THAT
          CLAIM IS PERMANENTLY BARRED. THIS APPLIES TO YOU AND YOUR SUCCESSORS.
          IT ALSO APPLIES TO US AND OUR SUCCESSORS AND ASSIGNS. The failure of
          FutureGreenWorld to exercise or enforce any right or provision of the
          terms and conditions shall not constitute a waiver of such right or
          provision. The section titles in these terms and conditions are for
          convenience only and have no legal or contractual effect.
        </TextBlock>
        <TextBlock title='U. COPYRIGHT COMPLAINTS AND REMOVAL POLICY'>
          FutureGreenWorld provides services that permit registered users of the
          FutureGreenWorld Web site (“Users”) to store content on the Web.
          FutureGreenWorld does not tolerate infringing material on its
          equipment or network, and may remove content that appears to infringe
          any copyright or other intellectual property rights or otherwise
          violates FutureGreenWorld’s Terms of Use, found on the
          FutureGreenWorld Web site (http://www.FutureGreenWorld.com). If you
          believe that your copyright in any material has been infringed on a
          site hosted on FutureGreenWorld’s equipment or through its services,
          please send a “DMCA Notice” (described below) to FutureGreenWorld’s
          Copyright Agent for Notice of Claims of Copyright Infringement. Once
          we receive a complete DMCA Notice, we will then evaluate your notice
          and take such action as is appropriate under the Digital Millennium
          Copyright Act (“DMCA”), 17 U.S.C. § 512 et seq. Federal law requires
          your DMCA Notice to include the following information: Identification
          of the copyrighted work that you claim has been infringed;
          Identification of the material, including URL, that you claim is
          infringing, with enough detail so that we may locate it; Your address,
          telephone number, and e-mail address; A statement declaring under
          penalty of perjury that (a) you have a good faith belief that the
          disputed use is not authorized by the copyright owner, its agent, or
          the law; (b) the above information in your notice is accurate, and (c)
          you are the owner of the copyright interest involved or you are
          authorized to act on behalf of that owner; and your physical or
          electronic signature. FutureGreenWorld’s Copyright Agent for Notice of
          Claims of Copyright Infringement can be reached as follows: [INSERT
          COMPANY ADDRESS/LOCATION HERE] To submit a notice of claims of
          copyright infringement online, please visit our help page and fill out
          a form. Please note that FutureGreenWorld, in its sole discretion, may
          terminate the account of any User about whom FutureGreenWorld receives
          more than one complaint of copyright infringement. If you have any
          questions about this policy, please contact FutureGreenWorld at
          support@FutureGreenWorld.com.
        </TextBlock>
      </div>
    </main>
  )
}

export default TermsAndCondition
