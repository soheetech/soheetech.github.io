---
layout: post
---

컬렉션(Collection)
자바에서 제공하는 자료구조를 담당하는 프레임워크(모음/List, Set, Map)
추가, 삭제, 정렬 등의 기능처리가 간단하게 해결되어 자료구조적 알고리즘을 구현할 필요 없음
java.util 패키지에 포함되며, 인터페이스를 통해 정형화된 방법으로 다양한 컬렉션 클래스 이용 가능

자료구조: 메모리상에서 데이터(자료)를 구조적으로 처리하는 방법론

배열 vs 컬렉션
| 배열 | 컬렉션 |
| :-: | :-: |
| 크기 지정 후 변경 불가 | 저장하는 크기의 제약이 없음 |
| 기록된 데이터에 대한 중간 위치의 추가, 삭제가 불편함 | 추가, 삭제, 정렬 등의 기능 처리가 간단함(자료구조 내장) |
| 한 타입의 데이터만 저장 가능 | 여러 타입의 데이터 저장 가능(기본 자료형 저장 시 Wrapper클래스 사용) |

주요 인터페이스
Collection 인터페이스 : List, Set의 공통 코드를 작성한 단순한 부모 인터페이스
Java Collection : 자바의 자료 구조 모음(List, Set, Map)
| 인터페이스 분류 | 특징 | 구현 클래스 |
| :-: | :-: | :-: |
| Collection | List 계열(배열) | - 순서를 유지하고 저장<br />- 중복 저장 가능 | ArrayList, Vector, LinkedList |
| | Set계열(주머니) | - 순서를 유지하지 않고 저장, - 중복 저장 안됨 | HashSet, TreeSet |
| Map 계열(표) | - 키와 값의 쌍으로 저장, - 키는 중복 저장 안됨 | HashMap, HashTable, TreeMap, Properties |

List
자료들을 순차적으로 나열한 자료구조로 인덱스로 관리되며, 중복해서 객체 저장 가능
구현 클래스로 ArrayList와 Vector, LinkedList가 있음

주요 메소드

ArrayList
List의 후손으로 초기 저장 용량은 10으로 자동 설정되며 따로 지정도 가능
저장 용량을 초과한 객체들이 들어오면 자동으로 늘어나며 고정도 가능
동기화(Synchronized)를 제공하지 않음

Vector
List의 후손
ArrayList와 동등하지만 동기화(Synchronized)를 제공한다는 점이 ArrayList와 차이점
 List 객체들 중에서 가장 성능이 좋지 않음


 LinkedList
 List의 후손으로, 인접 참조를 링크해 체인처럼 관리
특정 인덱스에서 객체를 제거하거나 추가하게 되면 바로 앞/뒤 링크만 변경하면 되기 때문에
객체 삭제와 삽입이 빈번하게 일어나는 곳에서는 ArrayList보다 성능이 좋음

 Comparable vs Comparator

Comparable Comparator
패키지 java.lang java.util
사용 메소드 compareTo() compare()
정렬 기본 정렬기준을 구현하는데 사용 그 외 다른 여러 기준으로 정렬하고자 할 때 사용
사용법
정렬하고자 하는 객체에 Comparable를 상속받아
compareTo() 메소드를 오버라이딩해 기본 정렬 기준 재정의
 한 개의 정렬만 가능
Model.sort 패키지 안에 필요한 정렬 기준에 맞춘
클래스들을 생성하고 Comparator를 상속받아
Compare() 메소드를 오버라이딩해 정렬 기준 재정의
 여러 개의 정렬 가능

