import request from "@/utils/request";

//＝＝＝User＝＝＝


// 取得代購參數
export function getDaigouparameter() {
  return request({
    url: `/admin/daigouparameter`,
    method: "get"
  });
}


// 上傳代購參數資料
export function newDaigouparameter(data) {
  return request({
    url: `/admin/daigouparameter`,
    method: "post",
    data: {
      name: data.name,
      price: data.price,
      unit: data.unit,
    }
  });
}


// 更新代購參數資料
export function updateDaigouparameter(data) {
  return request({
    url: `/admin/daigouparameter/${data.id}`,
    method: "put",
    data: {
      name: data.name,
      price: data.price,
      unit: data.unit,
    }
  });
}

// 刪除代購參數資料
export function deleteDaigouparameter(data) {
  return request({
    url: `/admin/daigouparameter/${data.id}`,
    method: "delete",
  });
}