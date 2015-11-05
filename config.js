module.exports = {
    port: int(process.env.PORT) || 5000
}


function int(str) {
  if (!str) return 0;
  return parseInt(str, 10);
}
