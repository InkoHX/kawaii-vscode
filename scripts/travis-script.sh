#!/bin/bash

set -eu

YELLOW="\033[33m"
GREEN="\033[32m"
CYAN="\033[36m"
NOCOLOR="\033[0m"

dir="dist"

printf "${YELLOW}[TEST] ${NOCOLOR}checks TypeScript code.\n\n"
yarn run lint
printf "\n${GREEN}[TEST] ${CYAN}Passing\n\n"

if [ -d $dir ]; then
  printf "${YELLOW}[INFO] ${NOCOLOR}Removing old output folder...\n"
  rm -rf $dir
  printf "${GREEN}[INFO] ${CYAN}Done.\n"
fi

printf "${YELLOW}[TEST] ${NOCOLOR}Test compile\n\n"
yarn run build
printf "\n${GREEN}[TEST] ${CYAN}Passing\n"

printf "${YELLOW}[INFO] ${NOCOLOR}Removing output folder...\n"
rm -rf $dir
printf "${GREEN}[INFO] ${CYAN}Done.\n"
