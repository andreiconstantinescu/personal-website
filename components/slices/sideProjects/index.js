import React, {Fragment} from 'react'
import Header from '../../sliceHeader'
import Content from './content'
import {UL, LI} from '../..'

const Slice = ({items, headerText}) => (
  <Fragment>
    <Header headerText={headerText} />
    <UL customCss={{margin: 0, paddingLeft: 0}}>
      {items.map((item, key) => (
        <LI
          key={key}
          customCss={{
            textAlign: 'justify',
            margin: '.75rem 0',
            '@media print': {margin: '0.375rem 0'},
            listStyle: 'none'
          }}
        >
          <Content {...item} />
        </LI>
      ))}
    </UL>
  </Fragment>
)

export default Slice
