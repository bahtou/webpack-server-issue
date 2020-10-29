const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env, arg) => {
  const { mode } = arg;
  console.log(mode);
  const envConfig = require(`./${mode}`);

  console.log({ envConfig })
  return envConfig;
};
