#!/usr/bin/env node
import run from './index.js'

const args = process.argv.slice(2)
const usage = `
Usage:

  $ marked-terminal-cli README.md

  You may need to force color when piping to less:

  $ FORCE_COLOR=1 marked-terminal-cli README.md | less -r
`

if (args.length === 0) {
  console.log(usage)
  process.exit(0)
}

;(async () => {

  process.stdout.write(await run(args.join(' ')))

})()
