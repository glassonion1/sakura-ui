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
  CardHeader,
  CardBody,
  CardFooter,
  Faq,
  Question,
  Answer
} from '@sakura-ui/core'
//from '../../packages/core/src'
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Select,
  FileInput,
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
        test1,test2,abcdefghijk
        <Icon icon="shopping_cart" className="text-sea-600" />
        test3 <Link>link text here</Link>
      </p>
      <p>
        External link: <Link href="https://google.com">link text here</Link>
      </p>
      <div>
        List
        <Ul>
          <li>
            External link: <Link href="https://google.com">link text here</Link>
          </li>
        </Ul>
      </div>
      <div className="w-1/3 my-4">
        <H2>Card</H2>
        <Card>
          <CardBody>
            XXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxx
            <br />
            XXXXXxxxxxxxxxxxxxXXX
          </CardBody>
        </Card>
        <Card>
          <CardHeader>XXXxxx</CardHeader>
          <CardBody>XXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxx</CardBody>
        </Card>
      </div>
      <div className="w-1/3 my-4">
        <Card>
          <img src="bg-mt.webp" className="object-cover h-48 w-full" />
          <CardHeader>Header:XXXxxx</CardHeader>
          <CardBody>Body:XXXXXXXXXXXXxxxxxxxxxxxxx</CardBody>
          <CardFooter>Footer:XXXXXXXXXXXXxxxxxxxxxxxxx</CardFooter>
        </Card>
      </div>
      <div className="w-1/3 my-4">
        <Card>
          <img src="bg-mt.webp" className="object-cover h-48 w-full" />
          <CardHeader>Header:XXXxxx</CardHeader>
          <CardBody>Body:XXXXXXXXXXXXxxxxxxxxxxxxx</CardBody>
          <CardFooter className="">
            <Button variant="secondary" className="w-full mb-2">
              Button1
            </Button>
            <Button variant="secondary" className="w-full">
              Button2
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="my-4 flex items-stretch gap-x-20">
        <Card className="w-80">
          <img src="bg-mt.webp" className="object-cover h-48 w-full" />
          <CardHeader>Header:XXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</CardHeader>
          <CardBody>
            Body:XXXXXXXXXXXX
            <br />
            xxxxxxxxxxxxx
            <br />
            xxxxxx
            <br />
            XXXXXX
          </CardBody>
          <CardFooter>
            <Button variant="secondary" className="w-full">
              Button1
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-80">
          <img src="bg-mt.webp" className="object-cover h-48 w-full" />
          <CardHeader>Header: XXXxxx</CardHeader>
          <CardBody>Body: XXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxx</CardBody>
          <CardFooter>
            <Button variant="secondary" className="w-full">
              Button1
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <H2>List</H2>
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
      <div className="my-8">
        <H2>Frequently Asked Questions</H2>
        <Faq>
          <Question>
            Why do you need an FAQ section?
            <br />
            FAQ Sample
          </Question>
          <Answer>
            A good website experience anticipates the needs of a user at every
            stage of their journey, and on every page. It’s intuitive and all
            information is easy to access.
          </Answer>
          <Question>Is an FAQ section the same as a knowledge base?</Question>
          <Answer>
            FAQ sections usually consist of a series of categories and questions
            with concise answers across one or a few pages. A knowledge base is
            usually an extensive directory with comprehensive articles accessed
            by a search facility.
          </Answer>
        </Faq>
      </div>
      <div className="my-4">
        <H2>Buttons</H2>
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
        <IconButton
          className="mr-2"
          icon="face"
          onClick={() => setCount((count: number) => count + 1)}
        >
          Icon button
        </IconButton>
        <IconButton className="mr-2" variant="secondary" icon="face">
          Icon button
        </IconButton>
        <IconButton className="mr-2" icon="keyboard_arrow_down" />
        <IconButton className="mr-2" icon="face" variant="secondary" />
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
          size="xs"
          variant="secondary"
          onClick={() => setCount((count: number) => count + 1)}
        >
          Secondary Button(xs)
        </Button>
        <IconButton
          className="mr-2"
          size="xs"
          variant="secondary"
          icon="arrow_forward"
          iconLayout="right"
          onClick={() => setCount((count: number) => count + 1)}
        >
          Secondary Button(xs)
        </IconButton>
      </div>
      <div className="my-4">
        <Button
          className="mr-2"
          size="md"
          onClick={() => setCount((count: number) => count + 1)}
        >
          Primary button(md)
        </Button>
        <Button
          className="mr-2"
          size="sm"
          variant="secondary"
          onClick={() => setCount((count: number) => count + 1)}
        >
          Secondary Button(sm)
        </Button>
        <IconButton className="mr-2" size="md" icon="face">
          Icon button(md)
        </IconButton>
        <IconButton className="mr-2" variant="secondary" size="sm" icon="face">
          Icon button(sm)
        </IconButton>
      </div>
      <div className="my-4">
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
        <H2>Link Buttons</H2>
        <Button className="mr-2">Normal button</Button>
        <Button
          as="a"
          className="mr-2"
          href="https://google.com"
          target="_blank"
        >
          Link button
        </Button>
        <IconButton
          as="a"
          className="mr-2"
          target="_blank"
          icon="open_in_new"
          iconLayout="right"
          variant="secondary"
        >
          Link icon button
        </IconButton>
        <Button
          as="a"
          size="md"
          className="mr-2"
          href="https://google.com"
          target="_blank"
          variant="secondary"
        >
          Link button
        </Button>
        <IconButton
          as="a"
          size="md"
          className="mr-2"
          target="_blank"
          icon="open_in_new"
          iconLayout="right"
        >
          Link icon button
        </IconButton>
      </div>
      <div className="my-4">
        <Button
          as="a"
          size="md"
          className="mr-2"
          href="https://google.com"
          target="_blank"
        >
          Link button
        </Button>
        <IconButton
          as="a"
          size="sm"
          className="mr-2"
          target="_blank"
          icon="open_in_new"
          iconLayout="right"
          variant="secondary"
        >
          Link icon button
        </IconButton>
        <Button
          as="a"
          size="sm"
          className="mr-2"
          href="https://google.com"
          target="_blank"
          variant="secondary"
        >
          Link button
        </Button>
        <IconButton
          as="a"
          size="xs"
          className="mr-2"
          target="_blank"
          icon="open_in_new"
          iconLayout="right"
        >
          Link icon button
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
        <FileInput />
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

export default App
