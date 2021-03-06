import request from '@/utils/request'

export function getUsers(data) {
  return request({
    url: '/api/user/authority/getUsers',
    method: 'get',
    data
  })
}

export function getRoles() {
  return request({
    url: '/api/user/authority/getRoles',
    method: 'get'
  })
}

export function getRolesByUserId(params) {
  return request({
    url: '/api/user/authority/getRolesByUserId',
    method: 'get',
    params
  })
}

export function updateUserRole(params) {
  return request({
    url: '/api/user/authority/updateUserRole',
    method: 'post',
    data: params
  })
}

export function getBackendPermissions() {
  return request({
    url: '/api/user/authority/getBackendPermissions',
    method: 'get'
  })
}

export function getBackendPermissionsByRoleId(params) {
  return request({
    url: '/api/user/authority/getBackendPermissionsByRoleId',
    method: 'get',
    params
  })
}

export function updateRoleBackendPermission(params) {
  return request({
    url: '/api/user/authority/updateRoleBackendPermission',
    method: 'post',
    data: params
  })
}

export function getUserFrontendPermissions(params) {
  return request({
    url: '/api/user/authority/getUserFrontendPermissions',
    method: 'get',
    params
  })
}

export function getFrontendPermissions() {
  return request({
    url: '/api/user/authority/getFrontendPermissions',
    method: 'get'
  })
}

export function getFrontendPermissionsByRoleId(params) {
  return request({
    url: '/api/user/authority/getFrontendPermissionsByRoleId',
    method: 'get',
    params
  })
}

export function updateRoleFrontendPermission(params) {
  return request({
    url: '/api/user/authority/updateRoleFrontendPermission',
    method: 'post',
    data: params
  })
}
