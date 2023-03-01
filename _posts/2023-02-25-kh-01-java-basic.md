---
layout: post

title: "[KH/JAVA] 자바(JAVA) 프로그래밍 기초"
category: JAVA
tags: 
  - kh
  - java
  - programming
  - basic
  - theory
  - jvm

date: 2023-02-20
last_modified_at: 2023-02-25

published: true

---

<h4>프로그래밍(Programming)이란?</h4>
- 프로그램(Program) : 컴퓨터가 인식할 수 있는 명령어의 나열(집합)
- 프로그래밍(Programming) : 프로그램을 작성하는 과정(=코딩)
- 프로그래머(Programmer) : 프로그램을 작성하는 사람
- 프로그래밍 언어 : 프로그램을 작성하기 위한 언어체계, 사람이 컴퓨터와 소통하게 하는 요소


<h5>※ 프로그래밍 언어 순위</h5>
- <a href="https://www.tiobe.com/tiobe-index/" target="_blank">TIOBE Index</a> : 프로그래밍 언어의 인기도를 나타내는 지표, 검색엔진 검색 결과 수로 순위를 매김
- <a href="http://pypl.github.io/PYPL.html" target="_blank">PYPL</a> : 구글 트렌드 통계 데이터를 기반으로 특정 프로그래밍 언어 튜토리얼이 검색된 수로 순위를 매김


<h4>JAVA 프로그래밍 언어 특징</h4>
- C/C++ 언어와 유사(문법적)하나 단순하여 사용하기 쉬운 언어
  + 능률적이고 명확한 코드 작성 가능
  + 다른 언어의 단점 보완 : 포인터, 메모리 관리
- 플랫폼에 독립적 : 운영체제(OS)와 관계 없이 Java플랫폼(실행환경)만 설치되어 있으면 동일 코드로 동작함(=이식성이 높음)
- 완전한 객체 지향 프로그래밍(OOP: Object-Oriented Programming) 언어
  + cf. C/C++언어 : 절차 지향 프로그래밍 언어
- 웹 또는 네트워크 프로그래밍 용이
- 변수의 자료형에 대한 검사가 엄격함 : 오류 ↓
- 예외 처리 기능 제공
- 자동 메모리 관리(Garbage Collection)
- 동적 로딩 지원
- 멀티 스레딩(multi-threading) 지원
  + 스레드(threa) : 하나의 프로그램 내부에서 진행될 수 있는 세부 작업흐름
  + 멀티 스레딩(multi-threading) : 하나의 프로그램 내부에서 여러 개의 세부 작업이 동시에 진행되는것
- 네트워크와 분산환경 지원


<h4>Java 프로그램</h4>
Java 프로그래밍 언어로 작성된 후 컴파일되어 Java 플랫폼에서 실행될 수 있는 프로그램(확장자 : .class) 또는 Java 언어로 작성된 소스 파일(확장자 : .java)<br />
클래스(class) 파일 또는 바이트코드(bytecode)라고도 함<br />
*바이트 코드 : Java 소스를 컴파일한 결과물로 확장자는 .class이며 클래스 파일이라고도 함, 자바 플랫폼의 JVM에서 실행 가능한 코드.*

- Java 애플리케이션 : 일반적인 운영체제에 설치된 Java 플랫폼에서 바로 실행되는 Java 프로그램, 실행을 위해 main() 함수가 필요함
- Java 애플릿 : HTML로 작성된 웹 페이지에 포함되어 웹 브라우저를 통해 실행 가능함, &lt;APPLET&gt; 태그를 이용


<h4>Java 플랫폼</h4>
프로그램의 실행을 위한 하드웨어와 소프트웨어 환경으로 운영체제도 플랫폼의 일종이라 할 수 있음<br />
Java 플랫폼은 Java 프로그램의 동작(개발과 실행)을 위한 별개의 실행환경을 의미하며 운영체제에 적합한 Java 플랫폼을 설치해야 함<br />
한 번 만들어진 Java 프로그램은 운영체제와 상관없이 Java 플랫폼이 설치되어 있는 곳이면 어디에서든 실행이 가능함("write once, run anywhere.")
*cf. C언어의 경우 운영체제가 바로 프로그램의 실행환경이 됨*


<h5>JVM(Java Virtual Machine)</h5>
Java를 실행하기 위한 가상 기계, OS(운영체제)에 관계없이 독립적으로 동작함


<h5>cf. C와 Java</h5>

- C : OS가 코드를 직접 해석하기 때문에 C언어는 OS 따라 코드가 다른 부분이 존재함
- Java : OS에 맞는 JVM을 설치해 OS 종류 관계없이 JVM이라는 가상머신이 코드를 동일하게 해석함



<h5>JVM의 Java 코드 실행 순서</h5>
코드 작성(.java) -> 실행(Ctrl+F11) -> 컴파일러(Compiler) 번역 : byte code(.class) -> JVM 전달 -> JVM : 인터프리터(Interpreter) 방식으로 한줄씩 해석

*컴파일러(Compiler): 코드를 2진수(0, 1)로 변환하는 번역기*

<h5>JVM 메모리(RAM) 구조</h5>
- Static : static 예약어로 선정된 필드, 메소드가 저장되는 공간. ex) 클래스 변수 등
- Heap : new 연산자에 의해 동적으로 할당하고 저장되는 공간. ex) 객체, 배열 등
- Stack : 메소드를 호출하면 자동생성, 메소드가 끝나면 자동소멸. ex) 지역변수, 매개변수, 메소드 호출 등

<h4>JAVA 프로그래밍</h4>

<h5>클래스(class)</h5>
객체를 만들기 위한 일종의 설계도. 자바에서 모든 코드는 반드시 클래스 안에 존재해야 하며 서로 관련된 코드들을 그룹으로 나누어 별도의 클래스를 구성, 클래스들이 모여 하나의 Java 애플리케이션을 구성함.

```java
public class 클래스명 {
  // 주석을 제외한 모든 코드는 블록 클래스 {} 내에 작성
}
```

<h5>주석(comment)</h5>
코드에 대한 설명이나 그 외 다른 정보를 넣을 때 사용하며 컴파일 시 컴파일러가 주석 부분은 건너 뜀

```java
/* 범위 주석, /와 / 사이의 내용은 주석으로 간주함 */
// 한 줄 주석, / 뒤의 내용은 주석으로 간주함
```

<h5>main(main method)</h5>
'public static void main(String[] args)'는 고정된 형태의 메서드 선언부로 Java Application을 실행하는데 필요한 메서드(프로그램 실행 시 java.exe에 의해 호출됨).<br />
모든 클래스가 main 메서드를 가지고 있어야 하는 것은 아니지만 하나의 Java 애플리케이션에는 main method를 포함한 클래스가 반드시 하나 이상 존재해야 함

```java
public class 클래스명 {
  public static void main(String[] args){ // main method 선언부
    // 코드 작성
  }
}
```

