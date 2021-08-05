import axios from 'axios'

export class Request {
  constructor(endpoint){
    this.api = `http://localhost:3000/${endpoint}`;
  }

  get = async ({ params = '' }) => {
    try{
      const url = params ? `${this.api}?${params}` : this.api
      const request =  await axios.get(url)
      const response = await request.data
      return response
    }catch(error){
      throw new Error(error)
    }
  }

  post = async ({ data = {} }) => {
    try{
      return await axios.post(this.api, data)
    }catch(error){
      throw new Error(error)
    }
  }

}