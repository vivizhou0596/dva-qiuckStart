import request from '../utils/request';

export function fetch() {
  return request(`/api/comments`);
}

export function create(values) {
  return request(`/api/comments/create`,{
    method:'POST',
    body:JSON.stringify(values)
  });
}

export function remove(values) {
  return request(`/api/comments/remove`,{
    method:'POST',
    body:JSON.stringify(values)
  });
}
