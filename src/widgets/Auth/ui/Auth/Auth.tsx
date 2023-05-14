import { Button, Checkbox, Form, Input } from "antd"
import { FC } from "react"
import { toast } from "react-toastify"

import { AuthErrorMessages } from "../../lib/error-messages"
import styles from "./Auth.module.scss"

export const Auth: FC = () => {
  return (
    <div className={styles["auth"]}>
      <Form
        form={form}
        name="registration-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={(err) => {
          err.errorFields.forEach((error) => toast(error.name))
        }}
        autoComplete="on">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: AuthErrorMessages.WRONG_USERNAME }]}>
          <Input placeholder="JohnDoe" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email", message: AuthErrorMessages.WRONG_EMAIL }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: AuthErrorMessages.WRONG_PASSWORD }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
