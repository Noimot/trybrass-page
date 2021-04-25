import api from './configApi'

export const loginApi = async (data) => {
    const request = await api.post('/login', data)
    return request;
}