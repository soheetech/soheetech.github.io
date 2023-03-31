---
layout: post

category: JAVA
tag: Theory
title: "[KNOU/JAVA] 멀티 스레드 프로그래밍"

date: 2023-03-31
last_modified_at: 2023-03-31
---


# 프로세스와 스레드
- Java 프로그램은 하나의 프로세스로 만들어져 실행됨
  + 프로세스 : 실행 중인 프로그램
- 지금까지는 프로세스에서 하나의 스레드(단일 스레드)가 생성되고 `main()` 메소드가 호출되어 실행됨
  + 스레드 : 실행 중인 프로그램 내에 존재하는 소규모 실행 흐름, 경량 프로세스

## 멀티 스레드
하나의 프로세스 내부에서 여러 스레드가 만들어져 동시 실행될 수 있음

- Java 프로그램은 하나의 스레드(=`main` 스레드)로 시작됨
- `main` 스레드에서 자식 스레드를 만들어 시작시킬 수 있음
- 그러면 여러 스레드가 동시에 독립적으로 실행되고 종료됨

![image](https://user-images.githubusercontent.com/121299334/229013380-25abce64-92fe-48ff-9b29-c786e4198f8f.png)



# Thread 클래스
- 스레드의 생성과 관리를 위한 메소드를 제공
- 스레드 생성을 위해 `Thread` 유형의 객체가 필요함

## 생성자

```java
Thread()
Thread(String name)

Thread(Runnable target)
Thread(Runnable target, String name)
// Runnable 인터페이스를 구현하려면 run()을 구현해야 함
```

## 스레드 생성과 실행
`run()`을 정의하는(=스레드를 실행시키는) 두 가지 방법이 있음

### Thread 클래스의 상속

```java
class MyThread extends Thread {
// Thread 클래스를 상속받는 클래스 정의
// run() 메소드를 재정의함

	public void run(){ 
		// 스레드의 실행 코드 작성
		for(int i=0; i<10; i++)
			System.out.println(getName());
	}
	
}

public class ThreadTest {
	public static void main(String args[]){
	
		Thread t1 = new MyThread(); 
		// Thread를 상속받는 클래스 유형의 객체 생성
		
		t1.start();
		// start() 호출 : 스레드 실행 시작
		// → run() 메소드 호출

		Thread t2 = new MyThread(); t2.start();
		System.out.println("main");
	}
}
```


### Runnable 인터페이스 구현

```java
class MyThread implements Runnable {
// Runnable 인터페이스를 구현하는 클래스 정의
// run() 메소드 구현

	public void run(){ 
		// 스레드의 실행 코드 작성
		for(int i=0; i<10; i++)
			System.out.println(Thread.currentThread().getName());
	}
	
}

public class ThreadTest {
	public static void main(String args[]){
	
		Thread t1 = new Thread(new MyThread(), "thd0"); 
		// Runnable 인터페이스를 구현하는 클래스의 객체를
		// 인자로 사용하여 Thread 유형의 객체를 생성함
		
		t1.start();
		// start() 호출 : 스레드 실행 시작
		// → run() 메소드 호출

		Thread t2 = new Thread(new MyThread(), "thd1"); t2.start();
		System.out.println("main");
	}
}
```


## 멀티 스레드의 실행
- 멀티 스레드 프로그램의 실행 결과는 예측할 수 없음
  + 즉, 실행 결과가 매번 다를 수 있음
- 각 스레드는 정해진 순서 없이 독립적으로 실행됨
- `main` 스레드는 다른 스레드를 시작시키나 다른 스레드의 실행과 무관하게 실행되고 종료됨


# 스레드의 상태

- 보통 1개의 CPU를 사용해 여러 스레드가 수행됨
- CPU를 얻어 실행되고 최종적으로 종료될 때까지 여러 상태 변화를 겪음

<div class="table-wrapper" markdown="block">

| 상태 | 설명 |
| :-: | :- |
| Startable | 객체가 생성되었으나 start()의 실행 전 |
| Runnable | start() 메소드가 호출되었으나 CPU 획득 전 |
| Running | CPU를 얻어 실행 중 |
| Not Running | CPU를 잃고 중단된 상태<br />Blocked, Waiting, Timed_Waiting |
| Dead | run() 메소드가 종료된 상태 |

</div>

## 스레드의 상태 전이

![image](https://user-images.githubusercontent.com/121299334/229021971-bb230899-3a56-4f61-958a-1c086383a27a.png)


## 스레드의 상태 제어를 위한 메소드

```java
void setPriority(int newPriority)
// 스레드의 우선 순위 변경
// 높은 우선 순위를 가지는 스레드가 CPU를 얻을 확률 높음

static void sleep(long millis) throws InterruptedException
// 현재 실행 중인 스레드가 정해진 시간 동안 실행을 멈추고
// Not Running 상태로 들어감

// InterruptedException
// 스레드가 waiting, sleeping, interrupted 된 상태에서
// 다른 스레드가 Thread 클래스의 interrupt 메소드를 사용해
// 이 상태에 interrupt를 걸었을 경우 발생되는 예외

static void yield()
// 현재 실행중인 스레드가 잠시 실행을 멈추고 Runnable 상태로 들어감
// CPU를 다른 스레드에게 양보

void join() throws InterruptedException
// 스레드가 종료될 때까지 기다림
// 현재 실행 중이었던 스레드는 Not Running 상태로 들어감

// void join(long millis) : 최대 millis 시간 동안 기다림
// 기다리는 중에 다른 스레드가 이 스레드를 깨워주면
// InterruptedException을 받으며 리턴

void interrupt()
// 스레드를 인터럽트(취소/중단) 시킴
// 스레드가 wait(), join(), sleep()에 의해 중단된 상태였다면
// 그 상태에서 깨어나 Runnable 상태가 됨
```

## 스레드 상태 제어를 위한 Object 클래스의 메소드

```java
void wait() throws InterruptedException
void wait(long millis) throws InterruptedException
// 객체를 처리 중인 스레드를 정해진 시간 동안 중지시킴
// 다른 스레드가 해당 객체에 대해 notify() 메소드를 실행시켜주면
// 이 스레드가 깨어날 수 있음
// 이 메소드는 synchronized 메소드의 내부에서만 호출 가능

void notify()
// wait()를 호출해 중단된 스레드를 깨워줌
// 이 메소드는 synchronized 메소드의 내부에서만 호출 가능
```


# 스레드 동기화

## 스레드 간의 간섭
여러 개의 스레드들이 하나의 공유 객체에 동시 접근하는 경우 일관성이 깨짐

![image](https://user-images.githubusercontent.com/121299334/229029446-364153a4-86ff-47a9-b828-de9e3bc2eed7.png)


## 스레드 동기화
- 서로 다른 스레드들이 공유 자원을 다룰 때 일관성을 유지하도록 하는 것
- 한 번에 오직 한 개의 스레드만이 해당 공유 객체에 접근하도록 동기화 함

### 방법
- 상호 배제 원칙
- 키워드 `synchronized`
  + 동기화 메소드 또는 동기화 블록을 제공
  + 공유 자원을 수정할 때 다른 스레드에서 같은 코드를 수행할 수 없게 함

## synchronized 메소드
- 한번에 하나의 스레드에 의해서만 실행 가능
- `synchronized` 메소드를 실행하려면 메소드를 호출한 객체에 대한 lock을 얻어야 함
  + 다른 스레드는 동일 객체에 대해 `synchronized` 메소드를 실행할 수 없게 됨
  + `public synchronized void func() {}`
- 일부 블록만 동기화하는 것도 가능함
  + `synchronized (객체) { }`
  + 객체는 공유자원으로 대개 `this`
