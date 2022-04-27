/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2022-03-07 14:22:11
 * @LastEditors Please set LastEditors
 * @LastEditTime: 2022-03-27 15:26:36
 */

import { ICmpCategory } from '@/types'
import { staticAssetsUrl } from '@/utils'

const Maps: ICmpCategory = {
  name: 'Maps',
  icon: 'icon-ditu',
  data: [
    {
      category: '3D',
      url: staticAssetsUrl('src/assets/backgroundImg/map.png'),
      icon: 'icon-ditu_diqiu',
      id: '1',
      name: 'map',
      alias: '3D地图',
      used: true,
    },
  ],
}

const Buildings: ICmpCategory = {
  name: 'Buildings',
  icon: 'icon-building',
  data: [
    { category: 'buildings', url: staticAssetsUrl('src/assets/backgroundImg/buildings.png'), id: '1', name: 'building', alias: 'Buildings', used: true },
    { category: 'buildings', url: staticAssetsUrl('src/assets/backgroundImg/city&streeet.png'), id: '2', name: 'building', alias: 'City & Streeet', used: true },
    { category: 'buildings', url: staticAssetsUrl('src/assets/backgroundImg/citys.png'), id: '3', name: 'building', alias: 'Citys', used: true },
  ]
}

const Vehicles: ICmpCategory = {
  name: 'Vehicles',
  icon: 'icon-et-vehicle',
  data: [
    { category: 'vehicles', url: staticAssetsUrl('src/assets/backgroundImg/CartoonCar.png'), id: '1', name: 'vehicle', alias: 'Cartoon Car', used: true },
    { category: 'vehicles', url: staticAssetsUrl('src/assets/backgroundImg/TrapCar.png'), id: '1', name: 'vehicle', alias: 'Trap Car', used: true },
  ]
}

const Plants: ICmpCategory = {
  name: 'Plants',
  icon: 'icon-plant',
  data: [
    { category: 'plants', url: staticAssetsUrl('src/assets/backgroundImg/FlowerBouquet.png'), id: '1', name: 'plant', alias: 'Flower Bouquet', used: true },
    { category: 'plants', url: staticAssetsUrl('src/assets/backgroundImg/CatusInPot.png'), id: '1', name: 'plant', alias: 'Catus InPot', used: true },
    { category: 'plants', url: staticAssetsUrl('src/assets/backgroundImg/OrangeFlower.png'), id: '1', name: 'plant', alias: 'Orange Flower', used: true },
    { category: 'plants', url: staticAssetsUrl('src/assets/backgroundImg/WrappedFlower.png'), id: '1', name: 'plant', alias: 'Wrapped Flower', used: true },
  ]
}
const Planets: ICmpCategory = {
  name: 'Planets',
  icon: 'icon-planet2',
  data: [
    { category: 'planets', url: staticAssetsUrl('src/assets/backgroundImg/Galaxy.png'), id: '1', name: 'planet', alias: 'Galaxy', used: true },
    { category: 'planets', url: staticAssetsUrl('src/assets/backgroundImg/Earth.png'), id: '1', name: 'planet', alias: 'Earth', used: true },
    { category: 'planets', url: staticAssetsUrl('src/assets/backgroundImg/Moon.png'), id: '1', name: 'planet', alias: 'Moon', used: true },
    { category: 'planets', url: staticAssetsUrl('src/assets/backgroundImg/Mars.png'), id: '1', name: 'planet', alias: 'Mars', used: true },
  ]
}
const Others: ICmpCategory = {
  name: 'Others',
  icon: 'icon-others',
  data: [
    { category: 'others', url: staticAssetsUrl('src/assets/backgroundImg/IronManMK5.png'), id: '1', name: 'other', alias: 'Iron Man MK5', used: true },
  ]
}

export const useCmpCategory = () => ([
  Maps,
  Buildings,
  Vehicles,
  Plants,
  Planets,
  Others,
])


