import React from 'react'
import Post from '../Post'

const Feed = ({ list }) => {
  return list.map((item) => {
    return <Post key={item.id} list={item} />
  })
}

export default Feed
