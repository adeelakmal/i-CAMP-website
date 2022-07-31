export class API{
  static create(){
    fetch(`http://127.0.0.1:8000/api/movies/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Token b50f45d0c4e01d9a4ef2991bf1cdf85cf025f852"
      },
   body: JSON.stringify({
     // your expected POST request payload goes here
        title: "Dont look up",
        description: "comedy"
      })
})
  .then(resp => resp.json())
  // .then(resp => console.log(resp)
    // {
    //   // enter you logic when the fetch is successful
    //   setContactData({
    //     'name': '',
    //     'email': '',
    //     'phone': '',
    //     'describe': '',
    //     'status': 'success',
    //   }
    //   ).catch(error=>console.log(error))
  }
}