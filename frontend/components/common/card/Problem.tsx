import ProblemTag from './problem/ProblemTag'
import ProblemName from './problem/ProblemName'
import styled from 'styled-components'

const Container = styled.section`
  height: 120px;
  background: #EDA016;
  border-radius: 15px 15px 0 0;
`

export default function Problem() {
  return (
    <Container>
      <ProblemTag />
      <ProblemName />
    </Container>
  )
}
