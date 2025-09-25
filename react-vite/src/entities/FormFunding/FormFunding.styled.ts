import styled from "styled-components"

export const Description = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.main && theme.main.fontFamily};

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Text = styled.p`
  font-size: 1rem;
  max-height: 205px;
  overflow: auto;
`
