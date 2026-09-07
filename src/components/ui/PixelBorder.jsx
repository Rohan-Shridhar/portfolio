import { forwardRef } from 'react'

const PixelBorder = forwardRef(function PixelBorder(
  {
    as: Component = 'div',
    variant = 'stone',
    inset = true,
    className = '',
    children,
    ...props
  },
  ref,
) {
  const classes = ['pixel-border', className].filter(Boolean).join(' ')

  return (
    <Component
      ref={ref}
      className={classes}
      data-variant={variant}
      data-inset={inset ? 'true' : undefined}
      {...props}
    >
      {children}
    </Component>
  )
})

export default PixelBorder
