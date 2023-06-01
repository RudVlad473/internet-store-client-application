import { Form } from "antd"
import { FC } from "react"

import { TCategory } from "../../../../entities/Category/lib/types"
import { TCrudListForm } from "../../../../features/CrudList/lib/types"
import { NameInput } from "../../../../shared/ui/forms/NameInput"

type CategoryFormProps = TCrudListForm<TCategory>

export const CategoryForm: FC<CategoryFormProps> = (props) => {
  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} {...props}>
      <NameInput name="name" label="Category" placeholder="Телевизоры и мониторы" />
    </Form>
  )
}
