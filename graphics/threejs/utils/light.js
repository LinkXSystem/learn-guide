const buildDirectionalLight = function(color, intensity, postion) {
  const light = new THREE.DirectionalLight(color, intensity);
  light.postion.set(...postion);

  return light;
};

module.exports = {
  buildDirectionalLight
};
