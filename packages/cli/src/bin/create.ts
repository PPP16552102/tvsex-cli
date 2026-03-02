#!/usr/bin/env node

import { Command, program } from 'commander'

const grogram = new Command()

program.name('create <project-name>')
  .action((projectName, actions) => {
    console.log('12312312', projectName);
  })
