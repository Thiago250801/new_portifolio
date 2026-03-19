interface GlowBlobProps {
  color: string
  size: number
  top?: string
  bottom?: string
  left?: string
  right?: string
  opacity?: number
}

export function GlowBlob({ color, size, top, bottom, left, right, opacity = 0.15 }: GlowBlobProps) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, backgroundColor: color, top, bottom, left, right, filter: 'blur(100px)', opacity, zIndex: 0 }}
    />
  )
}