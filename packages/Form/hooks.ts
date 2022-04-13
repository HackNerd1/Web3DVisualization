/**
 * @author Hansel
 * @email hsh01365238@gongdao.com
 * @create 2022-04-13 16:51:32
 * @modify 2022-04-13 17:00:44
 * @desc 
 */
import { IRules } from "./index.d";

export const isRequired = (rules?: IRules[]) => {
  if (!rules) return
  return Boolean(rules.find((value) => {
    return value.required
  }))
}