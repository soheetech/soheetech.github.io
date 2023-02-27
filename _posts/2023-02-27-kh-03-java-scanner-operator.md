---
layout: post

title: "[KH/JAVA] 스캐너(Scanner)와 연산자(operator)"
category: JAVA
tags: 
  - kh
  - java
  - scanner
  - operator

date: 2023-02-22
last_modified_at: 2023-02-25

published: true
---

<h4>스캐너(Scanner)</h4>
프로그램 실행 중 키보드 입력을 받을 수 있게 하는 역할

```java
import java.util.Scanner;
// import : 다른 패키지에 존재하는 클래스를 얻어오는 구문
// 미작성시 설계도(class)가 없어 스캐너를 못 만듦

public class ScannerExample1 {
	public static void main(String[] args) {
    
    Scanner sc = new Scanner(System.in); // 프로그램 안에 스캐너라는 기계를 만듦
    			// System.in : 키보드 입력
    
    int input = sc.nextInt(); // 입력받은 정수를 input 변수에 대입
    // nextInt() : 다음에 입력된 정수를 읽어옴(키보드로 입력된 정수를 읽어옴)
    // next() : 다음 입력되는 한 단어(String) 읽어옴, 띄어쓰기 포함 X
    // nextLine() : 다음 한 줄(Line) 읽어옴, 띄어쓰기 포함 O
    
    // nextChar()와 같은 문자 하나(char)를 입력 받는 기능은 별도로 없음
    // (char)'a' != (string)"a"
    
  }
}
```

<h4>연산자(operator)</h4>

<table>
	<tr>
		<th>종류</th>
		<th>구분</th>
		<th>세부 구분</th>
		<th>연산자</th>
		<th>우선순위</th>
	</tr>
	<tr>
		<td>최우선 연산자</td>
		<td>직접 접근 연산자</td>
		<td></td>
		<td>( ) . [ ]</td>
		<td>1</td>
	</tr>
	<tr>
		<td>단항 연산자</td>
		<td></td>
		<td></td>
		<td>+ - ! (자료형) ++ -- ~</td>
		<td>2</td>
	</tr>
	<tr>
		<td rowspan="10">이항 연산자</td>
		<td rowspan="2">산술 연산자</td>
		<td></td>
		<td>* / %</td>
		<td>3</td>
	</tr>
	<tr>
		<td></td>
		<td>+ -</td>
		<td>4</td>
	</tr>
	<tr>
		<td>쉬프트 연산자</td>
		<td></td>
		<td>>> << >>></td>
		<td>5</td>
	</tr>
	<tr>
		<td rowspan="2">비교 연산자</td>
		<td></td>
		<td>> < >= <=</td>
		<td>6</td>
	</tr>
	<tr>
		<td></td>
		<td>== !=</td>
		<td>7</td>
	</tr>
	<tr>
		<td rowspan="5">논리 연산자</td>
		<td rowspan="3">비트 논리 연산자</td>
		<td>&</td>
		<td>8</td>
	</tr>
	<tr>
		<td>^</td>
		<td>9</td>
	</tr>
	<tr>
		<td>|</td>
		<td>10</td>
	</tr>
	<tr>
		<td rowspan="2">일반 논리 연산자</td>
		<td>&&</td>
		<td>11</td>
	</tr>
	<tr>
		<td>||</td>
		<td>12</td>
	</tr>
	<tr>
		<td>삼항 연산자</td>
		<td></td>
		<td></td>
		<td>(조건식) ? 참일 때 사용 값 : 거짓일 때 사용 값</td>
		<td>13</td>
	</tr>
	<tr>
		<td rowspan="4">대입 연산자</td>
		<td>순수 대입</td>
		<td></td>
		<td>=</td>
		<td rowspan="4">14</td>
	</tr>
	<tr>
		<td rowspan="3">복합 대입</td>
		<td>산술 대입</td>
		<td>+= -= *= /= %=</td>
	</tr>
	<tr>
		<td>쉬프트 대입</td>
		<td><<= >>= >>>=</td>
	</tr>
	<tr>
		<td>비트 논리 대입</td>
		<td>&= ^= |=</td>
	</tr>
	<tr>
		<td>나열 연산자</td>
		<td></td>
		<td></td>
		<td>,</td>
		<td>15</td>
	</tr>
</table>

<h5>산술 연산자</h5>
일반 수학과 동일한 연산 방법, 우선순위.
단, %는 나눗셈의 나머지 값을 구하는 연산이며 / 연산시 형변환에 유의

<h5>증감 연산자(++, --)</h5>
피연산자의 값에 1을 더하거나 빼는 연산자, 위치에 따라 결과 값이 다르게 나타남
- 전위 연산: 연산자가 앞쪽에 배치, 먼저 연산 후 다른 연산 실행
- 후위 연산: 연산자가 뒤쪽에 배치, 다른 연산 우선 실행 후 연산

<h5>비교 연산자(==, !=)</h5>
데이터가 같은지, 다른지 비교할 때 사용, 결과값은 항상 논리값(T, F)으로 나타남<br />
두 피연산자의 값의 크기 비교, 기본형 boolean과 참조형을 제외하고 나머지 자료형에 모두 사용 가능<br />
*== 같다: 등호 1개(=)는 대입 연산자로 사용, 구분을 위해 등호 2개(==)를 '같다'라는 의미로 사용*<br />
*문자열(String) 비교하기: 문자열1.equals(문자열2) 사용*

<h5>논리 연산자</h5>
논리 값 두 개를 비교하는 연산자

- &&(AND): 양쪽 다 T일 때만 T
  + 와, 그리고(~이고), ~면서, ~이면서, ~부터 ~까지, ~사이
  + ex) 사과와 바나나, 사과 그리고 바나나, 사과면서 바나나
- ||(OR): 양쪽 다 F일 때만 F
  + 또는, ~거나, ~이거나

<h5>논리 부정 연산자(!)</h5>
논리 값을 부정하여 반대 값으로 변경, 제어문을 활용할 때 많이 쓰임

<h5>복합 대입 연산자(+=, -=, *=, /=, %=)</h5>
다른 연산자와 대입 연산자가 결합한 것으로 자기 자신과 연산 후 연산 결과를 자기 자신에게 누적 대입<br />
증감 연산과 비슷해 보이지만 증감 연산자(++, --)는 1씩 증가하고 대입 연산자는 원하는 값을 증가시키고 그 변수에 저장 가능함

<h5>삼항 연산자</h5>
조건식의 결과가 True면 식1, False면 식2를 수행하는 연산자<br />
조건식의 결과 값에 따라 연산을 처리하는 방식, 삼항 연산자 안에 삼항 연산자를 중첩해 사용 가능
```java
조건식 ? 식1 : 식2
```
*조건식 : 연산 결과가 True / False인 식(비교, 논리, 논리 부정 연산인 포함)*



