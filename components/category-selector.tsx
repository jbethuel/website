import React from 'react'
import Select from 'react-select'

const categories = [{ value: 'tech', label: 'Technology / Development' }]

const CategorySelector = () => {
  return (
    <Select
      options={categories}
      value={categories[0]}
      onChange={context => console.log(context)}
    />
  )
}

export default CategorySelector
