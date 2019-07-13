#!/bin/sh

YELLOW="\033[38;5;11m"
GREEN="\033[38;5;10m"
NOCOLOR="\033[0m"

dir="dist"

printf "${YELLOW}[TEST] ${NOCOLOR}checks TypeScript code."
yarn run lint
printf "${GREEN}[TEST] Passing"

if [ -d $dir ]; then
  printf "${YELLOW}[INFO] ${NOCOLOR}Removing old output folder..."
  rm -rf $dir
  printf "${GREEN}[INFO] ${NOCOLOR}Done."
fi

printf "${YELLOW}[TEST] ${NOCOLOR}compile"
yarn run build
printf "${GREEN}[TEST] Passing"

printf "${YELLOW}[INFO] ${NOCOLOR}Removing output folder..."
rm -rf $dir
printf "${GREEN}[INFO] ${NOCOLOR}Done."
