---
layout: post

category: JAVA
tag: Theory
title: "[KNOU/JAVA] 스트림(Stream) - 1"

date: 2023-03-29
last_modified_at: 2023-03-29
---


# 스트림
- 순서가 있는 일련의 데이터 흐름
- 데이터 생산자(소스)와 데이터 소비자(목적지) 사이의 데이터가 지나는 통로

## Java 언어와 스트림
- Java 언어에서 스트림을 통해 입출력 수행 가능
  + 입력 스트림 : 데이터 생산자(소스)와 연결
  + 출력 스트림 : 데이터 소비자(목적지)와 연결
- 다양한 입출력 종류(디스크, 문자 배열, 네트워크 소켓, 다른 프로그램 등)에 상관없이 동일한 방법으로 프로그램 작성
  + 스트림을 통해 입출력 제어

## 스트림의 분류
### 입력 스트림과 출력 스트림
- 프로그램은 입력 스트림으로부터 데이터를 읽을 수 있음
  + 데이터 소스가 설정되어야 함
- 프로그램은 출력 스트림으로 데이터를 쓸 수 있음
  + 데이터 목적지가 설정되어야 함

### 바이트 스트림과 캐릭터 스트림
- 바이트 스트림은 byte 단위로 데이터를 다룸
  + `xxxInputStream`과 `xxxOutputStream`
- 캐릭터 스트림은 `char` 단위로 데이터를 다룸
  + `xxxReader`과 `xxxWriter`

### 기본 스트림과 보조 스트림
- 기본 스트림은 입출력 기능을 제공하는 스트림
- 보조 스트림은 자체적으로 입출력 기능을 수행할 수 없어서 기본 스트림과 함께 사용
- 보조 스트림은 보조 기능을 제공하는 스트림

### java.io 패키지의 스트림 클래스

<div class="table-wrapper" markdown="block">

<table>
	<tr>
		<th colspan="2">처리 단위 ∖ 처리 방향</th>
		<th>입력 스트림</th>
		<th>출력 스트림</th>
	</tr>
	<tr>
		<td rowspan="2">기본 스트림</td>
		<td>바이트 스트림</td>
		<td>InputStream<br />FileInputStream</td>
		<td>OutputStream<br />FileOutputStream</td>
	</tr>
	<tr>
		<td>문자 스트림</td>
		<td>Reader<br />FileReader</td>
		<td>Writer<br />FileWriter</td>
	</tr>
	<tr>
		<td rowspan="3">보조 스트림</td>
		<td>바이트 스트림</td>
		<td>BufferedInputStream<br /><br />DataInputStream<br />ObjectInputStream</td>
		<td>BufferedOutputStream<br />PrintStream<br />DataOutputStream<br />ObjectOutputStream</td>
	</tr>
	<tr>
		<td>문자 스트림</td>
		<td>BufferedReader</td>
		<td>BufferedWriter<br />PrintWriter</td>
	</tr>
	<tr>
		<td>기타</td>
		<td>InputStreamReader</td>
		<td>OutputStreamWriter</td>
	</tr>
</table>

</div>


## 스트림의 사용
어떤 스트림 클래스를 사용할 것인가

- 입력? 출력?
- 데이터 생산자와 소비자를 결정
  + 기본 스트림 반드시 사용해야 함
- 문자 단위? 바이트 단위?
- 보조 스트림 필요 여부
  + 필요하다면 기본 스트림 객체를 먼저 생성하고 기본 스트림을 감싸 보조 스트림 객체를 생성함

```java
// 예시

FileInputStream fis = new FileInputStream();
BufferedInputStream bis = new BufferedInputSteam(fis);
```



# 바이트 스트림

## InputStream 클래스
바이트 단위 입력 스트림 클래스의 최상위 클래스

### 주요 메소드

```java
abstract int read()
// 입력 스트림으로부터 1 바이트를 읽어 정수로 리턴

int read(byte[] b)
// 입력 스트림으로부터 읽어서 byte 배열에 저장
// 읽어 들인 바이트 개수를 리턴

int read(byte[] b, int off, int len)
// len만큼 읽어서 byte 배열의 off 위치에 저장하고 읽은 바이트 수를 리턴

int available()
// 다음 read()할 때 블로킹 없이 입려 스트림에서 읽을 수 있는 데이터 길이
// 즉, 현재 읽을 수 있는 바이트 수를 리턴

long skip(long n)
// 입력 스트림에서 n 바이트를 건너 뜀

void mark(int readlimit)
// InputStream에서 현재의 위치를 표시함

void reset()
// mark()를 마지막으로 호출한 위치로 이동함
```

## OutputStream 클래스
- 바이트 단위 출력 스트림 클래스의 최상위 클래스
- 추상 클래스
- 하위 클래스는 `xxxOutputStream`

### 주요 메소드

```java
void write(int b)
// 1 바이트의 데이터를 출력 스트림에 씀

void write(byte[] b)
// byte 배열의 내용을 출력 스트림에 씀

void write(byte[] b, int off, int len)
// byte 배열의 off 위치부터 len 길이만큼 출력

void close()
// OutputStream을 닫음

void flush()
// 버퍼에 남아있는 출력 스트림을 출력함
```
