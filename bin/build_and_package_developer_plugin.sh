#!/bin/bash

set -e

# Run the build inside Docker
echo "👉 Running plugin build inside Docker..."
docker compose run --rm addressfinder-woocommerce /addressfinder-woocommerce/bin/build_production.sh

# Set up variables
PLUGIN_DIR="addressfinder-woo"
ZIP_NAME="addressfinder-woo-developer.zip"
TEMP_DIR=$(mktemp -d)

echo "👉 Preparing directory structure in: $TEMP_DIR"

# Create the target plugin folder structure inside the temp dir
mkdir -p "$TEMP_DIR/$PLUGIN_DIR"

# Copy required files
cp dist/addressfinder.js "$TEMP_DIR/$PLUGIN_DIR/addressfinder.js"
cp dist/addressfinder.min.js.map "$TEMP_DIR/$PLUGIN_DIR/addressfinder.min.js.map"
cp readme.txt "$TEMP_DIR/$PLUGIN_DIR/readme.txt"
cp woocommerce-addressfinder.php "$TEMP_DIR/$PLUGIN_DIR/woocommerce-addressfinder.php"
cp styles/addressfinder-styles.css "$TEMP_DIR/$PLUGIN_DIR/addressfinder-styles.css"

# Create zip
echo "👉 Creating zip archive: $ZIP_NAME"
ORIGINAL_DIR="$(pwd)"
cd "$TEMP_DIR"
zip -r "$ORIGINAL_DIR/$ZIP_NAME" "$PLUGIN_DIR"
cd "$ORIGINAL_DIR"

# Clean up
cd -
# rm -rf "$TEMP_DIR"

echo "✅ Done! Created: $ZIP_NAME"
