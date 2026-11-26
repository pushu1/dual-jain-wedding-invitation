let esbuild;
try {
  esbuild = require('esbuild');
} catch (e) {
  try {
    esbuild = require('C:/Users/Hp/.gemini/antigravity/scratch/param-pummy-wedding/node_modules/esbuild');
  } catch (err) {
    console.error('Failed to require esbuild:', err);
    process.exit(1);
  }
}

const path = require('path');

async function build() {
  const rootDir = __dirname;
  await esbuild.build({
    entryPoints: [path.join(rootDir, 'src', 'main.jsx')],
    bundle: true,
    outfile: path.join(rootDir, 'app.js'),
    format: 'iife',
    globalName: 'RoyalWeddingApp',
    external: ['react', 'react-dom', 'react-dom/client'],
    banner: {
      js: `
window.require = function(mod) {
  if (mod === 'react') return window.React;
  if (mod === 'react-dom' || mod === 'react-dom/client') return window.ReactDOM;
  return {};
};
`
    }
  });
  console.log('Successfully built app.js with esbuild for Dual Jain Wedding Invitation!');
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
