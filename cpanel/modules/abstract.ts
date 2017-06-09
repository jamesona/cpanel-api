import * as request from 'request'
import * as qs from 'qs'
import { Profile } from '../../cpanel'

export { Profile as Profile }
export type Callback = (err, res) => void
export type ModuleMethod = (profile: any, options: any, callback: Callback) => void

export abstract class cPanelModule {
	protected call(profile: Profile, options: {params: object,  action: string}, callback: Callback): void {
		let { params, action } = options
		let port = action.split('/').shift()
		action = action.slice(5)
		let data = {
			baseUrl: 'https://' + profile.host + port,
			uri: '',
			headers: {
				'Authorization': 'Basic ' + new Buffer(profile.user + ':' + profile.pass).toString('base64')
			},
			form: {}
		}
		this.getAuthToken(profile, data, (err, res) => {
			data.form = params
			data.uri = res + action
			request.get(data, (err, res) => {
				if (err) return callback(new Error(err), res)
				try {
					let body = JSON.parse(res.body)
					callback(err, body)
				} catch(e) {
					callback(err, res)
				}
			})
		})
	}

	private getAuthToken(profile, data, callback: Callback): void {
		data.form = {
			user: profile.user,
			pass: profile.pass
		}
		data.uri = 'login'
		let req = request(data, (err, res) => {
			if (err) callback(err, null)
			else callback(null, res.req.path.split('/')[1])
		})
	}

	protected getActionSlug(profile, options: {version: 2 | 'UAPI' | 'WHM', func: string, module: string}, callback: Callback): void {
		let { version, module, func } = options
		switch (version) {
			case 2: {
				let action = ':2083/json-api/cpanel?cpanel_jsonapi_user=' + profile.user +
					'&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=' + module +
					'&cpanel_jsonapi_func=' + func
				return callback(null, action)
			}
			case 'UAPI': {
				let action = ':2083/execute/' + module + '/' + func + '?'
				return callback(null, action)
			}
			case 'WHM': {
				let action = ':2087/json-api/' + func + '?api.version=1'
				return callback(null, action)
			}
		}
	}

	[index: string]: ModuleMethod
}
