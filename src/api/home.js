
import request from "@/utils/request";


// 取得Home Banner
export function getHomeBanners(page = 1) {
  return request({
    url: `/blogs?type=Home&page=${page}`,
    method: "get",
  });
}

// 取得品牌
export function getBrands() {
  return request({
    url: `/brands`,
    method: "get"
  });
}




// 取得文章資料 (不需要權限)
export function getBlogs(page = 1) {
  return request({
    url: `/blogs?type=Blog&page=${page}`,
    method: "get",
  });
}