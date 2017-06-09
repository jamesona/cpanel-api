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
			}, callback)
		})
	}
}
