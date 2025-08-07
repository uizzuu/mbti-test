import { results, mbtis } from "./data.js";

// 출력해보기
// 1. title
// console.log(results[0].title)
// 2. 혼자서 멘탈... 
// console.log(results[0].results[0])
// 3. 창업가
// console.log(results[0].jobs[1])
// 4. intp값(1)
// console.log(mbtis.intp)
// 4. intp값(2)
// const mbti = 'intp'
// console.log(mbtis[mbti])

// http://127.0.0.1:5500/result.html?mbti=infp
// 쿼리스트링 가져오기

const mbti = new URLSearchParams(location.search).get('mbti')
// console.log(mbtis[mbti])

// 1. 각각의 태그를 지정
const titleEl = document.querySelector(".page-title")
const characterEl = document.querySelector(".character")
const boxEls = document.querySelectorAll(".box")
const jobEls = document.querySelectorAll(".job")
const lectureEl = document.querySelector(".lecture")
const lectureImgEl = document.querySelector(".lecture img")

// 2. 위의 내용에 innerHTML로 표시
// 단, querySelectorAll로 가져온 아이들은 forEach구문을 이용해 처리
// 문법은 찾아서 사용

function renderResult(){
  const index = mbtis[mbti]
  const result = results[index]

  titleEl.innerHTML = result.title
  characterEl.src = result.character
  boxEls.forEach((boxEl, i) => {
    boxEl.innerHTML = result.results[i]
  })
  jobEls.forEach((jobEl, i) => {
    jobEl.innerHTML = result.jobs[i]
  })
  lectureEl.href = result.lectureUrl
  lectureImgEl.src = result.lectureImg
}

renderResult();