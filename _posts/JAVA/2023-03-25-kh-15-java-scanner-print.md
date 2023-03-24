---
layout: post

category: JAVA
tag: Theory
title: "[KH/JAVA] 스캐너(Scanner) 클래스와 출력(Print) 메소드"

date: 2023-03-25
last_modified_at: 2023-03-25
---


# 스캐너(Scanner) 클래스
- 프로그램 실행 중 키보드나 파일로부터 다양한 자료를 입력 받을 때 사용함
- 기본적으로 공백 문자로 구분되는 단어 단위로 입력됨
- 문자열이나 기본형 값의 입력을 위해 `nextXXX()` 메소드를 제공함

```java
import java.util.Scanner;
// import : 다른 패키지에 존재하는 클래스를 얻어오는 구문
// 미작성시 설계도(class)가 없어 스캐너를 못 만듦

public class ScannerExample1 {
  public static void main(String[] args) {
    
    Scanner sc = new Scanner(System.in);
	// System.in을 이용하여 프로그램 안에 스캐너라는 기계(객체)를 만들고 사용
    // System.in : 키보드 입력
    
    int input = sc.nextInt();
    // 입력받은 정수를 input 변수에 대입

	// Scanner 클래스의 입력용 메소드
    // nextInt() : 다음에 입력된 정수를 읽어옴(키보드로 입력된 정수)
    // nextDouble() : 다음에 입력된 실수를 읽어옴(키보드로 입력된 실수)
    // next() : 다음 입력되는 한 단어(String)를 읽어 String으로 반환(띄어쓰기 포함X)
    // nextLine() : 다음 한 줄(Line) 읽어옴, 띄어쓰기 포함 O

	// hasNext() : 다음 단어가 있으면 true를 반환
	// hasNextInt(), hasNextDouble(), hasNextLine()
    
    // nextChar()와 같은 문자 하나(char)를 입력 받는 기능은 별도로 없음
    // (char)'a' != (string)"a"
    // → nextLine().charAt(0)과 같은 방법으로 값을 입력받을 수 있음
    
  }
}
```


# 출력메소드

```java
System.out.print()
// ()안의 변수, 문자, 숫자, 논리 값을 모니터에 출력
System.out.println()
// print문과 동일, 출력 후 자동으로 줄바꿈
System.out.printf("%형식", 변수 등)
// 정해져 있는 형식에 맞춰 그 형식에 맞는 값(변수)를 줄바꿈 하지 않고 출력

// %d: 정수형, %o: 8진수, %x: 16진수
// %c: 문자(''), %s: 문자열("")
// %f: 실수(소수점 아래 6자리), %e: 지수형태표현, %g: 대입 값 그대로
// %A: 16진수 실수
// %b: 논리형

// %nd: n칸을 확보하고 오른쪽 정렬
// %-nd: n칸을 확보하고 왼쪽 정렬
// %.nf: 소수점 아래 n자리까지만 표시(반올림)
```

## 이스케이프(escape)문자
일반 문자가 아닌 특수 문자 표현

<div class="table-wrapper" markdown="block">

<table>
	<tr>
		<th>특수문자</th>
		<th>문자 리터럴</th>
		<th>비고</th>
	</tr>
	<tr>
		<td>tab</td>
		<td>\t</td>
		<td>정해진 공간만큼 띄어쓰기</td>
	</tr>
	<tr>
		<td>new line</td>
		<td>\n</td>
		<td>개행(줄바꿈), 출력하고 다음라인으로 옮김</td>
	</tr>
	<tr>
		<td>역슬래쉬</td>
		<td>\\</td>
		<td rowspan="3">특수문자 사용시 백슬러시(\)를 넣고 특수문자를 넣어야 함</td>
	</tr>
	<tr>
		<td>작은 따옴표(')</td>
		<td>\'</td>
	</tr>
	<tr>
		<td>큰 따옴표(")</td>
		<td>\"</td>
	</tr>
	<tr>
		<td>유니코드</td>
		<td>\u(16진수)</td>
		<td>유니코드 표시할 때 사용</td>
	</tr>
</table>

</div>
