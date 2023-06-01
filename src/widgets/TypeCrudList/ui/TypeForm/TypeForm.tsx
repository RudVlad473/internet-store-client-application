import { Form } from "antd"
import { FC } from "react"

import { CategorySelect } from "../../../../entities/Category/ui/CategorySelect"
import { TTypeJoined } from "../../../../entities/Type/lib/types"
import { TCrudListForm } from "../../../../features/CrudList/lib/types"
import { NameInput } from "../../../../shared/ui/forms/NameInput"

type TypeFormProps = TCrudListForm<TTypeJoined>

export const TypeForm: FC<TypeFormProps> = (props) => {
  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} {...props}>
      <NameInput name="name" label="Type" />
      <Form.Item
        label="Category"
        name="category_id"
        rules={[
          {
            required: true,
          },
        ]}>
        <CategorySelect initValue={props.initialValues?.category.name} />
      </Form.Item>
    </Form>
  )
}
