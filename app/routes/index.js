import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { query } from '@ember-data/json-api/request';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];
export default class IndexRoute extends Route {
  @service store;

  async model() {
    const { content } = await this.store.request(query('rental'));
    return content.data;
  }
}
