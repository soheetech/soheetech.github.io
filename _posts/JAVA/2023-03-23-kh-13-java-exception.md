---
layout: post

category: JAVA
tag: Theory
title: "[KH/JAVA] 예외(Exception)"

date: 2023-03-14
last_modified_at: 2023-03-29
---


# 프로그램 오류(=에러)
- 에러(Error) : 프로그램 수행 시 치명적 상황이 발생하여 비정상 종료 상황이 발생한 것
  + 심각한 오류로 더 이상의 실행 불가

## 오류의 종류
- 컴파일 에러 : 프로그램의 실행을 막는 소스 코드상의 문법 에러
  + 소스 코드 수정으로 해결
- 런타임 에러 : 프로그램 실행 중 발생하는 에러.
  + 주로 `if`문 사용으로 에러 처리
  + 예) 배열의 인덱스 범위를 벗어남, 계산식의 오류 등
- 시스템 에러 : 컴퓨터 오작동으로 인한 에러
  + 소스 코드 수정으로 해결 불가

## 오류 해결 방법

### 예외(Exception)
- 소스 코드 수정으로 해결 가능한 에러
- 정상적 실행 흐름을 방해하는 예외적 사건으로 경미한 오류, 복구 가능함

### 예외 처리(Exception handling)
예외 상황(예측 가능한 에러)가 발생했을 때 바로 잡아 계속 수행하도록 하는 것


# 예외 확인

## Exception 확인하기

> 프로그램 수행 → 예외 상황 발생 → JVM이 해당 예외에 상황이 맞는 Exception 클래스를 찾아 객체로 만듦 → 객체로 만들어졌을 때 빨간 글씨가 나오면서 어디서 예외가 발생했는지 안내 → 프로그램 종료

- Java API Document에서 해당 클래스에 대한 생성자나 메소드를 검색하면 그 메소드가 어떤 `Exception`을 발생시킬 가능성이 있는지 확인 가능
- 발생하는 예외를 미리 확인해 상황에 따른 예외 처리 코드 작성 가능


# 예외 클래스 계층 구조

- `Exception`과 `Error` 클래스 모두 `Object` 클래스의 자손이며 모든 예외의 최고 조상은 `Exception` 클래스
- 반드시 예외 처리해야 하는 `Checked Exception`과 해주지 않아도 되는 `Unchecked Exception`으로 나뉨
  + `Checked Exception` 의 경우 예외처리 코드가 없으면 컴파일 오류

![image](https://user-images.githubusercontent.com/121299334/226950720-84c32347-636b-4f8d-a920-6fe0f818a8cd.png)


# Unchecked Exception

## RuntimeException 클래스
Unchecked Exception으로 주로 프로그래머의 부주의로 인한 오류인 경우가 많기 때문에 예외처리보다는 코드를 수정해야 하는 경우가 많음

## RuntimeException의 후손 클래스
- `ArithmeticException`
  + 0으로 나누는 경우 발생
  + `if`문으로 나누는 수가 0인지 검사
- `NullPointerException`
  + `Null`인 참조 변수로 객체 멤버 참조 시도 시 발생
  + 객체 사용 전에 참조 변수가 `null`인지 확인
- `NegativeArraySizeException`
  + 배열 크기를 음수로 지정한 경우 발생
  + 배열 크기를 0보다 크게 지정해야 함
- `ArrayIndexOutOfBoundsException`
  + 배열의 `index` 범위를 넘어서 참조하는 경우
  + `배열명.length`를 사용하여 배열의 범위 확인
- `ClassCastException`
  + `Cast`연산자 사용 시 타입 오류
  + `instanceof` 연산자로 객체 타입 확인 후 `cast`연산
- `InputMismatchException`
  + `Scanner`를 사용하여 데이터 입력 시 입력받는 자료형이 불일치할 경우 발생


# 예외 처리 방법
예외 발생 시 `Exception` 객체를 생성하고 `throw` 하고 `throw` 된 예외 객체를 예외처리 코드가 `catch` 하여 예외를 처리함

## 직접 처리
- 예외가 발생한 곳에서 예외 객체를 잡아 직접 처리하는 것으로 `try ~ catch( ~ finally)` 구문을 사용함
- 일반 코드와 에외 처리가 분리되어 가독성 향상

```java
try { ⋯ }
// 예외 발생할 가능성이 있는 코드를 안에 기술
// 예외 객체를 throw 하는 문장
// 또는 예외 발생 가능성이 있는 메소드의 호출 부분
// 예외 발생 시 try 블록 즉시 종료

catch(ExceptionType ex) { ⋯ } 
// try 구문에서 예외 발생 시 해당하는 예외에 대한 처리 기술
// 여러 개의 예외 처리가 가능하나 예외 간의 상속 관계 고려해야 함
// 예외를 잡아서 처리했기 때문에 프로그램이 종료되지 않음
// 1개의 예외 유형 인자를 가지는 메소드와 유사
// → 처리해야 하는 예외 유형이 여럿이면 catch 블록도 여럿
// → 여럿이면 가장 적합한(발생된 예외 자료형과 일치하거나 상위 유형) 하나만 실행
// 예외가 발생하지 않을 경우 실행되지 않음

finally { ⋯ } // 생략 가능
// 예외 발생 여부와 관계없이 꼭 처리해야 하는 로직 기술
// try 블록이 종료된 후 항상 실행됨
// 할당 받아 사용했던 리소스를 원상복구하기 위해 주로 사용함
// 중간에 return 문을 만나도 finally 구문은 실행되지만
// System.exit(); 를 만나면 무조건 프로그램 종료
// 주로 java.io나 java.sql 패키지의 메소드 처리 시 이용
```

## 간접 처리(예외의 전파)
- 예외 발생 가능성이 있는 메소드의 선언에서 괄호 다음에 ``을 사용해 예외 처리를 호출한 메소드에게 전달 또는 위임하는 것(=예외의 전파)
- 메소드 선언에서 `throws` 절이 표시된 메소드를 호출하는 메소드는 예외 처리 해야함
- 계속 위임하면 `main()` 메소드까지 위임하게 되고 `main()` 메소드에서도 처리되지 않는 경우 프로그램이 비정상 종료됨

```java
[접근제한자] 반환형 methodName() throws 예외유형 { ⋯ }

// 메소드 선언에서 발생시킬 수 있는 예외유형을 표시함
```

### 예외를 발생시킬 수 있는 메소드
반드시 예외 처리가 필요한 메소드(=checked Exception)

```java
public FileInputStream(String name) throws FileNotFoundException
// FileInputStream 클래스의 생성자

public int read() throws IOException
// InputStream(또는 Reader) 클래스의 메소드
```


# 사용자 정의 예외

- Java API에서 제공하는 예외 클래스만으로는 처리할 수 없는 예외가 있을 경우 사용자의 필요에 의해 사용자가 직접 작성하는 예외 클래스
- 일반적으로 `Exception` 클래스를 상속받음
- 예외가 발생하는 곳에서 `throw` 구문을 사용해 필요할 때 예외 객체를 던질 수 있음

```java
 ⋯ throw new MyException();
```

# Exception과 오버라이딩

- 오버라이딩 시 `throws`하는 `Exception`의 개수와 상관없이 처리 범위가 같거나 후손이여야 함
- `Exception` 클래스는 상속이 될수록 상위 클래스보다 예외의 내용이 더 상세하게 기술됨
