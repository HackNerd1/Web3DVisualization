<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { fetchGroup } from '@/api/assets'
  import { APPIAssetsList } from 'src/types/data'
  import { AssetsCard } from '@/components/common/assetsCard/index.tsx'
  import { IColumns } from 'packages/Form/index.d'

  /**
   * 色板
   */
  const color = ['#FFB931', '#FF036D', 'rgba(164, 48, 255, 1)', 'rgba(0, 206, 144, 1)']
  /**
   * 资源分组
   */
  // TODO 待对接口
  const projects: APPIAssetsList[] = [
    {
      title: 'China Map',
      background: 'src/assets/backgroundImg/map.png',
      description: 'An example of 3D projects',
      status: 'Published',
      uid: '1',
    },
    {
      title: 'Fantasy Book',
      background: 'src/assets/backgroundImg/FantasyBook.png',
      description: 'An example of 3D projects',
      status: 'Draft',
      uid: '2',
    },
    {
      title: 'Treasure!',
      background: 'src/assets/backgroundImg/FantasyBook.png',
      description: 'An example of 3D projects',
      status: 'Draft',
      uid: '2',
    },
    {
      title: 'Crypt Location',
      background: 'src/assets/backgroundImg/CryptLocation.png',
      description: 'An example of 3D projects',
      status: 'Draft',
      uid: '2',
    },
  ]
  const modalVisable = ref<boolean>(true)
  const assetsGroup = ref([])
  const router = useRouter()
  const transform = ref(0)

  onMounted(() => {
    fetchGroup({ page: 1, size: 20 }).then(({ data }) => {
      // assetsGroup.value = data
      assetsGroup.value = data.data.groups || []
    })
  })
  const handleTransform = (toggle: number) => {
    transform.value += 154 * toggle
  }

  const columns: IColumns[] = [
    {
      type: 'input',
      label: 'Name',
      prop: 'name',
      // prefix: 'icon-user',
      placeholder: 'Please input group name',
      rules: [
        {
          required: true,
          triggle: '',
        },
      ],
    },
    {
      type: 'input',
      label: 'Icon',
      prop: 'icon',
      // prefix: 'Select Icon',
      placeholder: 'Please select icon',
      // isPassword: true,
    },
  ]

  const handleAdd = () => {
    modalVisable.value = true
  }

  const handleSearch = () => {
    // console.log('search')
  }

  const handleClick = () => {
    // TODO 待传递界面ID
    router.push({ path: '/project', query: { id: '' } })
  }

  const handleAddAssets = () => {
    modalVisable.value = true
  }
</script>

<template>
  <div class="dvis-common-container">
    <section>
      <h1>Group</h1>
      <div class="flex group">
        <!-- 
          向左按钮
         -->
        <dvis-icon
          size="18px"
          icon="icon-xiangzuo"
          @click="handleTransform(1)"
          color="rgba(44, 62, 80, 0.6)"
          class="pagination"
          :disabled="transform === 0"
        />
        <!-- 
          分组
         -->
        <div class="carousel">
          <dvis-card
            class="flex justify-center align-center"
            @click="handleAdd"
            :style="{
              transform: `translateX(${transform}px)`,
              width: '88px',
              height: '64px',
            }"
          >
            <template #content>
              <dvis-icon icon="icon-add" size="24px" color="rgb(191, 191, 191)" />
            </template>
          </dvis-card>
          <dvis-card
            :style="{ transform: `translateX(${transform}px)` }"
            v-for="({ name, icon }, index) in assetsGroup"
            :title="name"
            :icon="icon"
            :iconBGColor="color[index]"
            background
            rectangle
            :key="index"
          >
            <template #content>
              <span class="effect flex justify-evenly align-center">
                <dvis-tooltips description="Edit">
                  <dvis-icon icon="icon-edit1" color="#333333" size="16px" />
                </dvis-tooltips>
                <dvis-tooltips description="Delete">
                  <dvis-icon icon="icon-delete2" color="#333333" size="16px" />
                </dvis-tooltips>
              </span>
            </template>
          </dvis-card>
        </div>
        <!-- 
          向左按钮
         -->
        <dvis-icon
          size="18px"
          icon="icon-xiangyou"
          @click="handleTransform(-1)"
          color="rgba(44, 62, 80, 0.6)"
          class="pagination"
          :disabled="transform === assetsGroup.length * 154"
        />
      </div>
      <div class="search-bar">
        <dvis-input placeholder="Search for something..." @keyup.enter="handleSearch">
          <template #prefix>
            <dvis-icon icon="icon-searchfill" size="16px" color="rgba(164, 182, 225, 1)" />
          </template>
          <template #suffix>
            <span class="search-filters" @click="handleSearch">
              <dvis-icon icon="icon-DividerTall" size="24px" color="rgba(120, 136, 150, 0.3)" />
              <dvis-icon icon="icon-filter1" size="18px" />
              Filtters
            </span>
          </template>
        </dvis-input></div
      >
    </section>
    <section>
      <h1>Assets List</h1>
      <div class="my-assets">
        <dvis-card @on-click="handleAddAssets" class="flex justify-center align-center">
          <template #content>
            <dvis-icon icon="icon-add" size="40px" color="rgb(191, 191, 191)" />
          </template>
        </dvis-card>
        <AssetsCard @on-click="handleClick" v-for="(props, index) in projects" v-bind="props" :key="index" />
      </div>
    </section>
  </div>
  <dvis-modal v-model:visable="modalVisable">
    <template #header>Add</template>
    <dvis-form :columns="columns" />
  </dvis-modal>
</template>

<style lang="less">
  @import './index.less';
</style>
