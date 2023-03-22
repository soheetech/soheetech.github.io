---
layout: post

category: JAVA
tag: Theory
title: "[KH/JAVA] 예외 처리(Exception Handling)"

date: 2023-03-14
last_modified_at: 2023-03-23
---


# 프로그램 오류(=에러)
프로그램 수행 시 치명적 상황이 발생하여 비정상 종료 상황이 발생한 것

## 오류의 종류
- 컴파일 에러 : 프로그램의 실행을 막는 소스 코드상의 문법 에러
  + 소스 코드 수정으로 해결
- 런타임 에러 : 프로그램 실행 중 발생하는 에러.
  + 주로 if문 사용으로 에러 처리
  + 예) 배열의 인덱스 범위를 벗어남, 계산식의 오류 등
- 시스템 에러 : 컴퓨터 오작동으로 인한 에러
  + 소스 코드 수정으로 해결 불가

## 오류 해결 방법
- 예외(Exception) : 소스 코드 수정으로 해결 가능한 에러
- 예외 처리 : 예외 상황(예측 가능한 에러) 구문을 처리 하는 방법


# 예외 확인

## Exception 확인하기

> 프로그램 수행 → 예외 상황 발생 → JVM이 해당 예외에 상황이 맞는 Exception 클래스를 찾아 객체로 만듦 → 객체로 만들어졌을 때 빨간 글씨가 나오면서 어디서 예외가 발생했는지 안내 → 프로그램 종료

- Java API Document에서 해당 클래스에 대한 생성자나 메소드를 검색하면 그 메소드가 어떤 Exception을 발생시킬 가능성이 있는지 확인 가능
- 발생하는 예외를 미리 확인해 상황에 따른 예외 처리 코드 작성 가능




# 예외 클래스 계층 구조

- Exception과 Error 클래스 모두 Object 클래스의 자손이며 모든 예외의 최고 조상은 Exception 클래스
- 반드시 예외 처리해야 하는 Checked Exception과 해주지 않아도 되는 Unchecked Exception으로 나뉨

![image](https://user-images.githubusercontent.com/121299334/226950720-84c32347-636b-4f8d-a920-6fe0f818a8cd.png)


# Unchecked Exception

## RuntimeException 클래스
Unchecked Exception으로 주로 프로그래머의 부주의로 인한 오류인 경우가 많기 때문에 예외처리보다는 코드를 수정해야 하는 경우가 많음

## RuntimeException 후손 클래스
- ArithmeticException 
  + 0으로 나누는 경우 발생
  + if문으로 나누는 수가 0인지 검사
- NullPointerException
  + Null인 참조 변수로 객체 멤버 참조 시도 시 발생
  + 객체 사용 전에 참조 변수가 null인지 확인
- NegativeArraySizeException
  + 배열 크기를 음수로 지정한 경우 발생
  + 배열 크기를 0보다 크게 지정해야 함
- ArrayIndexOutOfBoundsException
  + 배열의 index 범위를 넘어서 참조하는 경우
  + 배열명.length를 사용하여 배열의 범위 확인
- ClassCastException
  + Cast연산자 사용 시 타입 오류
  + instanceof 연산자로 객체 타입 확인 후 cast연산
- InputMismatchException
  + Scanner를 사용하여 데이터 입력 시 입력받는 자료형이 불일치할 경우 발생


# 사용자 정의 예외

- Java API에서 제공하는 Exception Class만으로는 처리할 수 없는 예외가 있을 경우 사용자의 필요에 의해 생성하는 Exception Class.
- Exception 발생하는 곳에서 `throw new 예외 클래스명()`으로 발생


# 예외 처리 방법

## Exception이 발생한 곳에서 직접 처리
`try ~ catch`문을 이용하여 예외 처리

- `try` : 예외 발생할 가능성이 있는 코드를 안에 기술
- `catch` : `try` 구문에서 예외 발생 시 해당하는 예외에 대한 처리 기술
- + 여러 개의 예외 처리가 가능하나 예외 간의 상속 관계 고려해야 함
- + 예외를 잡아서 처리했기 때문에 프로그램이 종료되지 않음
- `finally` : 예외 발생 여부와 관계없이 꼭 처리해야 하는 로직 기술
- + 중간에 `return` 문을 만나도 `finally` 구문은 실행되지만 `System.exit();`를 만나면 무조건 프로그램 종료
- + 주로 java.io나 java.sql 패키지의 메소드 처리 시 이용


## Exception 처리를 호출한 메소드에게 위임

- 메소드 선언 시 `throws Exception명`을 추가하여 호출한 상위 메소드에게 처리 위임
- 계속 위임하면 `main()` 메소드까지 위임하게 되고 `main()` 메소드에서도 처리되지 않는 경우 프로그램이 비정상 종료됨

# Exception과 오버라이딩

- 오버라이딩 시 throws하는 Exception의 개수와 상관없이 처리 범위가 같거나 후손이여야 함
- Exception 클래스는 상속이 될수록 상위 클래스보다 예외의 내용이 더 상세하게 기술됨
