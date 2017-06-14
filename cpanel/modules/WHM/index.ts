import { cPanelModule, Profile, Callback } from '../abstract'
import { interfaces as i } from './index.d'

export class WHM extends cPanelModule {
	createacct(profile: Profile, options, callback: Callback): void {
		this.getActionSlug(profile, {
			version: 'WHM', module: null, func: 'createacct'
		}, (err, action) => {
			this.call(profile, {
				params: options,
				action: action
			}, (err, res) => {
				if (err) return callback(err, res)
				if (res.metadata) {
					const meta = res.metadata
					if (meta.result === 1)
						return callback(null, meta.reason)
					return callback(new Error(meta.reason), res)
				}
				else
					return callback(new TypeError('Received unhandled server response.'), res)
			})
		})
	}
}
