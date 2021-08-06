const baseURL = "https://palabras-aleatorias-public-api.herokuapp.com"
let apiCalls = {


    checkForErr (response)  {
        if(response.status >= 500) {
          return "Our servers are currently down. Please try again."
        } else if (!response.ok) {
          return 'Something went wrong. Please try again later.'
        } else {
          return response.json()
        }
      },
    
    fetchAPIData(endpoint) {
        return fetch(`${baseURL}${endpoint}`)
        .then(this.checkForErr)
      }
}


export default apiCalls;
