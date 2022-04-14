/*
 * @author: Hansel
 * @email: hsh01365238@gongdao.com
 * @create: 2022-04-14 15:11:32
 * @modify: 2022-04-14 15:15:28
 * @desc:
 */
import { defineComponent, App } from 'vue'

const IProps = {}
// TODO
const Carousel = defineComponent({
  name: 'DvisCarousel',
  props: IProps,
  setup(props) {
    return () => (
      <div class={'dvis-carousel'}>
        <main>
          <li></li>
        </main>
      </div>
    )
  },
  install: function (App: App) {
    App.component(Carousel.name, Carousel)
  },
})
