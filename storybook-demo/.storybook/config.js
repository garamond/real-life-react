import { configure } from '@kadira/storybook'


import '../src/styles/main.css'

const req = require.context('../src/', true, /\.story\.js$/)


function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
