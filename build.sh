#!/usr/bin/env bash

set -e

PATCH_NUMBER=${CI_PATCH_NUMBER:-1}

if [[ "$OSTYPE" = "darwin"* ]]; then
  sed -E -i '' 's/([0-9]+)\.([0-9]+)\.([0-9]+)/\1.\2.'${PATCH_NUMBER}'/g' src/environments/environment.prod.ts
else
  sed -E -i 's/([0-9]+)\.([0-9]+)\.([0-9]+)/\1.\2.'${PATCH_NUMBER}'/g' src/environments/environment.prod.ts
fi

npm run build


git checkout -- src/environments/environment.prod.ts
