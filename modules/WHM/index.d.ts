// Type definitions for WHM module
// Project: cpanel-api
// Definitions by: Jameson Aranda <jamesonaranda.com>

declare type quota = 'unlimited' | null | number

declare class WHM {
	createacct(profile, options: interfaces.createacct, callback): void
}

export declare namespace interfaces {
	export interface createacct {
		domain: string,
		username: string,
		password?: string,
		plan?: string,
		pkgname?: string,
		savepkg?: boolean,
		featurelist?: string,
		quota?: number,
		ip?: 'y' | 'n',
		cgi?: boolean,
		frontpage?: boolean,
		hasshell: boolean,
		contactemail?: string,
		cpmod?: string,
		maxftp?: quota,
		maxsql?: quota,
		maxpop?: quota,
		maxlst?: quota,
		maxsub?: quota,
		maxpark?: quota,
		maxaddon?: quota,
		bwlimit?: quota,
		customip?: string,
		language?: string,
		reseller?: boolean,
		forcedns?: boolean,
		mailbox_format?: string,
		mxcheck?: string,
		max_email_per_hour?: number,
		max_defer_fail_percentage?: number,
		uid?: number,
		gid?: number,
		homedir?: string,
		dkim?: boolean,
		spf?: boolean,
		owner?: string
	}
}
