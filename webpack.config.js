const path = require('path');
//npm install --save-dev css-loader style-loader安裝 這個才能整合CSS
module.exports = {//有配置物件的打包法
    mode:'development', //"-p"|"-d" |none mode: 'development', // "production" | "development" | "none"  開發模式
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js' 
    },//path.resolve  node.js的語法
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: 'style-loader' //(順序2)//這個直接塞到html的head
                },
                {
                    loader: 'css-loader', //(順序1)
                    options: {
                        modules: true
                    }
                }]
        }]
    }
};
/*[./src/cal.js] 175 bytes {main} [built] 連stule也打包
[./src/index.js] 175 bytes {main} [built]
[./src/style.css] 529 bytes {main} [built]    + 2 hidden modules*/
