import { useState } from 'react'
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Button,
  Icon,
  IconButton,
  Link,
  Ol,
  Ul
} from '../../packages/react/src'
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Select,
  Text,
  Textarea,
  SelectControl,
  TextControl,
  TextareaControl
} from '../../packages/forms/src'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="text-sumi-900 text-base p-8">
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
        test3 <Link>link text here</Link>
      </p>
      <div>
        <Ul>
          <li>list1</li>
          <li>list2</li>
          <li>list3</li>
          <Ul>
            <li>list1</li>
            <li>list2</li>
            <li>list3</li>
          </Ul>
        </Ul>
        <Ol>
          <li>list1</li>
          <li>list2</li>
          <li>list3</li>
          <Ol>
            <li>list1</li>
            <li>list2</li>
            <li>list3</li>
          </Ol>
        </Ol>
      </div>
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
        <H2>Forms</H2>
        <Select>
          <option key={0} value="1">
            Select1
          </option>
          <option key={1} value="2">
            Select2
          </option>
          <option key={2} value="3">
            Select3
          </option>
        </Select>
        <Radio name="sample">Radio1</Radio>
        <Radio name="sample">Radio2</Radio>
        <Checkbox>Check1</Checkbox>
        <Checkbox>Check2</Checkbox>
        <Text />
        <Textarea rows={4} />
      </div>
      <div className="my-4">
        <H2>Controlled Forms</H2>
        <SelectControl label="Select">
          <option key={0} value="1">
            Select1
          </option>
          <option key={1} value="2">
            Select2
          </option>
          <option key={2} value="3">
            Select3
          </option>
        </SelectControl>
        <RadioGroup
          label="Radio Group"
          items={[
            { value: '0', label: 'Radio1' },
            { value: '1', label: 'Radio2' },
            { value: '2', label: 'Radio3' }
          ]}
          onChange={(e) => console.log(e.target.value)}
        />
        <CheckboxGroup
          label="Checkbox Group"
          items={[
            { value: '0', label: 'Checkbox1' },
            { value: '1', label: 'Checkbox2' },
            { value: '2', label: 'Checkbox3' }
          ]}
          onChange={(e) =>
            console.log(`${e.target.value}, ${e.target.checked}`)
          }
        />
        <div className="flex space-x-4">
          <TextControl label="Text" />
          <TextControl label="Text required" required />
        </div>
        <div className="flex space-x-4">
          <TextControl label="Text with helper" helperText="Helper text" />
          <TextControl
            label="Text with error"
            isInvalid={true}
            errorMessage="Error message"
          />
          <TextControl
            label="Text with helper and error"
            helperText="Helper text"
            isInvalid={true}
            errorMessage="Error message"
          />
        </div>
        <div className="flex space-x-4">
          <TextareaControl rows={4} label="Textarea" />
          <TextareaControl rows={4} label="Textarea required" required />
        </div>
        <div className="flex space-x-4">
          <TextareaControl
            rows={4}
            label="Textarea with helper"
            helperText="Helper text"
          />
          <TextareaControl
            rows={4}
            label="Textarea with error"
            isInvalid={true}
            errorMessage="Error message"
          />
          <TextareaControl
            rows={4}
            label="Textarea with helper and error"
            helperText="Helper text"
            isInvalid={true}
            errorMessage="Error message"
          />
        </div>
      </div>
    </div>
  )
}

export default App
