'use strict';

/**
 * This small script will export the package version as an environment variable.
 * 
 * @author Sam Verschueren		<sam.verschueren@gmail.com>
 * @since  18 June 2015
 */

// module dependencies
var path = require('path');

// Load the package file
var pkg = require(path.join(process.env.WERCKER_ROOT, 'package.json'));

// Use the `name` property if provided, or use `PACKAGE_VERSION` as name
var key = (process.env.WERCKER_PACKAGE_VERSION_NAME || 'PACKAGE_VERSION').toUpperCase(),
	value = pkg.version || '0.0.1';

// Export the variable
process.env[key] = value;