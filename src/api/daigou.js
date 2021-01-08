import request from "@/utils/request";

//＝＝＝User＝＝＝

// 取得代購參數
export function getDaigouparams() {
  return request({
    url: `/user/daigouorder/params`,
    method: "get"
  });
}
// 取得所有代購單
export function getAllDaigouorders() {
  return request({
    url: `/user/daigouorder`,
    method: "get"
  });
}
// 新增代購單資料
export function newDaigouorder(){
  return request({
    url: `/user/daigouorder`,
    method: "post",
    data: {}
  });
}
// 刪除代購單資料
export function deleteDaigouorder(dgid) {
  return request({
    url: `/user/daigouorder/${dgid}`,
    method: "delete",
    data: {
      // id: data.id
    }
  });
}

// 取得代購單-Item
export function getDaigouItems(dgid) {
  return request({
    url: `/user/daigouorder/${dgid}`,
    method: "get"
  });
}
// 新增代購單Item
export function setDaigouitem(dgid, data){
  return request({
    url: `/user/daigouorder/${dgid}`,
    method: "post",
    data: data
  });
}

// 更新代購單Item
export function updateDaigouitem(data){
  let newdata = {}
  if(data.count){newdata['count'] = data.count}
  if(data.dgtypeId){newdata['dgtypeId'] = data.dgtypeId}
  if(data.dgurl){newdata['dgurl'] = data.dgurl}
  if(data.note){newdata['note'] = data.note}
  if(data.price){newdata['price'] = data.price}
  return request({
    url: `/user/daigouorder/item/${data.id}`,
    method: "put",
    data: newdata
  });
}

// 刪除代購單Item
export function deleteDaigouitem(itemId) {
  return request({
    url: `/user/daigouorder/item/${itemId}`,
    method: "delete",
    data: {
      // id: data.id
    }
  });
}