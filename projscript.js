
    //hover cursor code
    const cursorTag = document.querySelector("div.cursors") //get cursor info
    const ball = cursorTag.querySelector("div") //blue circle on cursor
    const ballMessage = cursorTag.querySelector("div span") //message for hovering over an img
    const images = document.querySelectorAll("img[data-hover]") //message for hovering over an img

    document.addEventListener("mousemove", function (event){ //have blue circle positioned where the cursor is
      ball.style.left = event.pageX + "px"
      ball.style.top = event.pageY + "px"
    })

    images.forEach(image => { //make img message visible when hovering over that img
      image.addEventListener("mouseover", function () {
      ballMessage.classList.add("visible")
      ballMessage.innerHTML = image.getAttribute("data-hover")
  })
  
    image.addEventListener("mouseout", function () {
      ballMessage.classList.remove("visible")
  })
  })

  const panes = document.querySelectorAll('.pane')

let z = 1

panes.forEach((pane) => {
  const title = pane.querySelector('.title')
  const corner = pane.querySelector('.corner')

  pane.addEventListener('mousedown', () => {
    z = z + 1
    pane.style.zIndex = z
  })

  title.addEventListener('mousedown', (event) => {
    pane.classList.add('is-dragging')

    let l = pane.offsetLeft
    let t = pane.offsetTop

    let startX = event.pageX
    let startY = event.pageY

    const drag = (event) => {
      event.preventDefault()

      pane.style.left = l + (event.pageX - startX) + 'px'
      pane.style.top = t + (event.pageY - startY) + 'px'
    }

    const mouseup = () => {
      pane.classList.remove('is-dragging')

      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', mouseup)
  })

  corner.addEventListener('mousedown', (event) => {
    let w = pane.clientWidth 
    let h = pane.clientHeight

    let startX = event.pageX
    let startY = event.pageY

    const drag = (event) => {
      event.preventDefault()

      pane.style.width = w + (event.pageX - startX) + 'px'
      pane.style.height = h + (event.pageY - startY) + 'px'
    }

    const mouseup = () => {
      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', mouseup)
  })
})






let f = document.getElementsByClassName('page_wrapper')[0];
let s = document.getElementsByClassName('page_wrapper')[1];

let isFirstScrolling = false;
let isSecondScrolling = false;

f.addEventListener('scroll', (e) => {
  if(!isSecondScrolling) {
    isFirstScrolling = true;
    customDebounce("first");
    s.scrollTop = e.target.scrollTop;
  }
});

s.addEventListener('scroll', (e) => {
  if(!isFirstScrolling) {
    isSecondScrolling = true;
    customDebounce("second");
    f.scrollTop = e.target.scrollTop;
  }
});

let timeOut;

const customDebounce = (tracker) => {
  console.log(timeOut);
  clearTimeout(timeOut);
  console.log("cleared",timeOut);
  timeOut = setTimeout(() => {
    if(tracker === "first")
      isFirstScrolling = !isFirstScrolling;
    else
      isSecondScrolling = !isSecondScrolling;
  }, 700);
}



/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

