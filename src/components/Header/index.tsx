import React from 'react'
import { Header, HeaderTitle, HeaderDescription } from './styled'
import Logo from '../Logo'
import { HeaderProps } from './types'
import { Div, Sizes } from '../../styles/global'
import Md from '../Md'

const HeaderComponent = ({
  size,
  description,
  onClick
}: HeaderProps): JSX.Element => (
  <Header size={size}>
    {/* <Logo size={size} /> */}

    <HeaderTitle size={size} onClick={onClick}>
      Andrei Constantinescu
    </HeaderTitle>
    {/* {size === Sizes.SMALL && (
        <Md source={description} renderers={{ paragraph: HeaderDescription }} />
      )} */}
  </Header>
)

export default React.memo(HeaderComponent)
