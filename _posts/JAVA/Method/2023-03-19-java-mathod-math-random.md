---
layout: post

category: JAVA
tag: Method
title: "[JAVA/Method] Math.random()"

date: 2023-03-03
last_modified_at: 2023-03-19
---


# Math.random()
0.0부터 1.0까지의 값(`double`형) 중 하나를 랜덤하게 반환하는 메소드

```java
// 1~45 사이의 정수형 난수 생성 예제

int random = (int)(Math.random() * 45 + 1);
// 0.0 <= x < 1.0
// 0.0 <= x * 45 < 45.0
// 1.0 <= x * 45 + 1 < 46.0
// 1 <= (int)(x * 45 + 1) < 46
```
