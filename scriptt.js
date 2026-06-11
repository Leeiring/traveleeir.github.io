//panes functions
const panes = document.querySelectorAll('.pane') 
let z = 1

panes.forEach((pane) => { //
  const title = pane.querySelector('.title') //blue title section
  const corner = pane.querySelector('.corner') //bottom right corner

  pane.addEventListener('mousedown', () => { // move laast clicked pane to the front
    z = z + 1
    pane.style.zIndex = z
  })

  pane.addEventListener('touchstart', () => { // move last tapped pane to the front
    z = z + 1
    pane.style.zIndex = z
  })

 

  title.addEventListener('mousedown', (event) => { //dragging event desktop
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


  title.addEventListener('touchstart', (event) => { //dragging event mobile
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

    const touchend = () => {
      pane.classList.remove('is-dragging')

      document.removeEventListener('touchmove', drag)
      document.removeEventListener('touchend', touchend)
    }

    document.addEventListener('touchmove', drag)
    document.addEventListener('touchend', touchend)
  })





  //extending and shinking pane
  corner.addEventListener('mousedown', (event) => { //drag = edit pane on mouse down end event on mouse up 
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


  //extending and shinking pane mobile
  corner.addEventListener('touchstart', (event) => { //drag = edit pane on mouse down end event on mouse up 
    let w = pane.clientWidth 
    let h = pane.clientHeight

    let startX = event.pageX
    let startY = event.pageY

    const drag = (event) => {
      event.preventDefault()

      pane.style.width = w + (event.pageX - startX) + 'px'
      pane.style.height = h + (event.pageY - startY) + 'px'
    }

    const touchend = () => {
      document.removeEventListener('touchmove', drag)
      document.removeEventListener('touchend', touchend)
    }

    document.addEventListener('touchmove', drag)
    document.addEventListener('touchend', touchend)
  })

})




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




