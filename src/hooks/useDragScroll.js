import { useRef } from 'react'

// Attaches mouse-drag scrolling to a horizontal scroll container.
// Native touch scrolling already works on mobile, so this only adds
// pointer/mouse dragging for desktop trackpads and mice.
export default function useDragScroll(onInteractionStart) {
  const ref = useRef(null)
  const state = useRef({ isDown: false, startX: 0, startScroll: 0, moved: false })

  const onPointerDown = (e) => {
    const el = ref.current
    if (!el) return
    state.current.isDown = true
    state.current.moved = false
    state.current.startX = e.pageX - el.offsetLeft
    state.current.startScroll = el.scrollLeft
    el.classList.add('cursor-grabbing')
    onInteractionStart?.()
  }

  const onPointerLeaveOrUp = () => {
    state.current.isDown = false
    ref.current?.classList.remove('cursor-grabbing')
  }

  const onPointerMove = (e) => {
    const el = ref.current
    if (!el || !state.current.isDown) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = x - state.current.startX
    if (Math.abs(walk) > 4) state.current.moved = true
    el.scrollLeft = state.current.startScroll - walk
  }

  // Prevents a click (e.g. opening the lightbox) from firing right after a drag.
  const wasDragged = () => state.current.moved

  return {
    ref,
    dragHandlers: {
      onMouseDown: onPointerDown,
      onMouseLeave: onPointerLeaveOrUp,
      onMouseUp: onPointerLeaveOrUp,
      onMouseMove: onPointerMove,
      onTouchStart: () => onInteractionStart?.(),
    },
    wasDragged,
  }
}
