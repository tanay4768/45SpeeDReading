window.onload = function() {
  const elements = document.querySelectorAll(".container");
  for (const element of elements) {
    element.classList.add("visible");
    element.style.transform = "translateY(-16vh)";
    element.style.paddingTop= "0vh";

  }
};

function roty(element) {
  let images = element.querySelectorAll('img');
    images.forEach(image => {
      image.style.transform = "rotateY(180deg)";
    });
  
}
function reroty(x){
  let y = x.querySelectorAll('img');
  y.forEach(image => {
    image.style.transform = "rotateY(360deg)";
  });
  }

  let isDarkMode = false;
  const darkModeClass = 'dark-mode';
  
  function ChangeMode() {
    const body = document.body;
    const elements = document.querySelectorAll('.content, h2, p, .linked, h1');
  
    isDarkMode = !isDarkMode;
  
    if (isDarkMode) {
      body.classList.add(darkModeClass);
      elements.forEach(element => element.classList.add(darkModeClass));
      document.querySelectorAll('button').forEach(button => button.classList.toggle('buttondark'));
      document.getElementById('linked').classList.add('white-transition');
    } else {
      body.classList.remove(darkModeClass);
      elements.forEach(element => element.classList.remove(darkModeClass));
      document.querySelectorAll('button').forEach(button => button.classList.toggle('buttondark'));
    }
  }
  

