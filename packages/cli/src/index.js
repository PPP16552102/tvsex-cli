#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var grogram = new commander_1.Command();
commander_1.program
    .name('tvsex-cli')
    .description('CLI tool for VSCode plugin development with monorepo structure')
    .version('0.1.0');
commander_1.program.parse();
