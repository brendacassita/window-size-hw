import styled,{css} from'styled-components'
import { PRIMARY_COLOR, PRIMARY_DARK_COLOR } from './Colors'

const Button = styled.button`
  padding: 10px 16px;
  border-radius:4px;
  border:none;
  background-color: ${PRIMARY_COLOR};
  color:white;
  &:hover{
    background-color: ${PRIMARY_DARK_COLOR};
    cursor: pointer;
  }
  ${(props)=>
    props.outline && css`
    background-color: white;
    border: 1px solid ${PRIMARY_COLOR};
    color: ${PRIMARY_COLOR};
    &:hover{
        background-color: ${PRIMARY_COLOR};
        color: white;
      }
    `
 }
`

export default Button