# Java Script
## Why JS?
백엔드에 사용할 언어는 python, ruby, asp, 하스켈 등 다양하지만, 프론트엔드의 경우 javascript가 유일한 프로그램 언어다.

## JS convention
`camel case`

기본 문법 : 변수명의 처음 시작은 무조건 소문자로 쓴다.

## JS DOM Functions
Document Object Model의 약자.

자바스크립트에서 html을 객체로 바꾸어서 변경할 수 있다.

javascript 에서 id로 무언가 선택할 때는 document.getElementById 라고 써서 선택할 수 있다.

- 여기서 무언가는 title이라고 하자.

1. console.log(document.getElementById);

2. const title = document.getElementById ("title");

console.log(title)



## JSON 구조
JSON은 자바스크립트의 객체 표기법으로부터 파생된 부분 집합입니다.

따라서 JSON 데이터는 다음과 같은 자바스크립트 객체 표기법에 따른 구조로 구성됩니다.

1. JSON 데이터는 이름과 값의 쌍으로 이루어집니다.

2. JSON 데이터는 쉼표(,)로 나열됩니다.

3. 객체(object)는 중괄호({})로 둘러쌓아 표현합니다.

4. 배열(array)은 대괄호([])로 둘러쌓아 표현합니다.


## Callback, promise, async await
비동기성: 모든게 절차적으로 일어나지 않는다.

왜냐면 JS가 인터넷 속도에 의존, 유저 인터랙션 있음 → 속도가 느려도 인터랙션은 되야한다.

ex. Facebook, Toss어플

Call back == 다 되면 알려줘

Promise: 언젠가 해결할 것이란 약속

1. 비동기의 문제를 해결하기 위한 callback
2. 작업이 완료되면 알려주는 callback은 가독성이 좋지 않았다.
3. 그래서 나온 것이 완료를 약속하는 Promise다
4. Then과 catch로 편리한 사용이 가능하다
5. 더 편리하게 만든 것이 async/await다.
