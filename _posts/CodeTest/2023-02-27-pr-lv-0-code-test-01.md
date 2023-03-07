---
layout: post

title: '[프로그래머스/Lv.0] 두 수의 나눗셈'
category: CodeTest
tags:
- java
- programmers
- codetest

date: 2023-02-26
last_modified_at: 2023-02-27
---

<h4>문제</h4>
정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

<h5>예시</h5>
- num1 = 3, num2 = 2 → 1500
- num1 = 7, num2 = 3 → 2333
- num1 = 1, num2 = 16 → 62


<h4>오답</h4>

```java
class Solution {
    public int solution(int num1, int num2) {
    
        int answer = (int)((num1 / num2) * 1000);
        // 매개변수 num1과 num2가 int형이므로 나눗셈 단계에서 소수점 이하가 버려지는 문제가 있음
        return answer;
        
    }
}
```

<h4>정답</h4>

```java
class Solution {
    public int solution(int num1, int num2) {
        
       int answer = (int)(((double)num1 / num2) * 1000);
       // int형 매개변수 num1을 double형으로 강제 형변환 후 나눗셈하도록 하여 문제를 해결함
       // 1000이 곱해진 후 int형으로 강제 형변환하여 요구사항과 같이 소수점 이하가 버려짐
       return answer;
        
    }
}
```

