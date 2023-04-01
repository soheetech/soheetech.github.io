---
layout: post

category: JAVA
tag: Theory
title: "[KNOU/JAVA] JDBC 프로그래밍"

date: 2023-04-02
last_modified_at: 2023-04-02
---


# JDBC와 MySQL

## 데이터베이스 프로그래밍

### JDBC(Java DataBase Connectivity) API
- Java 프로그램에서 관계형 데이터베이스를 사용하기 위한 API 규격
  + JDK의 일부로 포함되어 있음 : `java.sql`
- 데이터베이스에 연결하고 데이터베이스에 대해 질의와 갱신을 요청하고 결과를 받기 위한 프로그래밍 방법을 제공

#### JDBC 드라이버
- JDBC API는 DBMS 제조사가 제공하는 JDBC 드라이버를 통해 구현됨
- 사용하고자 하는 특정 DBMS의 JDBC 드라이버를 다운로드 받아 설치해야 JDBC API를 사용한 프로그램을 실행할 수 있음


# JDBC 프로그래밍

```java
import java.sql.*;
// JDBC 패키지를 import

public class JDBCTest {
	public static void main(String[] args){
	
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		int resultCount = 0;
		
		try{
			// Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
			// JDBC 드라이버를 동적으로 로드
			// 최신 JDBC 버전에서는 생략 가능
			
			String url = "jdbc:mysql://localhost/test";
						// jdbc:mysql://서버 주소/데이터 이름
			String user = "root"; // 사용자 아이디
			String pass = "비밀번호";
			conn = DriverManager.getConnection(url, user, pass);
			// DBMS와 연결 설정
			
			// DriverManager.getConnection()
			// URL, 사용자 아이디, 비밀번호를 이용해 MySQL 서버에 접속 시도
			// 성공시 Connection 유형의 객체를 리턴
			
			stmt = conn.createStatement();
			rs = stmt.executeQuery("SELECT * FROM book");
			// SQL 구문 실행 : Connection, Statement, ResultSet 객체 사용

			// select 구문의 실행과 결과 받기
			// Statement 객체를 생성하고 executeQuery() 호출
			// → executeQuery("select 속성명 from 테이블")
			// 쿼리 결과는 ResultSet 객체를 사용해 받음
			
			resultCount = stmt.executeUpdate("insert into 테이블명 values(⋯)");
			// executeUpdate() : 영향을 받은 행의 개수 리턴
			
			System.out.println("제목\t\t저자\t가격");
			while(rs.next()){
				System.out.print(rs.getString("title")+"\t");
								// getString("속성명");
				System.out.print(rs.getString("author")+"\t");
				System.out.println(rs.getInt("price")+"\t");
			}
		} catch(Exception ex){
			System.out.println(ex);
		} finally {
			try {
				if(rs != null) rs.close();
				if(stmt != null) stmt.close();
				if(conn != null) conn.close();
				// 연결 해제(close) : 사용 중인 데이터베이스 자원 반납
			} catch (SQLException ex) {	}
		}
	}
}

```


# DatabaseMetaData 객체
- DBMS의 정보를 가지는 객체
- 객체는 `Connection` 객체의 `getMetaData()` 메소드로 생성됨

## 주요 메소드

```java
String getDriverName()
String getURL()
String getUserName()
```

# Statement 객체
- SQL 구문을 실행하고 결과를 반환해주는 객체
- 객체는 `Connection` 객체의 `createStatement()` 메소드를 통해 생성됨

## 주요 메소드

```java
boolean execute(String sql)
// SQL 구문을 실행하며 select 구문을 실행하는 경우 true 리턴
// 이어서 getResultSet() 또는 getUpdateCount() 호출

ResultSet getResultSet()
// SQL 구문(select 구문)을 실행한 결과를 리턴

int getUpdateCount()
// SQL 구문(select 구문 제외)의 실행으로 영향을 받은 행의 개수를 리턴

ResultSet executeQuery(String sql)
// select 구문을 실행할 때 사용
// 실행 결과를 나타내는 테이블인 ResultSet 객체를 리턴

int executeUpdate(String sql)
// update, insert, delete 구문을 실행할 때 사용
// 영향 받은 행의 개수 리턴
```


# ResultSet 객체

- `select` 구문의 실행 결과를 나타내는 테이블
  + `Statement` 객체의 `getResultSet()`, `executeQuery()` 메소드가 리턴하는 객체
  + 테이블에서 한 행을 가리키는 커서를 가짐
- `select` 구문을 실행하여 `ResultSet` 객체가 생성되면 커서가 만들어지고 `select` 구문의 실행 결과를 가리킴
  + 커서는 행을 가리키는 포인터, 기본적으로 위에서 아래로 진행
  + 커서의 초기값은 첫 행의 직전 행을 가리킴

## 메소드

```java
boolean next()
// 커서를 다음 행으로 이동시킴

boolean previous()
// 커서를 이전 행으로 이동시킴

Statement getStatement()
// 현재 ResultSet을 생성시킨 Statement 객체를 리턴

String getString(int index)
String getString(String columnName)
// ResultSet 객체에서 해당 열의 문자열 리턴

int getInt(int index)
int getInt(String columnName)
// ResultSet 객체에서 해당 열의 int 값 리턴
```

# PreparedStatement 객체
- `Precompile`된 SQL문을 표현
  + 객체는 `Connection` 객체의 `prepareStatement(String sql)` 메소드를 통해 생성됨
  + 객체를 생성할 때 SQL 구문이 주어짐(실행할 때 아님)
- 같은 SQL 문을 여러 번 실행할 때 효율적임
  + SQL문에 매개 변수(`?`)를 사용하고 실행 전에 값을 지정할 수 있음

## 주요 메소드

```java
boolean execute()
ResultSet executeQuery()
int executeUpdate()
// 인자 없음
void setInt(int parameterIndex, int x)
void setString(int parameterIndex, String x)
// SQL 구문에 있는 매개 변수(?)에 값을 지정
// SQL 구문에서 첫 번째 나온 ?의 인덱스가 1임
```

## DBMS와 Java의 자료형 변환
DBMS 테이블에서 열의 자료형과 Java의 자료형 그리고 JDBC 메소드 간의 관계

<div class="table-wrapper" markdown="block">

| DBMS 자료형 | Java 자료형 | ResultSet 메소드 | PreparedStatement 메소드 |
| :-: | :-: | :-: |  :-: |
| CHAR | String | getString() | setString() |
| VARCHAR | String | getString() | setString() |
| INTEGER | int | getInt() | setInt() |
| DATE | java.sql.Date | getDate() | setDate() |

</div>


# ResultSetMetaData 객체
- `ResultSet` 객체에서 테이블의 이름, 열의 이름과 타입 정보를 얻을 때 사용되는 객체
- `ResultSet`의 `getMetaData()` 메소드로 생성함

## 주요 메소드

```java
String getColumnName(int index)
// index 위치의 컬럼 이름 리턴
int getColumnCount()
// ResultSet의 컬럼 개수 리턴
int getColumnType(int index)
// index 위치의 컬럼 자료형 리턴
String getTableName(int index)
// index 위치의 컬럼을 포함하는 테이블 이름 리턴
```
