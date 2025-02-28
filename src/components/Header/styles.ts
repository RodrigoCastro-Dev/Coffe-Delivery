import styled from 'styled-components'

export const StyledButton = styled.button<{ primary?: boolean }>`
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  ${({ primary }) => primary ? "background-color: #3b82f6; color: white;" : "background-color: #e5e7eb; color: black;"}
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 20px;
  width: 82%;
  background-color: white;
  z-index: ;

  nav {
    display: flex;
    gap: 1rem;

    a {
      max-height: 35px;
      align-items: center;
      color: ${(props) => props.theme['gray-100']};

      &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      &.active {
        // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    }
  }
`
