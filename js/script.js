window.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (windowHeight + scrollTop >= documentHeight) {
      showImage();
    } else {
      hideImage();
    }
  });

  function showImage() {
    var image = document.querySelector('.more img');
    image.style.display = 'block';
  }

  function hideImage() {
    var image = document.querySelector('.more img');
    image.style.display = 'none';
  }

  const searchBtn = document.querySelector('.searchBtn'),
  closeBtn = document.querySelector('.closeBtn'),
  searchBox = document.querySelector('.searchBox'),
  navigation = document.querySelector('.navigation'),
  menuToggle = document.querySelector('.menuToggle'),
  header = document.querySelector('header')

searchBtn.onclick = function () {
  searchBox.classList.add('active')
  searchBtn.classList.add('active')
  closeBtn.classList.add('active')
  menuToggle.classList.add('hide')
  header.classList.remove('open')
};

closeBtn.onclick = function () {
  searchBox.classList.remove('active')
  searchBtn.classList.remove('active')
  closeBtn.classList.remove('active')
  menuToggle.classList.remove('hide')
}

menuToggle.onclick = function () {
  header.classList.toggle('open')
  searchBox.classList.remove('active')
  searchBtn.classList.remove('active')
  closeBtn.classList.remove('active')
}

// project悬浮
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.word li');
  const images = document.querySelectorAll('.word li .image');
  let activeImage = images[0];

  // 默认显示第一张图像
  activeImage.classList.add('active');

  items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      images.forEach((image, i) => {
        if (i === index) {
          image.classList.add('active');
          activeImage = image;
        } else {
          image.classList.remove('active');
        }
      });
    });
  });

  items.forEach((item) => {
    item.addEventListener('mouseleave', () => {
      activeImage.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.navigation li a');

  navItems.forEach(function(item) {
    if (item.classList.contains('active')) {
      item.classList.add('active');
    }
  });
});



