import React from 'react'
import { ButtonStyled } from './Button.styled'

export const Button:React.FC = () => {
  return (
    <ButtonStyled>Button</ButtonStyled>
  )
}

// export const Button = ({ type = 'button', name, onClick, children }) => {
//   return (
//     <ButtonStyled type={type} name={name} onClick={onClick}>
//       {children}
//     </ButtonStyled>
//   );
// };

// Button.propTypes = {
//   type: PropTypes.string,
//   name: PropTypes.string,
//   onClick: PropTypes.func,
//   children: PropTypes.node,
// };
