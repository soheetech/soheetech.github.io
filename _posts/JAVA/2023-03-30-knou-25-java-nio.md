---
layout: post

category: JAVA
tag: Theory
title: "[KNOU/JAVA] java.nio 패키지"

date: 2023-03-30
last_modified_at: 2023-03-30
---


# java.nio 패키지
- 기존 `java.io` 패키지를 개선한 새로운 입출력 패키지
- NIO = New Input Output의 약자

## NIO2
- JDK 7부터 파일 I/O를 개선해 등장
- `java.nio`와 그것의 서브 패키지 형태
  + `java.nio.file`, `java.nio.channels`, `java.nio.charset` 등
- Path : File 클래스보다 다양한 기능을 제공함
- Files의 `static` 메소드를 통한 파일/디렉토리의 조작, 파일의 읽기/쓰기
- FileChannel 클래스 : 입력과 출력이 모두 가능함
  + 버퍼링 기능, 멀티스레드에 안전
- AsynchronousFileChannel 클래스 : 비동기식 입출력을 위한 클래스
  + non-blocking 방식 파일 입출력

## Path 인터페이스
- `java.nio.file` 패키지에 존재하며 `java.io`의 File 클래스를 대신함
- 파일 시스템에 존재하는 파일이나 디렉토리에 해당하는 경로를 표현함
  + 절대 경로 또는 상대 경로로 표현 됨
- 경로의 생성, 비교, 정보 추출, 요소 조작 기능 등을 제공
- `java.nio.file`의 Files 클래스 `static` 메소드를 이용해 Path 객체에 대한 다양한 실제 조작(읽기, 쓰기, 복사, 이동 등)이 가능함

### Path 객체의 생성 방법

```java
java.nio.file.Paths.get("파일이나 디렉토리의 경로")

// 파일이나 디렉토리의 경로는 절대 또는 상대 경로
```

### 메소드

```java
int compareTo(Path other)
// 파일 경로가 동일하면 0, 상위 경로면 음수, 하위 경로면 양수 리턴

Path getFileName()
// 부모 경로를 제외한 파일 또는 디렉토리 이름만 가진 Path 리턴

FileSystem getFileSystem()
// FileSystem 객체 리턴

Path getName(int index)
// C:\Temp\dir\file.txt 라고 할 때
// index = 0 : Temp의 Path 객체 리턴
// index = 1 : dir의 Path 객체 리턴
// index = 2 : file.txt의 Path 객체 리턴

int getNameCout()
// 중첩 경로 수 리턴
// C:\Temp\dir\file.txt일 경우 3을 리턴

Path getParent()
// 바로 위 부모 폴더의 Path 리턴

Path getRoot()
// 루트 디렉토리의 Path 리턴

Iterator<Path> iterator()
// 경로에 있는 모든 디렉토리와 파일을 Path 객체로 생성하고 반복자를 리턴

File toFile()
// java.io.File 객체로 리턴

String toString()
// 파일 경로를 문자열로 리턴
```


## FileSystem 클래스
- 파일 시스템에 대한 인터페이스를 제공
- 하나 이상의 파일 스토어로 구성됨

### 메소드

```java
FileSystems.getDefault() // 기본 파일 시스템 리턴

Iterable<FileStore> getFileStores()
// 드라이버 정보를 가진 FileStore 객체들을 리턴

Iterable<Path> getRootDirectories()
// 루트 디렉토리 정보를 가진 Path 객체들을 리턴

String getSeparator()
// 디렉토리 구분자 리턴
```


## FileStore 클래스
파티션(또는 볼륨/드라이버)을 표현함

### 메소드

```java
String name()
// 드라이버명 리턴

String type()
// 파일 시스템 종류 리턴

long getTotalSpace()
// 드라이버 전체 공간 크기(바이트 단위) 리턴

long getUnallocatedSpace()
// 할당되지 않은 공간 크기(바이트 단위) 리턴

long getUsableSpace()
// 사용 가능한 공간 크기 리턴
// getUnallocatedSpace()와 같은 값
```


## Files 클래스
- 파일 조작 기능을 제공하는 `static` 메소드를 제공함
- 메소드는 Path 객체를 인자로 가지고 작업함

### 파일의 읽기와 쓰기

```java
byte[] readAllBytes(Path)
// 파일의 모든 바이트를 읽고 배열로 리턴

Path write(Path, byte[])
// 파일에 바이트나 문자열을 리턴
```

### 파일이나 디렉토리의 검사/생성/삭제/복사/이동/속성 관리

```java
boolean isDirectory(Path)
// 디렉토리인지 여부

boolean isRegularFile(Path)
// 일반 파일인지 여부

Path createFile(Path)
// 파일 생성

void delete(Path)
// 파일 또는 디렉토리 삭제

Path copy(Path, Path)
// 파일 복사

Path move(Path, Path)
// 파일 이동

long size(Path)
// 파일의 크기 리턴

UserPrincipal getOwner(Path)
// 소유자의 정보 리턴
```


# 버퍼
- 데이터 생산자와 프로그램(입력), 프로그램과 데이터 소비자(출력) 간 속도 차로 인해 지연이 발생할 수 있음
- 버퍼를 사용하면 지연 현상을 방지할 수 있음
  + 입력 : 프로그램은 버퍼로부터 데이터를 읽음
  + 출력 : 프로그램은 버퍼로 데이터를 출력함


## Buffer 클래스
- 버퍼는 기본형 값을 저장하는 데이터 보관소
  + 채널 입출력에 사용되며 버퍼 단위로 입출력할 수 있음
- `java.nio` 패키지에 존재하며 `Buffer`는 추상 클래스
  + 자식 클래스에서 구현해야 할 공통의 메소드를 선언
- 실제 사용을 위해 `boolean`을 제외한 모든 기본형에 대해 서브 클래스가 존재함
  + `ByteBuffer`, `CharBuffer`, `DoubleBuffer`, `FloatBuffer`, `IntBuffer`, `LongBuffer`, `ShortBuffer`


## 버퍼의 생성

```java
Buffer buffer = ByteBuffer.allocate(1024*1024);
byte[] barray = new byte[100];
Buffer bbuffer = ByteBuffer.wrap(barray);
```

### 버퍼의 속성

> 0 <= mark <= position <= limit <= capacity

- capacity : 버퍼의 크기(데이터의 개수)로 생성될 때 정해짐
- position : 읽기나 쓰기가 적용되는 위치(position <= limit)
- limit : 읽거나 쓸 수 없는 최초 위치(limit <= capacity)
- mark : `reset()` 되었을 때 position이 가리킬 위치

## Buffer 클래스의 메소드

```java
Buffer mark()
// mark를 position의 값으로 설정

Buffer reset()
// position을 mark의 값으로 설정

Buffer rewind()
// position을 0으로 바꾸고 mark를 삭제
// 처음부터 다시 읽기를 준비하는 것

Buffer flip()
// limit을 position 값으로 설정, position은 0으로 변경
// 버퍼에 쓰기를 끝내고 버퍼 읽기를 준비하는 것

Buffer clear()
// 버퍼를 초기 상태로 돌림
// 새로운 쓰기를 준비하는 것
```

## 버퍼 읽기와 쓰기
`Buffer`의 서브 클래스에서 제공

- `ByteBuffer`, `CharBuffer`, `DoubleBuffer` 등

### (ByteBuffer에서) 상대적 읽기/쓰기 메소드
현재 position에서 읽기 또는 쓰기를 수행하며 읽거나 쓴 요소만큼 position 값이 증가함

```java
byte get() // 상대적 읽기
ByteBuffer get(byte[]) // 상대적 일괄 읽기
ByteBuffer put(byte) // 상대적 쓰기
ByteBuffer put(byte[]) // 상대적 일괄 쓰기
```

### 절대적 읽기/쓰기 메소드
position 값에 영향을 주지 않음

```java
byte get(int index) // 절대적 읽기
ByteBuffer put(int index, byte b) // 절대적 쓰기
```


# FileChannel 클래스
`java.io` 패키지의 파일 관련 입출력 스트림을 대체

- `java.nio.channels` 패키지에 존재
- 파일에 대한 읽기와 쓰기를 모두 제공
- 멀티 스레드 환경에서도 안전하게 사용할 수 있음

## 읽기와 쓰기 메소드

```java
int read(ByteBuffer dst)
int write(ByteBuffer src)
```


## FileChannel 객체의 생성

```java
FileChannel.open(Path path, OpenOption ⋯ options)
// 옵션은 StandardOpenOption.READ 등
// FileInputStream 이나 RandomAccessFile 객체에서 getChannel()
```


# WatchService 인터페이스
- 어떤 대상에 대해 변화나 이벤트가 생기는 것을 감시(=watch)
- 디렉토리의 변화(파일 또는 서브 디렉토리의 생성, 삭제, 수정)를 감지
- `java.nio.file` 패키지에 존재


## 감시자의 생성
먼저 `WatchService` 객체를 생성함

```java
WatchService ws = FileSystems.getDefault().newWatchService();
```


## 감시 절차

```java
WatchService ws;
ws = FileSystems.getDefault().newWatchService();

// 감시 대상 디렉토리를 WatchService에 등록
Path path = Paths.get("c:\\java\\temp");

// 알림 받고자 하는 이벤트 명시
path.register(ws, StandardWatchEventKinds.ENTRY_CREATE,
	StandardWatchEventKinds.ENTRY_DELETE,
	StandardWatchEventKinds.ENTRY_MODIFY);

// WatchService는 take() 메소드를 호출해 감시함
// 무한 루프 안에서 이벤트가 발생할 때까지 기다림
While(true){
	WatchKey key = ws.take();
	
	// 이벤트가 발생하면 take()가 리턴하는
	// WatchKey 객체를 이용해 이벤트를 처리
	// WatchKey는 감시 대상 객체의 상태 정보를 가짐
	// pollEvents()를 호출해 WatchEvent 객체를 얻고
	// 어떤 변화가 생겼는지 알 수 있음
	for(WatchEvent<?> event : key.pollEvents()){
		WatchEvent.Kind k = event.kind(); // 이벤트 종류
		Path p = (Path)event.context(); // 파일 이름
		if(k == StandardWatchEventKinds.ENTRY_CREATE){
			System.out.println("File" + p.getFileName() + " is created.");
		}
		boolean valid = key.reset(); // 계속 감시하기 위함
		if (!valid) break;
	}
	
}
```
