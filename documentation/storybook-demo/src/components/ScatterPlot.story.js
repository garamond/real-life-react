import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import ScatterPlot from './ScatterPlot'

const normal = d3.random.normal(.5, .1);

storiesOf('ScatterPlot', module)
  
  .add('3 points', () =>
    <ScatterPlot width={ 300 } height={ 300 }
                 points={ [ [ .6, .2 ], [ .9, .5 ], [ .1, .4 ] ]}/>
  )

  .add('5000 points', () =>
    <ScatterPlot width={ 300 } height={ 300 }
                 points={
                    d3.range(5000).map(() => d3.range(2).map(normal))
                 }/>
  )

  .add('5000 points transparent', () =>
    <ScatterPlot width={ 300 } height={ 300 }
                 opacity={ .1 }
                 points={
                    d3.range(10000).map(() => d3.range(2).map(normal))
                 }/>
  )
