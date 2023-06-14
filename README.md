# 오브젝트 책 스터디

## 1. 객체, 설계

### 1.1 티켓 판매 애플리케이션 구현하기


### 1.2 무엇이 문제일까?

- `로버트 마틴`은 SW 모듈이 가져야 하는 **3가지 기능**에 관해 설명한다.
  - 여기서 모듈이란 `클래스, 패키지, 함수`와 같은 프로그램을 구성하는 임의의 요소이다.
- 마틴에 따르면 모든 모듈은
  - 제대로 실행되야 하고
  - 변경이 용이해야 하고
  - 이해하기 쉬워야 한다.
- 1.1에서 구현한 코드의 문제점은 `관람객(Audience), 판매원(TicketSeller)이` **소극적**이라는 점이다.
  - 이는 현실셰계와 맞지 않아 코드를 읽는 사람과의 의사소통을 방해한다.
  - 또한 하나의 클래스에 너무 많은 세부사항을 다루고 있고 `Audience, TicketSeller`가 변하면 `Theater`도 변경되는 문제점이 있다.
- 변경에 취약하다는 것은 **객체 사이의 의존성과 관련된 문제**로 **객체 사이의 의존성이 과하면 결합도가 높다**고 말한다.
  - 반대로 객체들이 합리적인 수준으로 의존한다면 결합도가 낮다고 말한다.

### 1.3 설계 개선하기

- 기존 코드에서 관람객과 판매원의 자율성을 높이자.
  - 이를 위해 캡슐화를 하는데, **캡슐화의 목적은 변경하기 쉬운 객체**를 만드는 것이다.
  - 객체를 **인터페이스와 구현으로 나누고 인터페이스만 공개하는 것**은 객체 간 결합도를 낮추고 변경하기 쉬운 코드를 작성하기 위한 기본 원칙이다.
- 객체 자신의 문제를 스스로 해결하도록 코드를 변경했고, 결과적으로 코드는 변경이 용이하고 이해하기 쉬운 코드로 수정되었다.
- 1.1에서 실세계에서 자율적인 존재가 아닌 **가방, 매표소, 극장을 생물**처럼 다뤘다.
  - 비록 현실에선 수동적인 존재라고 하더라도 일단 객체지향 세계로 들어오면 모든 것이 능동적이고 자동적인 존재로 바뀐다.
  - 레베카 워프스브록은 이처럼 능동적이고 자율적인 존재로 객체를 설계하는 원칙을 `의인화`라고 부른다.

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
  - 여기서 코드의 **의존성과 실행 시점의 의존성**이 다를 수 있다는 것을 뜻한다.
    - 유연하고 쉽게, 확장 가능한 객체지향 설계가 가지는 특징은 코드의 의존성과 실행 시점의 의존성이 다르다.
    - 알아야 할 것은 코드의 의존성과 실행시점의 의존성이 다르면 코드를 파악하기가 어려워진다.
    - 이 둘의 양면성은 설계가 `트레이드 오프`라는 것을 잘 보여준다.
      - 설계가 유연해질수록 코드를 이해하기 힘들어지고, 유연성을 억제하면 코드는 이해하기 쉽지만 재사용성과 확장성은 낮아진다.
      - 훌륭한 객체지향 설계를 위해 항상 유연성과 가독성 사이에서 고민해야 한다.
- 상속과 인터페이스
  - 상속이 가치 있는 이유는 부모가 제공하는 모든 인터페이스를 자식 클래스가 물려받을 수 있기 때문
    - 결과적으로 자식 클래스는 부모의 모든 메시지를 수신할 수 있기에, 외부객체는 자식 객체를 부모 클래스와 동일한 타입으로 간주할 수 있다.
  - Movie 입장에서는 자신과 협력하는 객체가 어떤 인스턴스인지 중요한게 아니라 `calculateDiscountAmount` 메시지를 수신할 수 있다는 점이 중요하다.
  - 자식 클래스가 부모 클래스를 대신하는 것을 **업 캐스팅**이라고 부른다.
- 다형성
  - 저자가 강조하는 것 중, `메서드와 메시지`는 분명히 다르다.
    - Movie는 `DiscountPolicy` 인스턴스에 `calculateDiscountAmount` 메시지를 전송한다.
    - 메서드는 실행되는 시점에 실제 객체의 클래스가 무엇인지에 따라 달라진다.
    - 따라서 Movie는 동일한 메시지를 전송하지만 실제로 어떤 메서드가 실행될 것인지는 메시지를 수신하는 객체의 클래스가 무엇인가에 따라 달라진다. 이를 **다형성**이라고 부른다.
    - 다형성은 컴파일 시간 의존성과 실행 시간 의존성이 다를 수 있다는 사실을 기반으로 한다.
      - 프로그램을 작성할 때 Movie는 추상 클래스인 `DiscountPolicy에` 의존한다.
        - 즉 컴파일 시간 의존성은 Movie -> `DiscountPolicy로` 향한다.
      - 반면 실행 시점에 Movie 객체와 실제로 상호작용하는 객체는 `AmountDiscountPolicy` 또는 `PercentDiscountPolicy의` 인스턴스다.

### 2.5 추상화와 유연성

- DiscountPolicy는 구체적인 `AmountDiscountPolicy`, `PercentDiscountPolicy` 보다는 추상적인 개념이다.
  - 추상화의 장점은 설계가 유연해진 다는 것에 있다.
- **상속**
  - 상속은 코드를 재사용하기 위해 사용되는 방법이지만 두 가지 문제가 있다.
    - **상속은 캡슐화를 위반한다.**
      - 상속을 이용하기 위해서는 부모 클래스의 내부 구조를 잘 알고 있어야 한다. 결과적으로 부모 클래스가
        자식 클래스에게 노출되기 때문에 캡슐화가 약화된다.
      - 캡슐화의 약화는 자식 클래스가 부모 클래스에게 강하게 결합되기 때문에 부모가 변경되면 자식도 변경될 확률이 높다.
    - **설계를 유연하게 하지 못한다.**
      - 상속은 부모와 자식의 관계를 컴파일 시점에 결정하므로 실행 시점에 객체의 종류를 변경하는 것이 불가능하다.
- **합성**
  - Movie는 요금을 계산하기 위해 `DiscountPolicy`만 재사용한다. 이 방법이 상속과 다른 점은 Movie가 `DiscountPolicy의`
    인터페이스를 통해 약하게 결합된다는 것이다.
    - Movie는 `DiscountPolicy`가 외부에 `calculateDiscountAmount` 메서드를 제공한다는 사실만 알고 내부 구현은 모른다.
  - 이처럼 인터페이스에 정의된 메시지를 통해서만 코드를 재사용 하는 방법을 합성이라고 부른다.
  - 그렇다고 상속을 절대 사용하지 말라는 것은 아니다.
    - 그림 2.7을 보면 `Movie <-> DiscountPolicy`는 합성관계로 연결되어 있고 다형성을 위해서 DiscountPolicy <-> `AmountDiscountPolicy`, `PercentDiscountPolicy는` 상속 관계로 연결돼 있다.

## 3. 역할, 책임, 협력

- 객체지향의 본질은 **협력하는 객체**들의 공동체를 창조하는 것이다. 객체지향 설계의 핵심은 **협력**을 구성하기 위해
적절한 객체를 찾고 적절한 **책임**을 할당하는 과정에서 드러난다.

### 3.1 협력

- 객체들이 어플리케이션 **기능을 위해 수행하는 상호작용을 협력**이라 하고, 협력을 위해 각 **객체가 가진 로직을 책임**이라 부른다. 그리고 객체들이 협력 안에서 수행하는 **책임들이 모여 객체가 수행하는 역할**을 구성한다.
- 두 객체의 협력은 하나의 객체가 다른 객체에게 도움을 청할 때 시작된다.
  - **메시지 전송**은 객체 사이의 협력을 위해 사용할 수 있는 유일한 커뮤니케이션 수단이다.
  - 메시지를 수신한 객체는 메서드를 실행해 요청에 응답한다.
- `협력`이란 어떤 객체가 다른 객체에게 무엇인가를 요청하는 것이다. 한 객체는 어떤 것이 필요할 때 다른 객체에게 위임하거나
서로 협력한다.
- 객체를 **자율적으로 만드는 기본적인 방법은 내부 구현을 캡슐화** 하는 것이다.
  - 캡슐화를 통해 변경을 제한할 수 있기 때문에 자율적인 객체는 변경하기도 쉬워진다.
- 어떤 객체가 필요하다면 그 이유는 단 하나여야 한다. 그 객체가 협력에 참여하고 있다.
  - 어떤 객체도 섬이 아니다.
  - ch2에서 Movie는 영화를 상영하는게 아니라, 요금을 계산하는 책임을 가지고 있다. 이런 Movie의 행동을 결정하는 것은
    영화 예매를 위한 협력이다. 협력을 고려하지 않고 Movie 객체를 추가하는 것은 의미가 없다.
  - 협력이 존재하기 때문에 객체가 존재하는 것이다.

### 3.2 책임

- **협력에 참여하기 위해 객체가 수행하는 행동을 책임**이라고 부른다.
  - 객체의 책임은 객체가 `무엇을 알고 있는가`와 `무엇을 할 수 있는가`로 구성된다.
- 책임과 메시지는 다른데, 책임은 객체가 수행할 수 있는 행동을 종합적이고 간략하게 서술하기에 메시지보다 추상적이고 개념적으로 더 크다.
- **객체지향 설계**는 협력에 필요한 메시지를 찾고, 메시지에 적절한 객체를 선택하는 반복적인 과정을 통해 이뤄진다.
- 메시지가 객체를 결정한다.
  - 책임을 할당하는데 필요한 메시지를 먼저 식별하고 메시지를 처리할 객체를 나중에 선택한 것이 중요하다.
    - 메시지가 객체를 선택하게 했다.
  - **메시지가 객체를 선택하게 해야 하는 이유**
    - 객체가 최소한의 인터페이스(public method)를 가질 수 있다. 추가적인 메시지가 필요할 때까지 객체의 퍼블릭 인터페이스에 어떤 것도 추가하지 않을 수 있다.
    - 추상적인 인터페이스를 가질 수 있게 된다. 객체의 인터페이스는 무엇을 하는지 표현해야지, 어떻게 수행하는지를 노출해선 안된다. 메시지는 외부의 객체가 요청하는 무언가를 의미하기 때문에 메시지를 먼저 식별하면, 무엇을 수행할지에 초첨을 맞추는 인터페이스를 얻을 수 있다.
- 행동이 상태를 결정한다.
  - 객체지향 초보자들은 먼저 객체에 필요한 상태가 무엇인지 결정하고, 그 후에 필요한 행동을 결정한다.
  - 중요한 것은 객체의 상태가 아니라 행동이다. **객체의 행동을 먼저 결정하고 상태를 결정**해야 한다.

### 3.3 역할

- 객체가 어떤 협력 안에서 **수행하는 책임의 집합을 역할**이라고 부른다.
- 동일한 책임을 수행하는 **역할을 기반으로 두 개의 협력을 하나로 통합** 할 수 있다.
  - ex) 할인 정책에서 가격 정책, 퍼센트 정책을 `DiscountPolicy` 하나로 통합한 것처럼.
- 역할을 구현하는 일반적인 방법은 `추상클래스`와 `인터페이스`를 사용하는 것이다.
  - **추상 클래스**는 책임의 일부를 구현해놓은 것이고, **인터페이스**는 일체의 구현 없이 책임의 집합을 나열한다.
  - 협력의 관점에서는 두 방법 모두 역할을 정의할 수 있는 구현방법이다.
- **역할**이 중요한 이유는 동일한 협력을 수행하는 객체들을 추상화 할 수 있기 때문이다.
  - 역할을 사용하면 가격할인 정책과 함께 2개의 순번 규칙과 1개의 비율 규칙과 같이 복잡하게 말 할 필요가 없다.
  - 간단히 할인 정책과 할인 조건을 적용한다로 줄여서 표현이 가능하다.

## 4. 설계 품질과 트레이드 오프

- 객체지향 설계란 올바른 객체에게 올바른 책임을 할당하면서 낮은 결합도와 높은 응집도를 가진 구조를 창조하는 활동이다.
- 결합도와 응집도를 합리적인 수준으로 유지할 수 있는 중요한 원칙이 있다. 객체의 상태가 아니라 행동에 초점을 맞추는 것이다.

### 4.1 데이터 중심의 영화 예매 시스템

- 객체지향 설계에서 **두 가지 방법을 이용해 시스템을 객체로 분할**할 수 있다.
  - 첫 번째 방법은 상태(데이터)를 분할의 중심으로 보는 방법
  - 두 번째 방법은 책임을 분할의 중심으로 보는 방법
- 데이터 관점에서 객체는 자신이 가진 데이터를 조작하는데 필요한 메소드를 정의한다.
- 책임 관점에서 객체는 다른 객체가 요청할 수 있는 메소드를 위해 필요한 상태를 보관한다.
- 2장에서 책임을 기준으로 영화예매 시스템 설계를 살펴봤으니 관점을 바꿔 데이터를 기준으로 영화예매 시스템 설계를 보겠다.
  - 자세한 코드는 ch4 폴더에서 확인할 수 있다.

### 4.2 설계 트레이드 오프

- 데이터 중심설계와 책임 중심 설계의 장단점을 비교하기 위해 캡슐화, 응집도, 결합도를 보겠다.
- **캡슐화**
  - 상태와 행동을 하나의 객체 안에 모으는 이유는 객체의 내부 구현을 외부로부터 감추기 위해서다.
  - 변경될 가능성이 높은 부분을 구현이라 부르고, 상대적으로 안정적인 부분을 인터페이스라고 부른다.
  - 캡슐화는 외부에서 알 필요가 없는 부분을 감춤으로 대상을 단순화하는 추상화의 한 종류로, 불안정한 구현 세부사항을
  안정적인 인터페이스 뒤로 캡슐화 하는것이 중요하다.
  - 캡슐화가 중요한 이유는 불안정한 구현과 안정적인 인터페이스를 분리해서 변경의 영향을 통제할 수 있기 때문이다.
- **응집도와 결합도**
  - 응집도는 모듈에 포함된 내부 요소들이 연관된 정도를 의미하며 모듈 내의 요소들이 긴밀하게 협력한다면 그 모듈은 높은 응집도를 가지다고 말한다.
  - 결합도는 의존성의 정도를 나타내며 다른 모듈에 대해 얼마나 많은 지식을 갖고 있는지를 나타내는 척도다.
  - 좋은 설계란 높은 응집도와 낮은 결합도를 가진 모듈로 구성된 설계를 의미하고 이를 추구해야 하는 이유는 단 한가지. 설계를 변경하기 쉽게 만들기 때문이다.
    - 높은 응집도를 가진다면 하나의 변경을 위해 하나의 모듈만 수정되야 하고, 결합도가 낮다면 한 모듈이 변경될 때 다른 모듈에 영향을 끼치지 않는다.
- 캡슐화의 정도가 응집도와 결합도에 영향을 미친다. 캡슐화를 지키면 모듈 안의 응집도는 높아지고 모듈 사이의 결합도는 낮아진다.

### 4.3 데이터 중심의 영화 예매 시스템의 문제점

- 기능적인 측면에서 데이터 중심의 설계와 책임 중심의 설계는 동일하다. 근본적인 문제점은 데이터 중심의 설계는 캡슐화를 위반하고
결합도가 높으며 낮은 응집도를 가지고 있다.
- **캡슐화 위반**
  - 데이터 중심 설계에서 getFee, setFee 같은 메서드로만 객체 내부 상태에 접근할 수 있다. 얼핏 캡슐화를 지키는 것 처럼 보이지만 객체 내부 상태에 대한 어떤 정보도 캡슐화하지 않았다. getFee, setFee 메서드는 Movie 내부에 number 타입의 fee 라는 이름의 인스턴스 변수가 존재한다는 사실을 퍼블릭 인터페이스에 노골적으로 드러낸다.

  ```js
    public class Movie {
      private fee: number;
      public getFee() {
        // 로직
      };
      public setFee() {
        // 로직
      };
    }
  ```

- **높은 결합도**
  - 객체 내부의 구현이 인터페이스에 드러나는 것은 클라이언트가 구현에 강하게 결합된다는 것을 의미한다. 더 나쁜 소식은
  단지 객체의 내부 구현을 변경했음에도 이 인터페이스에 의존하는 모든 클라이언트들도 함께 변경해야 한다.
  - fee의 number 타입이 Money라는 값 객체로 변경되면 getFee 메서드의 반환타입과 더불어 getFee 메서드를 호출하는 부분도 변경된 타입에 맞게 수정해야 한다. fee의 타입 변경으로 협력하는 클래스가 변경되기 때문에 getFee 메서드는 fee를 정상적으로 캡슐화하지 못한다.
- **낮은 응집도**
  - 서로 다른 이유로 변경되는 코드가 하나의 모듈안에 공존할 때 모듈의 응집도가 낮다고 말한다.
  - ch4 코드에서 ReservationAgency를 예를 들어보자. 다음과 같은 수정사항이 발생하면 ReservationAgency의 코드를 수정해야 한다.
    - 할인 정책이 추가되는 경우
    - 할인 정책별로 할인 요금을 계산하는 방법이 변경될 경우
    - 할인 조건이 추가되는 경우
    - 할인 조건별로 할인 여부를 판단하는 방법이 변경될 경우
    - 예매 요금을 계산하는 방법이 변경될 경우
  - 응집도가 낮을 경우 하나의 요구사항을 반영하기 위해 동시에 여러 모듈을 수정해야 한다. 새로운 할인 정책을 추가한다고 가정하자.
    - MovieType에 새로운 할인 정책을 표현하는 열거형 값을 추가하고
    - ReservationAgency의 reserve 메서드의 switch 구문에 새로운 case를 추가해야 한다.
    - 새로운 할인 정책에 따른 할인 요금을 계산하기 위해 필요한 데이터도 Movie에 추가한다.
    - 하나의 요구사항을 위해 세개의 클래스를 함께 수정해야 하는 것이다.
- **단일 책임 원칙** (Single Responsibility Principle, SRP)
  - 로버트 마틴은 모듈의 응집도가 변경과 관련있다는 사실을 강조하기 위해 단일 책임 원칙이라는 설계 방법을 제시했다.
  - 단일책임 원칙을 요약하면 클래스는 단 한가지의 변경 이유만 가져야 한다는 것이다.

### 4.4 자율적인 객체를 향해

- 캡슐화를 지켜라
  - **캡슐화는 설계의 제 1원리**다. 객체는 자신이 어떤 데이터를 가지고 있는지 내부에 캡슐화하고 외부에 공개해선 안된다.
  - 객체는 스스로의 상태를 책임져야 하며 외부에는 인터페이스에 정의된 메서드를 통해서만 상태에 접근할 수 있어야 한다.
    - 여기서 말하는 메서드는 단순히 접근자, 수정자가 아닌 객체에게 의미있고 책임져야 하는 무언가를 수행하는 메서드다.
    - 데이터(속성)를 private로 설정했다고 해도 **접근자와 수정자를 통해 속성을 외부로 제공하고 있다면 캡슐화를 위반**한 것이다.
  - 이해를 돕기위해 사각형을 표현하는 Rectangle 클래스와 다른 곳에서 사각형의 너비와 높이를 증가시키는 코드가 있다고 가정하자.

  ```js
    class Rectangle {
      private left: number;
      private right: number;
      private top: number;
      private bottom: number;

      constructor(left: number, right: number, top: number, bottom: number) {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
      }

      // 4개의 필드에 대한 getter / setter
    }

    class anyClass {
      public anyMethod(rectangle: Rectangle, multiple: number) {
        rectangle.setRight(rectangle.getRight() * multiple);
        rectangle.setBottom(rectangle.getBottom() * multiple);
      }
    }
  ```

  - 위 코드에는 문제점들이 있는데 **첫번째로 코드 중복**이 발생할 확률이 높다.
    - 다른 곳에서도 높이와 너비를 증가시킨다면 그곳에서도 getRight, getBottom 메서드를 호출하는 코드가 존재한다.
    - 코드 중복은 악의 근원으로 코드 중복을 초래하는 모든 원인을 제거하는 것이 중요하다.
  - 두 번째로 **변경에 취약**하다는 점이다.
    - right, bottom 대신 length, height을 이용해 사각형을 표현하도록 수정하면 Rectangle 내부의 getter/setter 뿐 아니라 이를 호출하는 모든 클라이언트 코드도 수정해야 한다.
  - 해결 방법은 캡슐화를 강화해서 Rectangle 내부에 너비와 높이를 조절하는 로직으로 캡슐화하면 문제를 해결할 수 있다.

  ```js
  class Rectangle {
    public void enlarge(multiple: number) {
      right *= multiple;
      bottom *= multiple;
    }
  }
  ```

- 스스로 자신의 데이터를 책임지는 객체
  - 객체는 단순한 데이터 제공자가 아니고, 객체 내부에 저장되는 데이터보다 객체가 협력에 참여하면서 수행할 책임을 정의하는 오퍼레이션이 더 중요하다.

### 4.5 하지만 여전히 부족하다.

- 캡슐화의 진정한 의미
  - 캡슐화는 객체 내부의 데이터를 외부로부터 감추는 것 이상의 의미를 가진다.
  - **캡슐화는** 변할 수 있다면 어떤 것이라도 감추는 것이다. 속성의 타입이건, 할인 정책의 종류건 상관없이 **내부 구현의 변경으로
  외부의 객체가 영향을 받는다면 캡슐화를 위반**한 것이다.

### 4.6 데이터 중심 설계의 문제점

- 데이터 중심의 설계가 **변경에 취약한 이유**는 두 가지다.
  - 너무 이른 시기에 데이터에 관해 결정하도록 강요한다.
  - 협력이라는 문맥을 고려하지 않고 객체를 고립시킨채 오퍼레이션을 결정한다.

## 5. 책임 할당하기

### 5.1 책임주도 설계를 향해

- 데이터보다 행동을 먼저 결정하라.
  - 데이터 중심 설계에서는 이 객체가 포함해야 할 데이터는 무엇인가를 결정 후, 데이터를 처리하는데 필요한 오퍼레이션은 무엇인가를 결정한다.
  - 책임 중심 설계에서는 이 객체가 수행해야 할 책임은 무엇인가를 결정 후, 책임을 수행하는데 필요한 데이터는 무엇인가를 결정한다.
- 협력이라는 문맥 안에서 책임을 결정하라.
  - 책임은 객체의 입장이 아니라 객체가 참여하는 협력에 적합해야 한다. 객체가 메시지를 선택하는게 아니라 메시지가 객체를 선택하게 해야 한다.
  - 메시지에 집중하는 책임 중심의 설계는 캡슐화의 원리를 지키기가 훨씬 쉬워진다.

### 5.2 책임 할당을 위한 GRASP 패턴

- GRASP 패턴은 크레이그 라만이 제안한 패턴으로, 객체에게 책임을 할당할 때 지침으로 삼을수 있는 원칙을 정리한 것이다.
- 도메인 개념에서 출발하기
  - 설계를 시작 전, 도메인에 대한 개략적인 모습을 그려보는 것이 유용하다
  - 설계를 시작하는게 중요하지 도메인 개념을 완벽하게 정리하는 것이 아니다. 너무 많은 시간을 쏟지말고 빠르게 설계와 구현을 진행하라.
- 정보 전문가에게 책임을 할당하라
  - 객체의 책임과, 책임을 수행하는데 필요한 상태는 동일한 객체 안에 존재해야 한다. 따라서 책임을 수행할 정보를 알고있는
  객체에게 책임을 할당하는데 GRASP에서는 이를 정보 전문가 패턴이라고 부른다.
- 높은 응집도와 낮은 결합도
  - 책임을 할당할 때 객체 A에게 할당할 수도 있고 객체 B에게 할당할 수 있다면 응집도와 결합도를 고려하자.
  - 만약 객체 A에게 할당할 때 새로운 의존성이 발생되고, 객체 B는 이미 의존성이 있는 객체 C를 가지고 있다면 객체 B에게 책임을 할당하는게 응집도와 결합도 측면에서 좋다.
- 창조자에게 객체 생성 책임을 할당하라
  - 객체 A를 생성할 때 이 객체는 누가 생성해야 할까?
    - 생성되는 객체를 포함하거나 긴밀하게 사용하거나, 객체 A가 초기화되는데 필요한 데이터가 있는 객체가 생성하도록 한다.

### 5.3 구현을 통한 검증

- 어떤 클래스가 하나 이상의 변경 이유를 가지면은 응집도가 낮다. 응집도가 낮다는 것은 서로 연관없는 기능이나 데이터가
하나의 클래스에 뭉쳐져 있는 것을 의미한다. 따라서 변경의 이유에 따라 클래스를 분리해야 한다.
- 문제는 갓 입문한 개발자들은 클래스 안에서 변경의 이유를 찾는 것이 생각보다 어렵다는 것이다. 다행히 변경의 이유가 하나 이상인 클래스들이 공통적인 패턴을 드러내는데 이를 살펴보자.
  - 인스턴스 변수의 초기화 시점
    - 응집도가 높은 클래스는 객체 생성시 모든 속성이 함께 초기화된다. 반면 응집도가 낮은 클래스는 객체 생성시, 일부는 초기화하고 일부는 초기화 하지 않는다.
    - 이떄는 함께 초기화되는 속성을 기준으로 코드를 분리하자.
  - 메서드들이 객체의 변수를 사용하는 방식
    - 모든 메서드가 모든 속성을 사용한다면 클래스의 응집도가 높다. 반대로 분기에 따라 사용하는 속성이 나뉘면 응집도가 낮다.
    - 이떄는 분기와 분기에 따라 접근하는 속성을 기준으로 코드를 분리해야 한다.
- 클래스 응집도 판단하기
  - 아래 징후가 있다면 클래스의 응집도는 낮다.
    - 클래스가 하나 이상의 이유로 변경되는 경우, 변경의 이유를 기준으로 클래스를 분리하라.
    - 인스턴스를 초기화하는 시점에 서로 다른 속성들을 초기화하고 있다면 응집도가 낮으니, 초기화되는 속성 기준으로 분리하라.
    - 메서드가 속성을 사용하는지로 나뉜다면 메서드와 속성 기준으로 분리하자.
- 다형성을 통해 분리하기
  - 객체의 타입에 따라 변하는 로직이 있다면 if-else, switch 등의 조건 논리대신에 다형성을 이용해 새로운 변화를 다루기 쉽게 추가하고 권고한다.

### 5.4 책임 주도 설계의 대안

- 책임 주도 설계에 익숙해지기 위해 부단한 노력과 시간이 필요하다. 저자는 책임과 객체 사이에서 방황할 때 선택하는 방법은
최대한 빠르게 목적한 기능을 수행하는 코드를 작성하는 것이다. 아무것도 없는 상태에서 책임과 협력을 고민하기 보다는 일단
실행되는 코드를 보고 코드 상에 드러나는 책임들을 올바른 위치로 이동시킨다.
- 위에서 주의할 점은 코드를 수정한 후에 드러나는 동작이 바뀌어서는 안된다. 캡슐화를 향상시키고 응집도를 높이고 결합도를 낮춰야 하지만 동작은 그대로 유지해야 한다.
- 마틴 파울러가 좋아하는 메서드

  ```text
  나는 다음과 같은 이유로 짧고, 이해하기 쉬운 이름으로 된 메서드를 좋아한다.
  첫쨰, 메서드가 잘게 나눠져 있을 때 다른 메서드에서 사용될 확률이 높아진다.
  둘째, 고수준의 메서드를 볼 때 일련의 주석을 읽는 것 같은 느낌이 들게 할 수 있다. 또한 메서드가 잘게 나눠져 있을 때
  오버라이딩 하는 것도 훨씬 쉽다.
  작은 메서드는 실제로 이름을 잘 지었을때만 진가가 드러나므로 이름을 지을때 주의해야 한다.
  사람들이 떄때로 한 메서드의 길이가 어느정도 될지를 묻는데, 나는 길이가 중요하다고 생각하지 않는다. 뽑아내는 것이
  코드를 더욱 명확하게 하면 새로 만든 메서드의 이름이 원래 코드의 길이보다 길어져도 뽑아낸다.
  ```

## 6. 메시지와 인터페이스

- 더 나은 퍼블릭 인터페이스를 만드는데 도움이 되는 설계 원칙과 기법을 살펴본다.

### 6.1 협력과 메시지

- **클라이언트/서버 모델**
  - 협력은 어떤 객체가 다른 객체에게 무언가를 요청할 때 시작되며 객체가 다른 객체에게 접근할 수 있는 유일한 방법은 메시지를 전송하는 것 뿐이다.
  - 협력 안에서 메시지를 전송하는 객체를 클라이언트, 메시지를 수신하는 객체를 서버라고 부른다.
  ![CS모델](images/CS모델.png)
- **메시지와 메시지 전송**
  - `movie.calculateTicketPrice(screening)` 코드가 있다고 가정하자.
  - `calculateTicketPrice(screening)` 코드는 메시지
  - `movie.calculateTicketPrice(screening)` 코드는 메시지 전송에 해당한다.
- **메시지와 메서드**
  - 메시지를 수신했을 때 실제로 실행되는 함수를 메서드라고 부른다.
  - 메시지 전송자 입장에서 수신측에서 다형성에 의해 어떤 메서드가 실행될지는 모르지만, 메시지 전송자는 자신이 어떤 메시지를 전송해야 하는지만 알면된다.
    - good: `calculateTicketPrice()`
    - bad: `calculateTicketPriceByPeriodDiscount()`
  - 메시지 수신자 역시 누가 메시지를 전송했는지 알 필요가 없고, 단지 메시지가 도착했다는 사실만 알면된다.
- **퍼블릭 인터페이스와 오퍼레이션**
  - 객체가 외부에 공개하는 메시지의 집합을 퍼블릭 인터페이스라고 부른다.
  - 프로그래밍 언어 과점에서 퍼블릭 인터페이스에 포함된 메시지를 **오퍼레이션으로** 부르고 실제로 실행되는 코드를 **메서드라고** 부른다.
- **시그니처**
  - 메소드 이름과 파라미터 목록을 합쳐 시그니처(signature)라고 부른다.
  - 오퍼레이션은 코드 없이 시그니처만 정의한 것이고, 메소드는 구현을 더한 것이다.
  - 오퍼레이션에 대해 오직 하나의 메서드만 존재할 경우, 굳이 오퍼레이션과 메서드를 구분할 필요는 없다.
- **정리**
  - 메시지: 객체 간 협력을 위해 사용하는 매개체. 객체의 오퍼레이션이 실행되도록 요청하는 것을 메시지 전송.
  - 오퍼레이션: 객체가 외부에 노출하는 추상적인 서비스(혹은 메서드)
  - 메서드: 메시지에 응답하기 위해 실제 실행되는 함수
  - 퍼블릭 인터페이스: 객체가 외부에 제공하는 오퍼레이션 묶음
  - 시그니처: 이름과 인자를 포함하는 오퍼레이션 or 메서드의 명세

### 6.2 인터페이스와 설계 품질

- 추상적인 인터페이스는 어떻게 수행하는지가 아니라 **무엇을 하는지를 표현**한다.
- 좋은 인터페이스를 설계하기 위해 책임주도 설계 방법을 따르자.
  - 책임 주도 설계에서는 메시지를 먼저 선택함으로써 협력에 필요한 오퍼레이션만 인터페이스에 속하게 된다.
- 퍼블릭 인터페이스의 품질에 영향을 미치는 원칙과 기법을 살펴보자.
  - **디미터 법칙 (Law of Demeter)**
    - 객체 A가 다른 객체의 내부 구조에 강하게 결합되지 않도록 협력 경로를 제한하자.
    - 낯선 자에게 말하지 말라, 오직 인접한 이웃하고만 말하라, 오직 하나의 도트(.)만 사용하라로 요약된다.
    - 디미터 법칙을 따르면 코드 레벨에서 객체 A가 메시지를 전송할 수 있는 경우는 아래 2가지 경우에 해당한다.
      - 메서드의 인자를 통해 전달된 객체
      - 객체 A가 가지고 있는 인스턴스 객체

      ```java
        public class ReservationAgency {
          public Reservation reserve(Screening screening) {
            Money fee = screening.calculateFee();
            // Reservation 반환하는 코드
          }
        }
      ```

    - 디미터 법칙의 장점
      - 디미터 법칙을 따르는 코드는 메시지 전송자/수신자 사이의 낮은 결합도를 유지할 수 있다.
      - 디미터 법칙을 따르면 부끄럼타는 코드(shy code)를 작성할 수 있다.
        - 다른 객체에게 불필요한 그 어떤것도 보여주지 않으며, 다른 객체의 구현에 의존하지 않는 코드
    - 디미터 법칙과 캡슐화 차이
      - 디미터 법칙은 캡슐화를 제공하기 위한 구체적인 지침을 제공한다.
    - 다음은 디미터 법칙을 위반하는 전형적인 코드이며, 기차 충돌(train wreck)이라고도 부른다.
      - `screening.getMovie().getDiscountCondition()`
    - 무조건 디미터 법칙을 수용하면 객체의 응집도가 낮아질 수 있다. (추후 나옴)
    - 디미터 법칙은 객체의 내부 구조를 묻는 메시지가 아니라, 수신자에게 무엇을 시키는 메시지가 더 좋다고 속삭인다.
- **묻지말고 시켜라**
  - bad

  ```ts
  export class ReservationAgency {
  public reserve(
    screening: Screening,
    customer: Customer,
    audienceCount: number,
  ) {
    const movie = screening.getMovie();
    let discountable = false;
    for (const condition of movie.getDiscountConditions()) {
      if (condition.getType() == DiscountConditionType.PERIOD) {
        discountable =
          screening.getWhenScreened().getDay() == condition.getDayOfWeek() &&
          condition.getStartTime() <= screening.getWhenScreened() &&
          condition.getEndTime() >= screening.getWhenScreened();
      } else { ... }
  ```

  - good

  ```java
    public class ReservationAgency {
      public Reservation reserve(Screening screening) {
        Money fee = screening.calculateFee();
        // Reservation 반환하는 코드
      }
    }
  ```

  - 디미터 법칙은 훌륭한 메시지는 객체에게 **묻지말고 시켜라(Tell. Don't Ask)**는 것을 장려한다.
  - 디미터 법칙과 묻지말고 시켜라 원칙은 우리에게 힌트를 제공한다.
    - 내부의 상태를 묻는 오퍼레이션이 인터페이스에 포함되어 있다면 더 나은 방법은 없는지 고민해보자.
    - 내부의 상태를 이용해 결정을 내리는 로직이 객체 외부에 존재하면, 객체가 책임질 어떤 행동이 외부로 누수된 것이다.
  - 좋은 인터페이스를 얻기 위해 어떻게 작업을 수행하는지를 노출해선 안 된다.
    - 인터페이스는 객체가 어떻게 하는지가 아니라 무엇을 하는지 서술해야 한다.
- **의도를 드러내는 인터페이스**

  ```java
    public class PeriodCondition {
      public boolean isSatisfiedByPeriod() {}
    }

    public class SequenceCondition {
      public boolean isSatisfiedBySequence() {}
    }
  ```

  - 위와 같은 코드는 2가지 문제가 있다.
    - 클라이언트 관점에서 동일하게 할인 조건을 판단하는데, 메서드의 이름이 다르기에 클라이언트가 내부 구현을 이해하고 메서드를 선택해야 한다.
    - 메서드 이름이 변경될 때 클라이언트의 코드도 함께 변경된다.
  - 무엇을 하는지를 드러내는 메서드 이름은 이해하기 쉽고 유연한 코드를 낳는다.
    - 어떻게 수행하는지 이름을 드러내면 내부 구현을 설명하는 이름이고
    - 무엇을 하는지를 드러내면 객체가 수행해야 하는 책임에 대해 고민하게 된다.

  ```java
    public class PeriodCondition {
      public boolean isSatisfiedBy() {}
    }

    public class SequenceCondition {
      public boolean isSatisfiedBy() {}
    }
  ```

  - 위 코드는 메서드의 이름을 통해 `PeriodCondition, SequenceCondition`가 동일한 목적을 가진다는 것을 표현한다.
  - 클라이언트 관점에서 동일한 메시지를 전달하기에 수신측의 내부 구현을 알 필요가 없어진다.
  - 객체에게 묻지말고 시키되, 구현 방법이 아닌 클라이언트의 의도를 드러내야 한다.
    - 우테캠 LottoMarket의 sell or buy를 고민했던 경험
  - 켄트 백은 `Smalltalk Best Practice Patterns` 책에서 의도를 드러내는 선택자라고 표현했는데, 도메인 주도 설계에서 에릭 에반스는 켄트백의 표현을 인터페이스 레벨로 확장해선택 의도를 드러내는 인터페이스를 제시했다.

- 함께 모으기
  - 아래의 나쁜 예시를 보여주고 묻지말고 시켜라, 인터페이스에 의도를 드러내자 원칙을 적용시키는데 다들 보셨을 거라 믿는다.

  ```ts
  export class Theater {
    private ticketSeller: TickerSeller;
    constructor(ticketSeller: TickerSeller) {
      this.ticketSeller = ticketSeller;
    }

    enter(audience: Audience) {
      if (audience.getBag().hasInvitation()) {
        const ticket = this.ticketSeller.getTicketOffice().getTicket();
        audience.getBag().setTicket(ticket);
      } else {
        const ticket = this.ticketSeller.getTicketOffice().getTicket();
        audience.getBag().minusAmount(ticket.getFee());
        this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
        audience.getBag().setTicket(ticket);
      }
    }
  }
  ```

### 6.3 원칙의 함정

- SW 설계에서 절대적인 법칙은 없다.
- 원칙이 현재 상황에 부적합하다고 생각되면 과감하게 원칙을 무시해라. 원칙을 아는 것보다 더 중요한 것은
언제 원칙이 유용하고 언제 유용하지 않은지 판단할 수 있는 능력을 기르는 것이다.

---

- 디미터 법칙은 하나의 도트를 강제하는 규칙이 아니다.
  - 디미터 법칙은 결합도와 관련된 것이며, 객체의 내부 구조가 외부로 유출되는 경우에 한정한다.
  - `IntStream.of(1, 15, 20).filter(x -> x > 10).distinct().count()`
  - 위에서 Instream의 함수들은 다른 IntStream으로 변환할 뿐 캡슐화는 그대로 유지된다.
- 결합도와 응집도의 충돌
  - 묻지말고 시켜라와 디미터 법칙을 준수하는게 항상 좋은 건 아니다.

  ```java
    // step1
    public class PeriodCondition implements DiscoundCondition {
      public boolean isSatisfiedBy(Screening screening) {
        return screening.getStartTime().getDayOfWeek().equals(dayOfWeek) &&
          startTime.compareTo(screening.getStartTime().toLocalTime()) <= 0 &&
          endTime.compareTo(screening.getStartTime().toLocalTime()) >= 0;
      }
    }

    // step2
    public class Screening {
      public boolean isDiscountable(
        DayOfWeek dayOfWeek,
        LocalTime startTime,
        LocalTime endTime
      ) {
        // 할인이 가능한지 로직이 존재
      }
    }

    public class PeriodCondition implements DiscoundCondition {
      public boolean isSatisfiedBy(Screening screening) {
        return screening.isDiscountable(dayOfWeek, startTime, endTime);
      }
    }
  ```

  - 위 코드를 보면 묻지말고 시켜라를 준수하는 퍼블릭 인터페이스를 얻을 수 있었다.
  - 하지만 아래와 같은 단점이 있다.
    - Screening이 할인 조건을 판단하는 책임을 떠안게 된다.
    - Screening이 PeriodCondition의 변수를 인자로 받기 때문에 둘 간의 결합도를 높인다.
  - 이 상태에서 Screening이 캡슐화 향상보다는 Screening의 응집도를 높이고 `Screening <-> PeriodCondition` 간 결합도를 낮추는 것이 전체적으로 좋은 방법이다.
  - 협력을 위해 객체에게 시키는 것이 항상 가능한 것은 아니다. 가끔은 물어야 한다.
  - SW 설계에 법칙은 존재하지 않는다. 원칙을 맹신하지 마라. 원칙이 적절한 상황과 부적절한 상황을 판단할 수 있는 안목을 길러라. 설계는 트레이트오프의 산물이다. SW 설계에 존재하는 몇 없는 법칙 중 하나는 **경우에 따라 다르다.** 라는 사실을 명심하자.

### 6.4 명령 쿼리 분리 원칙

- 용어 정리
  - 루틴: 어떤 절차를 묶어 호출 가능하도록 이름을 부여한 모듈
    - 프로시저: 부수효과를 발생시킬 수 있지만 값을 반환할 수 없다.
    - 함수: 부수효과는 발생시킬 수 없지만 값을 반환한다.
- 명령(Command)과 쿼리(Query)는 객체의 인터페이스 측면에서 프로시저와 함수를 부르는 또 다른 이름이다.
  - **객체의 상태를 수정**하는 오퍼레이션을 명령이라 부르고
  - **객체와 관련된 정보를 반환**하는 오퍼레이션을 쿼리라고 부른다.
- 명령/쿼리 분리 원칙의 핵심은 **어떤 오퍼레이션도 명령인 동시에 쿼리여서는 안 된다.**
  - 객체의 상태를 변경하는 명령은 반환값을 가질 수 없다.
  - 객체의 정보를 반환하는 쿼리는 상태를 변경할 수 없다.
- 마틴 파울러는 명령/쿼리 분리원칙에 따라 작성된 객체의 인터페이스를
  `명령/쿼리 인터페이스(Command-Query Interface)`라고 부른다.
- 명령 쿼리 분리의 장점

  ```java
    class A {
      isSatisfied() {
        if (check()) {
          doAnotherThing(); // 여기서 check에 사용되는 멤버 변수를 수정한다.
          return false;
        }
        return true;
      }
    }
  ```

  - 버그를 찾기 어려웠던 이유는 isSatisfied가 명령과 쿼리 두가지 역할을 동시에 수행하고 있었기 때문이다.

  ```java
    class A {
      isSatisfied() {
        if (check()) {
          return false;
        }
        return true;
      }

      doAnotherThing() {
        // 객체의 상태를 수정
      }
    }
  ```

  - 객체의 명령과 쿼리를 분리하면 인터페이스를 흝어보는 것만으로 명령과 쿼리를 구분하기 쉽다.
  - 퍼블릭 인터페이스를 설계할 때 명령과 쿼리를 분리하길 바란다.
    - 코드가 예측 가능하고, 이해하기 쉬우며, 디버깅이 쉽고, 유지보수가 수월해지는 장점을 얻게 된다.
- 명령/쿼리 분리와 참조 투명성
  - 명령과 쿼리를 분리함으로써 **참조 투명성**의 장점을 제한적으로 누릴 수 있게 된다.
  - 참조 투명성이란 어떤 표현식(ex: f(1))이 있을 때 값(3)으로 바꾸더라도 결과가 달라지지 않는 특성
    - f(1) + f(1) = 6
    - 3 + 3 = 6
  - f(1)의 값이 항상 3이라고 말할 수 있는 이유는 f(1)의 값이 변하지 않기 때문인데, 이처럼 어떤 값이 변하지 않는 성질을 불변성이라고 부른다.
  - 즉, **참조 투명성을 가진다면 불변성을 가지게 되고 부수효과가 발생하지 않는다**는 뜻이다.
  - 명령/쿼리 분리 원칙을 사용하면 부수효과를 가지는 명령으로부터 쿼리를 명백하게 분리함으로써 제한적이나마 참조 투명성의 혜택을 누릴 수 있다. `doAnotherThing`을 호출하지 않는 한 `isSatisfied` 메서드를 어떤 순서로 몇 번 호출하건 결과는 동일하다.
- 책임에 초점을 맞춰라
  - 책임주도 설계 방법에 따라 메시지가 객체를 결정하게 하라. 아래의 원칙들을 잘 지킬수 있다.
    - 디미터 법칙
    - 묻지말고 시켜라
    - 의도를 드러내는 인터페이스
    - 명령/쿼리 분리 원칙
