import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Select } from "antd";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { signUp } from "@/entities/user";
import { unwrapResult } from "@reduxjs/toolkit";
import { ROUTES } from "@/app/router/routes";
import {
  MailOutlined,
  UserOutlined,
  // PhoneFilled,
  LockFilled,
  UnlockOutlined,
} from "@ant-design/icons";
import { Option } from "antd/es/mentions";
import styles from "./SignUpForm.module.css";

type SignUpFormData = {
  firstname: string;
  surname: string;
  patronymic: string;
  phone: bigint;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish: FormProps<SignUpFormData>["onFinish"] = async (
    values: SignUpFormData
  ) => {
    try {
      const resultAction = await dispatch(signUp(values));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Sign Up failed:", error);
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select defaultValue={"+7"} style={{ width: 70 }}>
        <Option value="+7">+7</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Регистрация</h1>
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
          <Form.Item<SignUpFormData>
            name="firstname"
            hasFeedback
            validateDebounce={800}
            rules={[
              { required: true, message: "Введите Имя!" },
              { type: "string", message: "Введен некорректное Имя!" },
            ]}
            className={styles.input}
          >
            <Input prefix={<UserOutlined />} placeholder="Введите Имя" />
          </Form.Item>
          <Form.Item<SignUpFormData>
            name="surname"
            hasFeedback
            validateDebounce={800}
            rules={[
              { required: true, message: "Введите Фамилию!" },
              { type: "string", message: "Введен некорректное Имя!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Введите Фамилию" />
          </Form.Item>
          <Form.Item<SignUpFormData>
            name="patronymic"
            hasFeedback
            validateDebounce={800}
            rules={[{ required: true, message: "Введите Отчество!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Введите Отчество" />
          </Form.Item>

          <Form.Item<SignUpFormData>
            name="phone"
            hasFeedback
            validateDebounce={800}
            rules={[{ required: true, message: "Введите номер телефона!" }]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{ width: "100%" }}
              // prefix={<PhoneFilled />}
              placeholder="Введите Телефон"
            />
          </Form.Item>

          <Form.Item<SignUpFormData>
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
          >
            <Input prefix={<MailOutlined />} placeholder="Введите Почту" />
          </Form.Item>
          <Form.Item<SignUpFormData>
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
          <Form.Item<SignUpFormData>
            name="confirmPassword"
            hasFeedback
            validateDebounce={800}
            rules={[
              { required: true, message: "Повторите Пароль!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Пароли не совпадают!"));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<UnlockOutlined />}
              type="password"
              placeholder="Повторите Пароль"
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
