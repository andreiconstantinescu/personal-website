import { Section, Title, Sizes, Paragraph } from '../../styles/global'
import styled, { css } from 'styled-components'
import { HeaderStyleProps } from './types'

export const Header = styled(Section)`
  display: flex;
  ${(props: Partial<HeaderStyleProps>) => {
    switch (props.size) {
      case Sizes.MEDIUM:
        return css`
          justify-items: center;
          align-items: center;
          flex-direction: column;
          margin-bottom: ${props.theme.typography.lineHeightSpacing(3)};
          padding-top: ${props.theme.typography.lineHeightSpacing(4)};
        `
      case Sizes.SMALL:
        return css`
          align-items: center;
          justify-content: center;
          @media screen {
            padding-top: ${props.theme.typography.lineHeightSpacing(1)};
          }
        `
      default:
        break
    }
  }};
`
export const HeaderTitle = styled(Title)`
  font-weight: 400;
  ${(props: Partial<HeaderStyleProps>) => {
    switch (props.size) {
      case Sizes.SMALL:
        return css`
          margin: 0;
          padding-top: 0;
          font-size: ${props.theme.typography.h5.fontSize};
          line-height: ${props.theme.typography.h5.lineHeight};
          @media print {
            font-size: ${props.theme.typography.h6.fontSize};
            ::after {
              content: "'s resume";
            }
          }
        `
      default:
        break
    }
  }}
`

export const HeaderDescription = styled(Paragraph)`
  font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  line-height: ${(props) => props.theme.typography.lineHeightSpacing(1)};
  padding-right: ${(props) => props.theme.typography.lineHeightSpacing(2)};
`
