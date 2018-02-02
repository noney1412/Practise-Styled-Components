import React from 'react'
import styled from 'styled-components'
import {Gradient} from 'uigradients';

const Button = styled.button `
  color: #060606:#ffff;
  ${props => props.primary && `
    color: red;
  `}
`

export default() => (
  <Gradient gradient="cherry">
    <Button>ssssssdsa</Button>
    <br/>
    <Button primary>primary</Button>
    <h1>This will draw a div with a cherry gradient, like the one you're looking at
      right now.</h1>
  </Gradient>

)
