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
			version: 'UAPI', module: 'Email', func: 'add_pop'
		}, (err, action) => {
			this.call(profile, {
				params: options,
				action: action
			}, (err, res) => {
				if (err) return callback(err, res)
				if (res.errors)
					return callback(new Error(res.errors), res)
				if (res.status && res.status !== 1)
					return callback(new Error(res.data), res)
				else
					return callback(null, res.data)
			})
		})
	}

	// this method is untested
	add_mx(profile: Profile, options, callback: Callback): void {
		options.alwaysaccept = options.alwaysaccept || 1
		this.getActionSlug(profile, {
			version: 'UAPI', module: 'Email', func: 'add_mx'
		}, (err, action) => {
			this.call(profile, {
				params: options,
				action: action
			}, callback)
		})
	}

	add_forwarder(profile: Profile, options, callback: Callback): void {
		options.alwaysaccept = options.alwaysaccept || 1
		this.getActionSlug(profile, {
			version: 'UAPI', module: 'Email', func: 'add_forwarder'
		}, (err, action) => {
			this.call(profile, {
				params: options,
				action: action
			}, callback)
		})
	}
}
