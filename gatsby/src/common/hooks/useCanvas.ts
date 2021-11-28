import { MutableRefObject, useEffect, useRef } from 'react'

export type UseCanvas2DDrawFn = (context: CanvasRenderingContext2D) => void
export type UseCanvas2DDrawHook = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void
export type UseCanvas2DOptions = {
  canvasSettings?: CanvasRenderingContext2DSettings
  preDraw?: UseCanvas2DDrawHook
  postDraw?: UseCanvas2DDrawHook
  width?: number
  height?: number
}

type UseCanvas2D = (draw: UseCanvas2DDrawFn, options?: UseCanvas2DOptions) => MutableRefObject<HTMLCanvasElement>

export const useCanvas2D: UseCanvas2D = (draw, options) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { preDraw, postDraw, width, height } = options

  console.log('useCanvas')

  useEffect(() => {
    const canvas = canvasRef.current
    if (height && width && canvas) {
      const context = canvas.getContext('2d', options.canvasSettings)
      if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio: ratio = 1 } = window
        canvas.width = width * ratio
        canvas.height = height * ratio
        context.scale(ratio, ratio)
      }
    }
  }, [height, options.canvasSettings, width])

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d', options.canvasSettings)
      let animationFrameId: number
      const render = () => {
        preDraw && preDraw(context, canvas)
        draw(context)
        postDraw && postDraw(context, canvas)
        animationFrameId = window.requestAnimationFrame(render)
      }
      render()
      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [draw, options.canvasSettings, postDraw, preDraw])

  return canvasRef
}
