# 오브젝트 책 스터디

## 1. 객체, 설계

### 1.1 티켓 판매 애플리케이션 구현하기


### 1.2 무엇이 문제일까?

- 로버트 마틴은 SW 모듈이 가져야 하는 **3가지 기능**에 관해 설명한다.
  - 여기서 모듈이란 클래스, 패키지, 함수와 같은 프로그램을 구성하는 임의의 요소이다.
- 마틴에 따르면 모든 모듈은
  - 제대로 실행되야 하고
  - 변경이 용이해야 하고
  - 이해하기 쉬워야 한다.
- 1.1에서 구현한 코드의 문제점은 관람객(Audience), 판매원(TicketSeller)이 소극적이라는 점이다.
  - 이는 현실셰계와 맞지 않아 코드를 읽는 사람과의 의사소통을 방해한다.
  - 또한 하나의 클래스에 너무 많은 세부사항을 다루고 있고 Audience, TicketSeller가 변하면 Theater도 변경되는 문제점이 있다.
- 변경에 취약하다는 것은 **객체 사이의 의존성과 관련된 문제**로 객체 사이의 의존성이 과하면 결합도가 높다고 말한다.
  - 반대로 객체들이 합리적인 수준으로 의존한다면 결합도가 낮다고 말한다.

### 1.3 설계 개선하기

- 기존 코드에서 관람객과 판매원의 자율성을 높이자.
  - 이를 위해 캡슐화를 하는데, **캡슐화의 목적은 변경하기 쉬운 객체**를 만드는 것이다.
  - 객체를 **인터페이스와 구현으로 나누고 인터페이스만 공개하는 것**은 객체 간 결합도를 낮추고 변경하기 쉬운 코드를 작성하기 위한 기본 원칙이다.
- 객체 자신의 문제를 스스로 해결하도록 코드를 변경했고, 결과적으로 코드는 변경이 용이하고 이해하기 쉬운 코드로 수정되었다.
- 1.1에서 실세계에서 자율적인 존재가 아닌 가방, 매표소, 극장을 생물처럼 다뤘다.
  - 비록 현실에선 수동적인 존재라고 하더라도 일단 객체지향 세계로 들어오면 모든 것이 능동적이고 자동적인 존재로 바뀐다.
  - 레베카 워프스브록은 이처럼 능동적이고 자율적인 존재로 객체를 설계하는 원칙을 의인화라고 부른다.

### 1.4 객체지향 설계

- 어플리케이션의 **설계란 코드를 배치하는 작업**이다.
- 우리는 기능을 **구현하는 코드를 작성함과 동시에 내일 쉽게 변경할 수 있는 코드**를 작성해야 한다.
- 훌륭한 객체지향 설계란 **협력하는 객체 사이의 의존성을 적절히 관리하는 설계**다.
  - 설계를 어렵게 만드는 것은 의존성이고, 불필요한 의존성을 제거하여 객체 사이의 결합도를 낮추는 것으로 해결한다.
  - 위 예시에서 선택한 방법은 객체를 캡슐화 해서 자율성을 높이고 응집도를 높은 객체들의 공동체를 창조할 수 있게 한다.

## 2. 객체지향 프로그래밍

### 2.1 영화 예매 시스템

- 요구사항
  - `할인 조건`과 `할인 정책`이 존재한다.
    - 할인 조건
      - 상영 순번을 이용해 할인을 하는 **순서 조건**과
      - 영화 상영 시간을 이용하는 **기간 조건**이 있다.
    - 할인 정책
      - 금액 할인 정책
      - 비율 할인 정책
  - 영화 별로 하나의 할인 정책만 할당할 수 있다.
  - 할인 조건은 다수의 조건을 함께 지정할 수 있으며, 순서와 기간 조건을 섞는것도 가능하다.
  - 할인을 적용하기 위해서는 할인 조건과 할인 정책을 함께 사용한다.
    - 먼저 사용자의 예매가 할인 조건 중 만족하는게 있는지 검사한다.
    - 할인 정책은 적용돼 있지만 할인 조건을 만족하지 못하는 경우는 아예 금액을 할인 받을 수 없다.

### 2.2 객체지향 프로그래밍을 향해

- 객체지향은 클래스가 아닌 **객체에 초점을 맞출 때** 얻을 수 있다.
  - 어떤 클래스가 필요할지 고민하기 전에 **어떤 객체가 필요한지 고민**하라.
  - `클래스`는 **공통적인 상태와 행동을 공유하는 객체를 추상화** 한 것이다.
- 객체를 독립적인 존재가 아니라 기능을 구현하기 위해 협력하는 공동체의 일원으로 보자.
- 클래스를 구현하거나 다른 개발자가 정의한 클래스를 사용할 때 중요한 것은 클래스의 경계를 구분 짓는 것이다.
  - `훌륭한 클래스를 설계하기 위한 핵심`은 어떤 부분을 외부에 공개하고 어떤 부분을 감출지 결정하는 것이다.
- **자율적인 객체**
  - 데이터와 기능을 객체 내부로 함께 묶는 것을 `캡슐화`라 부른다.
  - 대부분의 `OOP` 언어들은 캡슐화에서 한 걸음 더 나아가 접근제어와 접근 수정자를 제공한다.
  - 객체 내부에 대한 접근을 통제하는 이유는 객체를 자율적인 존재로 만들기 위해서다.
  - 일반적으로 객체의 상태는 숨기고 행동만 외부에 공개해야 한다.
- **프로그래머의 자유**
  - 객체의 외부와 내부를 구분하면 클래스를 사용하는 개발자가 알아야 할 지식의 줄어들고 클래스를 만든 사람은 자유롭게 구현을
    변경할 수 있는 폭이 넓어진다. 따라서 클래스를 만들때 마다 **인터페이스와 구현을 깔끔하게 분리**하기 위해 노력해야 한다.
- **협력에 관한 짧은 이야기**
  - 객체는 다른 객체의 인터페이스에 공개된 행동을 수행하도록 요청할 수 있다.
  - 객체가 다른 객체와 상호작용할 수 있는 유일한 방법은 메시지를 전송하는 것 뿐이다.

### 2.3 할인 요금 구하기

- 할인 정책을 각각 `AmountDiscountPolicy`, `PercentDiscountPolicy` 클래스로 구현하자.
  - 부모 클래스인 `DiscountPolicy` 안에 중복 코드를 두고 위에서 `Amount, Percent`가 이 클래스를 상속받게 하자.

### 2.4 상속과 다형성

- Movie 클래스 어디에서도 할인 정책이 금액 할인 정책인지, 비율 할인 정책인지 판단하지 않는다.
  - 이를 위해 상속과 다형성에 대해 알아야 한다.
- 컴파일 시간 의존성과 실행 시간 의존성
  - 앞에서 Movie가 할인을 위해 금액 할인 정책을 사용하고 싶다면 생성자에 `AmountDiscountPolicy를` 전달하면 된다.
  - 또한 비율 할인 정책을 적용하고 싶다면 Movie 생성자에 `PercentDiscountPolicy` 인스턴스를 전달하면 된다.
  - 여기서 코드의 의존성과 실행 시점의 의존성이 다를 수 있다는 것을 뜻한다.
    - 유연하고 쉽게, 확장 가능한 객체지향 설계가 가지는 특징은 코드의 의존성과 실행 시점의 의존성이 다르다.
    - 알아야 할 것은 코드의 의존성과 실행시점의 의존성이 다르면 코드를 파악하기가 어려워진다.
    - 이 둘의 양면성은 설계가 트레이드 오프라는 것을 잘 보여준다.
      - 설계가 유연해질수록 코드를 이해하기 힘들어지고, 유연성을 억제하면 코드는 이해하기 쉽지만 재사용성과 확장성은 낮아진다.
      - 훌륭한 객체지향 설계를 위해 항상 유연성과 가독성 사이에서 고민해야 한다.
- 상속과 인터페이스
  - 상속이 가치 있는 이유는 부모가 제공하는 모든 인터페이스를 자식 클래스가 물려받을 수 있기 때문
    - 결과적으로 자식 클래스는 부모의 모든 메시지를 수신할 수 있기에, 외부객체는 자식 객체를 부모 클래스와 동일한 타입으로 간주할 수 있다.
  - Movie 입장에서는 자신과 협력하는 객체가 어떤 인스턴스인지 중요한게 아니라 `calculateDiscountAmount` 메시지를 수신할 수 있다는 점이 중요하다.
  - 자식 클래스가 부모 클래스를 대신하는 것을 업 캐스팅이라고 부른다.
- 다형성
  - 저자가 강조하는 것 중, 메서드와 메시지는 분명히 다르다.
    - Movie는 `DiscountPolicy` 인스턴스에 `calculateDiscountAmount` 메시지를 전송한다.
    - 메서드는 실행되는 시점에 실제 객체의 클래스가 무엇인지에 따라 달라진다.
    - 따라서 Movie는 동일한 메시지를 전송하지만 실제로 어떤 메서드가 실행될 것인지는 메시지를 수신하는 객체의 클래스가 무엇인가에 따라 달라진다. 이를 다형성이라고 부른다.
    - 다형성은 컴파일 시간 의존성과 실행 시간 의존성이 다를 수 있다는 사실을 기반으로 한다.
      - 프로그램을 작성할 때 Movie는 추상 클래스인 `DiscountPolicy에` 의존한다.
        - 즉 컴파일 시간 의존성은 Movie -> `DiscountPolicy로` 향한다.
      - 반면 실행 시점에 Movie 객체와 실제로 상호작용하는 객체는 `AmountDiscountPolicy` 또는 `PercentDiscountPolicy의` 인스턴스다.

### 2.5 추상화와 유연성

- DiscountPolicy는 구체적인 `AmountDiscountPolicy`, `PercentDiscountPolicy` 보다는 추상적인 개념이다.
  - 추상화의 장점은 설계가 유연해진 다는 것에 있다.
- 상속
  - 상속은 코드를 재사용하기 위해 사용되는 방법이지만 두 가지 문제가 있다.
    - 상속은 캡슐화를 위반한다.
      - 상속을 이용하기 위해서는 부모 클래스의 내부 구조를 잘 알고 있어야 한다. 결과적으로 부모 클래스가
        자식 클래스에게 노출되기 때문에 캡슐화가 약화된다.
      - 캡슐화의 약화는 자식 클래스가 부모 클래스에게 강하게 결합되기 때문에 부모가 변경되면 자식도 변경될 확률이 높다.
    - 설계를 유연하게 하지 못한다.
      - 상속은 부모와 자식의 관계를 컴파일 시점에 결정하므로 실행 시점에 객체의 종류를 변경하는 것이 불가능하다.
- 합성
  - Movie는 요금을 계산하기 위해 DiscountPolicy만 재사용한다. 이 방법이 상속과 다른 점은 Movie가 DiscountPolicy의
    인터페이스를 통해 약하게 결합된다는 것이다.
    - Movie는 DiscountPolicy가 외부에 `calculateDiscountAmount` 메서드를 제공한다는 사실만 알고 내부 구현은 모른다.
  - 이처럼 인터페이스에 정의된 메시지를 통해서만 코드를 재사용 하는 방법을 합성이라고 부른다.
  - 그렇다고 상속을 절대 사용하지 말라는 것은 아니다.
    - 그림 2.7을 보면 Movie <-> DiscountPolicy는 합성관계로 연결되어 있고 다형성을 위해서 DiscountPolicy <-> `AmountDiscountPolicy`, `PercentDiscountPolicy는` 상속 관계로 연결돼 있다.

## 3. 역할, 책임, 협력

- 객체지향의 본질은 협력하는 객체들의 공동체를 창조하는 것이다. 객체지향 설계의 핵심은 협력을 구성하기 위해
적절한 객체를 찾고 적절한 책임을 할당하는 과정에서 드러난다.

### 3.1 협력

- 객체들이 어플리케이션 기능을 위해 수행하는 상호작용을 협력이라 하고, 협력을 위해 각 객체가 가진 로직을 책임이라 부른다.
그리고 객체들이 협력 안에서 수행하는 책임들이 모여 객체가 수행하는 역할을 구성한다.
- 두 객체의 협력은 하나의 객체가 다른 객체에게 도움을 청할 때 시작된다.
  - 메시지 전송은 객체 사이의 협력을 위해 사용할 수 있는 유일한 커뮤니케이션 수단이다.
  - 메시지를 수신한 객체는 메서드를 실행해 요청에 응답한다.
- 협력이란 어떤 객체가 다른 객체에게 무엇인가를 요청하는 것이다. 한 객체는 어떤 것이 필요할 때 다른 객체에게 위임하거나
서로 협력한다.
- 객체를 자율적으로 만드는 기본적인 방법은 내부 구현을 캡슐화 하는 것이다.
  - 캡슐화를 통해 변경을 제한할 수 있기 때문에 자율적인 객체는 변경하기도 쉬워진다.
- 어떤 객체가 필요하다면 그 이유는 단 하나여야 한다. 그 객체가 협력에 참여하고 있다.
  - 어떤 객체도 섬이 아니다.
  - ch2에서 Movie는 영화를 상영하는게 아니라, 요금을 계산하는 책임을 가지고 있다. 이런 Movie의 행동을 결정하는 것은
    영화 예매를 위한 협력이다. 협력을 고려하지 않고 Movie 객체를 추가하는 것은 의미가 없다.
  - 협력이 존재하기 때문에 객체가 존재하는 것이다.
