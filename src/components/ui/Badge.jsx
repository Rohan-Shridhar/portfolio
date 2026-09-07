import { forwardRef } from 'react'

const Badge = forwardRef(function Badge(
  {
    as: Component = 'span',
    variant = 'stone',
    className = '',
    children,
    ...props
  },
  ref,
) {
  const classes = ['badge', className].filter(Boolean).join(' ')

  return (
    <Component ref={ref} className={classes} data-variant={variant} {...props}>
      {children}
    </Component>
  )
})

export default Badge
