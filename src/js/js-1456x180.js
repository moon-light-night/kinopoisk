let creative = document.querySelector('.creative')
const cycleDuratrion = 55000
const fadeOutDuration = 2000

cycle()

function cycle() {
  requestAnimationFrame(function () {
    animOn()
    setTimeout(function () {
      requestAnimationFrame(function () {
        animOff()
        setTimeout(cycle, fadeOutDuration)
      })
    }, cycleDuratrion - fadeOutDuration)
  })
}

function animOn() {
  document
    .querySelector('.creative__body-background')
    .classList.add('creative__body-background-animation')

  document
    .querySelector('.creative__body')
    .classList.add('creative__body-animation')
  document
    .querySelector('.creative__logo')
    .classList.add('creative__logo-animation')
  document
    .querySelector('.creative__background-second')
    .classList.add('creative__background-second-animation')
  document
    .querySelector('.creative__content-hbomax-original')
    .classList.add('creative__content-hbomax-original-animation')
  document
    .querySelector('.creative__content-liga')
    .classList.add('creative__content-liga-animation')
  document
    .querySelector('.creative__content-snyder')
    .classList.add('creative__content-snyder-animation')
  document
    .querySelector('.creative__content-podpiska')
    .classList.add('creative__content-podpiska-animation')
  document
    .querySelector('.creative__content-premiera')
    .classList.add('creative__content-premiera-animation')
  document
    .querySelector('.creative__content-smotret-wrap')
    .classList.add('creative__content-smotret-wrap-animation')
  document
    .querySelector('.creative__content-smotret-rectangle')
    .classList.add('creative__content-smotret-rectangle-animation')
  document
    .querySelector('.creative__rating')
    .classList.add('creative__rating-animation')
}

function animOff() {
  document
    .querySelector('.creative__body-background')
    .classList.remove('creative__body-background-animation')

  document
    .querySelector('.creative__body')
    .classList.remove('creative__body-animation')
  document
    .querySelector('.creative__logo')
    .classList.remove('creative__logo-animation')
  document
    .querySelector('.creative__background-second')
    .classList.remove('creative__background-second-animation')
  document
    .querySelector('.creative__content-hbomax-original')
    .classList.remove('creative__content-hbomax-original-animation')
  document
    .querySelector('.creative__content-liga')
    .classList.remove('creative__content-liga-animation')
  document
    .querySelector('.creative__content-snyder')
    .classList.remove('creative__content-snyder-animation')
  document
    .querySelector('.creative__content-podpiska')
    .classList.remove('creative__content-podpiska-animation')
  document
    .querySelector('.creative__content-premiera')
    .classList.remove('creative__content-premiera-animation')
  document
    .querySelector('.creative__content-smotret-wrap')
    .classList.remove('creative__content-smotret-wrap-animation')
  document
    .querySelector('.creative__content-smotret-rectangle')
    .classList.remove('creative__content-smotret-rectangle-animation')
  document
    .querySelector('.creative__rating')
    .classList.remove('creative__rating-animation')
}
