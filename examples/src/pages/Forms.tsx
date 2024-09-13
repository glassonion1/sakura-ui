import React from 'react'
import { H1, H2, Button } from '@sakura-ui/core'
import {
  CheckboxGroup,
  Radio,
  Select,
  FileInput,
  Input,
  FieldsetControl,
  LabelControl,
  Textarea,
  Checkbox,
  RadioGroup
} from '@sakura-ui/forms'

const Forms = () => {
  return (
    <div className="px-8 w-full">
      <H1>SakuraUI Forms sample</H1>
      <form>
        <LabelControl labelText="Select with helper" helperText="Helper text">
          <Select>
            <option value="1">Select value1</option>
            <option value="2">Select value2</option>
            <option value="3">Select value3</option>
          </Select>
        </LabelControl>
        <LabelControl
          labelText="Select(md) with helper"
          helperText="Helper text"
        >
          <Select size="md">
            <option value="1">Select value1</option>
            <option value="2">Select value2</option>
            <option value="3">Select value3</option>
          </Select>
        </LabelControl>
        <LabelControl
          labelText="Select(sm) with helper"
          helperText="Helper text"
        >
          <Select size="sm">
            <option value="1">Select value1</option>
            <option value="2">Select value2</option>
            <option value="3">Select value3</option>
          </Select>
        </LabelControl>
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
        <LabelControl labelText="Text" helperText="Helper text">
          <Input />
        </LabelControl>
        <LabelControl labelText="Text(md)" helperText="Helper text">
          <Input size="md" />
        </LabelControl>
        <LabelControl labelText="Text(sm)" helperText="Helper text">
          <Input size="sm" />
        </LabelControl>
        <LabelControl
          labelText="Text2"
          helperText="Helper text"
          isInvalid={true}
          errorMessage="error message"
        >
          <Input />
        </LabelControl>
        <LabelControl
          labelText="Select file"
          helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
        >
          <FileInput className="w-96" />
        </LabelControl>
        <Button type="submit">Submit</Button>
      </form>
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
        <div className="flex space-x-4">
          <LabelControl labelText="Select(size=lg)">
            <Select>
              <option value="1">Select value1</option>
              <option value="2">Select value2</option>
              <option value="3">Select value3</option>
            </Select>
          </LabelControl>
          <LabelControl labelText="Select(size=md)">
            <Select size="md">
              <option value="1">Select value1</option>
              <option value="2">Select value2</option>
              <option value="3">Select value3</option>
            </Select>
          </LabelControl>
          <LabelControl labelText="Select(size=sm)">
            <Select size="sm">
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
        <FieldsetControl
          direction="flex-row"
          labelText="Radio(size=lg) flex-row"
        >
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
          labelText="Radio(size=md) flex-row"
        >
          <Radio size="md" className="block" value={0}>
            Radio1
          </Radio>
          <Radio size="md" className="block" value={1}>
            Radio2
          </Radio>
          <Radio size="md" className="block" value={2}>
            Radio3
          </Radio>
        </FieldsetControl>
        <FieldsetControl
          direction="flex-row"
          labelText="Radio(size=sm) flex-row"
        >
          <Radio size="sm" className="block" value={0}>
            Radio1
          </Radio>
          <Radio size="sm" className="block" value={1}>
            Radio2
          </Radio>
          <Radio size="sm" className="block" value={2}>
            Radio3
          </Radio>
        </FieldsetControl>
        <div className="flex gap-6">
          <FieldsetControl labelText="Radio(size=lg)">
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
          <FieldsetControl labelText="Radio(size=md)">
            <Radio size="md" className="block" value={0}>
              Radio1
            </Radio>
            <Radio size="md" className="block" value={1}>
              Radio2
            </Radio>
            <Radio size="md" className="block" value={2}>
              Radio3
            </Radio>
          </FieldsetControl>
          <FieldsetControl labelText="Radio(size=sm)">
            <Radio size="sm" className="block" value={0}>
              Radio1
            </Radio>
            <Radio size="sm" className="block" value={1}>
              Radio2
            </Radio>
            <Radio size="sm" className="block" value={2}>
              Radio3
            </Radio>
          </FieldsetControl>
        </div>
        <div className="flex gap-6">
          <RadioGroup
            labelText="Radio group(size=lg)"
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
          <RadioGroup
            size="md"
            labelText="Radio group(size=md)"
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
          <RadioGroup
            size="sm"
            labelText="Radio group(size=sm)"
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
        </div>
        <FieldsetControl
          direction="flex-row"
          labelText="Checkbox(size=lg) flex-row"
        >
          <Checkbox className="block" value={0}>
            Checkbox1
          </Checkbox>
          <Checkbox className="block" value={1}>
            Checkbox2
          </Checkbox>
          <Checkbox className="block" value={2}>
            Checkbox3
          </Checkbox>
        </FieldsetControl>
        <FieldsetControl
          direction="flex-row"
          labelText="Checkbox(size=md) flex-row"
        >
          <Checkbox size="md" className="block" value={0}>
            Checkbox1
          </Checkbox>
          <Checkbox size="md" className="block" value={1}>
            Checkbox2
          </Checkbox>
          <Checkbox size="md" className="block" value={2}>
            Checkbox3
          </Checkbox>
        </FieldsetControl>
        <FieldsetControl
          direction="flex-row"
          labelText="Checkbox(size=sm) flex-row"
        >
          <Checkbox size="sm" className="block" value={0}>
            Checkbox1
          </Checkbox>
          <Checkbox size="sm" className="block" value={1}>
            Checkbox2
          </Checkbox>
          <Checkbox size="sm" className="block" value={2}>
            Checkbox3
          </Checkbox>
        </FieldsetControl>
        <div className="flex gap-6">
          <FieldsetControl labelText="Checkbox(size=lg)">
            <Checkbox className="block" value={0}>
              Checkbox1
            </Checkbox>
            <Checkbox className="block" value={1}>
              Checkbox2
            </Checkbox>
            <Checkbox className="block" value={2}>
              Checkbox3
            </Checkbox>
          </FieldsetControl>
          <FieldsetControl labelText="Checkbox(size=md)">
            <Checkbox size="md" className="block" value={0}>
              Checkbox1
            </Checkbox>
            <Checkbox size="md" className="block" value={1}>
              Checkbox2
            </Checkbox>
            <Checkbox size="md" className="block" value={2}>
              Checkbox3
            </Checkbox>
          </FieldsetControl>
          <FieldsetControl labelText="Checkbox(size=sm)">
            <Checkbox size="sm" className="block" value={0}>
              Checkbox1
            </Checkbox>
            <Checkbox size="sm" className="block" value={1}>
              Checkbox2
            </Checkbox>
            <Checkbox size="sm" className="block" value={2}>
              Checkbox3
            </Checkbox>
          </FieldsetControl>
        </div>
        <div className="flex gap-6">
          <CheckboxGroup
            labelText="Checkbox group(size=sm)"
            items={[
              { value: '0', label: 'Checkbox1' },
              { value: '1', label: 'Checkbox2' },
              { value: '2', label: 'Checkbox3' }
            ]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log(`${e.target.value}, ${e.target.checked}`)
            }
          />
          <CheckboxGroup
            size="md"
            labelText="Checkbox group(size=md)"
            items={[
              { value: '0', label: 'Checkbox1' },
              { value: '1', label: 'Checkbox2' },
              { value: '2', label: 'Checkbox3' }
            ]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log(`${e.target.value}, ${e.target.checked}`)
            }
          />
          <CheckboxGroup
            size="sm"
            labelText="Checkbox group(size=sm)"
            items={[
              { value: '0', label: 'Checkbox1' },
              { value: '1', label: 'Checkbox2' },
              { value: '2', label: 'Checkbox3' }
            ]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log(`${e.target.value}, ${e.target.checked}`)
            }
          />
        </div>
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
          <LabelControl labelText="Text(size=lg)">
            <Input />
          </LabelControl>
          <LabelControl labelText="Text(size=md)">
            <Input size="md" />
          </LabelControl>
          <LabelControl labelText="Text(size=sm)">
            <Input size="sm" />
          </LabelControl>
        </div>
        <div className="flex space-x-4">
          <LabelControl labelText="File input" helperText="Helper text">
            <FileInput />
          </LabelControl>
          <LabelControl
            labelText="File input"
            helperText="Helper text"
            isInvalid={true}
            errorMessage="Error message"
          >
            <FileInput />
          </LabelControl>
        </div>
        <div className="flex space-x-4">
          <LabelControl labelText="File input" helperText="size=lg">
            <FileInput />
          </LabelControl>
          <LabelControl labelText="File input" helperText="size=md">
            <FileInput size="md" />
          </LabelControl>
          <LabelControl labelText="File input" helperText="size=sm">
            <FileInput size="sm" />
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
            <Textarea rows={4} maxLength={50} />
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

export default Forms
