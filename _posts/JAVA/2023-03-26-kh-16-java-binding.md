---
layout: post

category: JAVA
tag: Theory
title: "[KH/JAVA] 바인딩(Binding)"

date: 2023-03-26
last_modified_at: 2023-03-26
---

# 바인딩(Binding)
실제 실행할 메소드 코드와 호출하는 코드를 연결시키는 것

## 정적 바인딩(static binding)
프로그램이 실행되기 전 컴파일 단계에서 메소드와 메소드 호출부를 연결

## 동적 바인딩(dynamic binding)
컴파일 시 정적 바인딩된 메소드를 실행할 당시의 객체 타입을 기준으로 바인딩 되는 것

### 동적 바인딩 성립 요건
상속 관계로 이루어져 다형성이 적용된 경우, 메소드 오버라이딩이 되어 있으면 정적으로 바인딩 된 메소드 코드보다 오버라이딩 된 메소드 코드를 우선적으로 수행

```java
Car c = new Bentley();
c.drive();
```

```java
public class Car{
	public String drive(){}
}

public class Bentley extends Car{

	@Override
	public String drive() {
		return “날다”;
	}
	
}
```

![image](https://user-images.githubusercontent.com/121299334/226182661-c2620e07-1a2d-4d8d-87e7-db89d21fc5f4.png)

