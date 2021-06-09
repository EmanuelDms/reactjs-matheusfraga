import React from 'react'
import pluralParaSingular from '../../utils/pluralParaSingular'

const Post = ({ list }) => {
  return (
    <div>
      <h2>{list.username}</h2>
      <ul>
        <div>
          <li>{pluralParaSingular(list.curtidas, 'curtida')}</li>
          <li>{pluralParaSingular(list.comentarios, 'comentário')}</li>
        </div>
      </ul>
    </div>
  )
}

export default Post
