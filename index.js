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

// Write the version back to the shell script
process.stdout.write(pkg.version || '0.0.1');