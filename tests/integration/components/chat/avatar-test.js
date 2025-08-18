import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | chat/avatar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Chat::Avatar />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Chat::Avatar>
        template block text
      </Chat::Avatar>
    `);

    assert.dom().hasText('template block text');
  });
});
