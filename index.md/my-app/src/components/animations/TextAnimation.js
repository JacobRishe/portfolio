import React from 'react'
import styled, { keyframes } from "styled-components"

export default function TextAnimation() {
  return (
    <div>JavaScript</div>
  )
}

const animation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1 }
`

const div = styled.h1`
  animation-name: ${animation};
  animation-duration: 6s;
  animation-fill-mode: forwards;
`

