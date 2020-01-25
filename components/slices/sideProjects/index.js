import React, {Fragment} from 'react'
import Header from '../../sliceHeader'
import Content from './content'
import {UL, LI} from '../..'
import {Section} from '../..'

const Slice = ({items, headerText}) => (
  <Section
    customCss={{
      '@media print': {
        marginTop: '.5rem'
      }
    }}
  >
    <Header
      headerText={headerText}
      customCss={{
        paddingBottom: '.75rem'
      }}
    />
    <UL
      customCss={{
        margin: 0,
        paddingLeft: 0,
        '@media print': {paddingLeft: '1.15rem'}
      }}
    >
      {items.map((item, key) => (
        <LI
          key={key}
          customCss={{
            textAlign: 'justify',
            marginBottom: '.75rem',
            listStyle: 'none'
          }}
        >
          <Content {...item} />
        </LI>
      ))}
    </UL>
  </Section>
)

export default Slice