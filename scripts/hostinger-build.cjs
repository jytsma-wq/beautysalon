const { spawnSync } = require('child_process');
const fs = require('fs');

const databaseUrl = process.env.DATABASE_URL || 'mysql://build:build@localhost:3306/build';
const env = {
  ...process.env,
  BUILD_TIMESTAMP: new Date().toISOString(),
  SKIP_ENV_VALIDATION: process.env.SKIP_ENV_VALIDATION || '1',
  DATABASE_URL: databaseUrl,
  DIRECT_DATABASE_URL: process.env.DIRECT_DATABASE_URL || databaseUrl,
};

function run(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit', env });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

if (process.env.RUN_DB_MIGRATIONS === '1') {
  run(process.execPath, [require.resolve('prisma/build/index.js'), 'migrate', 'deploy']);
}

run(process.execPath, [require.resolve('next/dist/bin/next'), 'build']);

[
  ['.next/static', '.next/standalone/.next/static'],
  ['public', '.next/standalone/public'],
].forEach(([src, dest]) => {
  try {
    fs.cpSync(src, dest, { recursive: true });
  } catch {
    // Optional assets may not exist in failed or partial framework outputs.
  }
});
