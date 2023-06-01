import { Form, InputNumber, Slider, UploadFile } from "antd"
import { FC, useState } from "react"

import { useGetBrandsQuery } from "../../../../entities/Brand/api"
import {
  maxPicturesCount,
  maxPrice,
  minPrice,
  minTitleLength,
} from "../../../../entities/Item/consts"
import { useGetTypesQuery } from "../../../../entities/Type/api"
import { TCrudListForm } from "../../../../features/CrudList/lib/types"
import { PictureInput, SearchSelect } from "../../../../shared/ui/forms"
import { NameInput } from "../../../../shared/ui/forms/NameInput"
import { TItemFormType } from "../../lib/types"

type TItemFormProps = TCrudListForm<TItemFormType>

export const ItemForm: FC<TItemFormProps> = ({ onFinish, ...props }) => {
  const {
    data: types = [],
    isLoading: isLoadingTypes,
    isFetching: isFetchingTypes,
  } = useGetTypesQuery()
  const {
    data: brands = [],
    isLoading: isLoadingBrands,
    isFetching: isFetchingBrands,
  } = useGetBrandsQuery()

  const [pictures, setPictures] = useState<UploadFile[]>(props.initialValues?.itemPictures || [])

  function handleOnFinish(values: any) {
    onFinish && onFinish({ ...values, itemPictures: pictures })
  }

  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} {...props} onFinish={handleOnFinish}>
      <NameInput name="title" label="Title" minLength={minTitleLength} />

      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
          },
        ]}>
        <InputNumber addonAfter="₴" min={minPrice} max={maxPrice} step={100} precision={2} />
      </Form.Item>

      <Form.Item
        label="Type"
        name="type_id"
        rules={[
          {
            required: true,
            message: "Type is required",
          },
        ]}>
        <SearchSelect
          items={types.map(({ id, name }) => ({
            label: name,
            value: id,
          }))}
          isLoading={isLoadingTypes || isFetchingTypes}
          initialValue={props.initialValues?.type_id}
        />
      </Form.Item>

      <Form.Item
        label="Brand"
        name="brand_id"
        rules={[
          {
            required: true,
            message: "Brand is required",
          },
        ]}>
        <SearchSelect
          items={brands.map(({ id, name }) => ({
            label: name,
            value: id,
          }))}
          isLoading={isLoadingBrands || isFetchingBrands}
          initialValue={props.initialValues?.brand_id as string | undefined}
        />
      </Form.Item>

      <Form.Item label="Discount" name="discountPercentage">
        <Slider min={0} max={100} defaultValue={0} tooltip={{ placement: "right" }} />
      </Form.Item>

      <Form.Item
        label="Pictures"
        name="itemPictures"
        valuePropName="itemPictures"
        rules={[
          {
            required: false,
          },
        ]}>
        <PictureInput setFiles={setPictures} name="itemPictures" maxPictures={maxPicturesCount} />
      </Form.Item>
    </Form>
  )
}
