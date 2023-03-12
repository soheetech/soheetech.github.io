---
layout: post

title: '[프로그래머스/JAVA] Lv.0 두 수의 나눗셈'
category: CodeTest
tags:
- programmers

date: 2023-02-26
last_modified_at: 2023-02-27
---

# 문제
정수 `num1`과 `num2`가 매개변수로 주어질 때, `num1`을 `num2`로 나눈 값에 1,000을 곱한 후 정수 부분을 `return` 하도록 `solution` 함수를 완성해주세요.

## 예시
<div class="table-wrapper" markdown="block">
    
| num1 | num2 | result |
|:-:|:-:|:-:|
| 3 | 2 | 1500 |
| 7 | 3 | 2333 |
| 1 | 16 | 62 |
    
</div>



# 오답

```java
class Solution {
    public int solution(int num1, int num2) {
    
        int answer = (int)((num1 / num2) * 1000);
        // 매개변수 num1과 num2가 int형
        // -> 나눗셈 단계에서 소수점 이하가 버려지는 문제 있음
        return answer;
        
    }
}
```



# 풀이

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


