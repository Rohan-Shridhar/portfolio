import { forwardRef } from 'react'

const BlockCard = forwardRef(function BlockCard(
  {
    as: Component = 'article',
    variant = 'stone',
    inset = false,
    className = '',
    children,
    ...props
  },
  ref,
) {
  const classes = ['block-card', className].filter(Boolean).join(' ')

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

export default BlockCard
