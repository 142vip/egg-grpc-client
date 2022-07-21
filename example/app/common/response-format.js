/**
 * 接口返回格式，统一封装
 * @param result
 * @param message
 * @param code
 * @return {{result: boolean, code: number, message: string}}
 */
exports.returnFormat = (result = false, message = '请求成功', code = 200) => {
  return { result, message, code };
};
