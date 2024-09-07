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
  CardImg,
  CardHeader,
  CardBody,
  CardFooter,
  Faq,
  Question,
  Answer,
  OverflowContainer,
  Table,
  Tbody,
  Tr,
  Th,
  Td
} from '@sakura-ui/core'
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

const Home = () => {
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
        <Icon className="text-sea-600 !leading-7 align-middle" opticalSize={16}>
          home
        </Icon>
        test1,test2,test3
      </p>
      <p>
        test1,test2,abcdefghijk
        <Icon className="text-sea-600 !leading-7 align-middle" opticalSize={16}>
          shopping_cart
        </Icon>
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
          <li>
            External link:{' '}
            <Link href="https://google.com">
              https://testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest.com
            </Link>
          </li>
          <li>
            Normal link:{' '}
            <Link href="/">
              FAQ sections usually consist of a series of categories and
              questions with concise answers across one or a few pages. A
              knowledge base is usually an extensive directory with
              comprehensive articles accessed by a search facility.
            </Link>
          </li>
        </Ul>
      </div>
      <div>
        <H2>Icons</H2>
        <div className="flex gap-2">
          {[16, 20, 24, 40, 44, 48].map((size) => (
            <div className="inline-flex flex-col items-center">
              <Icon
                opticalSize={size}
                altText="Opens in new tab"
                className="!leading-7"
              >
                open_in_new
              </Icon>
              {size}px
            </div>
          ))}
        </div>
      </div>
      <div>
        <H2>List</H2>
        <Ul>
          <li>List1</li>
          <li>List2</li>
          <Ul>
            <li>List2-1</li>
            <li>List2-2</li>
            <Ul>
              <li>List3-1</li>
              <li>List3-2</li>
            </Ul>
          </Ul>
        </Ul>
      </div>
      <div>
        <H2>Ordered List</H2>
        <Ol>
          <li>List1</li>
          <li>List2</li>
          <Ol>
            <li>List2-1</li>
            <li>List2-2</li>
          </Ol>
        </Ol>
      </div>
      <div className="w-1/2 my-4">
        <H2>Table(scroll-x)</H2>
        <OverflowContainer>
          <Table>
            <Tbody>
              <Tr>
                <Th>key1</Th>
                <Th>key2</Th>
                <Th>key3</Th>
                <Th>key4</Th>
                <Th>key5</Th>
              </Tr>
              <Tr>
                <Td>value1</Td>
                <Td>value2-value2</Td>
                <Td>value3-value3-value3</Td>
                <Td>value4-value4-value4-value4</Td>
                <Td>
                  value5-value5
                  <br />
                  value5-value5-value5
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </OverflowContainer>
      </div>
      <div className="w-1/3">
        <H2>Card</H2>
        <Card>
          <CardBody>
            XXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxx
            <br />
            XXXXXxxxxxxxxxxxxxXXX
          </CardBody>
        </Card>
        <Card className="flex justify-between items-center">
          <span>
            <CardHeader>xxxXXX</CardHeader>
            <CardBody>xxxxxxxxXXX</CardBody>
          </span>
          <Icon
            className="text-base-sm !font-medium mr-6"
            icon="arrow_forward"
          />
        </Card>
        <Card>
          <CardImg src="bg-mt.webp" className="h-48 w-full" />
          <CardHeader>Header: XXXxxx</CardHeader>
          <CardBody>Body: XXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxx</CardBody>
        </Card>
        <Card>
          <CardHeader>Header: XXXxxx</CardHeader>
          <CardBody>Body: XXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxx</CardBody>
        </Card>
      </div>
      <div className="w-1/3 my-4">
        <Card>
          <CardImg src="bg-mt.webp" className="h-48 w-full" />
          <CardHeader>Header:XXXxxx</CardHeader>
          <CardBody>Body:XXXXXXXXXXXXxxxxxxxxxxxxx</CardBody>
          <CardFooter>Footer:XXXXXXXXXXXXxxxxxxxxxxxxx</CardFooter>
        </Card>
      </div>
      <div className="w-1/3 my-4">
        <Card>
          <CardImg src="bg-mt.webp" className="h-48 w-full" />
          <CardHeader>Header:XXXxxx</CardHeader>
          <CardBody>Body:XXXXXXXXXXXXxxxxxxxxxxxxx</CardBody>
          <CardFooter>
            <Button variant="secondary" className="w-full mb-2">
              Button1
            </Button>
            <Button variant="secondary" className="w-full">
              Button2
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="my-4 grid grid-cols-3 gap-4">
        <Card className="">
          <CardImg src="bg-mt.webp" className="h-48 w-full" />
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
        <Card className="">
          <CardImg src="bg-mt.webp" className="h-48 w-full" />
          <CardHeader>Header: XXXxxx</CardHeader>
          <CardBody>Body: XXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxx</CardBody>
          <CardFooter>
            <Button variant="secondary" className="w-full">
              Button1
            </Button>
          </CardFooter>
        </Card>
        <Card className="">
          <CardImg src="bg-mt.webp" className="h-48 w-full" />
          <CardHeader>Header: XXXxxx</CardHeader>
          <CardBody>Body: XXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxx</CardBody>
        </Card>
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

export default Home
