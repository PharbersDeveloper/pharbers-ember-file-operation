/* eslint-disable no-useless-escape */
/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
import Mixin from '@ember/object/mixin';

export default Mixin.create({
	getBrowserSys() {
		let sys = {}, ua = navigator.userAgent.toLowerCase(), s = null;

		(s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
		(s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
		(s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
		(s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
		(s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
		(s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
		(s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;

		return sys;
	},
	guid() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}
});
