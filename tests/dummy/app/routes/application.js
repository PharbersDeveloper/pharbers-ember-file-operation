import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	file_operation: service(),
	actions: {
		download() {
			let option =
				{ condition : {}, responseType : 'blob', downloadType : 'text/csv', headers: {'Authorization': 'bearer 5c07b2f593f2b80001fd021c'}},
				instance = null;
			instance = this.get('file_operation').download('post', '/api/v1/downloadStudentReport/0', option);

			instance.then(func => {
				func()
				window.console.info('ok')
			})
		}
	}
});
