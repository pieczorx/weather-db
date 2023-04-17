import {getViteConfig} from './src/setup/getViteConfig'

export default ({mode}) => {
  return getViteConfig({
    mode,
  })
}
