module.exports = {
  apps : [{
    name: "worker",
    script: "./app/server.js",
    watch: true,
    ignore_watch: ['./uploads']
  }]
}