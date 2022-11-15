const slide_w = document.querySelector('.slide-wrapper')
const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li');
const l_btn = document.querySelector('.prev');
const r_btn = document.querySelector('.next');

const img_n = slide_img.length;   //목록개수
console.log(img_n);
const img_w = 1900;
const m = 0;   //마진값
const s_con = 1;    //보여줄 개수

let count = 1;

//감싸는 부모요소의 너비를 구하기
slide.style.width = (img_w+m)*img_n - m + 'px';
//1620=(300+30)*5-30px

//함수작성
function mslide(n){
  slide.style.left = -(img_w+m)*n + 'px';  //-330 -660
  count = n;
  console.log(slide.style.left);
  console.log(count);
}

//3초마다 mslide를 호출하여 자동으로 움직이게 함.
var Timer = setInterval(function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
},5000);

//이전버튼 클릭시 해당 방향으로 움직이게
l_btn.addEventListener('click', function(){
  if(count > 0){
    mslide(count-1);
  }else{
    mslide(img_n-s_con);
  }
});

r_btn.addEventListener('click', function(){
  if(count < img_n-s_con){
    mslide(count+1);
  }else{
    mslide(0);
  }
});