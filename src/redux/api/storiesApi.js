import  api from './configApi'

export  const stories = () => {
    const request = api.get('/getStories')
    return request
}