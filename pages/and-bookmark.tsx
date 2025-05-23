import type { NextPage } from "next";
import Description from "../components/Description";

const BookMark: NextPage = () => {
  const componayName = "DryadSoft";
  const appName = "북마크(BookMark)";
  const firstRegDate = "2023-04-08";
  const lastUpdateDate = "2025-05-23";
  const email = "dryadsoft@gmail.com";
  return (
    <div className="container flex flex-col justify-center px-4 m-auto text-lg bg-gray-200 sm:px-10">
      <h1 className="mx-auto my-4 text-2xl font-bold">
        개인정보처리방침 Privacy Policy
      </h1>
      <div className="mb-2">
        {componayName}은(는) {appName} 앱을(를) 무료로 사용할 수 있도록
        만들었습니다.
      </div>
      <div className="mb-2">
        {componayName} has developed the BookMark app as a free service.
      </div>
      <br />
      <div>
        이 페이지는 방문자가 Apple 서비스를 사용하기로 결정한 경우 개인 정보의
        수집, 사용 및 공개에 관한 정책을 사용자에게 알리는 데 사용됩니다.
      </div>
      <div>
        This page is used to inform visitors regarding our policies with the
        collection, use, and disclosure of personal information if anyone
        decides to use our Apple service.
      </div>
      <br />
      <div>
        서비스를 사용하시면 정책과 관련하여 정보를 수집하고 사용하는 것에
        동의하게 됩니다.
      </div>
      <div>
        By using the service, you agree to the collection and use of information
        in accordance with this policy.
      </div>
      <br />
      <div>
        우리가 수집하는 개인 정보는 서비스를 제공하고 개선하는 데 사용됩니다.
      </div>
      <div>
        The personal information that we collect is used to provide and improve
        the service.
      </div>
      <br />
      <div>
        우리는 이 개인 정보 보호 정책에 설명 된 경우를 제외하고는 어떤경우에도
        귀하의 정보를 사용하거나 공유하지 않습니다
      </div>
      <div>
        We will not use or share your information with anyone except as
        described in this Privacy Policy.
      </div>
      <br />
      <div className="mb-8">
        본 개인 정보 취급 방침에서 사용되는 용어는 본 개인 정보 취급 방침에서
        달리 정의되지 않는 한 ‘이용 약관’에서 액세스 할 수있는 이용 약관과
        동일한 의미를 갖습니다.
      </div>
      <div className="mb-8">
        Unless otherwise defined in this Privacy Policy, the terms used herein
        have the same meanings as in our Terms and Conditions.
      </div>
      <br />
      <Description title="정보 수집 및 사용 Information Collection and Use">
        더 나은 경험을 위해 서비스를 사용하는 동안 특정 개인 식별 정보를
        제공해야 할 수도 있습니다.
        <br />
        For a better experience, while using our service, we may require you to
        provide certain personally identifiable information.
        <br />
        <br />
        우리가 요청한 정보는 이 개인 정보 취급 방침에 설명 된대로 당사에
        보유되고 사용됩니다.
        <br />
        The information that we request will be retained and used as described
        in this Privacy Policy.
        <br />
        <br />
        앱은 귀하를 식별하는 데 사용되는 정보를 수집 할 수있는 제 3 자 서비스를
        사용합니다.
        <br />
        This app uses third-party services that may collect information used to
        identify you.
        <br />
        <br />
        앱에서 사용하는 타사 서비스 제공 업체의 개인 정보 취급 방침에 대한 링크
        <br />
        Below are links to the privacy policies of third-party service providers
        used by the app:
        <br />
        <br />
        <a href="https://policies.google.com/privacy">
          <span className="text-blue-500">Google Social Login</span>
        </a>
        <br />
        서비스를 이용하는데 필요한 최소한의 식별정보(로그인ID)만을 이용하며
        <br />
        Only the minimum identification information required to use the service
        (login ID) is used,
        <br />
        <br />
        이름, 주소, 이메일정보등은 외부(서버등)에 절대 수집하거나 저장하지
        않습니다
        <br />
        We do not collect or store any name, address, or email information on
        external servers.
        <br />
        <br />
      </Description>
      <Description title="다른 사이트 링크 Links to Other Sites">
        이 서비스에는 다른 사이트에 대한 링크가 포함되어있을 수 있습니다.
        <br />
        This service may contain links to other websites.
        <br />
        <br />
        제 3자 링크를 클릭하면 해당 사이트로 연결됩니다.
        <br />
        If you click on a third-party link, you will be directed to that site.
        <br />
        <br />
        이러한 외부 사이트는 {componayName}에서 운영하지 않습니다.
        <br />
        These external sites are not operated by {componayName}.
        <br />
        <br />
        따라서 이 웹 사이트의 개인 정보 취급 방침을 검토하는 것이 좋습니다.
        <br />
        Therefore, we strongly advise you to review the privacy policies of
        those websites.
        <br />
        <br />
        우리는 제3자 사이트 또는 서비스의 내용, 개인 정보 보호 정책 또는 관행에
        대해 어떠한 통제도하지 않으며 책임을지지 않습니다.
        <br />
        We have no control over and assume no responsibility for the content,
        privacy policies, or practices of any third-party sites or services.
        <br />
        <br />
      </Description>
      <Description title="어린이 개인 정보 보호 Children’s Privacy">
        이 서비스는 전연령을 대상으로 합니다.
        <br />
        This service is intended for all age groups.
        <br />
        <br />
        서비스를 이용하는데 필요한 최소한의 식별정보(로그인ID)만을 이용하며
        <br />
        Only the minimum identification information required to use the service
        (login ID) is used,
        <br />
        <br />
        이름, 주소, 이메일정보등은 외부(서버등)에 절대 수집하거나 저장하지
        않습니다.
        <br />
        We do not collect or store any name, address, or email information on
        external servers.
        <br />
        <br />
        부모님 또는 보호자이며 자녀가 개인 정보를 제공 한 사실을 알고 계시다면
        저희에게 연락하여 필요한 조치를 취할 수 있도록하십시오.
        <br />
        If you are a parent or guardian and you are aware that your child has
        provided us with personal information, please contact us so that we can
        take the necessary actions.
        <br />
      </Description>
      <Description title="서비스제공국가 Service Coverage">
        해당 서비스는 전 세계 사용자를 대상으로 제공됩니다.
        <br />
        This service is available to users worldwide.
      </Description>
      <Description title="개인 정보 보호 정책의 변경 Changes to This Privacy Policy">
        개인 정보 보호 정책은 수시로 업데이트 될 수 있습니다.
        <br />
        We may update our Privacy Policy from time to time.
        <br />
        <br />
        따라서 이 페이지를 정기적으로 검토하여 변경 사항을 확인하는 것이
        좋습니다.
        <br />
        Thus, you are advised to review this page periodically for any changes.
        <br />
        <br />
        이 페이지에 새로운 개인 정보 취급 방침을 게시함으로써 변경 사항을 알려
        드리겠습니다.
        <br />
        We will notify you of any changes by posting the new Privacy Policy on
        this page.
        <br />
        <br />
        이 변경 사항은 이 페이지에 게시 된 후 즉시 적용됩니다.
        <br />
        These changes are effective immediately after they are posted on this
        page.
        <br />
        <br />
        최초등록 : {firstRegDate}
        <br />
        First Published: {firstRegDate}
        <br />
        <br />
        최종수정 : {lastUpdateDate}
        <br />
        Last Updated: {lastUpdateDate}
        <br />
      </Description>
      <Description title="서비스제공자 연락처 Contact Us">
        개인 정보 보호 정책에 관한 질문이나 제안 사항이 있으시면 언제든지
        저희에게 연락하십시오.
        <br />
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us:
        <br />
        <br />
        이메일 : {email}
        <br />
        Email: {email}
      </Description>
    </div>
  );
};

export default BookMark;
