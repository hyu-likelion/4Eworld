임의진



#Arrow Function
///
기존의 방식은 
Function plusTwo (value) {
	value + 2
}

의 방식이라면

Arrow Function 방식을 사용하면
function을 지우고 ()을 지우며 {}도 마찬가지로 지운다

plusTwo = value => value+2;

위의 방식과 비교하면 훨씬 가독성있게 된다.
///


#map함수와 filter함수란?
///
map함수는 모든 값에 각각 조건을 실행시키는 방식이다.


filter 함수는 주어진 조건으로 특정 인자를 걸러준다
///


#class 상속
class 상속을 통해서 부모 함수의 다양한 기능들을 마음껏 가져올 수 있다.
{extends를 사용하여서}


#super()
super를 활용 자식함수가 부모함수의 Input을 인자로 받음
그래서 super(부모 constructor 의 Input)

#비동기함수 동기함수
인터넷속도의 차이로 인하여 로딩속도가 차이나서 먼저 나오면 안되는 것들이 먼저 나오는 경우가 발생한다.
이를 방지하고자 callback함수를 활용하여서 먼저 나와야하는 것들을 내보내고, 이후 준비가 완료되면 callback 을 받아서 실행시키는 방식이다.
{페이스북에서 자주 볼 수 있다.}

#promise & Async Func

promise란 언젠가 해결 될 것이라는 약속

new Promise((resolve, reject) => {}

Resolve -> 해결, 성공 -> then
Reject ->거절, 실패 -> catch


async func_name(p) {
	const result = await get_result()
}


object promise 가 올때까지 기다리는 await 
await 안쓰면 아직 오지도 않은 값을 내보낸다.



비동기의 문제는 순서를 기다리지 않기 때문에 다 되면 알려줘라는 callback이 있는데 가독성이 좋지 않다.
이것을 해결하는 것이 promise다
then 과 catch로 편리한 사용이 가능하다.
더욱 편리하게 만든 것이 async / await 이다.



