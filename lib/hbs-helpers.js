//这个是一般的helper expression，它主要是想打印出输入参数的值，它不是block expression. 最后一个参数options中不会存在fn和inverse属性.
Handlebars.registerHelper("log", function(param1, options){
    console.log("Enter log.");
    console.log("this:", this);
    console.log("param1:", param1);
    console.log("options:", options);
    console.log("------------------")
});

//这个是block expression, options中存在fn和inverse属性
Handlebars.registerHelper("log2", function(param1, options){
    console.log("Enter log2.");
    console.log("this:", this);
    console.log("param1:", param1);
    console.log("options:", options);
    console.log("------------------")

    // 这里传给fn的第一个参数又叫context，嵌套部分(被log2包裹的那部分)的this就指向这个参数，是那部分内容的上下文环境。
    // 如果这里传的是this，则嵌套部分的上下文环境和log2上下文环境一样, 比如if就是一个典型的不改变上下文环境的block expression.
    // 但是这里一般都不会传this,一般进入一个新的block expression, this会指向下一级.
    options.fn(param1);
});