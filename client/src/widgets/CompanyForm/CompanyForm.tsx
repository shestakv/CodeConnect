import { createCompany } from "@/entities/company";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import React, { useState } from "react";
import styles from "./CompanyForm.module.css";
import { Form, Input, Button, Spin } from "antd";
import type { FormProps } from "antd";
import { CompanyWithoutIdAndUserIdAndLogo } from "@/entities/company/model";
import { unwrapResult } from "@reduxjs/toolkit";
import { MailOutlined, PhoneOutlined, TeamOutlined } from "@ant-design/icons";

const CompanyForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const [form] = Form.useForm();

  const handleToggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const onFinish: FormProps<CompanyWithoutIdAndUserIdAndLogo>["onFinish"] =
    async (values) => {
      setIsLoading(true);
      try {
        const sanitizedValues = {
          name: values.name || "",
          email: values.email || "",
          phone: values.phone || "",
          description: values.description || "",
        };
        const resultAction = await dispatch(createCompany(sanitizedValues));
        unwrapResult(resultAction);
        form.resetFields();
        setFormVisible(false);
      } catch (error) {
        console.error("Ошибка при создании компании:", error);
      } finally {
        setIsLoading(false);
      }
    };

  if (!user) {
    return <></>;
  }

  return (
    <div
      className={`${styles.container} ${
        isFormVisible ? styles.showContainer : ""
      }`}
    >
      <div className={styles.buttonContainer}>
        <Button
          shape="round"
          onClick={handleToggleForm}
          className={styles.toggleButton}
        >
          {isFormVisible ? "Скрыть" : "Создать компанию"}
        </Button>
      </div>

      {isLoading && (
        <div className={styles.loadingOverlay}>
          <Spin size="large" />
        </div>
      )}

      {isFormVisible && (
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          disabled={isLoading}
          className={`${styles.formContainer} ${
            isFormVisible ? styles.show : ""
          }`}
        >
          <Form.Item
            name="name"
            hasFeedback
            validateDebounce={800}
            className={styles.formItem}
            rules={[{ required: true, message: "Введите название компании!" }]}
            noStyle
          >
            <Input prefix={<TeamOutlined />} placeholder="Название компании" />
          </Form.Item>
          <Form.Item
            name="email"
            hasFeedback
            validateDebounce={800}
            rules={[{ required: true, message: "Введите почту!" }]}
            className={styles.formItem}
            noStyle
          >
            <Input prefix={<MailOutlined />} placeholder="Почта компании" />
          </Form.Item>
          <Form.Item
            name="phone"
            hasFeedback
            validateDebounce={800}
            rules={[{ required: true, message: "Введите номер телефона!" }]}
            className={styles.formItem}
            noStyle
          >
            <Input prefix={<PhoneOutlined />} placeholder="Телефон компании" />
          </Form.Item>
          <Button
            shape="round"
            type="primary"
            htmlType="submit"
            disabled={isLoading}
            className={styles.button}
          >
            {isLoading ? "Создание..." : "Создать"}
          </Button>
        </Form>
      )}
    </div>
  );
};

export const MemorizedCompanyForm = React.memo(CompanyForm);
