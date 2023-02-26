---
layout: post

title: "[KH] 자바(JAVA) 프로그래밍 기초"
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

프로그램(Program): 컴퓨터가 인식할 수 있는 명령어의 나열(집합)
프로그래밍(Programming): 프로그램을 작성하는 과정(=코딩)
프로그래머(Programmer): 프로그램을 작성하는 사람
프로그래밍 언어: 프로그램을 작성하기 위한 언어체계, 사람이 컴퓨터와 소통하게 하는 요소

* 프로그래밍 언어 순위
- <a href="https://www.tiobe.com/tiobe-index/" target="_blank">TIOBE Index</a>: 프로그래밍 언어의 인기도를 나타내는 지표, 검색엔진 검색 결과 수로 순위를 매김
- <a href="http://pypl.github.io/PYPL.html" target="_blank">PYPL</a>: 구글 트렌드 통계 데이터를 기반으로 특정 프로그래밍 언어 튜토리얼이 검색된 수로 순위를 매김

JAVA 프로그래밍 언어 특징
- 운영체제(OS)에 독립적: OS 관계 없이 동일 코드로 동작함(=이식성이 높음)
- 객체 지향 프로그래밍(OOP) 언어
- 사용하기 쉬운 언어
- - 능률적이고 명확한 코드 작성 가능
- - 다른 언어의 단점 보완: 포인터, 메모리 관리
- 자동 메모리 관리(Garbage Collection)
- 동적 로딩 지원
- 멀티 쓰레드 지원
- 네트워크와 분산환경 지원

JVM(Java Virtual Machine)
Java를 실행하기 위한 가상 기계, OS(운영체제)에 관계없이 독립적으로 동작함
cf. C: OS가 코드를 직접 해석하기 때문에 C언어는 OS 따라 코드가 다른 부분이 존재함
Java: OS에 맞는 JVM을 설치해 OS 종류 관계없이 JVM이라는 가상머신이 코드를 동일하게 해석함

JVM의 Java 코드 실행 순서
코드 작성 -> 실행(Ctrl+F11) -> 컴파일러(Compiler) 번역: byte code(.class) -> JVM 전달 -> JVM: 인터프리터(Interpreter) 방식으로 한줄씩 해석
* 컴파일러(Compiler): 코드를 2진수(0, 1)로 변환하는 번역기

JAVA 프로그래밍
클래스(class)
객체를 만들기 위한 일종의 설계도. 자바에서 모든 코드는 반드시 클래스 안에 존재해야 하며 서로 관련된 코드들을 그룹으로 나누어 별도의 클래스를 구성, 클래스들이 모여 하나의 Java 애플리케이션을 구성함.

```
public class 클래스명 {
  // 주석을 제외한 모든 코드는 블록 클래스 {} 내에 작성
}
```

주석(comment): 코드에 대한 설명이나 그 외 다른 정보를 넣을 때 사용하며 컴파일 시 컴파일러가 주석 부분은 건너 뜀

```
/* 범위 주석, /와 / 사이의 내용은 주석으로 간주함 */
// 한 줄 주석, / 뒤의 내용은 주석으로 간주함
```

main(main method)
public static void main(String[] args)는 고정된 형태의 메서드 선언부로 Java Application을 실행하는데 필요한 메서드(프로그램 실행 시 java.exe에 의해 호출됨)
모든 클래스가 main 메서드를 가지고 있어야 하는 것은 아니지만 하나의 Java 애플리케이션에는 main method를 포함한 클래스가 반드시 하나 이상 존재해야 함

```
public class 클래스명 {
  public static void main(String[] args){ // main method 선언부
    // 코드 작성
  }
}
```
