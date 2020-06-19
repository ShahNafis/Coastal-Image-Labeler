const endpoints = {
    findUser:`/api/v1/users/findUser`,
    createUser:'/api/v1/users/createUser',
    findArchive:'/api/v1/archives/FindArchive',
    getCatalogById(id) {
        return `/api/v1/catalogs?_id=${id}`
    },
    getCatalogByName(name) {
        return `/api/v1/catalogs?name=${name}`
    },
    getCatalogsOfUser(id){
        return `/api/v1/catalogs/user/${id}`
    },
    skipImage(archive){
        return `/api/v1/images/skipImage/${archive}`
    },
    allowedPages(id){
        return `/api/v1/users/allowedPages/${id}`
    },
    getImage(archive){
        return `/api/v1/users/getImage/${archive}`
    },
    getUser: `/api/v1/users/findUser`,
    tagImage:`/api/v1/images/tagImage`,
    showImage(name,compress){
        return compress?`/api/v1/images/showCompressed/${name}`: `/api/v1/images/show/${name}`
    },
    getUserResumeInfo:`/api/v1/catalogs/getUserResumeInfo`,
    getPickCatalogInfo:'/api/v1/catalogs/pickCatalogInfo',
    getCatalogQuestionSet:'/api/v1/questionset/getCatalogQuestionSet'
    
}

export default endpoints;