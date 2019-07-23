#!/bin/bash

set -eu

RED="\033[31m"
YELLOW="\033[33m"
GREEN="\033[32m"
CYAN="\033[36m"
NOCOLOR="\033[0m"

yarn_version="yarn --version" || (
  printf "${RED}[ERROR] Yarn command does not exist."
  exit 1;
)

node_version="node --version" || (
  printf "${RED}[ERROR] Node command does not exist."
  exit 1;
)

typescript_version="npx tsc --version" || (
  printf "${RED}[ERROR] npx command does not exist"
  exit 1;
)

eslint_version="npx eslint --version" || (
  printf "${RED}[ERROR] npx command does not exist"
  exit 1;
)

printf "${GREEN}[INFO] === Kawaii VS Code - Test ==="
printf "${GREEN}[INFO] Node: ${node_version}"
printf "${GREEN}[INFO] Yarn: ${yarn_version}"
printf "${GREEN}[INFO] TypeScript: ${typescript_version/"Version "/"v"}"
printf "${GREEN}[INFO] ESLint: ${eslint_version}"

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
yarn run compile
printf "\n${GREEN}[TEST] ${CYAN}Passing\n"

printf "${YELLOW}[INFO] ${NOCOLOR}Removing output folder...\n"
rm -rf $dir
printf "${GREEN}[INFO] ${CYAN}Done.\n"
