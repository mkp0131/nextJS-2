import { Card, Avatar } from 'antd';
// import { router } from 'next/router';
// import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const { Meta } = Card;

export default function UserInfo({ setIsLoggedIn }) {
  // const moveProfile = useCallback(() => {
  //   router.push(`/profile`);
  // }, []);

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <Card>
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random">MK</Avatar>}
        title="MKP"
      />
      <button onClick={logout}>로그아웃</button>
    </Card>
  );
}
