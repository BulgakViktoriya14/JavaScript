const mapOnRole = {
  'admin': '/WorkSpace/Admin',
  'helper': '/WorkSpace/users/@',
  'user': '/WorkSpace/users/@'
};
module.exports = (router) => {
  const login = localStorage.getItem('login');
  const role = localStorage.getItem('role');
  router.push({
    path: mapOnRole[role].replace('@', login)
  });
}
