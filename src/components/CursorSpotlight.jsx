import { useEffect } from 'react'

export function CursorSpotlight() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div className="cursor-spotlight-layer" aria-hidden="true" />
      <div className="ambient-glow-orb ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow-orb ambient-glow-2" aria-hidden="true" />
    </>
  )
}
