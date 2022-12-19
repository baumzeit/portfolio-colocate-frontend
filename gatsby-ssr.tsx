export { wrapRootElement } from './wrap-root-element'
export { wrapPageElement } from './wrap-page-element'

export const onRenderBody = ({ setHtmlAttributes }: { setHtmlAttributes: any }) => {
  setHtmlAttributes({ lang: 'en' })
}
