# jupyterlab-tutorial-extension

An extension for JupyterLab which provides an entry point, functions and defaults for the @cdat/jupyterlab-tutorial package.


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install jupyterlab-tutorial-extension
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

## Steps to test npm package without publishing (MacOS):

1.  Go to the package directory
```bash
cd package/directory
```

2. Prepare the tar package with npm
```bash
npm pack
```

3. Copy the package to home directory for simplicity
```bash
cp jupyterlab-tutorial-extension-<version>.tgz ~
#Copy the package to the cache folder too for testing in JupyterLab:
cp jupyterlab-tutorial-extension-<version>.tgz ~/Library/Caches
```

5. Go to the project directory where the package is needed for testing
```bash
cd <project/where/you/need/package>
```

6. Install the package using the home directory [If it's used in package.json]
```bash
npm install ~/jupyterlab-tutorial-extension-<version>.tgz
```


7. If the package is used as extension in a project, install the updated extension:
NOTE: If the extension is same version as one already installed, uninstall the other first
```bash
jupyter labextension install ~/jupyterlab-tutorial-extension-<version>.tgz
```

