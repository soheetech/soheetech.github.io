---
layout: post

category: JAVA
tag: Theory
title: "[KNOU/JAVA] 스트림(Stream) - 2"

date: 2023-03-30
last_modified_at: 2023-03-30
---


# 캐릭터 스트림

## Reader 클래스
- 입력용 캐릭터 단위 스트림 클래스의 최상위 클래스
- 추상 클래스
- 하위 클래스는 `xxxReader`

### 주요 메소드

```java
int read()
// 1개 문자(2바이트)를 읽어 리턴

int read(char[] cbuf)
// 문자를 읽어 char 배열에 저장
// 읽어 들인 문자의 개수를 리턴

boolean ready()
// 스트림이 읽힐 준비가 되었으면 true 리턴

abstract void close()
// 입력 스트림을 닫고 자원을 반납
```

## Writer 클래스
- 출력용 캐릭터 단위 스트림 클래스의 최상위 클래스
- 추상 클래스
- 하위 클래스는 `xxxWriter`

### 주요 메소드

```java
void write(int c)
// 1개의 문자(2바이트)를 출력

void write(char[] cbuf)
// char 배열의 내용을 출력

void write(String str)
// 문자열을 출력

void write(String str, int off, int len)
// 문자열을 off의 위치부터 len의 크기만큼 출력

abstract void close()
// 문자 출력 스트림을 닫음
```


# 파일 입출력

## File 클래스
- 파일이나 디렉토리를 표현
  + 상대 또는 절대 경로를 가짐
- 파일/디렉토리를 조작할 수 있는 메소드 제공
  + 이름과 경로의 조회
  + 파일과 디렉토리의 생성과 삭제
    * 입출력 메소드는 제공되지 않음

### 생성자

```java
File(String pathname)

// pathname은 상대 또는 절대 경로로 표현될 수 있음
// File myFile = new File("c:\\temp\\data.txt");
```

### 주요 메소드

```java
boolean exists()
// 파일의 존재 여부 반환

boolean isDirectory()
// 해당 경로가 디렉토리인지 여부를 반환

boolean isFile()
// 해당 경로가 file인지 여부를 반환

String getName()
// 파일이나 폴더의 이름을 넘겨줌

String getPath()
// 파일의 경로를 문자열의 형태로 반환

long length()
// 해당 경로 파일의 길이를 반환

boolean createNewFile()
// 주어진 이름의 파일이 없으면 새로 생성함

boolean delete()
// 파일이나 디렉토리 삭제
// 단, 디렉토리가 비어있지 않으면 삭제할 수 없음

boolean mkdir()
// 해당 경로에 폴더 생성 성공 시 true,
// 실패 시 false 반환

boolean mkdirs()
// 존재하지 않는 부모 디렉토리까지 포함해 해당 경로에 폴더 생성

String[] list()
File[] listFiles()
// File 객체에 지정된 디렉토리 안에 들어 있는 파일과
// 서브 디렉토리들의 이름을 문자열 배열(또는 경로를 File 배열)로 반환

String getParent()
File getParentFile()
// 상위 경로의 이름(또는 File 객체)을 반환

static File[] listRoots()
// 루트 디렉토리들을 File 배열로 반환
```


## RandomAccessFile 클래스
랜덤 액세스 파일

- 파일의 임의 위치에서 읽기/쓰기 가능
  + 파일을 오픈하고 위치를 지정하고 읽기/쓰기를 함
- 읽고 쓰는 위치는 파일 포인터가 가리킴
  + 읽기/쓰기는 파일 포인터가 가리키는 위치부터 바이트 단위로 읽거나 씀
- byte 단위로 읽고 쓰며 파일 포인터가 이동됨
  + 랜덤 액세스 파일을 커다란 byte 배열로 볼 수 있음

### 생성자

```java
RandomAccessFile(File file, String mode)
RandomAccessFile(String name, String mode)

// mode = "r"(읽기 전용), "rw"(읽기/쓰기 겸용)
```

### 메소드

```java
int read()
// 이 파일에서 1바이트의 데이터를 읽음

int read(byte[] b)
// 이 파일에서 최대 b.length 바이트의 데이터를 바이트 배열로 읽음

int read(byte[] b, int off, int len)
// 이 파일에서 off 위치부터 len 바이트만큼의 데이터를 바이트 배열로 읽음

void seek(long pos)
// 다음 읽기 또는 쓰기가 발생하는
// 이 파일의 시작 부분에서 측정된 파일 포인터 오프셋을 설정함

void write(byte[] b)
// 현재 파일 포인터에서 시작해
// 지정된 바이트 배열의 바이트를 이 파일에 씀

void write(byte[] b, int off, int len)
// 바이트 배열의 off 위치부터 len 길이만큼의 데이터를 이 파일에 씀
```


## FileInputStream, FileOutputStream 클래스
- 파일로부터 데이터를 읽기/쓰기 위한 입력/출력용 기본 스트림
- 바이트 단위의 입력/출력

### 생성자

#### FileInputStream
기존 파일과 연결된 입력 스트림 객체를 생성

```java
FileInputStream(File file)
FileInputStream(String name)
```

#### FileOutputStream
기존 파일(없다면 생성)과 연결된 출력 스트림 객체를 생성

```java
FileOutputStream(String name)
FileOutputStream(File file, boolean append)
```


## FileReader, FileWriter 클래스
- 텍스트 파일을 다루기 위한 기본 스트림
- 문자 단위의 입력/출력

### 생성자

#### FileReader

```java
FileReader(File file)
// 주어진 File 객체를 이용해 FileReader 객체 생성

FileReader(String fileName)
// 주어진 파일을 열어 FileReader 객체 생성
```

#### FileWriter

```java
FileWriter(File file)
// 주어진 File 객체를 이용해 FileWriter 객체 생성

FileWriter(String fileName)
// 주어진 파일을 열어 FileWriter 객체 생성

FileWriter(File file, boolean append)
// 주어진 파일을 append 값에 따라 읽기/추가 모드로 열어 FileWriter 객체 생성
```


# 콘솔 입출력과 보조 스트림

## Console 클래스
- 콘솔 입출력을 제공하는 클래스
  + 키보드 입력과 화면 출력을 편리하게 지원
- 명령 프롬프트 창에서 실행해야 함
- `System.console()`을 사용해 콘솔 객체를 생성함

### 주요 메소드

```java
String readLine()
// Enter 키를 입력하기 전의 모든 문자열(한 라인)을 읽음

char[] readPassword()
// 키보드 입력 문자를 입력할 때 화면(콘솔)에
// 보여주지 않고 문자열을 읽음

PrintWriter writer()
// 이 콘솔에 관련지을 수 있었던 일의 PrintWriter 객체를 가져옴

Reader reader()
// 이 콘솔에 관련지을 수 있었던 일의 Reader 객체를 가져옴
```

## 보조 스트림
- 기본 스트림의 성능을 높이거나 보조 기능을 제공하는 스트림
- 입출력 기능을 직접 수행하지는 못함
- 보조 스트림을 생성할 때 기본 스트림 객체를 생성자의 인자로 이용함
  + → 기본 스트림을 보조 스트림으로 감싼다
  + 프로그램에서는 보조 스트림을 사용해 입출력하면 됨

### 종류

- 버퍼링 기능 제공
  + `BufferedInputStream`, `BufferedOutputStream`, `BufferedReader`, `BufferedWriter`
- Java의 기본 자료형을 그대로 읽기/쓰기 위한 기능 제공
  + `DataInputStream`, `DataOutputStream`
- 다양한 출력 형식의 제공
  + `PrintStream`, `PrintWriter`
- 텍스트 파일을 라인 단위로 읽는 메소드 제공
  + `LineNumberReader`
- 바이트 스트림과 캐릭터 스트림의 호환
  + `InputStreamReader`, `OutputStreamWriter`


## LineNumberReader 클래스
- 텍스트 파일을 라인 단위로 읽어 들이는 메소드 제공
- `BufferedReader` 의 서비스

### 메소드

```java
String readLine()
// 텍스트를 1행 읽어들임

int getLineNumber()
// 행 번호의 현재값을 가져옴
```

## InputStreamReader 클래스
- 바이트 입력 스트림을 캐릭터 입력 스트림으로 바꾸기 위한 클래스
- 바이트 단위로 읽은 후 문자로 바꾸어 처리함

### 생성자

```java
InputStreamReader(InputStream in)
```

### 메소드

```java
int read()
// 1개 문자를 읽어 리턴

int read(char[] cbuf, int offset, int length)
// char 배열의 offset 위치부터 length 길이만큼의
// 일부 문자를 읽어 리턴
```
