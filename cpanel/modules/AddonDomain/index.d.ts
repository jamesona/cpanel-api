// Type definitions for AddonDomain module
// Project: cpanel-api
// Definitions by: Jameson Aranda <jamesonaranda.com>

declare class AddonDomain {
    addaddondomain(profile, options: interfaces.addaddondomain, callback): void;
}

export declare namespace interfaces {
	export interface addaddondomain {
		newdomain: string, // the new domain name
		subdomain: string, // the subdomain that this addon will use
		dir?: string // the directory to point this addon to
	}
}
