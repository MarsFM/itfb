export class Server {
  constructor() {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/photos'; // ?_limit=20
  }

  getAlbums(value) {
    return fetch(this.baseUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return new Promise(resolve => {
          const shortData = data.filter(entry => {
            return entry.id <= value;
          });
          resolve(shortData);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
