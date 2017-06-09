import { cPanelModule, Profile, Callback } from '../abstract'
import { interfaces as i } from './index.d'

export class AddonDomain extends cPanelModule implements AddonDomain {
	addaddondomain(profile: Profile, options, callback: Callback): void {
		this.getActionSlug(profile, {
			version: 2, module: 'AddonDomain', func: 'addaddondomain'
		}, (err, action) => {
			this.call(profile, {
				params: options,
				action: action
			}, callback)
		})
	}
}
