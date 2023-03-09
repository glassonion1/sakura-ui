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
  Radio,
  Select
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
      <p>
        <Icon icon="home" className="text-sea-600" />
        test1,test2,test3
      </p>
      <p>
        test1,test2,
        <Icon icon="shopping_cart" className="text-sea-600" />
        test3
      </p>
      <div className="my-4">
        <IconButton icon="face">Face</IconButton>
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
        <IconButton icon="face" iconLayout="right" variant="secondary">
          Face
        </IconButton>

        <IconButton icon="keyboard_arrow_down" />
        <IconButton icon="face" variant="secondary" />
      </div>
      <div className="my-4">
        <Select>
          <option key={0} value="1">
            select1
          </option>
          <option key={1} value="2">
            select2
          </option>
          <option key={2} value="3">
            select3
          </option>
        </Select>
        <Radio name="sample">ラジオ1</Radio>
        <Radio name="sample">ラジオ2</Radio>
        <Checkbox>選択肢1</Checkbox>
        <Checkbox>選択肢2</Checkbox>
      </div>
    </div>
  )
}

export default App
