import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Follower from '../../components/Follower';
import Following from '../../components/Following';

const { Meta } = Card;

export default function Profile() {
  return (
    <>
      <Seo title="프로필" />

      <h2>Profile</h2>

      <Card
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random">MK</Avatar>}
          title="MKP"
        />
        <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
      </Card>

      <Following />
      <Follower />
    </>
  );
}
