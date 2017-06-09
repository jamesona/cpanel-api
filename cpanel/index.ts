import * as Modules from './modules'
import { cPanelModule } from './modules/abstract'

export interface Profile {
	host: string,
	user: string,
	pass: string,
	primary?: string
}

export class cPanel {
	private modules: {[index: string]: any} = Modules
	constructor(private profile: Profile){}

	API(module: string, func: string, params: {[key: string]: any}, callback: (err, res?) => void): void {
		if (this.modules[module] == undefined)
			return callback(new Error(module + ' is not a known cPanel module, or is not yet supported'))

		module = new this.modules[module]

		if (module[func] == undefined)
			return callback(new Error(func + ' is not a known method of ' + module))

		module[func](this.profile, params, callback)
	}
}
