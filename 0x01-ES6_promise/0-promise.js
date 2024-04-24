/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = true;
      resolve(data);
    }, 1000);
  });
}
