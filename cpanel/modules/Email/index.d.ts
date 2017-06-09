// Type definitions for Email module
// Project: cpanel-api
// Definitions by: Jameson Aranda <jamesonaranda.com>

declare class Email {
    addpop(profile, options: interfaces.addpop, callback): void;
	add_pop(profile, options: interfaces.add_pop, callback): void;
	add_mx(profile, options: interfaces.add_mx, callback): void;
}

export declare namespace interfaces {
	export interface addpop {
		domain: string, // The domain to add an account to
		email: string, // The username of the new email address,
		password: string,
		quota?: number // 0 is unlimited mb of storage
	}
	export interface add_pop {
		email: string, // The username of the new email address,
		password: string,
		domain: string, // The domain to add an account to
		quota?: number // 0 is unlimited mb of storage
	}
	export interface add_mx {
		domain: string,
		exchanger: string,
		priority: string,
		alwaysaccept?: 0 | 1
	}
}
