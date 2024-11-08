#!/usr/bin/env node
import { join } from 'node:path';
import { execSync } from 'node:child_process';
const __dirname = import.meta.dirname;

const args = process.argv.slice(2);
const catalog = args[0] || 'default';

const catalogDir = join(__dirname, '../');
const projectDIR = join(__dirname, `../examples/${catalog}`);

execSync(
  `cross-env NODE_ENV=development PROJECT_DIR=${projectDIR} CATALOG_DIR=${catalogDir} npm run scripts:hydrate-content && cross-env PROJECT_DIR=${projectDIR} CATALOG_DIR=${catalogDir} npm run dev:local`,
  {
    cwd: catalogDir,
    stdio: 'inherit',
  }
);
