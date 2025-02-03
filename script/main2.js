
document.addEventListener("DOMContentLoaded", () => {
   
    const skipButton = document.getElementById("skip-button");
    const skipMessage = document.getElementById("skip-message");
    const nextButton = document.getElementById("next-button");
  
    
    skipButton.addEventListener("click", () => {
      
      skipButton.style.display = "none";
      
      
      skipMessage.style.display = "block";
    });
  });
  

