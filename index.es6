import {curry2} from 'fj-curry';

let find = (fn, list) => {
  let index = -1,
  listLen = list.length;
  
  while (++index < listLen) {
    if (fn(list[index])) {
      return list[index];
    }
  }
}

export default curry2(find);
