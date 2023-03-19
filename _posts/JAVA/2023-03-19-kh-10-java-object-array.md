---
layout: post

category: JAVA
tag: Theory
title: "[KH/JAVA] 객체 배열(Object Array)"

date: 2023-03-07
last_modified_at: 2023-03-19
---

# 객체 배열(Object Array)
객체 참조형 변수의 묶음(배열), 배열의 자료형을 클래스명(사용자 정의 자료형, =참조형)으로 지정해 활용

## 객체 배열의 선언과 할당

```java
// 선언
클래스명[] 배열명;
클래스명 배열명[];

// 할당
배열명 = new 클래스명[배열크기];

// 선언과 동시에 할당
클래스명 배열명[] = new 클래스명[배열크기];
```

## 객체 배열의 초기화

```java
// 인덱스를 이용한 초기화
배열명[i] = new 클래스명();

// 선언과 동시에 할당 및 초기화
클래스명 배열명[] = {new 클래스명(), new 클래스명()};
```

## 객체 배열의 구조

![image](https://user-images.githubusercontent.com/121299334/226176118-b7053cf2-30de-4052-8aad-dbdea12fbe3e.png)
