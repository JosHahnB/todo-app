// import React from 'react'

const index = ({incomplete}) => {
  return (
<header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete.length} items pending</h1>
      </header>  )
}

export default index