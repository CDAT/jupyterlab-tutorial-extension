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

