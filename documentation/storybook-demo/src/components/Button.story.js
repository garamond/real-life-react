import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Button from './Button'

storiesOf('Button', module)

  .add('normal', () =>
    <Button onClick={ action('click') }>Click me</Button>
  )

  .add('primary', () =>
    <Button onClick={ action('click') } primary>Click me</Button>
  )
