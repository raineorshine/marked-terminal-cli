# marked-terminal-cli
[![npm version](https://img.shields.io/npm/v/marked-terminal-cli.svg)](https://npmjs.org/package/marked-terminal-cli)

A better way to read README's in the CLI!

Read and print markdown files using [marked-terminal](https://github.com/mikaelbr/marked-terminal).

## Install

```sh
npm install -g marked-terminal-cli
```

## Usage

```sh
marked-terminal-cli README.md
```

You may need to force color when piping to less:

```sh
FORCE_COLOR=1 marked-terminal-cli README.md | less -r
```
