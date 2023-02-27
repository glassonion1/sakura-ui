import { useState } from 'react'
import { H1, H2, H3, H4, H5, H6, Button } from '@sakura-ui/react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <H1>SakuraUI Heading1</H1>
      <H2>SakuraUI Heading2</H2>
      <H3>SakuraUI Heading3</H3>
      <H4>SakuraUI Heading4</H4>
      <H5>SakuraUI Heading5</H5>
      <H6>SakuraUI Heading6</H6>
      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button
          variant="secondary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
    </div>
  )
}

export default App
