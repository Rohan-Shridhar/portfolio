import { forwardRef } from 'react'

const BlockButton = forwardRef(function BlockButton(
  {
    variant = 'grass',
    size = 'md',
    icon = null,
    iconPosition = 'start',
    className = '',
    children,
    type = 'button',
    ...props
  },
  ref,
) {
  const classes = ['block-button', className].filter(Boolean).join(' ')
  const iconSlot = icon ? (
    <span className="block-button__icon" aria-hidden="true">
      {icon}
    </span>
  ) : null

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      data-variant={variant}
      data-size={size}
      {...props}
    >
      {iconPosition === 'start' && iconSlot}
      {children && <span className="block-button__label">{children}</span>}
      {iconPosition === 'end' && iconSlot}
    </button>
  )
})

export default BlockButton
