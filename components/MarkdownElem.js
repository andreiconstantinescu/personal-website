import React, {Fragment} from 'react'
import ReactMarkdown from 'react-markdown'
// import markdown from 'markdown-in-js'
import * as components from './styled'

console.log(components)
const Heading = props => {
  const {level, children} = props
  const HeadingRenderer = ReactMarkdown.renderers.heading

  const C = components.headings[`H${level}`]

  const ToRender = <C style={{color: 'red'}}>{children}</C> || (
    <HeadingRenderer {...props} />
  )

  return ToRender
}

const MarkdownElem = ({text, customStyle}) =>
  console.log(text) || (
    <ReactMarkdown
      source={text}
      renderers={{root: Fragment, heading: Heading}}
    />
  )

MarkdownElem.displayName = 'MarkdownElement'

export default MarkdownElem
