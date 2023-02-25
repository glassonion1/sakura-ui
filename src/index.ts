import { extend } from './configs'

interface Config {
  [prop: string]: any
}

//const content = ``

export const sakuraConfig = (userConfig = {}) => {
  const newConfig: Config = {
    ...userConfig,
    theme: {
      extend: extend
    }
  }
  /*
  if (!newConfig.content) {
    newConfig.content = [content]
  } else if (Array.isArray(newConfig.content)) {
    newConfig.content = [...newConfig.content, content]
  } else if (newConfig.content.files) {
    newConfig.content.files = [...newConfig.content.files, content]
  } else if (!newConfig.content.files) {
    newConfig.content.files = [content]
  }
   */

  return newConfig
}

export {
  Button,
  Card,
  Code,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  IconButton,
  InfoCard,
  Link,
  Ol,
  Ul,
  Pre,
  Radio,
  RadioGroup,
  Select,
  Table,
  Caption,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Text,
  Textarea
} from './components'
