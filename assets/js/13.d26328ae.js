(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{263:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"关于vuepress-笔记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于vuepress-笔记"}},[t._v("#")]),t._v(" 关于Vuepress 笔记")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/basic-config.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网参考"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"单页面构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单页面构建"}},[t._v("#")]),t._v(" 单页面构建")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局安装")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g vuepress\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个 docs 文件夹")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" docs\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个 markdown 文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'# Hello VuePress!'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docs/README.md\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始运行")]),t._v("\nvuepress dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始运行  根目录运行")]),t._v("\nvuepress dev docs\n")])])]),n("h2",{attrs:{id:"基本配置目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本配置目录"}},[t._v("#")]),t._v(" 基本配置目录")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])]),n("h4",{attrs:{id:"命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个 .vuepress 文件夹")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" .vuepress\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入 .vuepress 文件夹")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" .vuepress/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个 config.js 文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" config.js\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个 packge.json 文件   根目录")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init -y\n\n")])])]),n("p",[t._v("配置 "),n("code",[t._v(".vuepress/config.js")]),t._v("，")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'一切都是浮云'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lucky'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"主题配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主题配置"}},[t._v("#")]),t._v(" 主题配置")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("网址参考"),n("OutboundLink")],1)]),t._v(" "),n("h5",{attrs:{id:"图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[t._v("#")]),t._v(" 图片")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("# 新建一个 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" 文件夹 \nmkdir "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("\n")])])]),n("p",[t._v("字体图片 "),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#head",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("module.exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  head: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),t._v(", href: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/logo.png'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"nav配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nav配置"}},[t._v("#")]),t._v(" nav配置")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F-logo",target:"_blank",rel:"noopener noreferrer"}},[t._v("导航栏官网"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("module.exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nav: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'首页'")]),t._v(", link: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'浮云导航'")]),t._v(", link: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/guide/'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'前端导航'")]),t._v(", link: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://makxin.com/webnav.html'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'每日分享'")]),t._v(", link: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://makxin.com/fx.html'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'关于'")]),t._v(", link: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/about'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  text: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'分享'")]),t._v(", \n\t\t  items:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'技术'")]),t._v(",link:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/jishu/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t\t\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'每日分享'")]),t._v(",link:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/fx/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t  //下拉列表显示分组\n\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  text: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'学习'")]),t._v(", \n\t\t  items:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\ttext: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'前端'")]),t._v(",   \n\t\t\t\titems:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js'")]),t._v(",link:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/js/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t\t\t\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css'")]),t._v(",link:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/css/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t\t\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\ttext: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'后端'")]),t._v(",   \n\t\t\t\titems:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'php'")]),t._v(",link:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/php/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t\t\t\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java'")]),t._v(",link:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/java/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t //github \n\t "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Gitee'")]),t._v(", link: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://gitee.com/lucky_ck'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    sidebarDepth: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",\n\tlastUpdated: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Last Updated'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),n("h2",{attrs:{id:"侧边栏配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#侧边栏配置"}},[t._v("#")]),t._v(" 侧边栏配置")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("侧边栏官网"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("module.exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\n   //侧边栏\n\tsidebar: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/fx/'")]),t._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(",\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fx1'")]),t._v(",\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fx2'")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/js/'")]),t._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js1'")]),t._v(",\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js2'")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/css/'")]),t._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css1'")]),t._v(",\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css2'")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/php/'")]),t._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'php1'")]),t._v(",\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'php2'")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/java/'")]),t._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java'")]),t._v(", //java文件夹不是下拉框形式\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\ttitle:"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java'")]),t._v(",\n\t\t\t\tchildren:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java/java1'")]),t._v(", //以dosc为根目录查找文件\n\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java/java2'")]),t._v(" //以dosc为根目录查找文件\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n\t\t//下面是首页显示侧边栏的，不需要首页显示可以删掉代码\n\t\t// "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t// \t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(",            /* / */\n\t\t// \t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'contact'")]),t._v(",     /* contact.html */\n\t\t// \t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'about'")]),t._v("        /* about.html */\n\t\t// "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n")])])]),n("h2",{attrs:{id:"部署github"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署github"}},[t._v("#")]),t._v(" 部署github")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("部署github官网"),n("OutboundLink")],1)]),t._v(" "),n("h4",{attrs:{id:"在你的项目中，创建一个如下的-deploy-sh-文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在你的项目中，创建一个如下的-deploy-sh-文件"}},[t._v("#")]),t._v(" 在你的项目中，创建一个如下的 deploy.sh 文件")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);