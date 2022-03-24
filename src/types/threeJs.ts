/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-23 22:19:50
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-23 22:38:39
 */
import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, Mesh } from 'three'

export interface APPIThreeJs {
  scene: Scene | null
  camera: PerspectiveCamera | null
  renderer: WebGLRenderer | null
  ambientLight: AmbientLight | null
  mesh: Mesh | null

  /**
   * init
   * @description 初始化
   */
  init?: () => void
  /**
   * setCamera
   * @description 设置相机
   */
  setCamera?: () => void
  /**
   * setRenderer
   * @description 设置渲染器
   */
  setRenderer?: () => void
  /**
   * setLight
   * @description 设置环境光
   */
  setLight?: () => void
  /**
   * setCube
   * @description 创建网络模型
   */
  setCube?: () => void
  /**
   * render
   * @description 渲染
   */
  render?: () => void
  /**
   * animate
   * @description 动画
   */
  animate?: () => void
}
