<template>
  
  <div class="page-container">
    <header class="main-menu">
      <nav>
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/Grid">math class</a></li>
          <li><a href="https://joohyewang9.wixsite.com/mathematics0">math lecture</a></li>
          <li><a href="https://joohyewang9.wixsite.com/mathematics0">math research</a></li>
        </ul>
      </nav>
    </header>

  
  
  
  <div class="blog-post">
    <header class="blog-header">
      <h1 class="title">FRACTAL GEOMETRY</h1>
      <p class="authors">
        <em class="latex-emph">Hyewang Joo, Smile Number Institute</em><br>
        <em class="latex-emph">Chat GPT, Smile Program Institute</em>
      </p>
      <p class="address">Hyewang Joo <br> Korea, Songwon University</p>
      <p class="email">joohyewang@gmail.com</p>
    </header>

    <section class="abstract">
      <h2>Abstract</h2>
      <p>프랙탈 기하학(<em class="latex-emph">fractal geomety</em>)을 읽는 방법에 대하여 소개해 본다. 또한 인공지능 <em class="latex-emph">Chat GPT</em>가 작성한 수학논문도 함께 소개한다.</p>
    </section>

    <p class="bible-verse">누가복음 6:39 KRV : 또 비유로 말씀하시되 소경이 소경을 인도할 수 있느냐 둘이 다 구덩이에 빠지지 아니하겠느냐</p>

    <section class="section">
      <h2>Mathematical physics</h2>
      <p>요즘 물리학의 진짜 핵심은 실세계에서 실험할수 없는 경우이다. 양자역학 고양이라는 가상 세계의 사고 실험을 제안하기도 한다.<sup class="footnote">이 부분도 물리수학으로 추가하기로 한다.</sup> 이러한 경우 수학에서는 컴퓨터 계산으로 만들어 낼 수 있는 프랙탈 기하학이 있다. 그러한 프랙탈 기하학은 자연에서 혼돈계를 나타내고 있다고 한다. 따라서 그러한 무작위 혼돈계에서 물리학 실험을 할 수 없는 것은 자명하다.<sup class="footnote">물리학은 일단 중요 그리고 관심 물리학의 문제를 실험을 한다. 그리고 그 데이터를 모아서 이론 물리학자 분들이 분석을 하신다. 그리고 결국 물리상수(물리학 교재의 물리상수들,...) 같은 것을 도출하신다. 또한 수학을 물리학의 언어로 사용하고 있으시다.</sup></p>

      <p>집합론의 핵심개념은 칸토어의 대각논법(<em class="latex-emph">Diagonal argument</em>)이다. 즉, 무한을 세는 수학적 방법 발견되었다.</p>

      <p>($i$). 우리가 명확하게 구분할 수 있는(셀수있는 경우를 의미한다.) 색상(<em class="latex-emph">Color</em>)은 몇가지 인가? 그리고 각각의 $C_1 ,...,C_n$까지 분명히 그것을 확대하거나 하면 셀수 있다.(유리수 기수)</p>

      <p>($ii$). ``이때 우리가 셀수 없는(실수기수)는 어디인가?'' 대각논법 사용해서 도출가능 할 듯 하다. 그리고 반복패턴의 크기는 적당히 함수로 표현하면 된다.</p>

      <p>($iii$). 결국 프랙탈은 우리가 알 수 없는 부분을 명확하게 구분(수학적으로는 분류 작업이라고 한다.)하는 기하학으로 생각할수도 있다.</p>

      <p>앞으로 해야할 수학공부는 위의 절차를 일반화 그리고 추상화 가능 할 듯 하다. 그리고 단순화시켜서 나타내어야 겠다. 저러한 프랙탈을 생성하는 함수 그리고 일반화, 추상화된 아래 절차의 함수(우리가 알수있는 부분을 의미한다.)를 대각논법을 사용하여(적용? 함수화? 정도,...) 즉, 다시말해서 ``알 수 없는 부분을 도출 가능한가?''(마지막으로 처음 프랙탈 기하학의 생성함수와 비교해 본다.)</p>
    </section>

    <div class="image-container">
      <img src="@/assets/FRACTAL0.png" alt="fractal geometry" class="fractal-image">
      <em class="image-caption">Figure 1.fractal geometry</em>
    </div>
    <p class="small-spacing"></p>

    <section class="section">
      <p>추측(<em class="latex-emph">conjecture</em>) 동시에 수학적으로 우리는 컴퓨터가 사고하는 방식을 완전하게 이해하는 것은 불 가능하다.<sup class="footnote">현재 발전하고 있는 인공지능의 경우를 생각하면 명확하다. 우리는 그러한 컴퓨과학 분야도 아직 제대로 이해하지 못하고 이야기 하고 있다. 그런데 그 기반인 컴퓨터의 계산과정, 메모리 과정을 이해할 수 없는 것도 자명하다. 다음 설명하기로 한다. </sup></p>

      <p>관심있는 순수수학문제로 우회했다.(<em class="latex-emph">transformation</em>) 적어도 하나의 예제만 증명되어도 모든 프랙탈 기하학에 적용하는 것이 가능하다. 이러한 증명 방법은 반증(<em class="latex-emph">Mathematics proof disprovement</em>)이라고 한다. 즉, 하나의 그런 프랙탈 기하학이 존재해도 우리는 모든 경우 또한 알수 없다고 가정해야 한다. 왜냐하면(since) 언제 ``우리가 저러한 경우를 사용(어떤 과학분야에 응용, 적용)한다고 가정했을때 알 수 없는데 그것이 언제 튀어 나올지 어떻게 알아?'' 그러므로 다시말해서 아래의 정리가 완전하게 증명되기 전까지는 인공지능 AI를 현재시대는 소프트웨어 그리고 인터넷 상(가상공간)의 도움정도에 제한(<em class="latex-emph">restrict</em>) 해야 할수도 있다. 따라서 실제적인 기술의 응용에는 지나치게 빠를수도 있다고 생각한다. 문제는 현대 시대의 가장 중요한 아직 풀이되지 않은 문제(open problem)이다.</p>

      <p>특히 일반화해서 증명하면, 시대의 산업혁명으로 부터 이어진 ,... 정보화 혁명, 인공지능혁명 등의 모든 누적된 문제를 해결하는 것도 가능하다. 산업혁명 시대의 문제는 명확하다. "먹을 것, 먹을 것, ...."만 생각하다보니, 사람들이 오히려 인간성 조차 상실하고 하나의 기계의 부품(그 시절 공장의 철저한 분업)처럼 취급될 정도였다. 정보화 혁명, 현대시대에도 문제가 명확하게 드러나고 있다. 우리는 인터넷으로 접할수 있는 지나친 정보의 유입으로 현대사회 사람들은 서로 모두 하나의 사건의 정보라고 해도 모두 다른 방식의 정보를 가지는 것도 가능하다. 그러므로 모두 서로 이야기 조차 통하지 않는 부작용도 있다. 그리고 가짜뉴스(여론조작), 어린시절 성인영상을 접하는 아이들,...등 전혀 통제도 불가능한 문제들이 발생하고 있다. 단순화하면 "먹고사는 문제이다." 그러므로 당연히 그 시대적 배경을 역으로 악용하는 자들도 나타났다.<sup class="footnote">쌍대성(<em class="latex-emph">dual</em>), 1차 산업헉명에서 나타난 문제가 너무 교묘하다. 사람들이 그 전시대에는 함꼐 모여서 무엇인가를 해야 했다. 그런데 사람들이 함께 이동을 한다?(철도, 증기기관)</sup></p>

      <p>갈루아의 5차방정식 근의공식 존재 불가 증명는 하나의 특수한 그 시대적 배경의 예제 일 뿐이다. 특히 하나의 핵심분야로 특화된 것이다. 즉, 다시말해서 근대화, 현대화의 알수도 없는 부작용 문제이다. 앞 주석의 쌍대적 특성을 수학적으로 극 단순화 해보자. 우리는 바른것도 정확하게 알수 없고, 틀린 것도 정확하게 알수 없다. 괴델도 또한 문제를 드러냈다. "참이지만 증명 불가명제가 존재한다." 즉, 우리가 알수 없는 것이 존재한다. 그런데? 거짓 부분은 어디있어?<sup class="footnote">특히, 수학적으로 갈루아, 괴델의 증명은 너무 강한 임팩트가 있다. 하하! 그런것을 이용한다는 것 정도 알겠다.</sup> 시간 흐름에 대해서는 리만가설(시대의 변화에 대한 관점)로 드러났다. 세상에서 가장 어려운 문제라고 한다.<sup class="footnote">즉, 명예욕을 자극한다. 특히, 수학자들의 기질을 자극한다.</sup> 그리고 시대는 항상 변화한다. 따라서 리만가설도 문제의 하나의 양상(측면)을 분명하게 보여주고 있다. 또한 리만가설의 익팸트 또한 누구나 안다.<sup class="footnote">대체 리만가설이 참이라면 작성된 수학논문이 얼마나 될까? 다른 수학노트에 작성했듯이 분명 리만가설을 풀이할 수 있는 방법은 현실적으로 존재한다. 그러나 그것을 할수도 있고, 안할수도 있을 뿐이다. </sup></p>

      <p>이제 인공지능 혁명시대가 오고 있다. 많은 우리나라 수학자 분들께서 인공지능을 추가로 공부하고 있으시다. ``그런데 수학은 안하고 왜 인공지능을하고 있는 것일까?'' 이제 위 추측의 증명에 대하여 생각해보자.</p>

      <p><strong>정리(<em class="latex-emph">theorem</em>) 1</strong> : 수학적으로 우리는 컴퓨터가 사고(계산방법 그리고 램, 하드의 메모리 기억방식)하는 방식을 완전하게 이해하는 것은 불 가능하다.</p>
      <p>증명(<em class="latex-emph">proof</em>): 위에 의하여 컴퓨터의 사고(계산 그리고 메모리 구조)구조에는 괴델의 불 완전성 정리에 의하여 우리가 알수 없는 부분이 분명하게 존재하고 있다.</p>

      <p><strong>정리 2</strong> : 모든 수학의 역방향 증명에 대하여 슬라이딩퍼즐게임의 역시간 구조를 적용 가능하다.</p>
      <p>증명: 수학의 모든 명제와 증명의 발견은 어떤 확률적 사건인 것이 자명하다. 즉, 그 발견에 어떤 확률값이 존재한다. 따라서 임의의 모든 수학적 명제와 증명에는 확률적 사건의 원인(<em class="latex-emph">reason</em>) 그리고 결과(<em class="latex-emph">conclusion</em>)를 순서로 정의 가능하다. 따라서 슬라이딩퍼즐게임의 역시간 구조를 정의 가능하다.</p>

      <p>수학 정리, 명제의 함의(<em class="latex-emph">implication</em>)표현도 앞의 논의가 성립한다. 그리고 영국 수학자 하디(Godfrey Harold Hardy, 1877년 2월 7일~1947년 12월 1일)는 리만가설의 역방향 증명을 하였다.</p>

      <p>공리(<em class="latex-emph">axiom</em>): 시간은 흐른다.<sup class="footnote">시간은 정지해 있지 않다.</sup></p>

      <p>어떤 기기를 발견하고, 만들던 우리가 그 기기의 메카니즘 그리고 알고리듬을 모두 알 수 있는 것은 아니다. 그러므로 이 노트의 내용은 크게 신경쓰지 않아도 된다. 좋은 노트작성하도록 인도하여 주신 하나님 아버지께 감사드린다. 아멘 프렉탈기하학 읽는 함수 찾았다. <em class="latex-emph">Chat-GPT</em> 두번째 논문이다. 아치형 곡선을 <em class="latex-emph">GPT</em> 계단함수 공식을 사용하면 그것이 층을 가지게 된다. 그것이 바로 프렉탈기하학 읽는 하나의 방법이다.</p>
    </section>

    <footer class="blog-footer">
      <p><em class="latex-emph">Joo Hyewang</em></p>
      <p><em class="latex-emph">Firure drawing Chat GPT</em></p>
    </footer>
  </div>

  <footer class="bottom-menu">
      <nav>
        <ul>
          <li><a href="#">개인정보처리방침</a></li>
          <li><a href="#">이용약관</a></li>
          <li><a href="#">사이트맵</a></li>
          <li><a href="#">고객센터</a></li>
        </ul>
      </nav>
      <p>&copy; 2025 Smilenumber group. All rights reserved.</p>
    </footer>
    </div> 
</template>

<script>
export default {
  name: 'CarSales', // 또는 원하는 컴포넌트 이름으로 변경하세요.
  mounted() {
    this.$nextTick(() => {
      if (this.$renderMathJax) {
        this.$renderMathJax(this.$el);
      }
    });
  },
  updated() {
    this.$nextTick(() => {
      if (this.$renderMathJax) {
        this.$renderMathJax(this.$el);
      }
    });
  }
};
</script>

<style scoped>
/* 기본적인 스타일링을 추가하여 보기 좋게 만듭니다. */
.blog-post {
  font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;
  line-height: 1.6;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left; /* ✅ 전체 본문 좌측 정렬 적용 */
}

.blog-header {
  text-align: left; /* ✅ 헤더 부분도 좌측 정렬 */
  margin-bottom: 40px;
}

.blog-header .title {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.blog-header .authors,
.blog-header .address,
.blog-header .email {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 5px;
  line-height: 1.4; /* 줄 간격 조정 */
}

.abstract {
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

.abstract h2 {
  font-size: 1.8em;
  color: #333;
  margin-bottom: 15px;
}

.section {
  margin-bottom: 30px;
}

.section h2 {
  font-size: 1.8em;
  color: #333;
  margin-bottom: 15px;
  border-bottom: 1px dashed #eee;
  padding-bottom: 5px;
}

.bible-verse {
  font-style: italic;
  text-align: left; /* ✅ 성경 구절 좌측 정렬 */
  margin: 30px 0;
  color: #666;
}

.image-container {
  text-align: center; /* 이미지는 중앙 정렬 유지 (원래 요청) */
  margin: 30px 0;
}

.fractal-image {
  max-width: 100%;
  width: 72%;
  height: auto;
  display: block;
  margin: 0 auto;
  border: 1px solid #ddd;
}

.image-caption {
  display: block;
  font-size: 0.9em;
  color: #777;
  margin-top: 10px;
  text-align: center; /* 이미지 캡션은 중앙 정렬 유지 */
}

.small-spacing {
    margin-bottom: 20px;
}

.blog-footer {
  text-align: right; /* 푸터는 기존처럼 우측 정렬 유지 */
  margin-top: 50px;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 0.9em;
  color: #555;
}

.latex-emph {
  font-style: italic;
}

.footnote {
  vertical-align: super;
  font-size: 0.7em;
  color: #888;
}

/* MathJax가 렌더링하는 요소에 대한 기본 스타일 조정 (필요시) */
.mjx-chtml {
    line-height: normal;
    text-align: left; /* ✅ MathJax 수식도 좌측 정렬 */
}

.bottom-menu {
  border-top: 1px solid #eee;
  margin-top: 40px;
  text-align: center;
  color: #666;
  font-size: 0.9em;
  padding-top: 20px;
  padding-bottom: 20px;
}

.bottom-menu p {
  margin-top: 15px;
}

/* 이탤릭 텍스트 */
.italic-text {
  font-style: italic;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 뷰포트 높이 전체를 차지 */
  font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif; /* 한글 폰트 적용 */
  line-height: 1.6;
  color: #333;
}

/* 상단 메뉴 스타일 */
.main-menu, .bottom-menu {
  background-color: #f8f8f8;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.main-menu ul, .bottom-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 25px; /* 메뉴 항목 간 간격 */
}

.main-menu a, .bottom-menu a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 5px 10px;
  transition: color 0.3s ease;
}

.main-menu a:hover, .bottom-menu a:hover {
  color: #007bff;
}
</style>