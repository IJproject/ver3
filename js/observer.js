// 要素の取得
const HomeTitle = document.getElementById('home-title');

// IntersectionObserverの構築 
let setItemActive = (entry) => {
  if(entry.Intersecting){

  }
}

let options = {
  threshold: 0.3
}

let observer = new IntersectionObserver(setItemActive, options);

observer.observe(HomeTitle);

