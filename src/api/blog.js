
import request from "@/utils/request";


// 取得文章資料 (不需要權限)
export function getBlog(id) {
  return request({
    url: `/blogs/${id}`,
    method: "get",
  });
}


// 取得文章資料 (不需要權限)
export function getBlog_pages(type ="",page = 1) {
  return request({
    url: `/blogs?type=${type}&page=${page}`,
    method: "get",
  });
}


//＝＝＝管理員＝＝＝
// 取得文章資料 
export function getAllBlog(type ="",page=1) {
  return request({
    url: `/admin/blogs?type=${type}&page=${page}`,
    method: "get",
  });
}




// 上傳文章資料
export function newBlog(data) {
  return request({
    url: `/admin/blogs`,
    method: "post",
    data: data
  });
}

// 更新文章資料
export function updateBlog(data) {
  console.log(data);
  return request({
    url: `admin/blogs/${data.id}`,
    method: "post",
    data: data
  });
}

// 更新文章資料
export function updateBlogImg(id,data) {
  console.log(data);
  return request({
    url: `admin/blogs/${id}`,
    method: "post",
    data: data
  });
}

// 刪除文章資料
export function deleteBlog(id) {
  return request({
    url: `/admin/blogs/${id}`,
    method: "delete",
    data: {}
  });
}