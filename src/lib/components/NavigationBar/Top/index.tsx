import { GraphicStyles, TypographyStyles } from '@lib/foundation';
import * as St from './style';
import { INavTop } from './type';
import Icon from '@lib/foundation/Icon';

const NavigationBarTop = ({ page = 'home' }: INavTop) => {
  const centerList = ['직원 관리', '수강권 관리', '기록 관리', '미디어 관리', '운영 데이터', '알림메시지', '센터 정보'];
  const mypage = ['내 정보', '공지사항', '앱 설정', '운영데이터'];
  const memberName = '박관리자01';
  return (
    <St.NavTopContainer>
      <GraphicStyles name='logo' extension='svg' />

      {/* 타이포그래피 바디3 세미볼드 적용시켜야 함 */}
      <St.ItemsList>
        {page === 'center' && centerList.map((item) => <li>{item}</li>)}
        {page === 'mypage' && mypage.map((item) => <li>{item}</li>)}
      </St.ItemsList>

      <St.FixedItems>
        <St.Line100 />
        <St.UserInfo>
          <GraphicStyles name='Profile_24px' extension='svg' />
          <span>{memberName}</span>
          <div>플랜 이용중</div>
        </St.UserInfo>
        <St.Line100 />
        <St.IconWrapper>
          <Icon name='notice' extension='svg' />
        </St.IconWrapper>
      </St.FixedItems>
    </St.NavTopContainer>
  );
};
export default NavigationBarTop;
