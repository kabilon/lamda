import typescript2 from 'rollup-plugin-typescript2';
import typescript from 'typescript';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'esm', sourcemap: true },
    ],
    watch: {
      include: 'src/**',
    },
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript2({
        typescript,
      }),
    ],
  },
];
