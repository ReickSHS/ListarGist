import styled from '@emotion/styled'

import colors from '../../colors'

export const Button = styled.button`
 font-family: 'Montserrat', sans-serif;
  background: ${colors.courseBeting};
  font-size: 24px;
  border-radius: 4px;
  cursor: pointer;
  padding: 1em;
  &:hover {
        color: ${colors.white};
      }
`
export const H1 = styled.h1`
  text-decoration: none;
  color: ${colors.codGray};
  text-align: center;
`
export const A = styled.a`
  text-decoration: none;
`

export const Divbtncontainer = styled.div`
      display: flex;
    flex-direction: column;
    text-align: center;
`
export const Divbtnrepos = styled.div`
     padding: 1em;
`
