//const api = window.jQuery(".test"); //不返回元素们，返回api对象
//链式操作,this就是api
//api.addClass("red").addClass("blue"); //遍历所有刚才获取的元素，添加.red
//Obj.fn()函数里面的this就是Obj
//Obj.fn.call(obj,p1)
//const x1 = window.jQuery(".test").find(".child").addClass("blue");
//console.log(x1);
//const x2 = window.jQuery(".test").addClass("red");

window.jQuery(".test")
      .children();
