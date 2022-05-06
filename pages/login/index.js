import Seo from '../../components/Seo';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../reducers/user';

const BtnSubmit = styled(Button)`
  width: 100%;
  padding: 10px;
  height: auto;
`;

export default function Login() {
  const [id, setId] = useInput('');
  const [password, setPassword] = useInput('');
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(loginAction({ id: values.id, password: values.password }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Seo title="로그인" />
      <h2>로그인</h2>
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="아이디"
          name="id"
          rules={[{ required: true, message: '아이디를 입력해주세요!' }]}
        >
          <Input value={id} onChange={setId} />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
        >
          <Input.Password value={password} onChange={setPassword} />
        </Form.Item>

        <Form.Item>
          <BtnSubmit type="primary" htmlType="submit">
            Submit
          </BtnSubmit>
        </Form.Item>
      </Form>
    </>
  );
}
