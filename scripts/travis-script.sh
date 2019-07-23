#!/bin/bash

set -eu

RED="\033[31m"
YELLOW="\033[33m"
GREEN="\033[32m"
CYAN="\033[36m"
NOCOLOR="\033[0m"

yarn_version=`yarn --version` || (
  printf "${RED}[ERROR] Yarn command does not exist."
  exit 1;
)

node_version=`node --version` || (
  printf "${RED}[ERROR] Node command does not exist."
  exit 1;
)

typescript_version=`npx tsc --version` || (
  printf "${RED}[ERROR] npx command does not exist"
  exit 1;
)

eslint_version=`npx eslint --version` || (
  printf "${RED}[ERROR] npx command does not exist"
  exit 1;
)

printf "${GREEN}[INFO] ${CYAN}   === Kawaii VS Code - Test ===\n"
printf "${GREEN}[INFO] ${NOCOLOR}Node: ${CYAN}${node_version}\n"
printf "${GREEN}[INFO] ${NOCOLOR}Yarn: ${CYAN}${yarn_version}\n"
printf "${GREEN}[INFO] ${NOCOLOR}TypeScript: ${CYAN}${typescript_version/"Version "/"v"}\n"
printf "${GREEN}[INFO] ${NOCOLOR}ESLint: ${CYAN}${eslint_version}\n\n"

sleep 3

dir="dist"

printf "${YELLOW}[TEST] ${NOCOLOR}Checking the code.\n\n"
yarn run lint
printf "\n${GREEN}[TEST] ${CYAN}Passing\n\n"

if [ -d $dir ]; then
  printf "${YELLOW}[INFO] ${NOCOLOR}Removing old output folder...\n"
  rm -rf $dir
  printf "${GREEN}[INFO] ${CYAN}Done.\n"
fi

printf "${YELLOW}[TEST] ${NOCOLOR}Checking for errors.\n\n"
yarn run compile -noEmit
printf "\n${GREEN}[TEST] ${CYAN}Passing\n"
