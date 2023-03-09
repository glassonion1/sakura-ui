import { useState } from 'react'
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Button,
  Checkbox,
  Radio
} from '@sakura-ui/react'
import { Icon, IconButton } from '../../packages/icons/src'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="text-sumi-900 text-base">
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
        <Button onClick={() => setCount((count) => count + 1)} disabled>
          count is {count}
        </Button>
        <Button
          variant="secondary"
          onClick={() => setCount((count) => count + 1)}
          disabled
        >
          count is {count}
        </Button>
        <IconButton icon="face">Face</IconButton>
        <Radio name="sample">ラジオ1</Radio>
        <Radio name="sample">ラジオ2</Radio>
        <Checkbox>選択肢1</Checkbox>
        <Checkbox>選択肢2</Checkbox>
        <Icon icon="keyboard_arrow_down" className="text-sea-600" />
        <IconButton icon="keyboard_arrow_down" />
        <IconButton icon="face" variant="secondary" />
      </div>
      <span className="font-icon">keyboard_arrow_down</span>
    </div>
  )
}

export default App
