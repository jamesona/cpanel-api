export interface Profile {
	host: string
	user: string
	pass: string
	primary?: string
	root?: Profile
}
