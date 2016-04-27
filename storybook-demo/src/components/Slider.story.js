import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { WithState } from '../../.storybook/helpers'

import Slider from './Slider'

storiesOf('Slider', module)
  .add('default', () =>
    <WithState handlers={{ onChange: 'value' }}>
      <Slider width={ 200 } height={ 25 }
              title="Slide me" value={ .5 }
              onChange={ action('change') }
          />
    </WithState>
  )
