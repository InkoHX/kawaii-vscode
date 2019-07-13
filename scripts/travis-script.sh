#!/bin/sh

YELLOW="\033[38;5;11m"
GREEN="\033[38;5;10m"
NOCOLOR="\033[0m"

dir="dist"

printf "${YELLOW}[TEST] ${NOCOLOR}checks TypeScript code.\n"
yarn run lint
printf "${GREEN}[TEST] Passing\n"

if [ -d $dir ]; then
  printf "${YELLOW}[INFO] ${NOCOLOR}Removing old output folder...\n"
  rm -rf $dir
  printf "${GREEN}[INFO] ${NOCOLOR}Done.\n"
fi

printf "${YELLOW}[TEST] ${NOCOLOR}compile\n"
yarn run build
printf "${GREEN}[TEST] Passing\n"

printf "${YELLOW}[INFO] ${NOCOLOR}Removing output folder...\n"
rm -rf $dir
printf "${GREEN}[INFO] ${NOCOLOR}Done.\n"
