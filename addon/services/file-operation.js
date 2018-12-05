import Service from '@ember/service';
import download from 'pharbers-ember-file-operation/download/file-download';

export default Service.extend({
	download(type = 'psot', url, option) {
		let { condition = {}, responseType = 'blob', downloadType = 'text/csv', headers = {}} = option || {};

		return download.create().downloadFile(type, url, condition, responseType, downloadType, headers);
	}
});
