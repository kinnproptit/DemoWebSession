import axios from 'axios'

export default class BaseService<T> {
  protected baseURL = 'http://db.eachclass.net:8000/'

  constructor() {}

  getAll(): Promise<T[]> {
    return axios
      .get(this.baseURL)
      .then(res => {
        return res.data
      })
      .catch(err => console.log(err))
  }

  getById(id: String): Promise<T> {
    return axios
      .get(this.baseURL + `/${id}`)
      .then(res => {
        return res.data
      })
      .catch(err => console.log(err))
  }
}
