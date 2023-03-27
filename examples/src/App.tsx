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
} from '../../packages/core/src'
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
import {
  FieldsetControl,
  LabelControl
} from '../../packages/forms/src/components'

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
          <option value="1">Select1</option>
          <option value="2">Select2</option>
          <option value="3">Select3</option>
        </Select>
        <Radio name="sample">Radio1</Radio>
        <Radio name="sample">Radio2</Radio>
        <Checkbox>Check1</Checkbox>
        <Checkbox>Check2</Checkbox>
        <Text />
        <Textarea rows={4} />
      </div>
      <div className="my-4">
        <H2>Controlled forms</H2>
        <div className="flex space-x-4">
          <LabelControl labelText="Select">
            <Select>
              <option value="1">Select value1</option>
              <option value="2">Select value2</option>
              <option value="3">Select value3</option>
            </Select>
          </LabelControl>
          <LabelControl labelText="Select required" isRequired={true}>
            <Select>
              <option value="1">Select value1</option>
              <option value="2">Select value2</option>
              <option value="3">Select value3</option>
            </Select>
          </LabelControl>
        </div>
        <div className="flex space-x-4">
          <LabelControl labelText="Select with helper" helperText="Helper text">
            <Select>
              <option value="1">Select value1</option>
              <option value="2">Select value2</option>
              <option value="3">Select value3</option>
            </Select>
          </LabelControl>
          <LabelControl
            labelText="Select with error"
            isInvalid={true}
            errorMessage="Error message"
          >
            <Select>
              <option value="1">Select value1</option>
              <option value="2">Select value2</option>
              <option value="3">Select value3</option>
            </Select>
          </LabelControl>
          <LabelControl
            labelText="Select with helper and error"
            helperText="Helper text"
            isInvalid={true}
            errorMessage="Error message"
          >
            <Select>
              <option value="1">Select value1</option>
              <option value="2">Select value2</option>
              <option value="3">Select value3</option>
            </Select>
          </LabelControl>
        </div>
        <FieldsetControl labelText="Radio">
          <Radio className="block" value={0}>
            Radio1
          </Radio>
          <Radio className="block" value={1}>
            Radio2
          </Radio>
          <Radio className="block" value={2}>
            Radio3
          </Radio>
        </FieldsetControl>
        <FieldsetControl direction="flex-row" labelText="Radio flex-row">
          <Radio className="block" value={0}>
            Radio1
          </Radio>
          <Radio className="block" value={1}>
            Radio2
          </Radio>
          <Radio className="block" value={2}>
            Radio3
          </Radio>
        </FieldsetControl>
        <RadioGroup
          labelText="Radio group"
          items={[
            { value: '0', label: 'Radio1' },
            { value: '1', label: 'Radio2' },
            { value: '2', label: 'Radio3' }
          ]}
          defaultValue="1"
          onChange={(e) => console.log(e.target.value)}
        />
        <CheckboxGroup
          labelText="Checkbox group"
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
          <LabelControl labelText="Text">
            <Text />
          </LabelControl>
          <LabelControl labelText="Text required" isRequired={true}>
            <Text />
          </LabelControl>
        </div>
        <div className="flex space-x-4">
          <LabelControl labelText="Text with helper" helperText="Helper text">
            <Text />
          </LabelControl>
          <LabelControl
            labelText="Text with error"
            isInvalid={true}
            errorMessage="Error message"
          >
            <Text />
          </LabelControl>
          <LabelControl
            labelText="Text with helper and error"
            helperText="Helper text"
            isInvalid={true}
            errorMessage="Error message"
          >
            <Text />
          </LabelControl>
        </div>
        <div className="flex space-x-4">
          <LabelControl labelText="Textarea">
            <Textarea rows={4} />
          </LabelControl>
          <LabelControl labelText="Textarea required" isRequired={true}>
            <Textarea rows={4} />
          </LabelControl>
        </div>
        <div className="flex space-x-4">
          <LabelControl
            labelText="Textarea with helper"
            helperText="Helper text"
          >
            <Textarea rows={4} />
          </LabelControl>
          <LabelControl
            labelText="Textarea with error"
            isInvalid={true}
            errorMessage="Error message"
          >
            <Textarea rows={4} />
          </LabelControl>
          <LabelControl
            labelText="Textarea with helper and error"
            helperText="Helper text"
            isInvalid={true}
            errorMessage="Error message"
          >
            <Textarea rows={4} />
          </LabelControl>
        </div>
      </div>
    </div>
  )
}

export default App
