import { cPanelModule, Profile, Callback } from '../abstract'
import { interfaces as i } from './index.d'

export class ZoneEdit extends cPanelModule {
	fetchzone_records(profile: Profile, options, callback: Callback): void {
		this.getActionSlug(profile, {
			version: 2, module: 'ZoneEdit', func: 'fetchzone_records'
		}, (err, action) => {
			this.call(profile, {
				params: options,
				action: action
			}, callback)
		})
	}

	add_zone_record(profile: Profile, options, callback: Callback): void {
		this.getActionSlug(profile, {
			version: 2, module: 'ZoneEdit', func: 'add_zone_record'
		}, (err, action) => {
			this.call(profile, {
				params: options,
				action: action
			}, callback)
		})
	}
}
