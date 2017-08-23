// Type definitions for Email module
// Project: cpanel-api
// Definitions by: Jameson Aranda <jamesonaranda.com>

declare class Email {
	addpop(profile, options: interfaces.addpop, callback): void
	add_pop(profile, options: interfaces.add_pop, callback): void
	add_mx(profile, options: interfaces.add_mx, callback): void
	add_forward(profile, options: interfaces.add_forwarder, callback): void
}

export declare namespace interfaces {
	export interface addpop {
		domain: string,	// The domain to add an account to
		email: string,	// The username of the new email address,
		password: string,
		quota?: number	// 0 is unlimited mb of storage
	}
	export interface add_pop {
		email: string,	// The username of the new email address,
		password: string,
		domain: string,	// The domain to add an account to
		quota?: number	// 0 is unlimited mb of storage
	}
	export interface add_mx {
		domain: string,
		exchanger: string,
		priority: string,
		alwaysaccept?: 0 | 1
	}
	export interface add_forwarder {
		domain: string,
		email: string,
		fwdopt: 'fwd' | 'fail' | 'blackhole' | 'pipe' | 'system',
		fwdemail?: string,	// The email address to forward to
		fwdsystem?: string,	// The system user to forward to
		failmsgs?: string,	// The failure message for the message sender
		pipefwd?: string	// The application to forward the message to
	}
}
