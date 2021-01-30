import React from 'react'
import { Blog } from '@blog/models'

export const BlogItem = (props: Blog & { onClick: () => void }) => {
  return (
    <div className="item" onClick={props.onClick}>
      <h3>{props.title}</h3>
      {props.tags.map(item => (
        <div>{item}</div>
      ))}
      <p>- {props.subTitle}</p>
    </div>
  )
}
