import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styled from 'styled-components';
import { Avatar } from 'antd';

const LoginBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 19px;
`;

export default function BtnLogin() {
  return (
    <Link href="/login">
      <a>
        <LoginBox>
          <Avatar size={24} icon={<UserOutlined />} />
          로그인을 해주세요.
        </LoginBox>
      </a>
    </Link>
  );
}
