import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import * as S from './styled'

const Navbar = () => {

  const { LogoWarren, LogoRico, LogoClear } = useStaticQuery(
    graphql`
      query {
        LogoWarren: file(relativePath: { eq: "logo-warren.png" }) {
          childImageSharp {
            fluid(maxWidth: 256, maxHeight: 256) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        LogoRico: file(relativePath: { eq: "logo-rico.png" }) {
          childImageSharp {
            fluid(maxWidth: 256, maxHeight: 256) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        LogoClear: file(relativePath: { eq: "logo-clear.png" }) {
          childImageSharp {
            fluid(maxWidth: 256, maxHeight: 256) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <S.NavbarWrapper>
      <S.IconsUl>
        <S.IconsLi onClick={() => {
        window.__setPreferredTheme('warren')
      }}>
          <Img fluid={LogoWarren.childImageSharp.fluid} />
        </S.IconsLi>
        <S.IconsLi onClick={() => {
        window.__setPreferredTheme('rico')
      }}>
          <Img fluid={LogoRico.childImageSharp.fluid} />
        </S.IconsLi>
        <S.IconsLi onClick={() => {
        window.__setPreferredTheme('clear')
      }}>
          <Img fluid={LogoClear.childImageSharp.fluid} />
        </S.IconsLi>
      </S.IconsUl>

    </S.NavbarWrapper>
  )

}

export default Navbar