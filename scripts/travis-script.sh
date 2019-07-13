#!/usr/bin/env bash

YELLOW="\033[1;33m"
GREEN="\033[0;32m"
NOCOLOR="\033[0m"

dir="dist"

echo "${YELLOW}[TEST] ${NOCOLOR}checks TypeScript code."
yarn run lint
echo "${GREEN}[TEST] Passing"

if [ -d $dir ]; then
  echo "${YELLOW}[INFO] ${NOCOLOR}Removing old output folder..."
  rm -rf $dir
  echo "${GREEN}[INFO] ${NOCOLOR}Done."
fi

echo "${YELLOW}[TEST] ${NOCOLOR}compile"
yarn run build
echo "${GREEN}[TEST] Passing"

echo "${YELLOW}[INFO] ${NOCOLOR}Removing output folder..."
rm -rf $dir
echo "${GREEN}[INFO] ${NOCOLOR}Done."
