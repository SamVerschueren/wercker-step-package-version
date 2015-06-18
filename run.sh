#!/bin/bash

VAR=$WERCKER_PACKAGE_VERSION_ENVVAR;

if [ -z "$WERCKER_PACKAGE_VERSION_ENVVAR" ]; then
    # If the envvar is not set, use `PACKAGE_VERSION` as variable name
    VAR="PACKAGE_VERSION"
fi  

# Export the package version
export ${VAR}=$(node $WERCKER_STEP_ROOT/index)

echo "Package version ${!VAR} detected."