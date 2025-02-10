// Import the data to customize and insert them into page
// const fetchData = () => {
//   fetch("customize.json")
//     .then(data => data.json())
//     .then(data => {
//       dataArr = Object.keys(data);
//       dataArr.map(customData => {
//         if (data[customData] !== "") {
//           if (customData === "imagePath") {
//             document
//               .querySelector(`[data-node-name*="${customData}"]`)
//               .setAttribute("src", data[customData]);
//           } else {
//             document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
//           }
//         }

//         // Check if the iteration is over
//         // Run amimation if so
//         if ( dataArr.length === dataArr.indexOf(customData) + 1 ) {
//           animationTimeline();
//         } 
//       });
//     });
// };
//new
// const fetchData = () => {
//   fetch("customize.json")
//     .then(data => data.json())
//     .then(data => {
//       const dataArr = Object.keys(data);
//       dataArr.map(customData => {
//         const element = document.querySelector(`[data-node-name*="${customData}"]`);
//         if (element && data[customData] !== "") { // Ensure element exists
//           if (customData === "imagePath") {
//             element.setAttribute("src", data[customData]);
//           } else if (customData === "nextButtonLabel") {
//             element.innerText = data[customData]; // Set Next Slide text
//             element.addEventListener('click', () => {
//               window.location.href = 'index2.html'; // Replace with your target HTML file
//             });
//           } else {
//             element.innerText = data[customData];
//           }
//         }

//         // Check if the iteration is over and run animation if so
//         if (dataArr.length === dataArr.indexOf(customData) + 1) {
//           animationTimeline();
//         }
//       });
//     });
// };

//nextnew
// const fetchData = () => {
//   fetch("customize.json")
//     .then(data => data.json())
//     .then(data => {
//       const dataArr = Object.keys(data);
//       dataArr.map(customData => {
//         const element = document.querySelector(`[data-node-name*="${customData}"]`);
        
//         if (element && data[customData] !== "") {
//           if (customData === "imagePath") {
//             element.setAttribute("src", data[customData]);
//           } else if (customData === "nextButtonLabel") {
//             element.innerText = data[customData]; // Set Next Slide text
//             // Ensure that the button has the correct click functionality
//             const nextButton = document.getElementById('next-button');
//             if (nextButton) {
//               nextButton.addEventListener('click', () => {
//                 window.location.href = 'index2.html'; // Replace with your target HTML file
//               });
//             }
//           } else {
//             element.innerText = data[customData];
//           }
//         }

//         // Check if the iteration is over and run animation if so
//         if (dataArr.length === dataArr.indexOf(customData) + 1) {
//           animationTimeline();
//         }
//       });
//     })
//     .catch(error => {
//       console.error('Error loading JSON:', error);
//     });
// };
//ultranew
// const fetchData = () => {
//   fetch("customize.json")
//     .then(response => response.json()) // Fetch and parse the JSON
//     .then(data => {
//       // Log the nextButtonLabel to ensure data is available
//       console.log('Next button label:', data.nextButtonLabel);

//       const dataArr = Object.keys(data);

//       dataArr.map(customData => {
//         const element = document.querySelector(`[data-node-name*="${customData}"]`);

//         if (element && data[customData] !== "") {
//           if (customData === "imagePath") {
//             element.setAttribute("src", data[customData]);
//           }
//            else if (customData === "nextButtonLabel") {
//             element.innerText = data[customData]; // Set Next Slide text
//             const nextButton = document.getElementById('next-button');
//             if (nextButton) {
//               nextButton.addEventListener('click', () => {
//                 window.location.href = 'index2.html'; // Replace with your target HTML file
//               });
//             }
//           } else {
//             element.innerText = data[customData];
//           }
//         }

//         // Check if the iteration is over and run animation if so
//         if (dataArr.length === dataArr.indexOf(customData) + 1) {
//           animationTimeline();
//         }
//       });
//     })
//     .catch(error => {
//       console.error('Error loading JSON:', error);
//     });
// };
// const fetchData = () => {
//   fetch("customize.json")
//     .then(response => response.json())
//     .then(data => {
//       // Ensure the JSON is properly fetched
//       console.log('Data from JSON:', data);

//       const dataArr = Object.keys(data);

//       dataArr.map(customData => {
//         const element = document.querySelector(`[data-node-name*="${customData}"]`);

//         if (element && data[customData] !== "") {
//           if (customData === "imagePath") {
//             element.setAttribute("src", data[customData]);
//           }
          
//           else if (customData === "nextButtonLabel") {
//             // Set Next Button label from JSON
//             const nextButton = document.querySelector('.modern-button'); // Ensure this selector is correct
//             if (nextButton) {
//               nextButton.innerText = data[customData]; // Set the button's label
//               nextButton.addEventListener('click', () => {
//                 window.location.href = 'index2.html'; // Navigate to the next page
//               });
//             }
//           } else {
//             element.innerText = data[customData];
//           }
//         }

//         // Run animation once the loop is completed
//         if (dataArr.length === dataArr.indexOf(customData) + 1) {
//           animationTimeline();
//         }
//       });
//     })
//     .catch(error => {
//       console.error('Error loading JSON:', error);
//     });
// };
//nextonlyappearinlastslide
// const fetchData = () => {
//   fetch("customize.json")
//     .then(response => response.json())
//     .then(data => {
//       const dataArr = Object.keys(data);

//       dataArr.map(customData => {
//         const element = document.querySelector(`[data-node-name*="${customData}"]`);

//         if (element && data[customData] !== "") {
//           if (customData === "imagePath") {
//             element.setAttribute("src", data[customData]);
//           } else if (customData === "nextButtonLabel") {
//             // Set Next Button label from JSON
//             const nextButton = document.querySelector('.modern-button'); 
//             if (nextButton) {
//               nextButton.innerText = data[customData]; // Set the button's label
//               nextButton.addEventListener('click', () => {
//                 window.location.href = 'index2.html'; // Navigate to the next page
//               });
//             }
//           } else {
//             element.innerText = data[customData];
//           }
//         }

//         // When the last slide is reached, show the next button
//         if (dataArr.length === dataArr.indexOf(customData) + 1) {
//           animationTimeline();

//           // Show the Next Button on the last slide
//           const nextButton = document.querySelector('.next-button-container');
//           if (nextButton) {
//             nextButton.style.display = "none"; // Show the button
//           }
//         }
//       });
//     })
//     .catch(error => {
//       console.error('Error loading JSON:', error);
//     });
// };
//button hidden initially
document.addEventListener("click", function () {
  let bgMusic = document.getElementById("bg-music");
  if (bgMusic.paused) {
      bgMusic.play().catch(error => console.log("Autoplay prevented:", error));
  }
});
const fetchData = () => {
  
    //niche se normal
  fetch("customize.json")
    .then(response => response.json())
    .then(data => {
      const dataArr = Object.keys(data);

      dataArr.map(customData => {
        const element = document.querySelector(`[data-node-name*="${customData}"]`);

        if (element && data[customData] !== "") {
          if (customData === "imagePath") {
            element.setAttribute("src", data[customData]);
          } else if (customData === "nextButtonLabel") {
            // Set Next Button label from JSON
            const nextButton = document.querySelector('.modern-button'); 
            if (nextButton) {
              nextButton.innerText = data[customData]; // Set the button's label
              nextButton.addEventListener('click', () => {
                window.location.href = 'index2.html'; // Navigate to the next page
              });
            }
          } else {
            element.innerText = data[customData];
          }
        }

        // When the last slide is reached, show the next button
        if (dataArr.length === dataArr.indexOf(customData) + 1) {
          animationTimeline();

          // Ensure the next button is visible only when the last slide is reached
          // const nextButton = document.querySelector('.next-button-container');
          // if (nextButton) {
          //   nextButton.style.display = "none"; // Show the button
          // }
        }
      });
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });
};


// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  //skip
  const urlParams = new URLSearchParams(window.location.search);
  const skipStartSlides = urlParams.get('skipStartSlides') === 'true';
  console.log("Inside animationTimeline, Skip Start Slides: " + skipStartSlides);
  //niche se normal h workng

  const tl = new TimelineMax();
  //again part of skip
  if (skipStartSlides) {
    console.log("Skipping to the Lydia DP part of the animation");
    tl.addLabel("lydia-dp"); // Add label for Lydia DP part
    tl.seek("lydia-dp"); // Jump directly to the Lydia DP part
    return; // Skip the initial part of the timeline
  }
  //skip end

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 .smiley",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .addLabel("lydia-dp")//here
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
  //was here
    
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
   //was here
   .to(".six", 0.5, {
    // opacity: 0,
    // y: 30,
    // zIndex: "-1"
    opacity: 1,      // Ensure the element is fully visible
    y: 0,            // Keep it in its original position (or adjust to where you want)
    zIndex: "1"      // Ensure it's above other elements (you can choose a suitable z-index)
  },)
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90
      },
      "+=1"
    );
    
    tl.add(function() {
      launchConfetti(); // Start the confetti effect
      // Start looping the confetti effect every 3 seconds
      setInterval(() => {
        launchConfetti();
      }, 3000);
    })
    .to(
      ".next-button-container", 
      0.5, 
      {
        opacity: 1,
        visibility: "visible",  // Ensure it's visible
        display: "block",        // If hidden by display:none initially
      },
      "+=0.5" // Delay for a smooth transition
    )
    // Add the confetti after the animation of the "Next" button
    // .call(() => {
    //   //launchConfetti();
    //   setInterval(() => {
    //     launchConfetti();
    //       Launch confetti every 4 seconds
    //   }, 3000);
    // });
    //adding next button before
    

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  // const replyBtn = document.getElementById("replay");
  // replyBtn.addEventListener("click", () => {
  //   tl.restart();
  // });
//before
  
};
  //new added
  // document.getElementById('next-button').addEventListener('click', () => {
  //   window.location.href = 'index2.html'; // Replace with your target HTML file
  // });
  // function launchConfetti() {
  //   confetti({
  //     particleCount: 200,  // Number of confetti pieces
  //     angle: 45,           // Angle at which confetti will be spread
  //     spread: 120,          // Spread of the confetti
  //     origin: { x: 0, y: 0 }, // Where the confetti will come from (bottom-left)
  //     colors: ['#ff0', '#ff6347', '#ff69b4', '#00f', '#7f7f7f'] // Confetti colors
  //   });
  
  //   confetti({
  //     particleCount: 200,
  //     angle: 135,          // Angle at which confetti will be spread
  //     spread: 120,          // Spread of the confetti
  //     origin: { x: 1, y: 0 }, // Where the confetti will come from (bottom-right)
  //     colors: ['#ff0', '#ff6347', '#ff69b4', '#00f', '#7f7f7f'] // Confetti colors
  //   });
  // }
//newconfetti
// function launchConfetti() {
//   // Top-left to bottom-left diagonal
//   confetti({
//     particleCount: 350,   // More confetti pieces for a bigger effect
//     angle: 45,            // Diagonal angle towards bottom-left
//     spread: 150,          // Increased spread for a wider reach
//     origin: { x: 0, y: 0 }, // Origin from the top-left
//     colors: ['#ff0', '#ff6347', '#ff69b4', '#00f', '#7f7f7f'], // Confetti colors
//     gravity: 0.5,         // Slow down the fall, so it stays in the air longer
//     decay: 0.9,           // Gradually slow down the confetti
//     duration: 4,          // Longer duration for the effect (4 seconds)
//     drift: 0.1,           // Slight horizontal movement
//   });

//   // Top-right to bottom-right diagonal
//   confetti({
//     particleCount: 350,  // More confetti pieces for a bigger effect
//     angle: 135,          // Diagonal angle towards bottom-right
//     spread: 150,         // Increased spread for a wider reach
//     origin: { x: 1, y: 0 }, // Origin from the top-right
//     colors: ['#ff0', '#ff6347', '#ff69b4', '#00f', '#7f7f7f'], // Confetti colors
//     gravity: 0.5,        // Slow down the fall, so it stays in the air longer
//     decay: 0.9,          // Gradually slow down the confetti
//     duration: 4,         // Longer duration for the effect (4 seconds)
//     drift: -0.1,         // Slight horizontal movement
//   });
// }
function launchConfetti() {
  // Top-left to bottom-left diagonal
  confetti({
    particleCount: 350,    // More confetti pieces for a bigger effect
    angle: 55,             // Diagonal angle towards bottom-left
    spread: 180,           // Increased spread for a wider reach (was 150)
    origin: { x: 0, y: 0 }, // Origin from the top-left
    colors: ['#ff0', '#ff6347', '#ff69b4', '#00f', '#7f7f7f'], // Confetti colors
    gravity: 0.4,          // Reduced gravity for slower fall (was 0.5)
    decay: 0.9,            // Gradually slow down the confetti
    duration: 4,           // Longer duration for the effect
    drift: 0.2,            // Slight horizontal movement to the right (was 0.1)
    delay: 0.5,
  });

  // Top-right to bottom-right diagonal
  confetti({
    particleCount: 350,    // More confetti pieces for a bigger effect
    angle: 125,            // Diagonal angle towards bottom-right
    spread: 180,           // Increased spread for a wider reach (was 150)
    origin: { x: 1, y: 0 }, // Origin from the top-right
    colors: ['#ff0', '#ff6347', '#ff69b4', '#00f', '#7f7f7f'], // Confetti colors
    gravity: 0.4,          // Reduced gravity for slower fall (was 0.5)
    decay: 0.9,            // Gradually slow down the confetti
    duration: 4,           // Longer duration for the effect
    drift: -0.2,           // Slight horizontal movement to the left (was -0.1)
    delay: 0.5,
  });
}

  
// Run fetch and animation in sequence
fetchData();



