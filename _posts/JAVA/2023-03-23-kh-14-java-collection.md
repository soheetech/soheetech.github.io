---
layout: post

category: JAVA
tag: Theory
title: "[KH/JAVA] 컬렉션(Collection)"

date: 2023-03-15
last_modified_at: 2023-03-23
---

# 컬렉션(Collection)

- 자바에서 제공하는 자료구조를 담당하는 프레임워크(모음/List, Set, Map)
- 추가, 삭제, 정렬 등의 기능처리가 간단하게 해결되어 자료구조적 알고리즘을 구현할 필요 없음
- java.util 패키지에 포함되며, 인터페이스를 통해 정형화된 방법으로 다양한 컬렉션 클래스 이용 가능


# 자료구조
메모리상에서 데이터(자료)를 구조적으로 처리하는 방법론

![image](https://user-images.githubusercontent.com/121299334/226968311-43af7975-6317-4649-b955-365127e71a38.png)


# 배열 vs 컬렉션

<div class="table-wrapper" markdown="block">

| 배열 | 컬렉션 |
| :-: | :-: |
| 크기 지정 후 변경 불가<br />(필요에 따라 공간 조절 불가) | 저장하는 크기의 제약이 없음 |
| 기록된 데이터에 대한 중간 위치의 추가, 삭제가 불편함 | 추가, 삭제, 정렬 등의 기능 처리가 간단함<br />(자료구조 내장) |
| 한 타입의 데이터만 저장 가능 | 여러 타입의 데이터 저장 가능<br />(기본 자료형 저장 시 Wrapper클래스 사용) |

</div>


# 주요 인터페이스

![image](https://user-images.githubusercontent.com/121299334/226969324-fd8587fb-5466-4a92-aa58-510855fa3595.png)

- Collection 인터페이스 : List, Set의 공통 코드를 작성한 단순한 부모 인터페이스
- Java Collection : 자바의 자료 구조 모음(List, Set, Map)

<div class="table-wrapper" markdown="block">

<table>
	<tr>
		<th colspan="2">인터페이스 분류</th>
		<th>특징 </th>
		<th>구현 클래스</th>
	</tr>
	<tr>
		<td rowspan="2">Collection</td>
		<td>List 계열<br />(배열)</td>
		<td>- 순서를 유지하고 저장<br />- 중복 저장 가능</td>
		<td>ArrayList, Vector, LinkedList</td>
	</tr>
	<tr>
		<td>Set계열<br />(주머니)</td>
		<td>- 순서를 유지하지 않고 저장<br />- 중복 저장 안됨</td>
		<td>HashSet, TreeSet</td>
	</tr>
	<tr>
		<td colspan="2">Map 계열(표)</td>
		<td>- 키와 값의 쌍으로 저장<br />- 키는 중복 저장 안됨</td>
		<td>HashMap, HashTable, TreeMap, Properties</td>
	</tr>
</table>

</div>


# List

- 자료들을 순차적으로 나열한 자료구조로 인덱스로 관리되며, 중복해서 객체 저장 가능
- 구현 클래스로 ArrayList와 Vector, LinkedList가 있음

![image](https://user-images.githubusercontent.com/121299334/226970950-2c6dddd9-25e9-4f08-b649-9bdd75d7eeaa.png)


## 주요 메소드

<div class="table-wrapper" markdown="block">

<table>
	<tr>
		<th>기능</th>
		<th>메소드</th>
		<th>리턴타입</th>
		<th>설명</th>
	</tr>
	<tr>
		<td rowspan="4">객체추가</td>
		<td>add(E e)</td>
		<td>boolean</td>
		<td>주어진 객체를 맨 끝에 추가</td>
	</tr>
	<tr>
		<td>add(int index, E element)</td>
		<td>void</td>
		<td>주어진 인덱스에 객체를 추가</td>
	</tr>
	<tr>
		<td>addAll(Collection<? extends E> c)</td>
		<td>boolean</td>
		<td>주어진 Collection 타입 객체를 리스트에 추가</td>
	</tr>
	<tr>
		<td>set(int index, E element)</td>
		<td>E</td>
		<td>주어진 인덱스에 저장된 객체를 주어진 객체로 바꿈</td>
	</tr>
	<tr>
		<td rowspan="5">객체검색</td>
		<td>contains(Object o)</td>
		<td>boolean</td>
		<td>주어진 객체가 저장되어 있는지 여부</td>
	</tr>
	<tr>
		<td>get(int index)</td>
		<td>E</td>
		<td>주어진 인덱스에 저장된 객체를 리턴</td>
	</tr>
	<tr>
		<td>iterator()</td>
		<td>Iterator &lt;E&gt;</td>
		<td>저장된 객체를 한 번씩 가져오는 반복자 리턴</td>
	</tr>
	<tr>
		<td>isEmpty()</td>
		<td>boolean</td>
		<td>컬렉션이 비어 있는지 조사</td>
	</tr>
	<tr>
		<td>size()</td>
		<td>int</td>
		<td>저장되어 있는 전체 객체 수를 리턴</td>
	</tr>
	<tr>
		<td rowspan="3">객체삭제</td>
		<td>clear()</td>
		<td>void</td>
		<td>저장된 모든 객체를 삭제</td>
	</tr>
	<tr>
		<td>remove(int index)</td>
		<td>E</td>
		<td>주어진 인덱스에 저장된 객체를 삭제</td>
	</tr>
	<tr>
		<td>remove(Object o)</td>
		<td>boolean</td>
		<td>주어진 객체를 삭제</td>
	</tr>
</table>

</div>

## ArrayList

- List의 후손으로 초기 저장 용량은 10으로 자동 설정되며 따로 지정도 가능
- 저장 용량을 초과한 객체들이 들어오면 자동으로 늘어나며 고정도 가능
- 동기화(Synchronized)를 제공하지 않음
  + 동기화: 하나의 자원(데이터)에 대해 여러 스레드가 접근하려 할 때 한 시점에서 하나의 스레드만 사용할 수 있도록 하는 것

![image](https://user-images.githubusercontent.com/121299334/226978122-6766dd16-7034-4243-83c9-b06b7162d805.png)


## Vector

- List의 후손
- ArrayList와 동등하지만 동기화(Synchronized)를 제공한다는 점이 ArrayList와 차이점
- List 객체들 중에서 가장 성능이 좋지 않음

![image](https://user-images.githubusercontent.com/121299334/226978328-f93bf516-e5a9-47f7-9836-3844865b7360.png)


## LinkedList

- List의 후손으로, 인접 참조를 링크해 체인처럼 관리
- 특정 인덱스에서 객체를 제거하거나 추가하게 되면 바로 앞/뒤 링크만 변경하면 되기 때문에 객체 삭제와 삽입이 빈번하게 일어나는 곳에서는 ArrayList보다 성능이 좋음

![image](https://user-images.githubusercontent.com/121299334/226978821-93c63b55-7383-498b-8a22-1964036faed1.png)


## Comparable vs Comparator

<div class="table-wrapper" markdown="block">

| | Comparable | Comparator |
| :-: | :-: | :-: |
| 패키지 | java.lang | java.util |
| 사용 메소드 | compareTo() | compare() |
| 정렬 | 기본 정렬기준을 구현하는데 사용 | 그 외 다른 여러 기준으로 정렬하고자 할 때 사용 |
| 사용법 | 정렬하고자 하는 객체에 Comparable를 상속받아 compareTo() 메소드를 오버라이딩해 기본 정렬 기준 재정의<br />→ 한 개의 정렬만 가능 | Model.sort 패키지 안에 필요한 정렬 기준에 맞춘 클래스들을 생성하고 Comparator를 상속받아 Compare() 메소드를 오버라이딩해 정렬 기준 재정의<br />→ 여러 개의 정렬 가능 |

</div>


## Collections.sort()

- Collections.sort(List&lt;T&gt; list) 
  + T 객체에 Comparable을 상속받아 compareTo 메소드 재정의를 통해 정렬 구현 (단 한 개의 정렬)
- Collections.sort(List&lt;T&gt; list, Comparator&lt;T&gt; c)
  + 지정한 Comparator클래스에 의한 정렬(여러 개의 정렬)




