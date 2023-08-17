import React from 'react'

function LayoutPage({
  children,
}) {
  return (
    <div>
      <p>This is layout. Import Header and Footer</p>
      <div>{children}</div>
    </div>
  )
}

export default LayoutPage