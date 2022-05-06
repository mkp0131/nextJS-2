import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const onSearch = (value) => console.log(value);

const Logo = styled.div`
  font-size: 50px;
  width: 50px;
  height: 100%;
  color: ${(props) => props.theme.logoColor};
`;

const StHeader = styled(Header)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  height: 60px;
`;

export default function AppHeader() {
  return (
    <>
      <StHeader>
        <Link href="/">
          <a>
            <Logo>
              <TwitterOutlined />
            </Logo>
          </a>
        </Link>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </StHeader>
    </>
  );
}
