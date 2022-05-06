import { Form, Input, InputNumber, Button } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import React, { useCallback } from 'react';
import { addPostAction } from '../reducers/post';
import { useDispatch } from 'react-redux';

const StForm = styled(Form)`
  margin-bottom: 2em;
  .btn-Container {
    margin-top: 0.5em;
    display: flex;
    justify-content: space-between;
  }
`;

const PostForm = () => {
  const [text, setText] = useInput('');
  const fileInputRef = React.useRef(null);

  const onClickFile = useCallback(() => {
    fileInputRef.current.click();
  }, [fileInputRef.current]);

  const dispatch = useDispatch();
  const onFinish = (values) => {
    const text = values.text;
    dispatch(addPostAction());
  };

  return (
    <>
      <h2>PostForm</h2>
      <StForm onFinish={onFinish} encType="multipart/form-data">
        <Form.Item name="text">
          <Input.TextArea value={text} onChange={setText} />
        </Form.Item>
        <div className="btn-Container">
          <input type="file" multiple hidden ref={fileInputRef} />
          <Button type="text" htmlType="button" onClick={onClickFile}>
            사진 업로드
          </Button>
          <Button type="primary" htmlType="submit">
            글작성
          </Button>
        </div>
      </StForm>
    </>
  );
};

export default PostForm;
