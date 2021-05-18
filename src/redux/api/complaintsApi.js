import api from './configApi'

export const complaintsApi = async () => {
    const request = await api.get('/getStories')
    return request
}