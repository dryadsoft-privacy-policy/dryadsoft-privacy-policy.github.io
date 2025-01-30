import type { NextPage } from "next";
import Description from "../components/Description";

const BookMark: NextPage = () => {
  const componayName = "DryadSoft";
  const appName = "북마크(BookMark)";
  const firstRegDate = "2023-04-08";
  const lastUpdateDate = "2023-04-08";
  const email = "dryadsoft@gmail.com";
  return (
    <div className="container flex flex-col justify-center px-4 m-auto text-lg bg-gray-200 sm:px-10">
      <h1 className="mx-auto my-4 text-2xl font-bold">개인정보처리방침</h1>
      <div className="mb-2">
        {componayName}은(는) {appName} 앱을(를) 무료로 사용할 수 있도록
        만들었습니다.
      </div>
      <div>
        이 페이지는 방문자가 Apple 서비스를 사용하기로 결정한 경우 개인 정보의
        수집, 사용 및 공개에 관한 정책을 사용자에게 알리는 데 사용됩니다.
      </div>
      <div>
        서비스를 사용하시면 정책과 관련하여 정보를 수집하고 사용하는 것에
        동의하게 됩니다. 우리가 수집하는 개인 정보는 서비스를 제공하고 개선하는
        데 사용됩니다. 우리는 이 개인 정보 보호 정책에 설명 된 경우를 제외하고는
        어떤경우에도 귀하의 정보를 사용하거나 공유하지 않습니다
      </div>
      <div className="mb-8">
        본 개인 정보 취급 방침에서 사용되는 용어는 본 개인 정보 취급 방침에서
        달리 정의되지 않는 한 ‘이용 약관’에서 액세스 할 수있는 이용 약관과
        동일한 의미를 갖습니다.
      </div>
      <Description title="정보 수집 및 사용">
        더 나은 경험을 위해 서비스를 사용하는 동안 특정 개인 식별 정보를
        제공해야 할 수도 있습니다. 우리가 요청한 정보는 이 개인 정보 취급 방침에
        설명 된대로 당사에 보유되고 사용됩니다
        <br />
        앱은 귀하를 식별하는 데 사용되는 정보를 수집 할 수있는 제 3 자 서비스를
        사용합니다. 앱에서 사용하는 타사 서비스 제공 업체의 개인 정보 취급
        방침에 대한 링크
        <br />
        <a href="https://policies.google.com/privacy">
          <span className="text-blue-500">Google 소셜 로그인</span>
        </a>
        <br />
        서비스를 이용하는데 필요한 최소한의 식별정보(로그인ID)만을 이용하며
        이름, 주소, 이메일정보등은 외부(서버등)에 절대 수집하거나 저장하지
        않습니다
      </Description>
      <Description title="다른 사이트 링크">
        이 서비스에는 다른 사이트에 대한 링크가 포함되어있을 수 있습니다. 제 3
        자 링크를 클릭하면 해당 사이트로 연결됩니다. 이러한 외부 사이트는{" "}
        {componayName}에서 운영하지 않습니다. 따라서 이 웹 사이트의 개인 정보
        취급 방침을 검토하는 것이 좋습니다. 우리는 제3자 사이트 또는 서비스의
        내용, 개인 정보 보호 정책 또는 관행에 대해 어떠한 통제도하지 않으며
        책임을지지 않습니다.
      </Description>
      <Description title="어린이 개인 정보 보호">
        이 서비스는 전연령을 대상으로 합니다. 서비스를 이용하는데 필요한
        최소한의 식별정보(로그인ID)만을 이용하며 이름, 주소, 이메일정보등은
        외부(서버등)에 절대 수집하거나 저장하지 않습니다. 부모님 또는 보호자이며
        자녀가 개인 정보를 제공 한 사실을 알고 계시다면 저희에게 연락하여 필요한
        조치를 취할 수 있도록하십시오.
      </Description>
      <Description title="서비스제공국가">
        해당서비스의 내용은 대한민국을 주요대상으로 합니다
        <br />
        This app is currently only available in the Korea.
      </Description>
      <Description title="개인 정보 보호 정책의 변경">
        개인 정보 보호 정책은 수시로 업데이트 될 수 있습니다. 따라서 이 페이지를
        정기적으로 검토하여 변경 사항을 확인하는 것이 좋습니다. 이 페이지에
        새로운 개인 정보 취급 방침을 게시함으로써 변경 사항을 알려 드리겠습니다.
        이 변경 사항은이 페이지에 게시 된 후 즉시 적용됩니다.
        <br />
        최초등록 : {firstRegDate}
        <br />
        최종수정 : {lastUpdateDate}
      </Description>
      <Description title="서비스제공자 연락처">
        개인 정보 보호 정책에 관한 질문이나 제안 사항이 있으시면 언제든지
        저희에게 연락하십시오.
        <br />
        이메일 : {email}
      </Description>
    </div>
  );
};

export default BookMark;
