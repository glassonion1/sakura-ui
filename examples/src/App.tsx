import React, { useState } from 'react'
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
  Ul,
  Card,
  InfoCard
} from '@sakura-ui/core'
//from '../../packages/core/src'
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Select,
  Input,
  Textarea,
  FieldsetControl,
  LabelControl
} from '@sakura-ui/forms'
//from '../../packages/forms/src'

const App = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="text-sumi-900 text-base p-8">
      <IconButton
        className="mr-2 fixed bottom-4 right-4"
        icon="arrow_upward"
        variant="secondary"
        rounded="full"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
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
      <div className="w-1/3 my-4">
        <Card>
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          <br />
          xxxxxxxxxxxxx
        </Card>
      </div>
      <div className="w-1/3 my-4">
        <InfoCard title="Info card">Description</InfoCard>
      </div>
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
        <Button
          className="mr-2"
          onClick={() => setCount((count: number) => count + 1)}
        >
          Primary button
        </Button>
        <Button
          className="mr-2"
          variant="secondary"
          onClick={() => setCount((count: number) => count + 1)}
        >
          Secondary Button
        </Button>
        <IconButton className="mr-2" icon="face">
          Icon button
        </IconButton>
        <IconButton className="mr-2" variant="secondary" icon="face">
          Icon button
        </IconButton>
        <IconButton className="mr-2" icon="keyboard_arrow_down" />
        <IconButton className="mr-2" icon="face" variant="secondary" />
        <Button
          className="mr-2"
          onClick={() => setCount((count: number) => count + 1)}
          disabled
        >
          count is {count}
        </Button>
        <Button
          className="mr-2"
          variant="secondary"
          onClick={() => setCount((count: number) => count + 1)}
          disabled
        >
          count is {count}
        </Button>
        <IconButton className="mr-2" icon="face" disabled>
          Face
        </IconButton>
        <IconButton
          className="mr-2"
          icon="face"
          iconLayout="right"
          variant="secondary"
          disabled
        >
          Face
        </IconButton>
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
        <Input />
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            console.log(e.target.value)
          }
        />
        <CheckboxGroup
          labelText="Checkbox group"
          items={[
            { value: '0', label: 'Checkbox1' },
            { value: '1', label: 'Checkbox2' },
            { value: '2', label: 'Checkbox3' }
          ]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            console.log(`${e.target.value}, ${e.target.checked}`)
          }
        />
        <div className="flex space-x-4">
          <LabelControl labelText="Text">
            <Input />
          </LabelControl>
          <LabelControl labelText="Text required" isRequired={true}>
            <Input />
          </LabelControl>
        </div>
        <div className="flex space-x-4">
          <LabelControl labelText="Text with helper" helperText="Helper text">
            <Input />
          </LabelControl>
          <LabelControl
            labelText="Text with error"
            isInvalid={true}
            errorMessage="Error message"
          >
            <Input />
          </LabelControl>
          <LabelControl
            labelText="Text with helper and error"
            helperText="Helper text"
            isInvalid={true}
            errorMessage="Error message"
          >
            <Input />
          </LabelControl>
        </div>
        <div className="flex space-x-4">
          <LabelControl labelText="Textarea">
            <Textarea rows={4} />
          </LabelControl>
          <LabelControl labelText="Textarea required" isRequired={true}>
            <Textarea rows={4} />
          </LabelControl>
          <LabelControl labelText="Textarea with maxLength">
            <Textarea rows={4} maxLength="50" />
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
        <div>
          <H2>Disabled forms</H2>
          <div className="flex space-x-4 bg-sumi-200">
            <fieldset disabled>
              <LabelControl
                labelText="Text with helper"
                helperText="Helper text"
              >
                <Input />
              </LabelControl>
              <LabelControl
                labelText="Textarea disabled"
                helperText="Helper text"
              >
                <Textarea rows={4} />
              </LabelControl>
              <LabelControl labelText="Select">
                <Select>
                  <option value="1">Select value1</option>
                  <option value="2">Select value2</option>
                  <option value="3">Select value3</option>
                </Select>
              </LabelControl>
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
              <FieldsetControl
                direction="flex-row"
                labelText="Checkbox flex-row"
              >
                <Checkbox>Check1</Checkbox>
                <Checkbox>Check2</Checkbox>
              </FieldsetControl>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
