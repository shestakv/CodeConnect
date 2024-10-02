import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { signUp } from "@/entities/user";
import { unwrapResult } from "@reduxjs/toolkit";
import { ROUTES } from "@/app/router/routes";

type SignUpFormData = {
  firstname: string;
  surname: string;
  patronymic: string;
  phone: bigint;
  email: string;
  password: string;
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
  return (
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
        label="Имя"
        name="firstname"
        rules={[{ required: true, message: "Введите ваше имя!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<SignUpFormData>
        label="Фамилия"
        name="surname"
        rules={[{ required: true, message: "Введите вашу Фамилию!" }]}
      >
      <Input />
      </Form.Item>
      <Form.Item<SignUpFormData>
        label="Отчество"
        name="patronymic"
        rules={[{ required: true, message: "Введите ваше Отчество!" }]}
      >
      <Input />
      </Form.Item>
      <Form.Item<SignUpFormData>
        label="Телефон"
        name="phone"
        rules={[{ required: true, message: "Введите ваше номер телефона!" }]}
      >
        
        <Input />
      </Form.Item>
      <Form.Item<SignUpFormData>
        label="Почта"
        name="email"
        rules={[
          { required: true, message: "Введите вашу почту!" },
          {
            type: "email",
            message:
              "Введенный адрес электронной почты не является действительным!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item<SignUpFormData>
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Введите ваш пароль!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
