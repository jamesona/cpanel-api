// Type definitions for Email module
// Project: cpanel-api
// Definitions by: Jameson Aranda <jamesonaranda.com>

declare class ZoneEdit {
	fetchzone_records(profile, options: interfaces.fetchzone_records, callback): void
	add_zone_record(profile, options: interfaces.fetchzone_records, callback): void
}

export declare namespace interfaces {
	export interface fetchzone_records {
		domain: string
	}
	export interface add_zone_record {
		domain: string,
		name: string,
		type: 'A' | 'CNAME' | 'SRV' | 'TXT',
		cname?: string,
		address?: string
	}
}
