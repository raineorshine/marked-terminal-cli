import fs from 'fs/promises'
import marked from 'marked'
import TerminalRenderer from 'marked-terminal'

const run = async filename => {
  const text = await fs.readFile(filename, 'utf-8')
  marked.setOptions({ renderer: new TerminalRenderer() })
  return marked(text).slice(0, -1) // trim final \n
}

export default run
