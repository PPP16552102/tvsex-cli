#!/usr/bin/env node

import { Command, program } from 'commander'

const grogram = new Command()

program
  .name('tvsex')
  .description('CLI tool for VSCode plugin development with monorepo structure')
  .version('0.1.0')
  .action((projectName, options) => {
    try {
      console.log('hello world', projectName);
    } catch (error) {

    }
  })

program.parse()
