#!/bin/sh

YELLOW="\033[38;5;11m"
GREEN="\033[38;5;10m"
NOCOLOR="\033[0m"

echo -e "${YELLOW}[UPDATE] ${NOCOLOR}Updating Yarn"
curl -o- -L https://yarnpkg.com/install.sh | bash
export PATH=$HOME/.yarn/bin:$PATH
echo -e "${YELLOW}[UPDATE] ${NOCOLOR}Yarn has been updated."

yarn --version
