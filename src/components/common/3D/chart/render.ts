/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-23 22:13:35
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-23 22:46:23
 */
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BufferGeometry,
  Material,
  AmbientLight,
  Mesh,
  // BoxGeometry,
  // TextureLoader,
  // MeshBasicMaterial,
} from 'three'

import { APPIThreeJs } from '@/types/threeJs'

export class Render implements APPIThreeJs {
  scene: Scene | null = null
  camera: PerspectiveCamera | null = null
  renderer: WebGLRenderer | null = null
  ambientLight: AmbientLight | null = null
  mesh: Mesh<BufferGeometry, Material | Material[]> | null = null

  constructor() {
    this.scene = new Scene()
    this.setCamera()
    this.setRenderer()
    this.setCube()
    this.setLight()
  }
  setCamera() {
    // 第二参数就是 长度和宽度比 默认采用浏览器  返回以像素为单位的窗口的内部宽度和高度
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.z = 5
  }
  setRenderer() {
    this.renderer = new WebGLRenderer()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    //这里 其实就是canvas 画布  renderer.domElement
    document.body.appendChild(this.renderer.domElement)
  }
  setCube() {
    if (this.scene) {
      // const geometry = new BoxGeometry()
      // const texture = new TextureLoader().load() // TODO
      // const material = new MeshBasicMaterial({map: texture}) // TODO
      // this.mesh = new Mesh(geometry, material)
      // this.scene.add(this.mesh)
      this.render()
    }
  }
  render() {
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera)
    }
  }
  setLight() {
    if (this.scene) {
      this.ambientLight = new AmbientLight(0xffffff)
      this.scene.add(this.ambientLight)
    }
  }
  animate() {
    if (this.mesh) {
      requestAnimationFrame(this.animate.bind(this))
      this.mesh.rotation.x += 1
      this.mesh.rotation.y += 1
      this.render()
    }
  }
}
