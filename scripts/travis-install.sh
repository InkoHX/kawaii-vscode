#!/usr/bin/env bash

YELLOW="\033[1;33m"
GREEN="\033[0;32m"
NOCOLOR="\033[0m"

echo "${YELLOW}[UPDATE] ${NOCOLOR}Updating Yarn"
curl -o- -L https://yarnpkg.com/install.sh | bash
export PATH=$HOME/.yarn/bin:$PATH
echo "${YELLOW}[UPDATE] ${NOCOLOR}Yarn has been updated."

yarn --version
