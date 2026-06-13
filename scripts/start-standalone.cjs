const path = require('path');

const args = process.argv.slice(2);

function getArgValue(names) {
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    const [name, inlineValue] = arg.split('=', 2);

    if (names.includes(name)) {
      return inlineValue || args[index + 1];
    }
  }

  return undefined;
}

function resolveEnvReference(value) {
  if (!value) {
    return value;
  }

  if (value.startsWith('$')) {
    return process.env[value.slice(1)] || value;
  }

  return value;
}

const port = resolveEnvReference(getArgValue(['-p', '--port']));
const hostname = resolveEnvReference(getArgValue(['-H', '--hostname']));

if (port) {
  process.env.PORT = port;
}

if (hostname) {
  process.env.HOSTNAME = hostname;
}

if (!process.env.PORT) {
  process.env.PORT = '3000';
}

if (!process.env.HOSTNAME) {
  process.env.HOSTNAME = '0.0.0.0';
}

require(path.join(process.cwd(), '.next', 'standalone', 'server.js'));
