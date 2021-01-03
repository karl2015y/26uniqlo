import request from "@/utils/request";

//＝＝＝User＝＝＝


// 取得品牌
export function getBrand() {
  return request({
    url: `/brands`,
    method: "get"
  });
}


//＝＝＝管理員＝＝＝

// 上傳品牌資料
export function newBrand(data) {
  return request({
    url: `/brands`,
    method: "post",
    data: {
      name: data.name,
      description: data.description,
    }
  });
}

// 上傳品牌資料
export function uploadIMG(id, data) {
  return request({
    url: `/brands/pic/${id}`,
    method: "post",
    headers: {
      "Content-type": "multipart/form-data"
    },
    data: data
  });
}


// 更新品牌資料
export function updateBrand(data) {
  return request({
    url: `brands/${data.id}`,
    method: "put",
    data: {
      name: data.name,
      description: data.description,
    }
  });
}

// 刪除品牌資料
export function deleteBrand(data) {
  return request({
    url: `/brands/${data.id}`,
    method: "delete",
    data: {
      // id: data.id
    }
  });
}