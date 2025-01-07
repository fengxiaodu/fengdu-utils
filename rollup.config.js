/*
 * @Author: Wanko
 * @Date: 2024-12-30 10:06:00
 * @LastEditors: Wanko
 * @LastEditTime: 2024-12-30 10:30:26
 * @Description: 
 */
import terser from '@rollup/plugin-terser'

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js'
  },
  plugins: [terser()]
}
