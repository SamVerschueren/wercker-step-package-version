'use strict';

// module dependencies
var path = require('path');

// Load the package file
var pkg = require(path.join(process.env.WERCKER_ROOT, 'package.json'));

console.log(pkg);

// Use the `name` property if provided, or use `PACKAGE_VERSION` as name
var key = (process.env.WERCKER_PACKAGE_VERSION_NAME || 'PACKAGE_VERSION').toUpperCase(),
	value = pkg.version || '0.0.1';

// Export the variable
process.env[key] = value;

console.log(process.env);