import React, { ReactElement } from 'react'
import Select from 'react-select'

const categories = [{ value: 'tech', label: 'Technology / Development' }]

const CategorySelector = (): ReactElement => {
  return (
    <Select
      options={categories}
      value={categories[0]}
      onChange={context => console.log(context)}
    />
  )
}

export default CategorySelector
