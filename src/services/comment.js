import request from '../utils/request';

export function fetch() {
  return request(`/api/comments`);
}

export function remove(id) {
  return request(`/api/users?id=${id}`);
}

export function create(values) {
  console.log(values)
  return request(`/api/comments/create`,{
    method:'POST',
    body:JSON.stringify(values)
  });
}


