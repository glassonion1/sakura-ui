import React, { Children } from 'react'
import * as production from 'react/jsx-runtime'
import { remark } from 'remark'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import remarkRehype from 'remark-rehype'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import rehypeExternalLinks from 'rehype-external-links'
import rebypeShiftHeding from 'rehype-shift-heading'
import rehypeReact from 'rehype-react'
import rehypeSlug from 'rehype-slug'
import { cx } from '@sakura-ui/helper'
import {
  Link,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Table,
  Caption,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Ul,
  Ol,
  Pre,
  Code,
  Faq,
  Question,
  Answer,
  Button,
  Card,
  CardImg,
  CardBody,
  CardFooter,
  LinkCard,
  LinkCardHeader,
  OverflowContainer
} from '@sakura-ui/core'
import {
  attrPlugin,
  youtubePlugin,
  linkButtonPlugin,
  gridPlugin,
  cellPlugin,
  cardPlugin,
  faqPlugin,
  headingsPlugin,
  type HeadingItem
} from '../plugins'

interface TocProps {
  items: HeadingItem[]
}

export const TableOfContents = ({ items }: TocProps) => {
  return (
    <>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`#${item.id}`}>{item.value}</Link>
            {item.children ? (
              <Ul>{<TableOfContents items={item.children} />}</Ul>
            ) : null}
          </li>
        )
      })}
    </>
  )
}

interface TableContainerProps extends React.ComponentPropsWithoutRef<'table'> {}

const TableContainer = (props: TableContainerProps) => {
  const { className, children, ...restProps } = props

  return (
    <OverflowContainer>
      <Table className={cx(className)} {...restProps}>
        {children}
      </Table>
    </OverflowContainer>
  )
}

interface DataProps {
  [key: `data-${string}`]: unknown
}

interface AnchorProps extends React.ComponentPropsWithoutRef<'a'>, DataProps {}

const Anchor = (props: AnchorProps) => {
  const { children, href, ...restProps } = props

  if (restProps['data-node'] === 'link-button') {
    return (
      <Button as="a" variant="secondary" href={href}>
        {children}
      </Button>
    )
  }

  return (
    <Link href={href} {...restProps}>
      {children}
    </Link>
  )
}

interface ArticleProps
  extends React.ComponentPropsWithoutRef<'article'>,
    DataProps {}

const Article = (props: ArticleProps) => {
  const { children, className, ...restProps } = props

  const node = restProps['data-node']

  if (node === 'card') {
    if (restProps['data-behavior'] === 'link') {
      const href = restProps['data-href'] as string

      return (
        <LinkCard href={href} className={cx(className)}>
          {children}
        </LinkCard>
      )
    }
    return <Card className={cx(className)}>{children}</Card>
  }

  return (
    <article className={className} {...restProps}>
      {children}
    </article>
  )
}

interface DivProps extends React.ComponentPropsWithoutRef<'div'>, DataProps {}

const Div = (props: DivProps) => {
  const { children, ...restProps } = props

  const node = restProps['data-node']

  if (node === 'card-title') {
    return <LinkCardHeader>{children}</LinkCardHeader>
  }
  if (node === 'card-description') {
    return <CardBody>{children}</CardBody>
  }
  if (node === 'card-footer') {
    return <CardFooter>{children}</CardFooter>
  }

  if (restProps['data-behavior'] === 'list') {
    // Set the css class configured for cells to the ul tag
    return (
      <ul className={restProps.className}>
        {Children.map(children, (child, index) => (
          <li className="sm:grid" key={index}>
            {child}
          </li>
        ))}
      </ul>
    )
  }

  return <div {...restProps}>{children}</div>
}

interface ImgProps extends React.ComponentPropsWithoutRef<'img'>, DataProps {}

const Img = (props: ImgProps) => {
  const { children, className, ...restProps } = props

  if (restProps['data-node'] === 'card-img') {
    return (
      <CardImg
        className={cx('w-full aspect-[352/226]', className)}
        {...restProps}
      />
    )
  }

  if (restProps['data-node'] === 'cell-img') {
    return <img className={cx('mb-4', className)} {...restProps} />
  }

  return <img className={className} {...restProps} />
}

interface IframeProps extends React.ComponentPropsWithoutRef<'iframe'> {}

const Iframe = (props: IframeProps) => {
  const { className, children, ...restProps } = props

  const styleMargin = `
    my-8
  `

  let style = `
    aspect-video
    w-full
    max-w-[470px]
  `

  if (props.width || props.height) {
    style = `
      aspect-video
      w-full
      lg:aspect-auto
      lg:w-[${props.width}px]
      lg:h-[${props.height}px]
    `
  }

  return (
    <iframe className={cx(styleMargin, style, className)} {...restProps}>
      {children}
    </iframe>
  )
}

type Props = {
  tocTitle?: string
  showToc?: boolean
  children: string
}

export const Markdown = ({ children, showToc, tocTitle = '目次' }: Props) => {
  const [toc, setToc] = React.useState<HeadingItem[]>([])
  const [element, setElement] = React.useState(<></>)

  React.useEffect(() => {
    setToc(markdown2Headings(children))
    setElement(markdown2ReactElements(children))
  }, [children])

  const markdown2Headings = (md: string) => {
    const result: any = remark().use(headingsPlugin).processSync(md)

    const headings: HeadingItem[] = result.data.fm.headings.filter(
      (obj: any) => obj.depth < 3
    )

    return headings
  }

  const rhypeReactOptions = {
    ...production,
    components: {
      a: Anchor,
      article: Article,
      button: Button,
      code: Code,
      dl: Faq,
      dt: Question,
      dd: Answer,
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
      iframe: Iframe,
      img: Img,
      ul: Ul,
      ol: Ol,
      pre: Pre,
      table: TableContainer,
      caption: Caption,
      thead: Thead,
      tbody: Tbody,
      th: Th,
      tr: Tr,
      td: Td,
      div: Div
    }
  }

  const markdown2ReactElements = (md: string) => {
    const elem = unified()
      .use(remarkParse) // md    -> mdast     (Markdown Abstract Syntax Tree)
      .use(remarkGfm) // mdast -> GFM mdast (GitHub Flavored Markdown Abstract Syntax Tree)
      .use(remarkDirective) // support for directive syntax
      .use(remarkBreaks)
      .use(attrPlugin)
      .use(youtubePlugin)
      .use(linkButtonPlugin)
      .use(cellPlugin)
      .use(cardPlugin)
      .use(faqPlugin)
      .use(gridPlugin)
      .use(remarkRehype, {
        allowDangerousHtml: true
      }) // mdast -> hast      (HTML Abstract Syntax Tree)
      .use(rehypeRaw) // hast  -> hast
      .use(rehypeExternalLinks, { target: '_blank' }) // hast  -> hast
      .use(rebypeShiftHeding, { shift: 1 }) // hast  -> hast
      .use(rehypeSlug)
      .use(rehypeReact, rhypeReactOptions as any) // hast  -> React Elements
      .processSync(md).result
    return elem
  }

  const style = `
    rounded-3xl
    p-10
    bg-wood-50
  `

  return (
    <div className="py-8 flex flex-col gap-8">
      {showToc && (
        <nav className={style}>
          <h2 className="mb-4 font-bold text-h-xs-m sm:text-h-xs">
            {tocTitle}
          </h2>
          <Ul>
            <TableOfContents items={toc} />
          </Ul>
        </nav>
      )}
      {element}
    </div>
  )
}
