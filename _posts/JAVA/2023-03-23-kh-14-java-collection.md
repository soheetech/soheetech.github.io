---
layout: post

category: JAVA
tag: Theory
title: "[KH/JAVA] 컬렉션(Collection)"

date: 2023-03-15
last_modified_at: 2023-03-23
---

# JCF(Java collections Framework)
- 컬렉션을 표현하고 다루기 위한 통합된 프레임워크
  + 클래스와 인터페이스의 집합
  + 다양한 방식으로 저장, 정렬, 검색, 수정하는 도구를 제공
- 컬렉션을 일관된 방법으로 다룰 수 있음
  + 표준화된 인터페이스 : 컬렉션의 기능을 표현
    * 어떻게 표현되는지와 상관없이 일관성 있게 다룸
  + 클래스 : 인터페이스를 구현한 클래스를 제공


## 컬렉션(Collection)

- 여러 원소를 하나의 그룹으로 묶어 관리해주는 객체
- 자바에서 제공하는 자료구조를 담당하는 프레임워크(모음/List, Set, Map)
- 추가, 삭제, 정렬 등의 기능처리가 간단하게 해결되어 자료구조적 알고리즘을 구현할 필요 없음
- `java.util` 패키지에 포함되며, 인터페이스를 통해 정형화된 방법으로 다양한 컬렉션 클래스 이용 가능

### 자료구조
메모리상에서 데이터(자료)를 구조적으로 처리하는 방법론

![image](https://user-images.githubusercontent.com/121299334/226968311-43af7975-6317-4649-b955-365127e71a38.png)


### 배열 vs 컬렉션

<div class="table-wrapper" markdown="block">

| 배열 | 컬렉션 |
| :-: | :-: |
| 크기 지정 후 변경 불가<br />(필요에 따라 공간 조절 불가) | 저장하는 크기의 제약이 없음 |
| 기록된 데이터에 대한 중간 위치의 추가, 삭제가 불편함 | 추가, 삭제, 정렬 등의 기능 처리가 간단함<br />(자료구조 내장) |
| 한 타입의 데이터만 저장 가능 | 여러 타입의 데이터 저장 가능<br />(기본 자료형 저장 시 Wrapper클래스 사용) |

</div>

## JCF의 구조

![image](https://user-images.githubusercontent.com/121299334/226969324-fd8587fb-5466-4a92-aa58-510855fa3595.png)

- Collection 인터페이스 : List, Set의 공통 코드를 작성한 단순한 부모 인터페이스
- Java Collection : 자바의 자료 구조 모음(List, Set, Map)

<div class="table-wrapper" markdown="block">

<table>
	<tr>
		<th colspan="2">인터페이스 분류</th>
		<th>특징 (자료구조)</th>
		<th>구현 클래스</th>
	</tr>
	<tr>
		<td rowspan="3">Collection</td>
		<td>List 계열<br />(배열)</td>
		<td>- 순서를 유지하고 저장<br />- 중복 저장 가능</td>
		<td>ArrayList, Vector(Stack), LinkedList</td>
	</tr>
	<tr>
		<td>Set계열<br />(주머니)</td>
		<td>- 순서를 유지하지 않고 저장<br />(=순서에 의미가 없음)<br />- 중복 저장 안됨</td>
		<td>HashSet, TreeSet, LinkedHashSet</td>
	</tr>
	<tr>
		<td>Queue</td>
		<td>- List와 유사<br />- 원소의 삽입/삭제가 FIFO 방식</td>
		<td>LinkedList</td>
	</tr>
	<tr>
		<td colspan="2">Map 계열(표)</td>
		<td>- 키와 값을 쌍으로 저장 : &lt;key, value&gt;<br />- 키는 중복 저장 안됨(=유일함)</td>
		<td>HashMap, HashTable, TreeMap, Properties</td>
	</tr>
</table>

</div>


## JCF의 인터페이스와 클래스
- `java.util` 패키지에 포함되며 제네릭 타입
- 다루는 자료의 유형을 지정해야 함

<div class="table-wrapper" markdown="block">

|  | Set | List | Queue | Map |
| :-: | :- | :- | :- | :- |
| 해싱 | HashSet | | | HashMap |
| 배열 | | ArrayList<br />Vector(Stack) | | |
| 연결리스트 | | LinkedList | LinkedList | |
| 해싱+연결리스트 | LinkedHashSet | | | LinkedHashMap |
| | SortedSet | | | SortedMap |
| 트리 | TreeSet | | | TreeMap |

</div>

## 컬렉션 객체의 선언
변수 선언은 해당 인터페이스 유형으로 객체 생성은 인터페이스를 구현하는 클래스를 사용

```java
Set<Integer> set = new HashSet<>();
List<Integer> list = new ArrayList<>();
List<Integer> list = new LinkedList<>();
Queue<Integer> queue = new LinkedList<>();
Map<String, Integer> map = new HashMap<>();
```

## Collection&lt;E&gt; 인터페이스
Set, List, Queue에서 공통으로 지원해야 하는 기능을 정의

### 원소 삽입/삭제 메소드

```java
boolean add(E e)
// 지정된 요소를 이 컬렉션에 추가함
// 컬렉션에 변화를 주면 true 리턴

boolean addAll(Collection<? extends E> c)
// 지정된 컬렉션의 모든 요소를 이 컬렉션에 추가함

boolean remove(Object o)
// 지정된 요소의 인스턴스가 이 컬렉션에 있으면
// 그 인스턴스를 컬렉션으로부터 1개 삭제함

boolean removeAll(Collection<?> c)
// 지정된 컬렉션에도 포함되고 있는 이 컬렉션의 모든 요소 삭제

boolean retainAll(Collection<?> c)
// 이 컬렉션에 대해 지정된 컬렉션에 포함되고 있는 요소만 보관 유지

void clear()
// 이 컬렉션으로부터 모든 요소를 삭제함
```

### 원소 탐색 메소드

```java
boolean contains(Object o)
// 컬렉션으로 지정된 요소가 있는 경우에 true 리턴

boolean containsAll(Collection<?> c)
// 이 컬렉션 내에 지정된 컬렉션의 모든 요소가 있는 경우 true 리턴

boolean isEmpty()
// 컬렉션에 요소가 없는 경우에 true 리턴
```

### 기타 메소드

```java
int size()
// 이 컬렉션 요소의 수를 리턴

int hashCode()
// 컬렉션의 해시코드값을 리턴

Object[] toArray()
// 이 컬렉션의 요소가 모두 포함되고 있는 배열을 돌려줌

Iterator<E> iterator()
// 컬렉션 요소의 반복자(iterator)를 리턴

// [반복자를 사용하는 이유]
// - 컬렉션 클래스 종류에 상관없이 동일한 형태의 데이터 참조방식을 유지할 수 있음
//   → 컬렉션 클래스 교체로 인한 영향 거의 없음
// - 컬렉션 클래스별 데이터 참조방식을 별도로 확인할 필요가 없음

boolean equals(Object)
// 지정된 객체와 이 컬렉션이 동일한지 비교함
```


# HashSet, ArrayList, LinkedList 클래스

## HashSet 클래스
- 저장 순서를 유지하지 않고 중복을 허용하지 않음(= Set 클래스 특징)
- 가장 많이 사용하는 Set 클래스
- 해시 알고리즘을 사용하여 검색속도가 매우 빠름
- 내부적으로 HashMap 인스턴스를 이용하여 요소를 저장함


## List&lt;E&gt; 인터페이스

- 자료들을 순차적으로 나열한 자료구조로 인덱스로 관리되며, 중복해서 객체 저장 가능
- 첨자에 의한 특정 위치의 원소 처리 가능
- 구현 클래스로 ArrayList와 Vector, LinkedList가 있음

![image](https://user-images.githubusercontent.com/121299334/226970950-2c6dddd9-25e9-4f08-b649-9bdd75d7eeaa.png)


### 주요 메소드

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

## ArrayList 클래스

- List 인터페이스를 구현한 클래스로 크기 조절이 가능한 배열로 구현
- 초기 저장 용량은 10으로 자동 설정되며 따로 지정도 가능
  + 저장 용량을 초과한 객체들이 들어오면 자동으로 늘어나며 고정도 가능
- 같은 자료가 중복될 수 있으며 입력된 순서대로 관리됨
  + 특정 위치의 자료를 참조할 수 있음
- 동기화(Synchronized)를 제공하지 않음
  + 동기화: 하나의 자원(데이터)에 대해 여러 스레드가 접근하려 할 때 한 시점에서 하나의 스레드만 사용할 수 있도록 하는 것

![image](https://user-images.githubusercontent.com/121299334/226978122-6766dd16-7034-4243-83c9-b06b7162d805.png)


## Vector 클래스

- List의 후손
- ArrayList와 동등하지만 동기화(Synchronized)를 제공한다는 점이 ArrayList와 차이점
- List 객체들 중에서 가장 성능이 좋지 않음

![image](https://user-images.githubusercontent.com/121299334/226978328-f93bf516-e5a9-47f7-9836-3844865b7360.png)


## LinkedList 클래스

- List의 후손으로, 인접 참조를 링크해 체인처럼 관리
- Queue 인터페이스를 구현함
- 특정 인덱스에서 객체를 제거하거나 추가하게 되면 바로 앞/뒤 링크만 변경하면 되기 때문에 객체 삭제와 삽입이 빈번하게 일어나는 곳에서는 ArrayList보다 성능이 좋음
- 스택 자료구조에서 필요한 메소드도 제공함

![image](https://user-images.githubusercontent.com/121299334/226978821-93c63b55-7383-498b-8a22-1964036faed1.png)


## Iterator&lt;E&gt; 인터페이스
- 컬렉션에 저장된 원소를 차례대로 다룰 수 있음
- HashSet, ArrayList, LinkedList 등에서 Iterator 객체를 리턴하는 메소드가 정의됨

### 메소드

```java
boolean hasNext()
E next()
void remove()
```

### 사용 예

```java
List <String> list = new ArrayList <String> ();

Iterator <String> it = list.iterator();
while(it.hasNext())
	System.out.println(it.next());
```


# HashMap 클래스 
- 해싱을 이용해 Map 인터페이스를 구현한 클래스
- 자료 탐색 방법이 ArrayList나 LinkedList 클래스와 다름
- 복잡한 자료 관리에 유용함

## Map<K, V> 인터페이스
- (Key, value)을 갖는 원소로 구성되는 컬렉션을 다루기 위한 인터페이스
- key는 중복되지 않으며 하나의 key에 하나의 value만 대응됨

### 메소드

```java
V put(K key, V value)
// 지정된 값과 지정된 키를 이 맵에 관련 지음

V get(Object key)
// 지정된 키가 맵 되고 있는 값을 리턴

V remove(Object key)
// 지정된 키의 매핑이 있으면 맵으로부터 삭제함

boolean containsKey(Object key)
// 맵이 지정된 키의 매핑을 보관, 유지하는 경우 true 리턴

Collection<V> values()
// 이 맵에 포함되는 값을 돌려줌

Set<K> keySet()
// 이 맵에 포함되는 키 값을 모아 Set 형태로 반환
```




# Comparable vs Comparator

<div class="table-wrapper" markdown="block">

| | Comparable | Comparator |
| :-: | :-: | :-: |
| 패키지 | java.lang | java.util |
| 사용 메소드 | compareTo() | compare() |
| 정렬 | 기본 정렬기준을 구현하는데 사용 | 그 외 다른 여러 기준으로 정렬하고자 할 때 사용 |
| 사용법 | 정렬하고자 하는 객체에 Comparable를 상속받아 compareTo() 메소드를 오버라이딩해 기본 정렬 기준 재정의<br />→ 한 개의 정렬만 가능 | Model.sort 패키지 안에 필요한 정렬 기준에 맞춘 클래스들을 생성하고 Comparator를 상속받아 Compare() 메소드를 오버라이딩해 정렬 기준 재정의<br />→ 여러 개의 정렬 가능 |

</div>


# Collections.sort()

```java
Collections.sort(List<T> list) 
// T 객체에 Comparable을 상속받아 compareTo 메소드 재정의를 통해 정렬 구현 (단 한 개의 정렬)

Collections.sort(List<T> list, Comparator<T> c)
// 지정한 Comparator클래스에 의한 정렬(여러 개의 정렬)
```

