/**
 * 从Cookie重获取值
 * @param name
 * @returns
 */
export const getCookie = (name: string) => {
  const cookies = document.cookie
  const list = cookies.split('; ') // 解析出名/值对列表

  for (let i = 0; i < list.length; i++) {
    // console.log(list[i])

    const arr = list[i].split('=') // 解析出名和值
    if (arr[0] == name) return decodeURIComponent(arr[1]) // 对cookie值解码
  }
  return false
}
