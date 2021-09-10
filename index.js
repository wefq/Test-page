const slider = document.querySelector('.slider')
const slides = Array.from(slider.children)

const btnsMap = document.querySelector('.map')
const btns = Array.from(btnsMap.children)

const slideWidth = slides[0].getBoundingClientRect().width

const setSlidePostition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePostition)

btnsMap.addEventListener('click', e=>{
  const targetBtn = e.target.closest('button');

  if (!targetBtn) return

  const currentSlide = slider.querySelector('.current-slide')
  const currentBtn = btnsMap.querySelector('.btn_active')

  const targetIndex = btns.findIndex(btn => btn === targetBtn)
  const targetSlide = slides[targetIndex]

  slider.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide')

  currentBtn.classList.remove('btn_active')
  targetBtn.classList.add('btn_active')
})