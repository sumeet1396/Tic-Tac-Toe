const getUser = () => {
    return window.localStorage.getItem('user')
}

const setUser = (user: string): void => {
    return window.localStorage.setItem('user',user)
}

const generateUniqueId = () => {
  const now = new Date();
  const timestamp =
    now.getFullYear().toString() +
    (now.getMonth() + 1).toString().padStart(2, "0") +
    now.getDate().toString().padStart(2, "0") +
    "_" +
    now.getHours().toString().padStart(2, "0") +
    now.getMinutes().toString().padStart(2, "0") +
    now.getSeconds().toString().padStart(2, "0");

  const random = Math.random().toString(36).substring(2, 8);

  return `${timestamp}_${random}`;
}

export {getUser, setUser, generateUniqueId}