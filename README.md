# wercker-step-package-version

> Exports the version in the package.json file to an environment variable

## Usage

The following step will put the version in the `PACKAGE_VERSION` environment variable.

```
- samverschueren/package-version
```

You can also specify the name of the environment variable. The following example will export the
version in the `VERSION` environment variable.

```
- samverschueren/package-version:
    envvar: VERSION
```

## Why

This way it is possible to tag a build that is being deployed with the version specified in the
`package.json` file.

## Author

- Sam Verschueren [<sam.verschueren@gmail.com>]

## License

MIT © Sam Verschueren