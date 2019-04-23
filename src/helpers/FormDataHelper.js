export const FormDataHelper = (params) => {
  const form = new FormData();
  form.append('token', localStorage.getItem('token'));
  for (let key in params) {
    form.append(key, params[key]);
  }
  const requestInfo = { method: 'POST', body: form };
  return requestInfo;
}
// ip localhost..
export const urlAPI = 'http://172.16.2.75/api';
