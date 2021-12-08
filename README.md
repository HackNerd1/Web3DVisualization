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
├─packages                       # 组件库
│  ├─Avatar
│  ├─Badge
│  ├─Button
│  ├─Card
│  ├─CollapseButton
│  ├─Form
│  ├─Icon
│  └─Input
├─public
└─src
    ├─api
    ├─assets
    │  ├─avatar
    │  └─styles
    ├─components                  # 业务组件
    │  ├─common
    │  └─Layout
    │      ├─board
    │      │  ├─Header
    │      │  └─SideBar
    │      └─common
    │          ├─Author
    │          ├─Header
    │          └─SideBar
    ├─config                      # 配置项，包括页面title、baseUrl
    ├─pages                       # 基础页面
    │  ├─error
    │  └─login
    ├─router
    ├─utils                       # 工具类
    └─views                       # 业务界面
        ├─Boardlist
        ├─Dashboard
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

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
