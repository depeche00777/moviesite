const $body = document.querySelector('body')
const $aside = document.querySelector('aside')
const items = document.querySelectorAll('article')
const closeBtn = document.querySelector('.closeBtn')

// for( 배열의 아이템 of 배열){ 실행구 }
for( let item of items ){ //각각의  article(item)에 적용
  
  item.addEventListener('click', (e)=>{
    window.scrollTo(0,0) 
    let title =  e.currentTarget.querySelector('h2').innerText;
    let txt =  e.currentTarget.querySelector('p').innerText;
    let vid = e.currentTarget.querySelector('video').getAttribute('src')
  
    $aside.querySelector('h2').innerText = title;
    $aside.querySelector('p').innerText = txt;
    $aside.querySelector('video').setAttribute('src',vid)
    // aside 자식요소에 클릭한 article에서 가져온 변수를 적용

    $aside.querySelector('video').play()  //aside의  video를 재생
    $body.classList.add('on') //body에 on클라스 적용 ->  aside가 튀어나옴
  })

  item.addEventListener('mouseenter', (e)=>{
    
    e.currentTarget.querySelector('video').play()
    // 현재이벤트가 바인딩 된(e.currentTarget) 엘리먼트의 자식요소 video
  })

  item.addEventListener('mouseleave', (e)=>{
    e.currentTarget.querySelector('video').pause()
  })
}


// aside 안의  'close버튼'
closeBtn.addEventListener('click', ()=>{
  $body.classList.remove('on');
  $aside.querySelector('video').pause()
})