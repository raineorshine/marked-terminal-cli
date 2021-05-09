import execa from 'execa'

test('print markdown', async () => {
  const { stdout } = await execa('node', ['./src/cli.js', 'README.md'], { env: { FORCE_COLOR: '1' } })
  expect(stdout).toBe(`[35m[4m[1m# marked-terminal-cli[22m[24m[39m

[0m[34m![npm version](https://img.shields.io/npm/v/marked-terminal-cli.svg)[39m[0m
[0m[34m ([34m[4mhttps://npmjs.org/package/marked-terminal-cli[24m[39m[34m)[39m[0m

[0mA better way to read README's in the CLI![0m

[0mRead and print markdown files using [34mmarked-terminal ([34m[4mhttps://github.com/mikaelbr/marked-terminal[24m[39m[34m)[39m.[0m

[32m[1m## Install[22m[39m

    [33mnpm install -g marked-terminal-cli[39m

[32m[1m## Usage[22m[39m

    [33mmarked-terminal-cli README.md[39m

[0mYou may need to force color when piping to less:[0m

    [33mFORCE_COLOR=1 marked-terminal-cli README.md | less -r[39m

[0mAdd handy aliases to your ~/.bashrc:[0m

    [33malias md=marked-terminal-cli[39m
    [33m[39m
    [33m# read markdown file with marked-terminal-cli and pass to less[39m
    [33mlessmd() {[39m
    [33m  FORCE_COLOR=1 marked-terminal-cli "$@" | less -r[39m
    [33m}[39m`)
})
