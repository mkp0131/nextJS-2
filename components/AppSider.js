import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { router } from 'next/router';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const AppSider = () => {
  const items = [
    getItem('노드버드', '', <MailOutlined />),
    getItem('프로필', 'profile', <AppstoreOutlined />),
    getItem('설정', 'setting', <SettingOutlined />),
  ];

  const onClick = (e) => {
    const { key } = e;
    router.push(`/${key}`);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        style={{
          height: '100%',
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default AppSider;
