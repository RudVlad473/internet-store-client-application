import { FC } from "react"

import { TBrand } from "../../../../entities/Brand/lib/types"
import { TCrudListItem } from "../../../../features/CrudList/lib/types"
import { CrudList } from "../../../../features/CrudList/ui/CrudList"
import { Spinner } from "../../../../shared/ui/Spinner"
import { useBrandCrud } from "../../lib/hooks/useBrandCrud"
import { BrandForm } from "../BrandForm"

export const BrandCrudList: FC = () => {
  const { create, edit, remove, values: brands, loading } = useBrandCrud({})

  if (loading) {
    return <Spinner />
  }

  if (!brands) {
    return <></>
  }

  const crudListItems: TCrudListItem<TBrand>[] = brands.map((brand) => ({
    id: brand.id,
    name: brand.name,
    BaseForm: BrandForm,
    deleteProps: {
      name: "deleteBrand",
      onFinish: ({ name }) => {
        remove(name)
      },
      disabled: true,
      initialValues: brand,
    },
    editProps: {
      name: "editBrand",
      onFinish: (payload) => {
        edit(brand.name, payload)
      },
      disabled: false,
      initialValues: brand,
    },
    readProps: {
      name: "readBrand",
      disabled: true,
      initialValues: brand,
    },
  }))

  return (
    <CrudList
      items={crudListItems}
      BaseForm={BrandForm}
      createProps={{
        name: "createBrand",
        disabled: false,
        onFinish: (payload) => create(payload),
      }}
    />
  )
}
