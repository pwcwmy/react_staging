## 一、todoList案例相关知识点
    1. 拆分组件、实现静态组件，注意className、style写法
    2. 动态初始化列表，如何确定将数据放在哪个组件的state中？
        ——某个组件使用：放在其自身的state中
        ——某些组件使用：放在他们共同的父组件中
    3. 关于父子间通信：
        1. 父组件-》子组件 props
        2. 子组件-》父组件 props，要求父亲提前给子传递一个函数
    4. 注意defaultChecked 和 checked的区别， 类似的还有：defaultValue 和 value
    5. 状态在哪里，操作状态的方法就在哪里

## 二、配置代理
新版写法有调整
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    }),
    createProxyMiddleware('/api2', { 
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''}
    })
  )
}

## 三、github搜索案例
<List {...this.state}/>这是什么写法
object 不能作为react child

发出ajax请求的方法：
1. xhr(XMLHttpRequest) api少, 不符合关注分离的设计思想
2. jQuery 靠回调函数 多层回调麻烦 对xhr封装
3. axios 前端Promise重要 对xhr封装
4. fetch windows内置，除了xhr发ajax请求的方法

## React路由
1. SPA single page web application
    1. 单个页面的应用，多组件
    2. 不刷新， 只局部更新
    3. 数据通过ajax获取，并在前端异步展示

2. 路由
    key: path
    value: Component(前端）/function（后端)

3. 前端路由的基石——history.js BOM对象的history
    浏览器的历史记录是栈结构
    history.push(path)
    history.replace(path) 替换栈顶
    history.listen((location)=>{})
    history.forward()
    history.goback()

    法一：直接使用H5推出的history身上的api
    let history = History.createBrowserHistory()

    法二：Hash值（锚点跳转 #）兼容性极佳
    let history = History.createHashHistory()

4. react-router-dom
    web、native、anywhere
    专门用来实现一个SPA应用
    npm add react-router-dom

印记中文：翻译官方外文文档

## 四、react-router-dom案例
    1. 点击导航栏改变url /about->/home
    2. 展示区listen url改变, 切换组件

    1. Link 编写路由链接
    2. Route 注册路由
    3. 上面两者都需要包裹在同一个Router内
        建议在index.js中<BrowserRouter/><App/><Browswer>


    1. 路由组件我需要写成这样：<Route path ="/about" element ={<About/>}/>，网页才给我正常渲染组件的html，而且还需要我在外围包裹上Routes。老师的版本是<Route path ="/about" component ={About}/>。
    2. 在使用路由组件接受路由器传递的props时，使用console.log(this.props), 但是后台给我传回了一个空的对象，没有history，location，match等信息。

    1. pages 放路由组件
    2. components 放一般组件

    最大的区别
    1. 路由组件会收到props: history、location、match
    2. 一般组件不收到props

    1. Link没有高亮效果
    2. NavLink 恰好有active，如果不巧 用activeClassName = {demo}

    1. 标签体内容是一个特殊属性，叫children, 也可以用来传递 this.props.children
    所以{...this.props} 直接这么写就可以传递全部了

## 五、NavLink与封装NavLink
    1. NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
    2. 标签体内容是一个特殊的标签属性
    3. 通过this.props.children可以获取标签体内容


## 六、Switch的使用
    import {Switch} from 'react-router-dom'
    1. 通常情况下，path和component是一一对应的关系
    2. Switch 可以提高路由匹配效率（单一匹配，匹配到了就走）

    经过实践发现有变化
    1. component = {Test} 改为element= {<Test/>}
    2. Switch 不再存在， 直接用Routes 包裹也可以实现单一匹配

## 七、解决多级路径刷新页面样式丢失问题 ： 去点 ：./css->/css
   /public : 相当于localhost:3000 脚手架服务器的根路径
   原理：webpack内置dev-server

   如果访问一个不存在的资源，脚手架默认返回/public/index.html

   一个错误现象：
   1. path = /atguigu/home
   2. 正常可以切换路由
   3. 刷新后css丢失
   原因：
   1. 原来请求css:http://localhost:3000/css/bootstrap.css
   2. 后来请求css:http://localhost:3000/atguigu/css/bootstrap.css
   由于资源不存在， 脚手架默认兜底返回index.html
   解决方法：
   1. <link rel ="stylesheet" href="./css/bootstrap.css">转为<link rel ="stylesheet" href="/css/bootstrap.css">
   2. 转为<link rel ="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css">， 只适用react脚手架
   3. BrowserRouter 改为 HashRouter（# 后面算前端资源， 不走服务器，一般不采用）

   code:304 Not Modified 说明资源已经缓存
   shift + 刷新 ，不走缓存

## 八、路由的严格匹配与模糊匹配
    1. 默认使用的是模糊匹配（【输入的路径】必须要包含【匹配的路径】，且顺序要一致）
    2. 开启严格匹配：<Route exact={true}或者直接写exact path='/about element={<About/>}>
    3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

## 九、Redirect放在路由最下方兜底，v5以前
    <Redirect to='/about'/> 当所有路由都无法匹配时选择Redirect的to

    Redirect V6 版本已经废弃，需要导入Hook钩子Navigate ，
    <Routes>
    {/* exact =true 开启路由精准匹配={true}可以省略 尽量不开启严格匹配*/}
    <Route exact path="/about" element={<About/>}/>
    <Route exact={true} path="/home" element = {<Home/>} />
    <Route path="*" element={<Navigate to ="/about" />}/>

    </Routes>

## 十、嵌套路由
    1. 注册子路由时要写上父路由的path值
    2. 路由的匹配是按照注册路由的顺序进行的
    v6开始都是严格匹配，所以写/home/news、/home/message不对
    <Routes>
        <Route path="news" element={<News/>} />
        <Route path="message" element={<Message/>} />
    </Routes>
    调整了路由路径以去掉前缀/home。这是因为<Routes>应该位于Home组件内部，所以这里的路径是相对于/home而言的。

## 十一、向路由组件传递参数
    当你使用查询字符串（如 ?id=001&title=message001）来传递参数时，这些参数不会自动作为 props 传递给组件。在 react-router-dom v6 中，你需要使用 useSearchParams 钩子来访问 URL 中的查询参数。
    注：导航栏需要有高亮效果则选择NavLink, 不需要高亮选用Link
    
    1. params参数
        路由链接（携带参数）: <Link to={`/demo/test/${obj.name}/${obj.age}`}>详情</Link>
        注册路由（声明接收）: <Route path="/demo/test/:name/:age" element={<Test/>}>
        接收参数: const {id, title} = this.props.match.params

    2. search参数
        路由链接（携带参数）: <Link to={`/demo/test?name=tom&age=18`}>详情</Link>
        注册路由（无需声明,正常注册就行）: <Route path="/demo/test" element={<Test/>}>
        接收参数: const {search} = this.props.location.search
        备注：获取到的search是urlencoded编码字符串,需要借助querystring解析

    3. state参数，属于路由组件，区别于state状态
        路由链接（携带参数）: <Link to={{pathname:"/demo/test", state:{name;'tom', age:18}}}>详情</Link>  to后面接收对象{{}}
        注册路由（无需声明,正常注册就行）: <Route path="/demo/test" element={<Test/>}>
        接收参数: this.props.location.state
        备注：地址栏不会体现参数，刷新也能保留住参数

## 十二、编程式路由导航 replace/push
    this.props.history.replace
    借助this.props.history对象上的API对操作路由跳转、前进、后退
        -this.props.history.push()
        -this.props.history.replace()
        -this.props.history.goBack()
        -this.props.history.goForward()
        -this.props.history.go(1)
    
    withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
    withRouter的返回值可以是一个新组件

## 十三、BrowserRouter与HashRouter的区别
    1. 底层原理不同
        BrowserRouter使用的是H5的history API, 不兼容IE9及以下版本
        HashRouter使用的是URL的哈希值
    2. path表现形式不同
        BrowserRouter的路径中没有#,例如:localhost:3000/demo/test
        HashRouter的路径中包含#,例如:localhost:3000/#/demo/test
    3. 刷新后对路由state参数的影响————这点很重要！！！
        （1）BrowserRouter没有任何影响，因为state保存在history对象中
        （2）HashRouter刷新后会导致路由state参数的丢失！！！
    4. 备注：HashRouter可以用于解决一些路径错误相关的问题（解决多级路径刷新样式丢失）


## antd
## 十五、redux
    redux是一个专门用于做状态管理的JS库（不是react插件库）
    集中式管理react应用中多个组件共享的状态

    什么情况用redux
    1. 某个组件的状态，需要让其他组件可以随时拿到（共享）
    2. 一个组件需要改变另一个组件的状态（通信）
    3. 总体原则：能不用就不用，如果不用比较吃力才考虑用