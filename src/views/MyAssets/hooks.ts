/**
 * @author Hansel
 * @email hsh01365238@gongdao.com
 * @create 2022-04-15 16:50:20
 * @modify 2022-04-15 17:16:07
 * @desc 
 */
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router'
export const useAssets = () => {
  const router = useRouter()
  const modalVisable = ref<boolean>(false)
  const form = reactive({})

  const onAdd = () => {
    modalVisable.value = true
  }
  const onEdit = (id: string) => {
    // TODO 待传递界面ID
    router.push({ path: '/project', query: { id } })
  }
  const onPreview = (id: string) => {
    // TODO 待传递界面ID
    router.push({ path: '/test', query: { id } })
  }
  const onDelete = (id: string) => {
    // TODO 
    console.log(id);
  }
  const onSave = () => {
    // TODO
    modalVisable.value = false
  }

  return {
    form,
    modalVisable,
    onAdd,
    onSave,
    onEdit,
    onPreview,
    onDelete
  }
}

export const useGroup = () => {
  const title = ref<string>('Add')
  const modalVisable = ref<boolean>(false)
  const form = reactive({})
  const groupData = ref([])

  const onEdit = (data: any) => {
    console.log(data);

    title.value = 'Edit'
    modalVisable.value = true
  }

  const onSave = () => {
    // TODO
    modalVisable.value = false
  }

  const onAdd = () => {
    modalVisable.value = true
  }
  const onDelete = (id: string) => {
    // TODO 
    console.log(id);
  }
  return {
    form,
    title,
    groupData,
    modalVisable,
    onEdit,
    onSave,
    onAdd,
    onDelete
  }
}