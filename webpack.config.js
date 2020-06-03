const path = require('path');
//npm install --save-dev css-loader style-loader安裝 這個才能整合CSS

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {//有配置物件的打包法
    mode:'development', //"-p"|"-d" |none mode: 'development', // "production" | "development" | "none"  開發模式
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js' 
    },//path.resolve  node.js的語法
    module: {
        rules: [{
            test: /\.(sass|scss|css)$/,//可讀3種CSS檔案
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    // you can specify a publicPath here
                    // by default it use publicPath in webpackOptions.output
                    publicPath: './dist'
                }
            },
                {
                    loader: 'css-loader', //(順序1)
                    options: {
                        modules: true
                    }
                }, 
                    {
                        loader: 'sass-loader'
                    }
            ]
        }]
    },
      
  //plugings
  plugins: [
    //這個套件是載入 css 檔案
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "./css/[name].css"//打包完整的CSS包含資料夾
    })
]
};
/*[./src/cal.js] 175 bytes {main} [built] 連stule也打包
[./src/index.js] 175 bytes {main} [built]
[./src/style.css] 529 bytes {main} [built]    + 2 hidden modules*/
