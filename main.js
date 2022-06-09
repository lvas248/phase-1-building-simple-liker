// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

  document.querySelector('#modal').className = "hidden"


document.querySelector('.like-glyph').addEventListener('click',(e)=>{
  if(e.target.className === "activated-heart"){
    e.target.textContent = EMPTY_HEART 
    e.target.className = "like-glyph"
   
  }
  else{
    mimicServerCall()
    .then(()=>{
      console.log("success")
      e.target.className = "activated-heart"
      e.target.textContent = FULL_HEART
    })
    .catch((error)=>{
      console.log(error)
      document.querySelector("#modal-message").textContent = e
      errorBanner.className = ""
      setTimeout(()=>{errorBanner.className = "hidden"}, 3000)
    })
}})

let errorBanner = document.querySelector('#modal')

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
