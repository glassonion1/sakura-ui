import React from 'react'
import { H1, Button } from '@sakura-ui/core'
//from '../../../packages/core/src'
import {
  CheckboxGroup,
  Radio,
  Select,
  FileInput,
  Input,
  FieldsetControl,
  LabelControl
} from '@sakura-ui/forms'
//from '../../../packages/forms/src'

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
    </div>
  )
}

export default Forms
