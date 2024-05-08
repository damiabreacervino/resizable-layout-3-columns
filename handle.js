const sections = document.querySelectorAll('section')

let left = 33.3;
let center = 33.3;
let right = 33.3;
sections.forEach((section) => {
  const handleFirst = section.querySelector('a.handleFirst');
  const handleSecond = section.querySelector('a.handleSecond');
  const content = section.querySelector('div.content');

  handleFirst.addEventListener('click', (event) => {
    event.preventDefault()
  })

  handleFirst.addEventListener('mousedown', (event) => {
    event.preventDefault()

    const drag = (event) => {
      event.preventDefault();

      left = Math.min(80, Math.max(10, ((event.pageX / window.innerWidth) * 100)));
      left = left > 100 - (right + 10) ? 100 - (right + 10) : left;
      center = (100 - right) - left;

      content.style.gridTemplateColumns = `minmax(20px, ${left}%) minmax(20px, ${center}%) minmax(20px, ${right}%)`
      handleFirst.style.left = `max(20px, ${left}%)`
    }

    const mouseup = (event) => {
      event.preventDefault()

      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', mouseup)
  })

  handleSecond.addEventListener('click', (event) => {
    event.preventDefault()
  })

  handleSecond.addEventListener('mousedown', (event) => {
    event.preventDefault()

    const drag = (event) => {
      event.preventDefault();

      right = Math.min(80, Math.max(10, (100 - ((event.pageX / window.innerWidth) * 100))));
      right = right > 100 - (left + 10) ? 100 - (left + 10) : right;
      center = (100 - left) - right;

      content.style.gridTemplateColumns = `minmax(20px, ${left}%) minmax(20px, ${center}%) minmax(20px, ${right}%)`
      handleSecond.style.left = `max(20px, ${left + center}%)`
    }

    const mouseup = (event) => {
      event.preventDefault()

      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', mouseup)
  })
})
