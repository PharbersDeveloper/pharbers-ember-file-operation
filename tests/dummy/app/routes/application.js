import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	file_operation: service(),
	actions: {
		download() {
			// , { condition : {}, responseType : 'blob', downloadType : 'text/csv' }
			let instance = this.get('file_operation').download('get', '/api/v1/download/0');

			instance.then(func => {
				func()
				window.console.info('ok')
			})
		}
	}
});
