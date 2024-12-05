import React, { useState } from 'react'
import clsx from 'clsx'
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Button,
  MenuButton,
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
  Td,
  LinkCard,
  LinkCardHeader,
  LangSelector,
  NavigationItem
} from '@sakura-ui/core'

const Home = () => {
  const [count, setCount] = useState<number>(0)

  const langs = [
    { code: 'ja', title: '日本語', path: './' },
    { code: 'en', title: 'English', path: './' },
    { code: 'ko', title: '한국어', path: './' }
  ]

  const style = `
    min-h-screen
    text-sumi-900
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
            <a className="" href="/">
              Sakura-UI
            </a>
          </div>
          <nav>
            <ul className="flex sm:gap-8">
              <li className={styleSp}>
                <NavigationItem href="/">Home</NavigationItem>
              </li>
              <li className={styleSp}>
                <NavigationItem href="forms">Forms</NavigationItem>
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
                          <NavigationItem href="/">Home</NavigationItem>
                        </li>
                        <li>
                          <NavigationItem href="forms">Forms</NavigationItem>
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
        <div className="text-sumi-900 text-base p-8">
          <Link href="./forms">Form examples</Link>
          <IconButton
            className="mr-2 fixed bottom-4 right-4"
            icon="arrow_upward"
            variant="secondary"
            rounded="full"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <div>
            <H2>Language selector</H2>
            This is an experimental feature. It only works in browsers that
            support the Popover API and Anchor positioning.
            <ul className="flex gap-8">
              <li>
                <LangSelector current="ja" langs={langs} />
              </li>
            </ul>
          </div>
          <div>
            <H2>Headings</H2>
            <H1>SakuraUI Heading1</H1>
            <H2>SakuraUI Heading2</H2>
            <H3>SakuraUI Heading3</H3>
            <H4>SakuraUI Heading4</H4>
            <H5>SakuraUI Heading5</H5>
            <H6>SakuraUI Heading6</H6>
          </div>
          <div>
            <H2>Text</H2>
            <p>
              <Icon
                className="text-sea-600 !leading-7 align-middle"
                opticalSize={16}
              >
                home
              </Icon>
              test1,test2,test3
            </p>
            <p>
              test1,test2,abcdefghijk
              <Icon
                className="text-sea-600 !leading-7 align-middle"
                opticalSize={16}
              >
                shopping_cart
              </Icon>
              test3 <Link>link text here</Link>
            </p>
            <p>
              External link:{' '}
              <Link href="https://google.com">link text here</Link>
            </p>
          </div>
          <div>
            <H2>List</H2>
            <Ul>
              <li>
                External link:{' '}
                <Link href="https://google.com">link text here</Link>
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
            <div className="flex gap-4">
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
          <div className="sm:w-1/3">
            <H2>Card</H2>
            <Card>
              <CardBody>
                XXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxx
                <br />
                XXXXXxxxxxxxxxxxxxXXX
              </CardBody>
            </Card>
            <LinkCard href="/">
              <LinkCardHeader>xxxXXX</LinkCardHeader>
              <CardBody>xxxxxxxxXXX</CardBody>
            </LinkCard>
            <LinkCard href="https://google.com">
              <LinkCardHeader>xxxXXX</LinkCardHeader>
              <CardBody>xxxxxxxxXXX</CardBody>
            </LinkCard>
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
          <div className="sm:w-1/3 my-4">
            <Card>
              <CardImg src="bg-mt.webp" className="h-48 w-full" />
              <CardHeader>Header:XXXxxx</CardHeader>
              <CardBody>Body:XXXXXXXXXXXXxxxxxxxxxxxxx</CardBody>
              <CardFooter>Footer:XXXXXXXXXXXXxxxxxxxxxxxxx</CardFooter>
            </Card>
          </div>
          <div className="sm:w-1/3 my-4">
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
              <CardBody>
                Body: XXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxx
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
              <CardBody>
                Body: XXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxx
              </CardBody>
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
                A good website experience anticipates the needs of a user at
                every stage of their journey, and on every page. It’s intuitive
                and all information is easy to access.
              </Answer>
              <Question>
                Is an FAQ section the same as a knowledge base?
              </Question>
              <Answer>
                FAQ sections usually consist of a series of categories and
                questions with concise answers across one or a few pages. A
                knowledge base is usually an extensive directory with
                comprehensive articles accessed by a search facility.
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
            <IconButton
              className="mr-2"
              variant="secondary"
              size="sm"
              icon="face"
            >
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
            <Button className="mr-2" asChild>
              <a href="https://google.com">Link button</a>
            </Button>
            <IconButton
              className="mr-2"
              icon="open_in_new"
              iconLayout="right"
              variant="secondary"
              asChild
            >
              <a href="https://google.com" target="_blank">
                Link icon button
              </a>
            </IconButton>
            <Button size="md" className="mr-2" variant="secondary" asChild>
              <a href="https://google.com">Link button</a>
            </Button>
            <IconButton
              size="md"
              className="mr-2"
              icon="open_in_new"
              iconLayout="right"
              asChild
            >
              <a href="https://google.com" target="_blank">
                Link icon button
              </a>
            </IconButton>
          </div>
          <div className="my-4">
            <Button size="md" className="mr-2" asChild>
              <a href="https://google.com">Link button</a>
            </Button>
            <IconButton
              size="sm"
              className="mr-2"
              icon="open_in_new"
              iconLayout="right"
              variant="secondary"
              asChild
            >
              <a href="https://google.com" target="_blank">
                Link icon button
              </a>
            </IconButton>
            <Button size="sm" className="mr-2" variant="secondary" asChild>
              <a href="https://google.com">Link button</a>
            </Button>
            <IconButton
              size="xs"
              className="mr-2"
              icon="open_in_new"
              iconLayout="right"
            >
              <a href="https://google.com" target="_blank">
                Link icon button
              </a>
            </IconButton>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
