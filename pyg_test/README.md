### 品优购项目练习

#### 知识记录

+ favicon图标 （ 用于显示在弹框名字前面的图标 )
  + 切图生成透明的PNG格式
  + 通过比特虫进行图片格式的转化为.ico，并将图片放在根目录下
  + 将图片添加到标签中去

```
添加到head标签中 <link rel="shortcut icon" href="favicon.ico" />
```

+ 网站TDK三大SEO优化标签（搜索引擎优化，对网站进行深度的优化，自然排名的方式）

  + title  网站名-网站的介绍

    ```
    <title>京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！</title>
    ```

  + description

    ```
    <meta name='description' content='京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!'>
    ```

  + keyword

    ```
    <meta name='keywords' content='网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东'>
    ```

+ 模块化（当多个页面采用共同的显示，可以用模块化写直接使用）

+ shortcut导航栏

  + line-height行高可以是内部文字居中排布

  + &nbsp；可以用来调整空隙

  + 添加字体图标，iconfont的矢量图进行下载后解压到文件目录下，添加字体图标声明

    ```
    .arrow-icon::after {
        content: '\e91e';
        font-family: 'icomoon';
    }
    ```
  
+ header部分

  + 不同位置的内容通过盒子的左右浮动和上下边距来书写

  + logo的设置符合SEO优化

    + 放一个和h1标签，告诉引擎这个地方很重要

    + 并且放一个链接可以返回到网站的首页

    + 链接中放文字，文字不显示

      a.可以设置链接的文字字号为0，就不会显示出来（京东）font-size:0

      b.直接设置左侧移动text-indent:-999px，然后overflow:hidden掉(淘宝)

    + 鼠标放在logo上看到提示文字

  + 搜索框  不给具体的值，用搜索框和按键开关来填充搜索盒子

  + 我的购物车 在显示小盒子的时候不要给具体的count值，用具体的内容撑开，这个三个圆角来设置形状

+ nav导航部分
  + nav盒子给一个高度，给一个下边框
  + 1号盒子左浮动为dropdown
    + 全部商品分类和具体商品应该在一个盒子中
    + 伪元素使用incommon添加的时候需要先给出样式，再font-family=‘icommon’
    + 当子元素进行absolute的时候需要给父元素设置relative
  + 2号盒子左侧浮动navitems导航栏
    + 设置下拉菜单的，鼠标点击链接的时候，可以给a标签设置一个padding，这样就可以在大的范围内进行点击，提高用户体验
  
+ main模块内容

  + 由两个盒子左右浮动实现布局，focus内容为轮播图
  + newflash模块依旧是由三个不同的盒子排布实现
    + 第二个盒子用12个li标签来实现，但存在一个问题是，由于lifeservice的盒子宽度不够一行只能排布三个盒子，我们希望的是它可以排列四个盒子，就去修改li的父亲ul的宽度
    + 对于超出内容的显示，首先设置溢出部分的隐藏 overflow: hidden;强制要求不可以进行换行 white-space: nowrap;文本的内容用…来显示text-overflow: ellipsis;

+ footer底部部分

  + 如果需要直线的时候，直接给盒子设置一个下边框就可以了

  + 当正文需要左浮动的时候，直接将依赖的浮动，后面的都会跟着浮动

  + 如果有很多的图片，为了给服务器不造成压力，我们可以将图片转化为精灵图 

    + 精灵图（插入照片后通过定位来设置加入图片）

      ```
      background: url(../images/icons.png) no-repeat -252px -5px;
      ```
    
  + 在设置空隙的时候
  
    + margin-top 可以用来设置元素旁边的，主要可以来调整盒子的定位
    + padding是用来设置标签的边框的，主要是改变内容和边框的距离
    + border-bottom可以用来设置盒子的下边框
    + left top是用来设置absolute浮动盒子的相对位置