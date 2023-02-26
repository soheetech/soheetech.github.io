---
layout: post
---
프로그래머스 : 두 수의 나눗셈

문제
정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요. (단, 소수점 이하 버림)

예시
num1 = 3, num2 = 2 -> 1500
num1 = 7, num2 = 3 -> 2333
num1 = 1, num2 = 16 -> 62


오답

```

class Solution {
    public int solution(int num1, int num2) {
        int answer = (int)((num1 / num2) * 1000); // 나눗셈 단계에서 소수점 이하가 버려짐
        return answer;
    }
}

```

정답

```

class Solution {
    public int solution(int num1, int num2) {
        
       int answer = (int)((double)num1 / (double)num2 * 1000); // 1000이 곱해진 후 소수점 이하가 버려짐
       return answer;
        
    }
}

```

