import { useReveal } from '../hooks/useReveal'

// Fades/slides its children in when scrolled into view.
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, dir = '', style, children, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${dir} ${visible ? 'visible' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
