#!/usr/bin/env bash

YELLOW="\033[38;5;11m"
GREEN="\033[38;5;10m"
NOCOLOR="\033[0m"

dir="dist"

echo -e "${YELLOW}[TEST] ${NOCOLOR}checks TypeScript code."
yarn run lint
echo -e "${GREEN}[TEST] Passing"

if [ -d $dir ]; then
  echo -e "${YELLOW}[INFO] ${NOCOLOR}Removing old output folder..."
  rm -rf $dir
  echo -e "${GREEN}[INFO] ${NOCOLOR}Done."
fi

echo -e "${YELLOW}[TEST] ${NOCOLOR}compile"
yarn run build
echo -e "${GREEN}[TEST] Passing"

echo "${YELLOW}[INFO] ${NOCOLOR}Removing output folder..."
rm -rf $dir
echo "${GREEN}[INFO] ${NOCOLOR}Done."
