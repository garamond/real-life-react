import {render} from 'catalog';

render({
  title: 'Catalog Demo',
  pages: [
    {
      path: '/',
      title: 'Introduction',
      component: require('./README.md')
    },
    {
      title: 'Components',
      pages: [
        {
          path: '/components/button',
          title: 'Button',
          imports: {Button: require('./components/Button/Button')},
          component: require('./components/Button/Button.docs.md')
        }
      ]
    }
  ]
}, document.getElementById('catalog'));
