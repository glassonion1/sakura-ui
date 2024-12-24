import React from 'react'
import clsx from 'clsx'
import { H1, H2, MenuButton, NavigationItem } from '@sakura-ui/core'
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
  const style = `
    min-h-screen
    text-solid-gray-900
    text-base
  `

  const containerStyle = `
    max-w-xs
    sm:max-w-screen-sm
    md:max-w-screen-md
    lg:max-w-screen-lg
    xl:max-w-[1120px]
    mx-auto
  `

  const styleSp = 'hidden sm:block'

  return (
    <div className={style}>
      <header className="max-w-[1120px] mx-auto">
        <div className="p-6 xl:px-0 flex items-center justify-between">
          <div className="text-3xl font-bold">
            <a className="" href="/sakura-ui/">
              Sakura-UI
            </a>
          </div>
          <nav>
            <ul className="flex sm:gap-8">
              <li className={styleSp}>
                <NavigationItem href="/sakura-ui/">Home</NavigationItem>
              </li>
              <li className={styleSp}>
                <NavigationItem href="/sakura-ui/forms">Forms</NavigationItem>
              </li>
              <li className={clsx(styleSp, 'py-2')} aria-hidden="true">
                |
              </li>
              <li>
                <MenuButton>
                  <div className="fixed top-24 left-0 right-0 max-h-[calc(100vh-6rem)] overflow-y-scroll">
                    <nav className="p-6 xl:px-0 bg-white flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center">
                      <ul>
                        <li>
                          <NavigationItem href="/sakura-ui/">
                            Home
                          </NavigationItem>
                        </li>
                        <li>
                          <NavigationItem href="/sakura-ui/forms">
                            Forms
                          </NavigationItem>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </MenuButton>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={containerStyle}>
        <H1>SakuraUI Forms sample</H1>
        <div className="my-4 flex flex-col items-start gap-8">
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
            <LabelControl
              labelText="Select with helper"
              helperText="Helper text"
            >
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
            <div>
              <fieldset disabled>
                <div className="flex flex-col gap-8">
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
                  <FieldsetControl
                    direction="flex-row"
                    labelText="Radio flex-row"
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
                    labelText="Checkbox flex-row"
                  >
                    <Checkbox>Check1</Checkbox>
                    <Checkbox>Check2</Checkbox>
                  </FieldsetControl>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Forms
