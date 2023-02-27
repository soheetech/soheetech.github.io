---
layout: post

title: "[KH/JAVA] 제어문, 조건문, 반복문"
category: JAVA
tags: 
  - kh
  - java
  - control
  - if
  - switch
  - for
  - while

date: 2023-02-23
last_modified_at: 2023-02-25

published: true
---

<h4>제어문(control)</h4>


<h5>조건문</h5>
프로그램 수행 흐름을 바꾸는 역할을 하는 제어문 중 하나로 조건에 따라 다른 문장이 수행되도록 함

- if문(if문/if~else문/if~else if~else문) : 만약 ~라면, 조건식이 true일 때만 내부 코드 수행<br />
if~else/if~else if~else문의 경우 조건식의 결과가 T면 if/else if문, F면 else 구문 수행

```java
if(조건식1) {
  수행될 코드; // 조건식 1의 결과 값이 true면 수행됨
} else if(조건식2) {
  수행될 코드; // 조건식 2의 결과 값이 true면 수행됨
} else {
  수행될 코드; // 조건식1과 2의 결과 값이 false면 수행됨
}
```

- switch문 : 조건식 하나로 많은 경우의 수를 처리할 때 사용, 조건식의 결과는 정수 또는 문자, 문자열.<br />
조건식의 결과 값과 일치하는 case문으로 이동함

```java
switch(조건식) {
  case 조건식 결과1: // case에 작성되는 값은 switch 식의 결과값 자료형의 리터럴 표기법임
    수행될 코드;
    break;
  case 조건식 결과2:
    수행될 코드;
    break;
  default: // 일치하는 case문이 없을 때 수행( = else )
    수행될 코드;
}
```


<h5>반복문</h5>
프로그램 수행 흐름을 바꾸는 역할을 하는 제어문 중 하나로 특정 문장들을 반복해서 수행하도록 함

- for문: 끝이 정해져 있는(횟수가 지정되어 있는) 반복문
  + cf. while문: 끝이 정해져 있지 않는 반복문

```java
for(초기식; 조건식; 증감식){  // 초기식 확인 -> 조건식 확인 -> 문장 수행 -> 증감연산
                            // 조건식 true : 문장 수행 후 증감연산, false : 수행하지 않고 for문에서 나옴(증감연산X)
  수행될 코드;
}

// 초기식: for문을 제어하는 용도의 변수 선언
// 조건식: for문의 반복 여부를 지정하는 식으로 보통 초기식에 사용된 변수를 이용해 조건식을 작성함
// 증감식: 초기식에 사용된 변수를 for문이 끝날 때마다 증/감시켜 조건식의 결과를 변하게 함
```

