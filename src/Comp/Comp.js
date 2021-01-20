import React from 'react'

function Comp() {
  return (
    <div>
      <form>
        <input
          type="file" /><br />
        <input
          placeholder="Name"
          type="text"
        /><br />
        <input

          placeholder="Email"
          type="text" />

      </form>
      <button>Submit</button>
    </div>
  )
}

export default Comp
