module.exports = {
  modules: [{
    name: '正式环境',
    env: 'build',
    ssh: {
      host: '188.131.143.196',
      username: 'root',
      password: 'Aini1314',
    },
    buildCommand: 'build',
    localPath: 'out',
    remotePath: '/usr/local/webserver/www'
  }]
}
// fjpublish env -s  带时间戳的缓存文件

// fjpublish env -s --nobackup  不要缓存文件
