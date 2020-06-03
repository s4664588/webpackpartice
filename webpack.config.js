const webpack = require('webpack');//有些會用到
const path = require('path');
//npm install --save-dev css-loader style-loader安裝 這個才能整合CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');//
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {//有配置物件的打包法
    mode:'development', //"-p"|"-d" |none mode: 'development', // "production" | "development" | "none"  開發模式
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js' // '[name].bundle-[hash].js'HASH用來產生亂碼 
    },//path.resolve  node.js的語法
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },//同步瀏覽器
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
                    },
  
                    
            ]
        }]
    },
      
  //plugings
  plugins: [
            //清理舊的檔案 npm >npm install --save-dev clean-webpack-plugin
             new CleanWebpackPlugin(),
        //這個套件是載入 css 檔案
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "./css/[name].css"//打包完整的CSS包含資料夾
    }),
    new HtmlWebpackPlugin({
        title:'首頁',
        //來源檔
        template: './src/index.html',
        //產生的檔案
        filename: 'index.html', 
          //是否要壓縮 要看 mode 模式
          minify: false,
            
                    //調整配置 true || 'head' || 'body' || false
            inject: 'body',//設定位置
    }),
                                                               
]
};
/*[./src/cal.js] 175 bytes {main} [built] 連stule也打包
[./src/index.js] 175 bytes {main} [built]
[./src/style.css] 529 bytes {main} [built]    + 2 hidden modules*/
