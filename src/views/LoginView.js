import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form, Input, Button, Checkbox,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '../features/authSlice';
import { isLoadingSelector } from '../selectors/login';

const LoginView = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingSelector);

  const onFinish = () => {
    dispatch(login(
      { email: 'eve.holt@reqres.in', password: 'cityslicka' },
    ));
  };

  return (
    <div className="container">
      <Form
        name="normal_login"
        className="form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            autoComplete="username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            size="large"
            autoComplete="current-password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            className="login-form-button"
            size="large"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginView;
