##Handlebars 测试
1. hbs_inlined不使用预编译技术，需要包含完整的handlebars.js

2. hbs_precompiled.html只需要包含handlebars runtime.

##How to precompile

```js
// npm install -g handlebars
// handlebars ./templates/*.hbs -f ./lib/cyper-template.js
// 将编译好的cyper-template.js文件包含到你的html文件
// 然后我打印Handlebars.templates发现里边有两个key分别是user.hbs和blog.hbs
// 然后只要把blog.hbs从Handlebars.templates中转移到Handlebars.partials中就可以了
// 如果不转移: Uncaught Error: The partial blog could not be found
// 最好还应该将blog.hbs从Handlebars.templates中移除。

Handlebars.partials['blog'] = Handlebars.templates['blog.hbs'];

// 执行
var template1 = Handlebars.templates['user.hbs']
template1(user);

// 单独使用partials
// 这里发现partials和templates一样，完全没有区别。
var template2 = Handlebars.partials['blog'];
template2(user.blogs[0]);

var template3 = Handlebars.templates['blog.hbs'];
template3(user.blogs[1]);

```