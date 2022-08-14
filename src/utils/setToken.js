// 封装设置token
export function setToken(tokenKey,token){
    return localStorage.setItem(tokenKey, token);
} 
// 封装获取token
export function getToken(tokenKey){
    return localStorage.getItem(tokenKey);
}
// 封装移除token
export function removeToken(tokenKey){
    return localStorage.removeItem(tokenKey);
}