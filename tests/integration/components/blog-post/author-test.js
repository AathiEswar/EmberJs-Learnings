import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | blog-post/author', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BlogPost::Author />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <BlogPost::Author>
        template block text
      </BlogPost::Author>
    `);

    assert.dom().hasText('template block text');
  });
});
