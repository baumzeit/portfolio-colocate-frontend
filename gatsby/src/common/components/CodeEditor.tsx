import { BaseCodeEditorFragment } from '../../../graphql-types'
import { ThemeContext } from './ThemeContextProvider'
import { graphql } from 'gatsby'
import React, { FC, useContext, useMemo } from 'react'

const embedQueryParamsMap: Partial<Record<keyof BaseCodeEditorFragment, (val: boolean) => string>> = {
  displayEditor: (val) => (val ? 'view=editor' : ''),
  displayFileExplorer: (val) => (val ? '' : 'hideExplorer=1'),
  displayPreviewUrl: (val) => (val ? '' : 'hideNavigation=1'),
  displayPreview: (val) => (val ? 'view=preview' : ''),
  displayConsole: (val) => (val ? 'devtoolsheight=33' : '')
}

export const CodeEditor: FC<{ codeEditor: BaseCodeEditorFragment }> = ({ codeEditor }) => {
  const { theme } = useContext(ThemeContext)
  const url = new URL(codeEditor.embedUrl)

  const embedUrl = useMemo(
    () =>
      url.protocol +
      '//' +
      url.hostname +
      url.pathname +
      `?embed=1&theme=${theme}&` +
      Object.entries(embedQueryParamsMap)
        .map(([key, getParam]) => {
          return (
            codeEditor[key as keyof BaseCodeEditorFragment] &&
            getParam(!!codeEditor[key as keyof BaseCodeEditorFragment])
          )
        })
        .filter(Boolean)
        .join('&'),
    [url.protocol, url.hostname, url.pathname, theme, codeEditor]
  )

  return (
    <div>
      <iframe src={embedUrl} className="w-full h-[400px] max-h-full" title="editor" />
    </div>
  )
}

// export const query = graphql`
//   fragment BaseCodeEditor on StrapiCourseSectionsCodeEditor {
//     id
//     embedUrl
//     initialFile
//     displayEditor
//     displayPreview
//     displayFileExplorer
//     displayConsole
//     displayPreviewUrl
//     clickToLoad
//   }
// `

export default CodeEditor
