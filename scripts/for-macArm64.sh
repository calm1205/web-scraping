# chromeのバイナリファイルをコピー
cp -r chrome-mac-arm64 dist/chrome-mac-arm64

# puppeteerの参照先のchromeのバイナリファイルをmacArm64用に変更する
sed -i "" "s/executablePath: .*$/executablePath: path.join\(getRootPath\(\), CHROME_PATH.macArm64\),/g" dist/main/sites/googleMap/index.js

echo "> Copied chrome-macArm64 to dist/ directory."