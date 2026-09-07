import { forwardRef } from 'react'

const BlockGrid = forwardRef(function BlockGrid(
  {
    as: Component = 'div',
    minItemWidth = '280px',
    className = '',
    style,
    children,
    ...props
  },
  ref,
) {
  const classes = ['block-grid', className].filter(Boolean).join(' ')

  return (
    <Component
      ref={ref}
      className={classes}
      style={{ ...style, '--block-grid-min': minItemWidth }}
      {...props}
    >
      {children}
    </Component>
  )
})

export default BlockGrid
