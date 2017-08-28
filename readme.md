## About
**cpanel-api** exposes a single class, `cPanel`, that acts as a client, aware of differing cPanel api versions, and providing type-safe interfaces for standard methods.

## Use
Load the module and instantiate the cPanel class, using the server hostname, cpanel user, and cpanel password.
```
	const cPanel = require('cpanel-api').cPanel
	let cpanel = new cPanel({
			host: 'somehostname.com',
			user: 'root',
			pass: 'myfakepass'
	})
```

To call a cpanel api function, use the `API` method of the client:
```
	cpanel.API('Email', 'add_pop', {
		// method parameters here
	}, (err, res) => {
		// callback here
	})
```

## Implemented Methods
### Email
- `addpop`
- `add_pop`
- `add_mx`
- `add_forwarder`
### AddonDomain
- `addaddondomain`
### WHM
- `createacct`

## Contributing
To request a module/method, send an email to [npm@jamesonaranda.com](mailto:npm@jamesonaranda.com).
If you would like to add a missing method, please make a pull request on [github](https://github.com/jamesona/cpanel-api)
