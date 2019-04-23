const { RESTDataSource } = require('apollo-datasource-rest');
const { encodeIds } = require('@gloojs/apollo-server/id-conversion');

class ExampleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async createPost(title) {
    const post = await this.post('/posts', { title });
    return encodeIds(post, 'Post');
  }

  async getPost(id) {
    const post = await this.get(`/posts/${id}`);
    return encodeIds(post, 'Post');
  }

  async getUser(id) {
    const user = await this.get(`/users/${id}`);
    return encodeIds(user, 'User');
  }
}

module.exports = ExampleAPI;
