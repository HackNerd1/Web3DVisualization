# Web3DVisualization

<p align="center">
  <img src="https://img.shields.io/badge/Dvis UI-0.1.0-ff7675.svg" alt="Dvis U">
  <img src="https://img.shields.io/badge/Vue-3.2.13-41b883.svg" alt="vue">
  <img src="https://img.shields.io/badge/Vite-1.3.0-ffeaa7.svg" alt="Vite">
  <img src="https://img.shields.io/badge/Typescript-4.4.3-74b9ff.svg" alt="vue">
</p>

> 一个 3D 可视化大屏项目, 正在建设中...

## 目录结构

```shell
├─other_modules            # data-v 修改包（参考） 需要手动解压替换 node_modules @jiaminghi文件夹
│
├─packages                 # 组件库
│  ├─Avatar
│  ├─Badge
│  ├─Button
│  ├─Card
│  ├─CollapseButton
│  ├─Echarts
│  ├─Form
│  ├─Icon
│  └─Input
│
├─public
└─src
    ├─api
    ├─assets
    │  ├─avatar               # (temp) 用户头像
    │  ├─DVisualize           # (北京图片) 用户头像
    │  └─styles
    │      ├─color            # (TODO) 全局color抽离
    │      └─var              # (TODO) 全局style变量抽离
    │
    ├─components              # 业务组件
    │  ├─common
    │  │  ├─charts
    │  │  └─editor
    │  │      ├─Header
    │  │      ├─Proerty
    │  │      └─SideBar
    │  │
    │  └─Layout
    │      └─common
    │          ├─Author
    │          ├─Header
    │          └─SideBar
    ├─config                  # 配置项，包括页面title、baseUrl
    ├─data                    # （TODO）抽离图标点，城镇等图标一些数据
    │  └─map
    │
    ├─pages                   # 基础页面
    ├─router
    ├─store                   # vuex store
    ├─symbols
    ├─types                   # vuex store，大屏元素等类型的声明
    ├─utils                   # 工具类
    └─views                   # 业务界面
        ├─Boardlist
        ├─Dashboard
        ├─Editor
        ├─MyAssets
        └─test

```

## Quick Start

```shell
> git clone https://github.com/He123987/Web3DVisualization.git
> cd Web3DVisualization
> yarn
> yarn dev
```

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## 后端仓库地址

[Web3DVisualization](https://github.com/He123987/Web3DVisualization-BackEnd)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) + [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
