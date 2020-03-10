import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH
const dist = 'public/build'

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: `${dist}/bundle.js`,
  },
  plugins: [
    svelte({
      dev: !production,
      css: css => css.write(`${dist}/bundle.css`),
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    !production && serve(),
    !production && livereload('public'),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}

function serve() {
  let started = false

  return {
    writeBundle() {
      if (!started) {
        started = true

        require('child_process').spawn('npm', ['run', 'serve', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        })
      }
    },
  }
}
