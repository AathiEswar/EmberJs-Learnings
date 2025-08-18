import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | chat/received-message/username',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<Chat::ReceivedMessage::Username />`);

      assert.dom().hasText('');

      // Template block usage:
      await render(hbs`
      <Chat::ReceivedMessage::Username>
        template block text
      </Chat::ReceivedMessage::Username>
    `);

      assert.dom().hasText('template block text');
    });
  }
);
