import React from 'react'

const Footer = ({length}) => {
    const today = new Date();
  return (
    <footer>
      <p>{length} List {length === 1 ? "item" : "items" }</p>
         <p style={{fontSize: '0.5rem' }}>Copyright &copy; {today.getFullYear()} Jennifer Lang</p>

    </footer>
  )
}

export default Footer