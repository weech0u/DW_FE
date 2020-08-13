module.exports = {
    assetsDir: 'static',
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'assets': '@/assets',
                'views': '@/views',
                'components': '@/components',
            }
        },
    },
    pages: {
        login: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/modules/login/login.js',
            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/login.html',
            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'login.html',
            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            // title: 'console',

            // 包含的模块，可选项
            // chunks: ['login']
        },
        register: {
            entry: 'src/modules/register/register.js',
            template: 'public/register.html',
            filename: 'register.html',
        },
        profile: {
            entry: 'src/modules/profile/profile.js',
            template: 'public/profile.html',
            filename: 'profile.html',
        },
        shopping: {
            entry: 'src/modules/shopping/shopping.js',
            template: 'public/shopping.html',
            filename: 'shopping.html',
        },
        details: {
            entry: 'src/modules/details/details.js',
            template: 'public/details.html',
            filename: 'details.html',
        },
        bookmark: {
            entry: 'src/modules/bookmark/bookmark.js',
            template: 'public/bookmark.html',
            filename: 'bookmark.html',
        },
        cart: {
            entry: 'src/modules/cart/cart.js',
            template: 'public/cart.html',
            filename: 'cart.html',
        },
        collection: {
            entry: 'src/modules/collection/collection.js',
            template: 'public/collection.html',
            filename: 'collection.html',
        },
        shop: {
            entry: 'src/modules/shop/shop.js',
            template: 'public/shop.html',
            filename: 'shop.html',
        },
        index: 'src/main.js'
    },

}