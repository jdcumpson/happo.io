import os from 'os';

export const endpoint = 'https://happo.io';
export const include = '**/@(*-happo|happo).@(js|jsx)';
export const stylesheets = [];
export const targets = {};
export const configFile = './.happo.js';
export const type = 'react';
export const plugins = [];
export const tmpdir = os.tmpdir();
export function customizeWebpackConfig(config) {
  // provide a default no-op for this config option so that we can assume it's
  // always there.
  return config;
}
