window.jQuery = function (selectorOrArray) {
  let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
    
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }
  //console.log(elements);
  return (api = {
    //oldApi: selectorOrArray.oldApi,
    //闭包：函数访问外部变量
    addClass: function (className) {
      for (let i = 0; i < elements.length; i++) {
        console.log("jjjjjjjjjjjjjjj" + i);
        elements[i].classList.add(className);
      }
      return this; //this就是api
    },
    find(selectorOrArray) {
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        let elements2 = Array.from(
          elements[i].querySelectorAll(selectorOrArray)
        );
        array = array.concat(elements2);
      }
      array.oldApi = this;
      return jQuery(array); //下面代码的简写
      //const newApi = jQuery(array);
      //return newApi;
    },

    end() {
      return this.oldApi;
    },
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i);
      }
      return this;
    },
    parent() {
      const array = [];
      this.each((node) => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(node.parentNode);
        }
      });
      array.oldApi = this;
      return jQuery(array);
    },
    children() {
      const array = [];
      this.each((node)=>{
          array.push(...node.children)
          //console.log(array)
      });
      array.oldApi = this;
      return jQuery(array);
    },
    print() {
      console.log(this);
    },
  });
};
