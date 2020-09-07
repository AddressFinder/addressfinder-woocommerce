#!/bin/bash

# Any subsequent(*) commands which fail will cause the shell script to exit immediately
set -e

cd /addressfinder-woocommerce
npm install
npm run build:production