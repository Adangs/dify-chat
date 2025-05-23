import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [typescript({
    module: 'ESNext',
    rootDir: 'src',
    outDir: 'dist'
  })],
  external: ['typescript']
}
