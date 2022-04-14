/**
 * @author Hansel
 * @email hsh01365238@gongdao.com
 * @create 2022-04-13 10:00:18
 * @modify 2022-04-13 18:23:27
 * @desc 
 */
/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2021-11-26 14:43:28
 * @LastEditors Please set LastEditors
 * @LastEditTime: 2022-04-10 22:02:12
 */
import { App } from 'vue'
import Icon from './Icon'
import Input from './Input'
import Badge from './Badge'
import Button from './Button'
import Avatar from './Avatar'
import Card from './Card'
import CollapseButton from './CollapseButton'
import Form from './Form'
import Echarts from './Echarts'
import Tags from './Tags'
import Tooltips from './Tooltips'
import Modal from './Modal';
import Vue3DraggableResizable from './Vue3DraggableResizable'

const components = {
  Input,
  Button,
  CollapseButton,
  Form,
  Echarts,
  Icon,
  Badge,
  Avatar,
  Card,
  Vue3DraggableResizable,
  Tags,
  Tooltips,
  Modal,
}

const install = (app: App) => {
  Object.values(components).forEach((component) => app.use(component))
}

const MyComponents = {
  version: '0.0.1',
  name: 'dvis-components',
  install,
  ...components,
}

export default MyComponents
export { Input, Button, CollapseButton, Form, Icon, Badge, Avatar, Card, Tags, Tooltips, Modal }
