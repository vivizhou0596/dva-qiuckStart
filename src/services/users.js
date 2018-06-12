import request from '../utils/request';

export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=5`);
}

export function remove(id) {
  return request(`/api/users/remove`,{
    method:'POST',
    body:JSON.stringify(id)
  });
}

export function patch(id,values) {
  return request(`/api/users/patch`,{
    method:'POST',
    body:JSON.stringify({id,values})
  });
}

export function create(values) {
  return request(`/api/users/create`,{
    method:'POST',
    body:JSON.stringify(values)
  });
}


