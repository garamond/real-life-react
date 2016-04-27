> Hi, this is a demo of [Catalog](https://interactivethings.github.io/catalog/)!

## Component Documentation

With Catalog, you can write documentation files for React components in Markdown.

Code blocks tagged with `react` will be transformed into live previews (called "Specimens"). But there's a [lot more](https://interactivethings.github.io/catalog/#/specimens) than React components you can document with Catalog!

````code
# A normal title

Some text

```react
<Button>Default button</Button>
```
````

## Setup

### Entry point

In your entry file, just configure Catalog and render it to an element.

```code|lang-javascript
import {render} from 'catalog';

render({
  title: 'Catalog Demo',
  pages: [
    {
      path: '/',
      title: 'Introduction',
      component: require('./README.md')
    },
    // ...
  ]
}, document.getElementById('catalog'));
```

### Webpack

Catalog provides a loader which allows you to import hot-reloadable Markdown files.

```code|lang-javascript
{
  // Other webpack config ...
  module: {
    loaders: [
      {
        test: /\.md$/,
        loaders: ['catalog/lib/loader', 'raw']
      }
    ]
  }
};

```