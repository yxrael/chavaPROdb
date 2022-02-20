


export const uniqueId = (prefix) => {
    const  id = + new Date() + '-' + Math.floor(Math.random() * 1000);
    return prefix ? prefix + id : id;
};