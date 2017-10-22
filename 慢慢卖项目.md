+ 模板引擎的模板写在页面中相应的位置,以方便查找和修改

+ Uncaught TypeError: Illegal constructor :引用jQuery时出错,是因为document,ready,window等首字母不能大写!!!  \$(window),不能写作\$(Window)

+ ```
  只有结构渲染完成后才能找到对象T_T
  ```

+ 接口返回值是"<img>"这样带标签的值时,加入模板时得在前面加#号,==>{{#$value.img}};

+ ```javascript
  //后台返回对象
  obj={
    img:"<img src=''>
  }
  //前端获取加入模板中时
  {{each result as v i}}
   {{#v.img}}//必须加#,否则标签符号无法转义
  {{/each}}
  ```

+ 图片和文字居中对齐://vertical-align: middle;

+ 用js动态加载的数据渲染页面时,会有延迟,所以写在主线程中的找对象是无法找到的,得等到js渲染页面后,才能找到动态加载出来的页面结构,解决:1.用load()方法时可在load的callback函数里找对象,反正就是等数据渲染完再找对象,2.设置timeout,不推荐使用

+ 链接解决:链接拼串,加上最里面页面的categoryid和前面页面的地址,跳转回去!!哼

+ click()事件返回值是jQuery对象,无法获取返回的数值,这是要获取两个不同点击事件的返回数值时,可用两个全局变量来存储,这样其他的函数也可以调用,而且两个全局变量是实时变化的

+ location是javascript里边管理地址栏的内置对象,打印这个对象会看见url传递式的一些属性,这里面可以拿到a链接传递过来的参数`location.search.split("=")[1]`; 

+ 多行文本溢出显示省略号:

  - ```css
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    ```

  - ​

+ 现在有一id=test的下拉框，怎么拿到选中的那个值呢？

  分别使用javascript原生的方法和jquery方法

  <select id="test"  name="">   
    <option   value="1">text1</option>   
    <option   value="2">text2</option>   
   </select>

  code:

  一：javascript原生的方法

    1:拿到select对象： var  myselect=document.getElementById("test");

    2：拿到选中项的索引：var index=myselect.selectedIndex ;             // selectedIndex代表的是你所选中项的index

    3:拿到选中项options的value：  myselect.options[index].value;

    4:拿到选中项options的text：  myselect.options[index].text;

  5. 设置select中value="paraValue"的Item为选中 :document.all.objSelect.value = objItemValue; 让select框的value值等于对应option的值就行,select.value="后台返回数值"

  二：jquery方法（前提是已经加载了jquery库）

  1:**var options=$("#test option:selected");  //获取选中的项**

  2:alert(options.val());   //拿到选中项的值

  3:alert(options.text());   //拿到选中项的文本

+ select操作

  + ```javascript
    // 1.判断select选项中 是否存在Value="paraValue"的Item 
    function jsSelectIsExitItem(objSelect, objItemValue) { 
    var isExit = false; 
    for (var i = 0; i < objSelect.options.length; i++) { 
    if (objSelect.options[i].value == objItemValue) { 
    isExit = true; 
    break; 
    } 
    } 
    return isExit; 
    } 

    // 2.向select选项中 加入一个Item 
    function jsAddItemToSelect(objSelect, objItemText, objItemValue) { 
    //判断是否存在 
    if (jsSelectIsExitItem(objSelect, objItemValue)) { 
    alert("该Item的Value值已经存在"); 
    } else { 
    var varItem = new Option(objItemText, objItemValue); 
    objSelect.options.add(varItem); 
    alert("成功加入"); 
    } 
    } 

    // 3.从select选项中 删除一个Item 
    function jsRemoveItemFromSelect(objSelect, objItemValue) { 
    //判断是否存在 
    if (jsSelectIsExitItem(objSelect, objItemValue)) { 
    for (var i = 0; i < objSelect.options.length; i++) { 
    if (objSelect.options[i].value == objItemValue) { 
    objSelect.options.remove(i); 
    break; 
    } 
    } 
    alert("成功删除"); 
    } else { 
    alert("该select中 不存在该项"); 
    } 
    } 
    ```


    // 4.删除select中选中的项 
    function jsRemoveSelectedItemFromSelect(objSelect) { 
    var length = objSelect.options.length - 1; 
    for(var i = length; i >= 0; i--){ 
    if(objSelect[i].selected == true){ 
    objSelect.options[i] = null; 
    } 
    } 
    } 
    
    // 5.修改select选项中 value="paraValue"的text为"paraText" 
    function jsUpdateItemToSelect(objSelect, objItemText, objItemValue) { 
    //判断是否存在 
    if (jsSelectIsExitItem(objSelect, objItemValue)) { 
    for (var i = 0; i < objSelect.options.length; i++) { 
    if (objSelect.options[i].value == objItemValue) { 
    objSelect.options[i].text = objItemText; 
    break; 
    } 
    } 
    alert("成功修改"); 
    } else { 
    alert("该select中 不存在该项"); 
    } 
    } 
    
    // 6.设置select中text="paraText"的第一个Item为选中 
    function jsSelectItemByValue(objSelect, objItemText) { 
    //判断是否存在 
    var isExit = false; 
    for (var i = 0; i < objSelect.options.length; i++) { 
    if (objSelect.options[i].text == objItemText) { 
    objSelect.options[i].selected = true; 
    isExit = true; 
    break; 
    } 
    } 
    //Show出结果 
    if (isExit) { 
    alert("成功选中"); 
    } else { 
    alert("该select中 不存在该项"); 
    } 
    } 
    
    // 7.设置select中value="paraValue"的Item为选中 
    document.all.objSelect.value = objItemValue; 
    
    // 8.得到select的当前选中项的value 
    var currSelectValue = document.all.objSelect.value; 
    
    // 9.得到select的当前选中项的text 
    var currSelectText = document.all.objSelect.options[document.all.objSelect.selectedIndex].text; 
    
    // 10.得到select的当前选中项的Index 
    var currSelectIndex = document.all.objSelect.selectedIndex; 
    
    // 11.清空select的项 
    document.all.objSelect.options.length = 0; 
    ​```

  + ​



+ js操作让select的某项被选中

  + 1、通过修改select的value值

  + ```javascript
    <input type="button" id="btn" value="按钮"/>
     2 <select name="select" id="select">
     3     <option value="1">aa</option>
     4     <option value="a">bb</option>
     5     <option value="c">cc</option>
     6 </select>
     7 <script type="text/javascript">
     8 //点击按钮，让第二项选中
     9     document.getElementById('btn').onclick=function(){
    10         document.getElementById('select').value="a";//重点
    11     }    
    ```

  + **通过修改option的selected属性**

  + ```javascript
    <input type="button"     id="btn" value="按钮"/>
     2 <select name="select" id="select">
     3     <option value="1">aa</option>
     4     <option value="a">bb</option>
     5     <option value="c">cc</option>
     6 </select>
     7 <script type="text/javascript">
     8     document.getElementById('btn').onclick=function(){
    　　　　　　//点击按钮，让第二个选项选中
     9         var options = document.getElementById('select').children;
    10         options[1].selected=true;
    11     }    
    ```

+ 页面中的公用部分结构单独一个html文件,后续直接引入即可,参考代码如下

+ ```javascript
  //将头尾的页面结构单独拿出来存放为HTML文件,然后在用js引入使用,
  $(".mtop").load("header.html");
    $(".mfooter").load("footer.html");
  ```

+ ​

+ 模板引擎:https://aui.github.io/art-template/docs/syntax.html


  + 标准语法`{{if user}}  <h2>{{user.name}}</h2>  {{/if}}`

  + ```html
    输出:
    {{value}}
    {{data.key}}
    {{data['key']}}
    {{a ? b : c}}
    {{a || b}}
    {{a + b}}
    ```

  + 原文输出:`{{@value}}`

  + ```
    循环:
    {{each target}}
        {{$index}} {{$value}}
    {{/each}}
    ```

  + ```
    条件:
    {{if value}} ... {{/if}}
    {{if v1}} ... {{else if v2}} ... {{/if}}

    ```

  + 变量: `{{set temp = data.sub.content}}`

  + 模板继承  模板变量$imports

  +   + ​