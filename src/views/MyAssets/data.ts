
/**
 * @author Hansel
 * @email hsh01365238@gongdao.com
 * @create 2022-04-15 16:23:53
 * @modify 2022-04-15 16:39:52
 * @desc 
 */
import { IColumns } from "packages/Form/index.d";

export const groupColumns: IColumns[] = [
  {
    type: 'input',
    label: 'Name',
    prop: 'name',
    size: 'large',
    labelPosition: 'left',
    // prefix: 'icon-user',
    // attrs: {},
    placeholder: 'Please input group name',
    rules: [
      {
        required: true,
        triggle: 'blur',
      },
    ],
  },
  {
    type: 'input',
    label: 'Icon',
    prop: 'icon',
    size: 'large',
    // prefix: 'Select Icon',
    placeholder: 'Please select icon',
    // isPassword: true,
  },
]


export const assetsColumns: IColumns[] = [
  {
    type: 'input',
    label: 'Title',
    prop: 'title',
    size: 'large',
    labelPosition: 'left',
    placeholder: 'Please input assets name',
    rules: [
      {
        required: true,
        triggle: 'blur',
      },
    ],
  },
  {
    type: 'input',
    label: 'Des',
    prop: 'icon',
    size: 'large',
    placeholder: 'Input description',
  },
  {
    type: 'input',
    label: 'Cover',
    prop: 'cover',
    size: 'large',
    placeholder: 'Upload cover',
  },
]