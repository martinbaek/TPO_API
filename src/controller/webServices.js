const urlApi = "http://localhost:4000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    uploadFileImg: urlApi + "utils/uploadImg",
    guardarImgUser: urlApi + "api/users/guardarImgUser",
    getImgUser: urlApi + "api/users/imgUserByMail",
    uploadFileImg: urlApi + "api/users/uploadImg",
    registration:urlApi +"api/users/registration",
    agregarNino:urlApi +"api/users/agregarNino",
    getUser: urlApi + "api/users/",
    getUserByMail: urlApi + "api/users/userByMail",
    getPerfil: urlApi + "api/users/getPerfil",
    getNinos: urlApi + "api/users/getNino"
}

export default urlWebServices;