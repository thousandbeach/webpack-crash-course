const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');

module.exportds = {
    entry: './src/index.js',   // webpackのエントリーポイントという設定ができる。エントリーポイントとは、モジュールバンドルの対象となるもののこと。つまり、何をモジュールバンドルするのかという対象物の設定に関することをエントリーで行うことができる。
    output: {  // どこに出力するのかという設定。
        filename: 'main.js',  // このファイルネームに出力
        path: outputPath  // 出力先のパス
    }
}
