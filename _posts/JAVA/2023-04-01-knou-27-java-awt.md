---
layout: post

category: JAVA
tag: Theory
title: "[KNOU/JAVA] AWT 컨트롤 클래스"

date: 2023-04-01
last_modified_at: 2023-04-01
---


# 윈도 프로그램 만들기

## 그래픽 사용자 인터페이스(GUI: Graphic User Interface)
- 그래픽 요소를 이용하여 사용자가 프로그램과 대화하는 방식의 인터페이스
- 텍스트 기반 또는 명령 행 인터페이스(CLI)와 비교됨

### GUI 프로그래밍을 위해 필요한 것
- GUI 컴포넌트
  + 윈도우, 메뉴, 버튼, 레이블, 콤보박스, 체크박스, 텍스트필드, 스크롤바, 대화상자 등
- 컨트롤, 이벤트 발생과 처리 : 사용자 상호작용
- 컨테이너와 배치 관리자

## AWT(Abstract Window Toolkit)
- AWT는 자바에서 처음 제공한 GUI용 API
- 주 패키지는 `java.awt`
- 운영체제의 윈도우 시스템을 사용함
  + 중량 컴포넌트로 외양이 운영체제마다 다름

### JFC(Java Foundation Class)
- GUI를 만들거나 그래픽 처리를 위한 클래스 라이브러리
- AWT, Swing, Java2D, 룩앤필 지원  API 등을 제공
  + JavaFX, 3D, Sound, Image 관련 API도 있음


## 윈도 프로그램 만들기

```java
import java.awt.*;

class MyFrame extends Frame {
// Frame 클래스를 상속받아 클래스를 정의함

// Frame 클래스
// 프레임은 제목표시줄, 경계, 최소/최대/종료 버튼과 같은
// 윈도우 장식을 가짐

	public MyFrame(String title) { // 생성자
		// 윈도우의 주요 속성을 지정함
		
		super(title);
		// 제목을 인자로 받아 지정
		this.setSize(400, 300);
		// 가로와 세로 크기를 지정
		this.setVisible(true);
		// 화면에 표시
	}
	public void paint(Graphics g) { // 문자열 출력
	// paint() 메소드 : '다시 그리기' 이벤트가 발생할 때
	// 자동 호출되는 메소드
		g.drawString("Hello AWT", 150, 150);
	}
}

public class HelloAWT2 {
	public static void main(String args[ ]) {
		MyFrame myFrame = new MyFrame("Hello AWT");
	}
}
```



# GUI 컴포넌트

## AWT 패키지의 GUI 컴포넌트

<div class="table-wrapper" markdown="block">

| 분류 | 의미 | 클래스 |
| :-: | :- | :- |
| 컨트롤 | 사용자와 실제 의사소통하는 GUI 컴포넌트 | Button, Label, Canvas, Choice, Checkbox, Menu 등 |
| 컨테이너 | 하나 이상의 컨트롤을 포함하고 레이아웃을 관리 | Panel, Frame, Window, Dialog 등 |

</div>

### 기타 클래스

- 컴포넌트 배치
  + BorderLayout, FlowLayout, GridLayout, CardLayout 등
- 그래픽 출력
  + Color, Font, Point, Graphics, Image 등

## 컴포넌트 클래스 계층 구조

![image](https://user-images.githubusercontent.com/121299334/229163038-42892083-952b-442a-a208-d02f6a7d1705.png)


## Component 클래스
- 메뉴를 제외한 AWT 컴포넌트들의 최상위 추상 클래스
- 이름, 기준 좌표, 크기, 배경색/전경색, 폰트, `visible` 속성, `Graphics` 객체와 같은 속성을 가짐
- 컴포넌트의 기본 메소드들을 정의

```java
// 컴포넌트의 기본 메소드 일부

void paint(Graphics)
Container getParent()
void setVisible(boolean b)
void setSize(int, int)
void setBackground(Color c)
```

## 컨테이너
- 다른 컴포넌트를 포함하는 컴포넌트
  + 컨트롤은 컨테이너에 포함되어야 함
- 최상위 클래스는 추상 클래스인 `Container`
  + 하위 컨테이너를 위한 기본 메소드를 제공
- 자식 컴포넌트들의 배치(위치와 크기)를 담당
  + 기본 배치 관리자를 가짐
    * `Frame`의 경우 `BorderLayout`
    * `Panel`은 `FlowLayout`
  + 배치 관리자를 변경할 수 있음 : `void setLayout(LayoutManager)`
- 자식 컴포넌트를 리스트 형태로 관리함
  + 컨테이너에 추가되는 컴포넌트들은 순서지정이 없다면 맨 뒤에 들어감

### `Container` 클래스에 자식 컴포넌트를 추가하는 메소드

```java
Component add(Component comp)
// 마지막에 추가

Component add(Component comp, int index)
// 지정된 위치(index)에 추가

void add(Component comp, Object constraints)
// 마지막에 추가, 두번째 인자는 배치 관리자에게 주는 정보
```

## 최상위 수준 컨테이너
- 컴포넌트 간 포함 관계에서 루트가 되는 컨테이너
  + 모든 GUI 컴포넌트는 1개의 컨테이너에 포함됨
- Frame, Window, Dialog 등

### 일반 컨테이너
Panel, ScrollPanel

## Window 클래스
최상위 수준의 컨테이너

- 다른 컨테이너의 사각 영역에 포함될 수 없음
- 제목이나 테두리가 없으며 메뉴바를 가지지 않음
- 기본 레이아웃은 `BorderLayout`

### 생성자

```java
Window(Frame owner)
Window(Window owner)
```


# 메뉴

## 메뉴 클래스 계층 구조

![image](https://user-images.githubusercontent.com/121299334/229166494-fc6e0231-12f5-4096-9097-8cc2f5b826a8.png)


## 풀다운 메뉴
제목 표시줄 밑의 메뉴바를 가짐

### 메뉴 만들기 과정

```java
Frame f = new Frame("Pulldown Menu");

MenuBar mb = new MenuBar();
// 메뉴바 객체 생성

Menu m = new Menu("Menu1");
// 메뉴바에 추가할 Menu 객체 생성

m.add(new MenuItem("MenuItem1"));
Menu sm = new Menu("SubMenu1");
sm.add(new MenuItem("SubMenuItem1"));
sm.add(new MenuItem("SubMenuItem2"));
m.add(sm);
m.add(new MenuItem("MenuItem2"));
// Menu에 추가할 또 다른 서브 Menu 객체나
// MenuItem 객체를 생성하고 Menu에 붙임

mb.add(m);
// 생성한 Menu를 Menubar에 추가

f.setMenubar(mb);
// 프레임에 MenuBar를 붙임

f.setSize(200, 200);
f.setBackground(Color.white);
f.setVisible(true);
```

## 팝업 메뉴
컨테이너 내부에서 어디든 나타남

### 메뉴 만들기

- `PopupMenu` 객체를 생성함
- `PopupMenu`에 `MenuItem`이나 서브 메뉴 객체를 추가 : `add()`
- `PopupMenu`를 `Frame`에 추가 : `add()`
- `PopupMenu`를 보이게 함 : `show()`


# 배치 관리자의 사용

## 배치 관리자

- 일관성 있는 배치 관리 방법을 제공하는 클래스
- 모든 컨테이너는 기본 배치 관리자를 속성으로 가짐
  + 배치 관리자를 변경할 수 있음
- 자식 컴포넌트의 크기와 위치를 자동으로 조정함
  + 컨테이너의 크기가 바뀌면 자식 컴포넌트들의 크기와 위치가 자동 재조정됨

### 자식 컴포넌트의 수동 배치

```java
myContainer.setLayout(null)
// 배치 관리자를 제거해야 함

setLocation(x, y)
setSize(width, height)
// 이후 크기와 위치를 수동 설정함
```

## 배치 관리자의 종류


## BorderLayout


## FlowLayout


## GridLayout


## CardLayout


