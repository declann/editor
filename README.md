# Vega Editor [![Build Status](https://github.com/vega/editor/workflows/Test/badge.svg)](https://github.com/vega/editor/actions) [![Publish](https://github.com/vega/editor/actions/workflows/publish.yml/badge.svg?branch=publish)](https://github.com/vega/editor/actions/workflows/publish.yml)

**Declan Naughton: This fork contains concept changes to be part of an integration with calculang, for hotreloading of model/results (results=a json file for now)**

**Concept changes start in app-shell.tsx, search hot**

**context = https://github.com/calculang/calculang/issues/37**

**working working as described in https://github.com/declann/editor/commit/887ed98ac91acfccec5a3b970f853afbe917c33f#commitcomment-60696838**

**update: see vega-lite examples esp. hot bounce facet one** **edit bounce.cul.js and run calculang:build script too see changes reflected**

The **Vega editor** is a web application for authoring and testing [Vega](https://github.com/vega/vega) and [Vega-Lite](https://vega.github.io/vega-lite) visualizations. It includes a number of example specifications that showcase both the visual encodings and interaction techniques. It is deployed at https://vega.github.io/editor/.

We integrated a back-end service at https://vega-editor-backend.vercel.app/ which lets a user log in through GitHub so that they can access his/her personal gists. The code for the backend is at https://github.com/vega/editor-backend.

## Editor is stuck

You can reset the Vega Editor by going to https://vega.github.io/editor/#/reset and clicking the reset button. This will reset the saved editor state.

## Usage Instructions

To run the editor locally, you must first install the dependencies and then launch a local web server. We assume you have [yarn](https://yarnpkg.com/) installed.

1. Install the dependencies:

```
$ yarn
```

2. Start the server:

```
$ yarn start
```

3. The local web server will be accessible from [http://localhost:8080](http://localhost:8080).

### Docker

If you'd like to use [Docker](https://docs.docker.com/engine/docker-overview/), there's a [Docker Compose](https://docs.docker.com/compose/overview/) setup that you can use:

1. Build the docker container:

```
$ docker-compose build
```

2. Run the Docker Compose service:

```
$ docker-compose up
```

1. The local web server will be accessible from [http://localhost:8080](http://localhost:8080). You can run yarn commands with `docker-compose run editor CMD`.

## Local Testing & Debugging

The editor is useful for testing if you are involved in Vega and Vega-Lite development. To use Vega, Vega-Lite, or Vega Datasets from another directory on your computer, you need to link it. For this, run `yarn link` in the directory of the library that you want to link. Then, in this directory run `yarn link <name of library>`, e.g. `yarn link vega` or `yarn link vega-lite`.

For example, to link Vega, run

```bash
cd VEGA_DIR
yarn link

cd VEGA_LITE_DIR
yarn link

cd VEGA_EDITOR_DIR
yarn link vega
yarn link vega-lite
```

The Vega editor supports [React Developer Tools](https://github.com/facebook/react-devtools) and [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension).

## Building preview images

Build images with `yarn generate-example-images`.

## Contributing guidelines

We welcome contributions and promptly review pull requests. For instructions about how to contribute, please follow the [Vega-Lite contributing guidelines](https://github.com/vega/vega-lite/blob/master/CONTRIBUTING.md).

## Creating a release on gh-pages

Add all changes from master into the `publish` branch with the following commands:

```
git checkout master
git pull
git checkout publish
git merge master --ff-only
git push
git checkout master
```

You can preview the changes in [this comparison](https://github.com/vega/editor/compare/publish...master). GitHub will automatically deploy the editor.
