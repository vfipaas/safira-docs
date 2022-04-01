#!/bin/bash

SCRIPT_PATH=$(dirname $(readlink -f $0))
OUTPUT_FOLDER=${SCRIPT_PATH}/cli-docs

SPLIT_DIR=${SCRIPT_PATH}/.split-md
rm -rf ${SPLIT_DIR}
mkdir -p ${SPLIT_DIR}

SAFIRTA_CLI_TMP=${SPLIT_DIR}/safira-cli
git clone git@github.com:vfipaas/safira-cli.git ${SAFIRTA_CLI_TMP}

rm -rf ${OUTPUT_FOLDER}
mkdir -p ${OUTPUT_FOLDER}

# split-md 'README.md' '#' '[0-9]' "${OUTPUT_FOLDER}/"  800
node ${SCRIPT_PATH}/node_modules/split-md/src/index.js "${SAFIRTA_CLI_TMP}/README.md" '#' '[0-9]' "${OUTPUT_FOLDER}/"  800

for file in ${OUTPUT_FOLDER}/*; do
    new_file=$(echo ${file} | sed -e's/#*//g' | sed -e's/`*//g' | sed -e's/  */-/g' | sed -e's/:/-/g' | sed 's/-\[[^]]*\]//g')
    mv "$file" "${new_file,,}"
done

rm -rf ${SPLIT_DIR}
