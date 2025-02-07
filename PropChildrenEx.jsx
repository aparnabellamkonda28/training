import React from 'react'

const PropChildrenEx = (props) => {
    console.log(props);
  return(
    <div>PropChildrenEx
        <hr/>
        <h1>{props.username}</h1>
        <h1>{props.company}</h1>
        {
            props.children[1]
        }
    </div>

  )
}

export default PropChildrenEx