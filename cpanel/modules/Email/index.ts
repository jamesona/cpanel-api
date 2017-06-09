import { cPanelModule, Profile, Callback } from '../abstract'
import { interfaces as i } from './index.d'

export class Email extends cPanelModule implements Email {
	addpop(profile: Profile, options, callback: Callback): void {
		if (!options.quota) options.quota = 0
		this.getActionSlug(profile, {
			version: 2, module: 'Email', func: 'addpop'
		}, (err, action) => {
			this.call(profile, {
				params: options,
				action: action
			}, callback)
		})
	}

	add_pop(profile: Profile, options, callback: Callback): void {
		if (!options.quota) options.quota = 0
		this.getActionSlug(profile, {
			version: 'UAPI', module: 'Email', func: 'addpop'
		}, (err, action) => {
			this.call(profile, {
				params: options,
				action: action
			}, callback)
		})
	}

	// this method is untested
	add_mx(profile: Profile, options, callback: Callback): void {
		options.alwaysaccept = options.alwaysaccept || 1
		this.getActionSlug(profile, {
			version: 'UAPI', module: 'Email', func: 'addpop'
		}, (err, action) => {
			this.call(profile, {
				params: options,
				action: action
			}, callback)
		})
	}
}
