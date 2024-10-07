import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { signIn } from "@/entities/user";
import { unwrapResult } from "@reduxjs/toolkit";
import { ROUTES } from "@/app/router/routes";
import { MailOutlined, LockFilled } from "@ant-design/icons";
import styles from "./SignInForm.module.css";

type SignInFormData = {
  email: string;
  password: string;
};

export const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish: FormProps<SignInFormData>["onFinish"] = async (
    values: SignInFormData
  ) => {
    try {
      const resultAction = await dispatch(signIn(values));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Sign In failed:", error);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Авторизация</h1>
      <div className={styles.formContainer}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<SignInFormData>
            name="email"
            hasFeedback
            validateDebounce={800}
            rules={[
              { required: true, message: "Введите почту!" },
              {
                type: "email",
                message:
                  "Введенный адрес электронной почты не является действительным!",
              },
            ]}
            className={styles.input}
          >
            <Input prefix={<MailOutlined />} placeholder="Введите Почту" />
          </Form.Item>

          <Form.Item<SignInFormData>
            name="password"
            hasFeedback
            validateDebounce={800}
            rules={[{ required: true, message: "Введите Пароль!" }]}
          >
            <Input.Password
              prefix={<LockFilled />}
              placeholder="Введите Пароль"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className={styles.button} type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
