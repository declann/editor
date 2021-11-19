#!/usr/bin/env bash

set -e

DATA=public/data
SPEC=public/spec
SCHEMA=schema

CWD=$(pwd)

echo "Copying data to '$DATA'."

if [ ! -d "$DATA" ]; then
  mkdir $DATA
fi

eval rsync -r "./node_modules/vega-datasets/data/*" $DATA

echo "Copy examples to '$SPEC'."

if [ ! -d "$SPEC" ]; then
  mkdir $SPEC
fi

# without v!
VEGA_VERSION=$(scripts/version.sh vega)
VEGA_LITE_VERSION=$(scripts/version.sh vega-lite)

pushd /tmp
curl https://github.com/vega/vega/archive/v$VEGA_VERSION.tar.gz -L -o vega.tar.gz
curl https://github.com/vega/vega-lite/archive/v$VEGA_LITE_VERSION.tar.gz -L -o vl.tar.gz
tar xzf vega.tar.gz vega-$VEGA_VERSION/docs
tar xzf vl.tar.gz vega-lite-$VEGA_LITE_VERSION/examples vega-lite-$VEGA_LITE_VERSION/site/_data
popd
# tar x of vl fails due to symlinks but if motered on would be fine?

# https://superuser.com/questions/584146/why-is-this-archive-failing-to-create-symlinks
#tar xzf vl.tar.gz 2> /tmp/tar-stdxtr.t
#(export DIR=; echo \#\!/bin/sh -e; cat /tmp/tar-stderr.txt | grep 'Cannot create symlink to' | sed -e 's7^tar: \.\([^:]\+\): Cannot create symlink to .\([^:]\+\).*$7\1:\27' -e "s7^\(.\+\)/\([^:]\+\):\(.\+\).\$7cd $DIR\1 \&\& cp \3 \2;7")


# + manually created public/spec/vega[-lite] dirs

eval cp -r "/tmp/vega-$VEGA_VERSION/docs/examples/*.vg.json" "$SPEC/vega"
#eval cp -r "/tmp/vega-lite-$VEGA_LITE_VERSION/examples/specs/*.vl.json" "$SPEC/vega-lite/"

cp "/tmp/vega-lite-$VEGA_LITE_VERSION/site/_data/examples.json" "$SPEC/vega-lite/index.json"
cp "/tmp/vega-$VEGA_VERSION/docs/_data/examples.json" "$SPEC/vega/index.json"


#cp -R /tmp/vega-lite-5.1.1/examples//specs/*.vl.json ./public/spec/vega-lite

#cp /tmp/vega-lite-5.1.1/site/_data/examples.json ./public/spec/vega-lite/index.json

cp /tmp/vega-lite-5.1.1/site/_data/examples.json ./public/spec/vega-lite/index.json

cp /tmp/vega-5.21.0/docs/_data/examples.json ./public/spec/vega/index.json