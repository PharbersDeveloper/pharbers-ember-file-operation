import EmberObject from '@ember/object';
import d from './download';
import axios from 'axios';

export default EmberObject.extend(d, {
	downloadFile(type = 'psot', url, condition, responseType, downloadType, headers) {
		return axios({
			method: type,
			url: url,
			responseType: responseType,
			data: condition,
			headers: headers
		}).then(response => {
			let that = this;

			return function (fileName = that.guid() + '.csv') {
				const bs = that.getBrowserSys(), blob = new Blob([response.data], { type: downloadType });

				if (bs.ie || bs.edge) {
					navigator.msSaveBlob(blob, fileName);
				} else { // 非IE下载
					const elink = window.document.createElement('a');

					elink.download = fileName;
					elink.style.display = 'none';
					elink.href = window.URL.createObjectURL(blob);
					window.document.body.appendChild(elink);
					elink.click();
					URL.revokeObjectURL(elink.href); // 释放URL 对象
					window.document.body.removeChild(elink);
				}
			};
		});
	}
});
