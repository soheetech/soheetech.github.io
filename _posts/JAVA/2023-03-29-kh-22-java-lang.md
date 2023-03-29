---
layout: post

category: JAVA
tag: Theory
title: "[KNOU/JAVA] java.lang 패키지"

date: 2023-03-29
last_modified_at: 2023-03-29
---

# java.lang 패키지
- 자바 프로그래밍에 필요한 기본 클래스를 제공함
- `java.lang` 패키지에 존재하는 클래스를 사용할 때는 `import` 문이 필요 없음

## 주요 클래스
- Object, System, Math
- String, StringBuffer
- Thread
- Exception, Throwable, Error
- 포장 클래스 : Number, Integer, Double, Character 등


# Object 클래스
자동으로 모든 클래스의 조상이 되는 클래스

- 클래스 계층 구조에서 루트가 되는 클래스
- 모든 클래스는 자동으로 `Object` 클래스를 상속받음

## 주요 메소드

```java
protected Object clone()
// 객체를 복제하여 반환
// Cloneable 인터페이스를 구현한 클래스의 객체만 clone() 메소드 호출 가능
// 예외(CloneNotSupportedException)처리 해줘야 함

public boolean equals(Object obj)
// 두 객체 변수를 비교해 두 변수의 참조값이 같을 때 true 반환
// Object 클래스에서 equals()의 의미는 ==와 같음
// 자식 클래스에서 재정의 가능
// → String, Integer 클래스 등에서 재정의되어 있음

public int hashCode()
// 객체를 식별하는 정수값을 반환

public String toString()
// 객체의 문자열 표현을 반환 : 클래스 이름@16진수 해시코드
// 문자열의 + 연산, System.out.print() 등에서 필요
// 자식 클래스에서 재정의 가능
// → String, Integer 클래스 등에서 재정의되어 있음
```

# String 클래스
- 문자열을 표현하고 처리하기 위한 클래스
- 기본 자료형처럼 다룰 수 있음
- `String` 객체는 내용이 변하지 않는(immutable) 상수 객체


## 생성자

```java
public String() // 빈 문자열 객체 생성
public String(String original)
public String(char[] value)
public String(char[] value, int offset, int count)
```

## 문제점
문자열을 빈번하게 변경하는 프로그램

- `String`은 immutable 클래스
- 기존 `String` 객체는 놔둔 채 새로운 `String` 객체가 계속 생성됨


## 비교 메소드

```java
int compareTo(String anotherString)
// 같으면 0, 다르면 0이 아닌 정수값을 반환함

int compareToIgnoreCase(String anotherString)

boolean equals(Object anObject)
// 문자열이 같으면 ture, 다르면 false를 반환함

boolean equalsIgnoreCase(String anotherString)
```

## 검색 메소드

```java
int indexOf(String str)
int indexOf(String str, int fromIndex)
// 처음 위치부터 문자열 str을 찾아 처음 등장하는 위치(인덱스)를 반환
// 없으면 -1 반환

int lastIndexOf(String str)
int lastIndexOf(String str, int fromIndex)
// 마지막 위치부터 앞 방향으로 찾음
```

## 추출 메소드

```java
char charAt(int index)
// index 위치에 있는 문자 반환

String substring(int beginIndex)
// beginIndex 위치부터 마지막까지의 문자열 반환

String substring(int beginIndex, int endIndex)
// beginIndex 위치부터 (endIndex-1)까지의 문자열을 반환
```

## 변환 메소드
원본 문자열은 변경되지 않고 새로운 객체가 만들어짐

```java
String replace(char oldChar, char newChar)
// oldChar 문자를 newChar 문자로 변환해 반환

String trim()
// 문자열 앞/뒤에 나오는 화이트 스페이스(공백) 문자를 제거해 반환

String toUpperCase()
// 문자열을 대문자로 변환해 반환

String toLowerCase()
// 문자열을 소문자로 변환해 반환

String concat(String str)
// 두 문자열을 연결함
```

## 기타 메소드

```java
boolean startsWith(String prefix)
// prefix로 시작하면 true 반환

boolean endsWith(String suffix)
// suffix로 끝나면 true 반환

char[] toCharArray()
// 문자열을 한 글자씩 쪼개 배열에 넣어줌
```


# StringBuffer 클래스
- 객체 생성 이후 문자열을 수정할 수 있는 기능 제공
- 내용 변경이 가능한 mutable 클래스
- 내부적으로 문자열을 저장하기 위해 크기가 조절되는 버퍼를 사용함

## 생성자

```java
StringBuffer()
// 초기 버퍼의 크기는 16

StringBuffer(int length)

StringBuffer(String str)
// 초기 버퍼의 크기는 (str의 길이 + 16)
```

## 주요 메소드

```java
int capacity()
int length()

char charAt(int index)
int indexOf(String str)

String substring(int start, int end)

StringBuffer append(char c)
// 인자를 String 표현으로 바꾸고 원 문자열 끝에 추가하여 반환
// 인자는 char[], Object, String, 기본 자료형도 가능

StringBuffer delete(int start, int end)
// start 위치에서 (end-1)까지의 문자열 삭제

StringBuffer insert(int offset, String s)
// offset 위치부터 s를 삽입

StringBuffer replace(int start, int end, String s)
// start 위치부터 (end-1)까지의 문자열을 s로 교체

StringBuffer reverse()
// 문자열을 역순으로 변경
```

# 포장 클래스
- 기본형을 참조형으로 표현하기 위한 클래스
- 기본형의 값을 가지고 객체로 포장(boxing)함

<div class="table-wrapper" markdown="block">

<table>
	<tr>
		<th>구분</th>
		<th colspan="4">정수형</th>
		<th colspan="2">실수형</th>
		<th>문자형</th>
		<th>논리형</th>
	</tr>
	<tr>
		<td>기본형</td>
		<td>byte</td>
		<td>short</td>
		<td>int</td>
		<td>long</td>
		<td>float</td>
		<td>double</td>
		<td>char</td>
		<td>boolean</td>
	</tr>
	<tr>
		<td>참조형</td>
		<td>Byte</td>
		<td>Short</td>
		<td>Integer</td>
		<td>Long</td>
		<td>Float</td>
		<td>Double</td>
		<td>Character</td>
		<td>Boolean</td>
	</tr>
</table>

</div>

## 사용 목적
- 메소드의 인자로 객체가 필요할 때
- 클래스가 제공하는 상수를 사용할 때
- 클래스가 제공하는 다양한 메소드를 사용할 때

## Number 클래스
- `Number`는 `Byte`, `Short`, `Integer`, `Long`, `Float`, `Double`의 추상 부모 클래스
- `Number`의 자식 클래스에서 구현된 주요 메소드

```java
byte byteValue()
short shortValue()
// 객체를 해당 기본형의 숫자로 변환(unboxing)

int compareTo(Byte anotherByte)
// this와 인자를 비교해 같으면 0 반환

boolean equals(Object obj)
// 같은 유형, 값이 같으면 true 반환
```

## String과 기본형 데이터 간의 변환
포장 클래스가 제공하는 `static` 메소드 사용

```java
// String을 int(또는 long)형으로 변환
int n = Integer.parseInt();
long l = Long.parseLong();

// int(또는 long)형을 String형으로 변환
String s1 = Integer.toString();
String s2 = Long.toString();
String s3 = String.valueOf();
```

## Integer 클래스
- Integer, String, int 사이의 변환 기능 제공
- 다른 클래스들도 유사한 기능 제공

### 주요 메소드

```java
static int parseInt(String s)
// String 인수를 부호 첨부 10 진수의 정수형으로 반환

static String toString(int i)
// 지정된 정수를 나타내는 String 객체를 반환

static Integer valueOf(int i)
// 지정한 int 치를 나타내는 Integer 인스턴스를 반환

String toString()
// 이 Integer 값을 나타내는 String 객체 반환

static Integer valueOf(String s)
// 지정된 String값을 보관 유지하는 Integer 객체 반환

// 참고 : http://cris.joongbu.ac.kr/course/java/api/java/lang/Integer.html
```

## 박싱
기본형 데이터를 포장 클래스의 객체로 변환하는 것

### 자동 박싱
- 기본형에서 포장 클래스의 객체로 자동 변환되는 것
- 인자에 전달되거나 변수에 대입될 때 적용됨


## 언박싱
- 포장 클래스의 객체를 기본형 데이터로 변환하는 것
- 포장 클래스에서 `기본형Value()` 메소드 사용

### 자동 언박싱
- 포장 클래스의 객체에서 기본형으로 자동 변환되는 것
- 인자에 전달되거나 변수에 대입될 때 적용됨


# System 클래스
Java 플랫폼 및 시스템과 관련된 기능 제공

- 유용한 클래스 필드와 메소드를 가짐
- 모든 멤버는 `static`, 사용 시 객체를 생성할 필요 없음

## 주요 기능
- 표준 입출력
- JVM 또는 운영체제 속성과 시스템 환경 변수의 사용
- 배열 복사 등

## 표준 입출력 필드

```java
System.in
// 표준 입력 스트림, InputStream 유형
// 키보드로부터 입력을 받을 때 사용
// System.in.read()는 키보드로부터 1바이트 문자를 입력받음

System.out
// 표준 출력 스트림, PrintStream 유형
// 화면에 데이터 출력할 때 사용

System.err
// 표준 에러 출력 스트림, PrintStream 유형
// 오류 메시지를 화면에 출력할 때 사용
```
