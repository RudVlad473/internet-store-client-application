import { Form, Input } from "antd"
import { FC } from "react"

import { TBrand } from "../../../../entities/Brand/lib/types"
import { TCrudListForm } from "../../../../features/CrudList/lib/types"
import { NameInput } from "../../../../shared/ui/forms/NameInput"

type BrandFormProps = TCrudListForm<TBrand>

export const BrandForm: FC<BrandFormProps> = (props) => {
  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} {...props}>
      <NameInput name="name" label="Brand" />

      <Form.Item
        label="Website"
        name="websiteUrl"
        rules={[
          {
            required: true,
            validator: (_, value, callback) => {
              try {
                new URL(value).toString()
              } catch (e) {
                callback("Url is not valid.")
              }
              callback()
            },
          },
        ]}>
        <Input />
      </Form.Item>
    </Form>
  )
}
