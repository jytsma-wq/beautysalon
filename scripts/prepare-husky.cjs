const { spawnSync } = require('child_process');

let huskyBin;

try {
  huskyBin = require.resolve('husky/bin.js');
} catch {
  process.exit(0);
}

const result = spawnSync(process.execPath, [huskyBin], { stdio: 'inherit' });

if (result.status !== 0) {
  process.exit(result.status || 1);
}
