#!/usr/bin/env bash

echo "Checks TypeScript code."
yarn run lint

dir="dist"

if [ -d $dir ]; then
  echo "Removing old output folder..."
  rm -rf $dir
  echo "Done."
fi

echo "Test compile"
yarn run build

echo "Removing output folder"
rm -rf $dir
echo "Done."
