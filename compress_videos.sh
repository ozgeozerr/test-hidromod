#!/bin/bash

# Video compression script
# This will compress all MP4 files larger than 5MB in the assets directory

ASSETS_DIR="/Users/ozerr/Desktop/HidromodWebsite/assets"
cd "$ASSETS_DIR"

# Array of videos to compress (excluding those that are already small enough)
VIDEOS=(
  "Hidromod-EN-compressed.mp4"
  "Hidromod-TR-compressed.mp4"
  "afet.mp4"
  "askeri.mp4"
  "bulut.mp4"
  "hava_durumu.mp4"
  "iklim_degisikligi.mp4"
  "sivil.mp4"
  "sivilucus.mp4"
  "solar.mp4"
  "storm clouds timelapse.mp4"
  "tarim.mp4"
  "ucak.mp4"
  "uzay.mp4"
  "wheat.mp4"
  "yenilenebilir.mp4"
)

echo "Starting video compression..."
echo "================================"

for video in "${VIDEOS[@]}"; do
  if [ -f "$video" ]; then
    echo "Compressing: $video"

    # Use CRF 28 for good quality with smaller file size
    # -preset medium for faster encoding than slow
    # -movflags +faststart for web streaming optimization
    ffmpeg -i "$video" \
      -c:v libx264 \
      -preset medium \
      -crf 28 \
      -c:a aac \
      -b:a 128k \
      -movflags +faststart \
      "${video%.mp4}_optimized.mp4" \
      -y \
      -loglevel error \
      -stats

    if [ $? -eq 0 ]; then
      # Get original and new file sizes
      ORIGINAL_SIZE=$(du -h "$video" | cut -f1)
      NEW_SIZE=$(du -h "${video%.mp4}_optimized.mp4" | cut -f1)
      echo "  Original: $ORIGINAL_SIZE → Compressed: $NEW_SIZE"

      # Replace original with compressed version
      mv "${video%.mp4}_optimized.mp4" "$video"
      echo "  ✓ Replaced original with compressed version"
    else
      echo "  ✗ Failed to compress $video"
    fi
    echo "--------------------------------"
  fi
done

echo "Compression complete!"
