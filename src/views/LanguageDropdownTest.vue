<template>

<div>
      <div class="RainbowMenu-container">
        <RainbowMenu />
      </div>
      </div>
      <br><br>

  <div>
    <!-- LanguageDropdown 자식 컴포넌트 -->
    <LanguageDropdown
      :selected-language="selectedLanguage"
      @language-changed="handleLanguageChanged"
    />
    <!-- 여기에 다국어로 표시할 내용을 넣으세요 -->
    <div class="text-container" v-if="selectedLanguage === 'ko'">
      <h1> "웃는숫자자동차는 시대의 모든 사건들을 사랑으로 가득 채웁니다."<br>
        <br>
           "웃음! 그리고 웃음! 언제나 웃음 가득한 우리의 세계!"</h1>
           <br>

      <p> 
         <h3>목적지(Destination)</h3>

        우수운 경영, 웃는 사원, 빵 터지는(Big smile) 고객: 웃는숫자 자동차의 마케팅 전략은 "당신의 웃음을 지속적으로 관리해 드린다." 입니다. 
        (i) 우리 웃는숫자는 지속적인 고객 관리를 통하여 당신의 미소를 유지해 드립니다. 
        (ii) 미소는 저희 웃는숫자 협회에서 시작하여 당신에게 전해집니다. 
        (iii) 우리 웃는숫자 자동차에서 생산된 미소는 여러 재화, 용역, 서비스의 형태로 당신에게 전해질 것입니다. 
        (vi) 우리가 판매하게 될 웃는 아프리카 프로젝트를 통하여 당신은 언제나 미소짓게 될 것입니다. 
        저희 웃는숫자 자동차의 궁극적인 목표는 우리의 웃음, 미소, 즐거움을 당신에게 전해드리는 것입니다. 
        그것은 당신에게 전해지고 고객이 다시 미소짓게 될때 서로간의 교환의 절차가 만들어 집니다. 
        우리는 이와같은 아이디어를 창조하고 만들어 냅니다. 우리 마케팅의 최고의 목표는 고객의 만족에 있습니다. 
        고객이 저희가 제공하는 아이디어와 서비스에 미소지을때 최고의 만족함을 가지게 된다라는 것은 명확합니다. 
        저희의 웃음을 언제나 미소지을 수 있는 가격 또는 그와 상응하는 서비스로 지구 어디서든 만나볼 수 있습니다. 
        웃는숫자 협회는 당신의 웃음과 미소가 가득하도록 관리해 드립니다. 
        다음은 수행하게 될 여러 미소 축제, 학회, 이벤트를 모델링 할 것입니다. 
        저희 웃는숫자 자동차는 마이크로 소프트에 이어서 두번째로 지구를 지배할 것입니다.<br><br>

        <h3>계획(Plan)</h3>
        
        아프리카에서 운행될 자동차 회사를 아프리카 현지에 설립해 보고 싶습니다. 
        현재 시대는 전반적으로 내연기관 자동차에서 모두 전기차로 바뀌고 있는 시대 입니다. 
        그러므로 많은 중고차량, 폐차량이 국내, 국외에서 만들어 질 것입니다. 
        우선은 그러한 중고차, 폐차량을 다시 부활하여 아프리카나 개발도상국가에 수출하는 업무부터 시작해 보려고 합니다. 
        현재의 아프리카의 최빈국은 자동차 한대를 개인이 소유하기도 어려운 환경이라고 알고있습니다. 
        그러므로 우선은 그 국가의 경제규모를 키워야 한다고 생각합니다. 
        자동차의 공급은 유통을 만들고, 유통은 결국 경제적 흐름을 만들어 낼 것이라고 예상합니다. 
        즉, 다시말해서 우선 아프리카에 충분한 자동차를 공급하고 수출하는 것 만으로 아프리카 경제에 활력을 불어 넣을수 있을 것이라고 생각합니다.<br><br>

        <h3>수학 연구소(Math Institute)</h3>
       
       웃는숫자자동차 회사 안에는 수학 연구소를 운영할 예정입니다. 
       처음 몇분 정도의 수학박사학위를 받으신 분들을 모셔서 박사후 연구원 과정의 연구 소를 계획중 입니다. 
       그리고 은퇴하신 수학교수님들을 모셔서 여러 즐거운 강연을 기획중 입니다. 
       우선은 작은 폐공장이나 창고를 빌려서 리모델링하여 그 장소를 제공할 예정입니다. 
       즉, 창고형 수학연구소 입니다. 나중 회사가 안정화된 후에는 비행기 격납고 만큼 큰 창고에 수학도서관과 함께 웃는숫자 수학연구소를 설립할 예정입니다. 
       현재는 자동차를 보관, 진열, 정비 할수 있는 장소의 한켠을 스터디카페와 같이 만들어서 수학연구 장소로 제공할 것 입니다. 
       그러한 열린공간에는 커다란 칠판을 설치하여서 서로 웃으면서 진지하고 즐겁게 수학연구를 할수 있는 환경을 제공할 것입니다.'<br><br>


       <h3>웃는숫자자동차의 구조(System)</h3>
       
       웃는숫자자동차에는 슬라이딩 퍼즐게임의 역시간 구조를 적용할 것 입니다. 
       그리고 그것을 사랑으로 가득 채울 것 입니다. 아프리카와 개발 도상국은 아무리 자동차 회사를 만든다고 해도 경제의 크기가 너무 작습니다. 
       즉, 구입하고 싶어도 구입할 수 있는 경제적 여건이 되지 않습니다. 
       그것의 해결 방법으로 자동차 한대를 판매할 때마다 그것의 경제학 구조 즉, 직업과 일자리를 함께 만들어서 제공할 예정입니다. 
       그러므로 자동차를 파는 것과 동시에 현지에서 할수 있는 일자리 그리고 직업을 제공해야 합니다. 그렇게해야 자동차 회사 또한 유지될수 있습니다. 
       이러한 구조는 미래에서 그 자금의 흐름이 흘러 들어오는 효과를 만듭니다. 
       즉, 자금은 미래에 만들어지는 것입니다. 
       그러므로 첫번째 슬라이딩퍼즐게임의 구체적인 역시간 흐름 알고리듬 적용의 방법입니다. 
       따라서 자동차를 구입하는 분들을 위하여 일할수 있는 여건 그리고 직업도 만드는 것이 사랑이라고 생각합니다. 
       아무리 자동차회사를 아프리카 전역에 투자를 받아서 20-30개를 만든다고 해도 자금이 없으면 자동차를 구입할 수 없고 결국 회사도 유지되지 못할 것 입니다. 
       앞과같이 슬라이딩 퍼즐게임의 알고리듬을 적용하여 경제학적 자금 그리고 흐름을 역 시간대로도 흐르게 만들 것 입니다.<br><br>

       웃는숫자자동차의 중고차 해외 수출 플랫폼은 주 품목으로 화물자동차나 버스, 승합차를 수출할 것입니다.(물론 보통의 일반 승용차도 수출할 것입니다.) 
       그런데 문제는 아프리카의 험난한 지형에 맞도록 개조를 해야하고 그것을 현지에서 제공할 수 있어야 합니다. 
       그것을 구현하는 단계가 쉽지는 않을 듯 합니다. 
       어느정도 버스 그리고 화물차, 승합차가 포화상태에 이르면 모두가 자동차 사용의 편리함을 알게되고(현재는 걸어다니는 것만 못하다고 합니다.) 
       그때부터 자동차 골드러쉬가 일어날 것 이라고 예상합니다. 그때까지 수출한 자동차의 애프터 서비스와 개조옵션을 성실하게 제공해야 합니다. 
       결국 아프리카 아이들은 배부르게 먹고, 깨끗한 물을 마시게 될 것 입니다. 
       자동차의 판매보다 판매후 애프터 서비스 그리고 차량의 개조에 더욱 그 비중을 크게 할 것 입니다. 
       즉, 다시말해서 그러한 구조는 회사에 슬라이딩퍼즐의 역시간 알고리듬을 적용한 결과를 만들어 냅니다. 
       그것이 무조건 이익을 위해서 판매하는 것보다 진정 아프리카를 사랑하는 행위라고 생각합니다. 
       앞과같이 웃는숫자 자동차 해외 판매 플랫폼에도 또한 사랑의 역시간 구조(system)를 적용할 것 입니다. 
       비중을 크게 한다는 것은 더욱 많은 노력이 들어갈 것을 의미합니다. 
       그리고 또한 꽤 큰 추가 비용도 발생 할 것입니다. 
       그러나 웃는숫자자동차 해외판매 플랫폼은 더욱 많은 돈을 벌기 위하여 운영하려고 하는 것이 아닙니다. 
       자동차회사 경험쌓기 그리고 앞의로의 투자자들에게 신뢰를 만들기 위해서 입니다. 
       이러한 역시간으로 흐르는 자금과 회사의 구조는 아프리카에 직업 그리고 일자리를 만들면서 일반화 시킬 예정입니다. 
       즉, 모든 시간대가 온전히 사랑으로 가득차는 그날까지 웃는숫자자동차는 달려 갑니다.<br><br>

       우리는 위와 같이 슬라이딩퍼즐게임의 역시간 흐름 알고리듬을 이해할때 주의해야 할 사항이 있다. 
       슬라이딩퍼즐게임의 역시간 흐름 비직관 알고리듬은 우리의 자연 그리고 사회구조가 역시간으로도 발생하지 않는 확률을 정의하고 있다고 전한다. 
       그러므로 위의 예제는 마치 역시간 흐름으로 정시간 흐름대에서 사랑을 정의하고 있다. 
       따라서 역시간 대의 시간 흐름에서는 사랑이 없으면 어떠한 경제적 흐름, 효과도 발생하지 않도록 회사의 구조를 정의한다.
       (수학적으로 회사에서 발생하지 않을 확률적 사건을 역시간 흐름대에서 정의하는 것이다. 
       즉, 다시말해서 정시간 대에서 역시간 방향으로 발생하는 확률적 사건을 약속하므로 동시에 역시간 방향의 흐름에서 발생하지 않는 확률적 사건이 정의된다.) 
       즉, 성경의 구절과 같이 사랑이 없으면 아무것도 아니다.',
  </p>

    </div>


    <div class="text-container" v-else-if="selectedLanguage === 'en'">
     
     <h1>"Master of all time is that SmileNumber Motors"<br>
      <br>
     "SMILE! SMILE! SMILE!"</h1>
     <br>

     <p>
    <h3>Destination</h3>

    Excellent management, smiling employees, big smile customers: SmileNumber Motors's marketing strategy is "continuously managing your smile."
    (i) Our smiling numbers will maintain your smile through continuous customer management.
    (ii) The smile starts at our Smiling Number Association and reaches you.
    (iii) Smiles produced by our SmileNumber Motors will reach you in various forms of goods, services, and services.
    (vi) Through the smiling Africa project we sell, you will always smile.
    Our ultimate goal at SmileNumber Motors is to deliver our laughter, smiles, and joy to you.
    It is transmitted to you, and when the customer smiles again, an exchange process is created between each other.
    We create and create such ideas. The ultimate goal of our marketing is customer satisfaction.
    It is clear that customers are most satisfied when they smile at the ideas and services we provide.
    You can always find our smiles in any part of the world at a price or service equivalent to it.
    The Smiling Number Association manages your smile and smile. The following is a model of several smile festivals, conferences, and events to be performed.
    Our SmileNumber Motors will dominate the world second after Microsoft. <br> <br>

    <h3>Plan</h3>

    I want to try to establish a car company operated in Africa. 
    Currently, the era is changing all internal combustion engines to electric cars.
    So, a lot of used cars, scrapped cars will be made at home and abroad. 
    First of all, I want to try to revive such used cars and scrapped cars and export them to underdeveloped countries in Africa. 
    The current poorest country in Africa is not even able to own a car for a person. 
    So, I think it is necessary to increase the economic scale of that country. Car supply creates distribution, 
    and distribution ultimately creates economic flow.
    In other words, supplying enough cars to Africa and exporting them will breathe new life into Africa's economy. 
    I expect the economic scale of those countries to be so low that they will not be able to buy anything other than walking around.
     From then on, there will be a car gold rush. I think it will happen. 
     Until then, we must provide sincere after-sales service and refurbishment options for the cars we export. 
     In the end, African children will eat full and drink clean water. 
     Rather than selling cars, we will place more emphasis on after-sales service and vehicle remodeling. 
     In other words, the structure of the company creates the results of the slide puzzle's algorithm in the opposite direction of the event. 
     It's what I think of as an act of love. The foreign sales platform of a laughing number car is also a system (system) of love. 
     It means a lot of effort will go into creating more. Moreover, it will incur additional costs. 
     However, the foreign sales platform of the SmileNumber Motors will operate in order to build experience and create trust in front of the previous investors. 
     The system of funds and companies that flow through this love to create jobs and jobs in Africa will be generalized until every time is filled with love. 
     <br> <br>

    <h3>Math Institute </h3>

    SmileNumber Motors Company plans to operate a math research lab. 
    First of all, I am planning to organize a research team of doctors in the postdoctoral course who have just received a few minutes of math doctorate. 
    And I plan to organize many enjoyable lectures with retired mathematics professors. 
    First of all, I plan to rent a small abandoned factory or warehouse and remodel that place. 
    In other words, it is a warehouse-type math research institute. 
    After the company is stabilized, I plan to establish a math research institute, a SmileNumber Motors, 
    along with a large warehouse like an airplane hangar and a large library of math books. 
    Currently, it will provide a study cafe and a study cafe-like place with a corner of the place where cars can be stored, 
    displayed, and maintained. The open space will provide an environment where we can study mathematics seriously and enjoyably together with a large blackboard installed. 
    <br> <br>

    <h3>Structure of SmileNumber Motors(System)</h3>

    The SmileNumber Motors will apply the reverse-time structure of the sliding puzzle game. 
    And it will be filled with love. No matter how much a car company is made in Africa and developing countries, 
    the economic size is too small. In other words, no matter how much you want to buy, 
    he economic conditions to buy it are not reached. The solution to this is to provide a job and a job that can be done locally each time you sell a car. 
    Therefore, when you sell a car, you must also provide local jobs and jobs. In other words, the structure of the company creates the effect of capital flows that are created in the future. 
    Therefore, it is a way to apply the concrete reverse-time flow algorithm of the first sliding puzzle game. 
    So I think it is love when you create jobs and jobs that can work for those who buy cars. 
    No matter how much a car company invests throughout Africa and produces 20-30, 
    it will not be able to maintain the company unless there is money. 
    You will create an effect of capital and a flow of the future. 
    Therefore, this is the structure of the company that defines the economic flow and effect of the time in the opposite direction of the event. 
    (Mathematically, it promises a probabilistic event that will not occur in the opposite direction of time at the time of a company's performance. 
    In other words, it promises a probabilistic event in the opposite direction of time and defines it in the time flow of time.) 
    In other words, if there is no love like the passage of time, the structure of the company is not defined. <br> <br>

    When understanding the reverse-time flow algorithm of the slide puzzle game, 
    we need to be aware of something. 
    In the opposite direction of the intuitive algorithm of the sliding puzzle game, 
    our natural and social structures define a probability that does not occur in the opposite direction of time. 
    Therefore, the above example defines love in the passage of time in real time. 
    Therefore, in the passage of time, if there is no love, the structure of the company does not define any economic flow or effect.

    </p>
    </div>

    <div class="text-container" v-else-if="selectedLanguage === 'Be'">
      <h1>"Master of all time is that SmileNumber Motors"<br>
  <br>
 "GLIMLAG! GLIMLAG! GLIMLAG!"</h1>
 <br>

 <p>
<h3>Bestemming</h3>

Uitstekende bestuur, glimlaggende werknemers, groot glimlag klante: SmileNumber Motors se bemarkingsstrategie is "jou glimlag voortdurend bestuur."
(i) Ons glimlagende getalle sal jou glimlag deur voortdurende kliëntebestuur handhaaf.
(ii) Die glimlag begin by ons SmileNumber Association en bereik jou.
(iii) Glimlagte wat deur ons SmileNumber Motors vervaardig word, sal jou bereik in verskeie vorme van goedere, dienste, en dienste.
(vi) Deur die glimlag Afrika projek wat ons verkoop, sal jy altyd glimlag.
Ons uiteindelike doel by SmileNumber Motors is om ons lag, glimlagte, en vreugde aan jou oor te dra.
Dit word aan jou oorgedra, en wanneer die klant weer glimlag, word 'n uitruilproses tussen mekaar geskep.
Ons skep en skep sulke idees. Die uiteindelike doel van ons bemarking is kliënttevredenheid.
Dit is duidelik dat kliënte die meeste tevrede is wanneer hulle glimlag oor die idees en dienste wat ons bied.
Jy kan altyd ons glimlagte vind in enige deel van die wêreld teen 'n prys of diens wat daarmee ooreenstem.
Die SmileNumber Association bestuur jou glimlag en glimlag. Hieronder is 'n model van verskeie glimlagfeeste, konferensies, en gebeurtenisse wat uitgevoer sal word.
Ons SmileNumber Motors sal die wêreld domineer tweede na Microsoft. <br> <br>

<h3>Plan</h3>

Ek wil probeer om 'n motor maatskappy te stig wat in Afrika bedryf word.
Tans verander die era alle binnebrandenjine na elektriese motors.
Dus, baie gebruikte karre, skroot karre sal tuis en in die buiteland gemaak word.
Eerstens wil ek probeer om sulke gebruikte karre en skrootkarre te herleef en hulle na onderontwikkelde lande in Afrika uit te voer.
Die huidige armste land in Afrika kan nie eens 'n motor vir 'n persoon besit nie.
Dus, ek dink dit is nodig om die ekonomiese omvang van daardie land te verhoog. Karvoorraad skep verspreiding,
en verspreiding skep uiteindelik ekonomiese vloei.
Met ander woorde, die voorsiening van genoeg karre aan Afrika en die uitvoer daarvan sal nuwe lewe in Afrika se ekonomie inblaas.
Ek verwag dat die ekonomiese omvang van daardie lande so laag sal wees dat hulle niks sal kan koop nie, behalwe om rond te loop.
Van dan af sal daar 'n motor goudkoors wees. Ek dink dit sal gebeur.
Tot dan moet ons opregte naverkope diens en opknappingsopsies vir die karre wat ons uitvoer, bied.
Uiteindelik sal Afrikaanse kinders vol eet en skoon water drink.
Eerder as om karre te verkoop, sal ons meer klem plaas op naverkoop diens en voertuighermodellering.
Met ander woorde, die struktuur van die maatskappy skep die resultate van die skuifpuzzel se algoritme in die teenoorgestelde rigting van die gebeurtenis.
Dit is wat ek as 'n daad van liefde beskou. Die buitelandse verkoopsplatform van 'n glimlaggetal motor is ook 'n stelsel (sisteem) van liefde.
Dit beteken dat baie moeite sal gaan om meer te skep. Daarbenewens sal dit addisionele koste tot gevolg hê.
Tog sal die buitelandse verkoopsplatform van die SmileNumber Motors bedryf word om ervaring op te bou en vertroue te skep voor die vorige beleggers.
Die stelsel van fondse en maatskappye wat deur hierdie liefde vloei om werksgeleenthede en werksgeleenthede in Afrika te skep, sal gegeneraliseer word totdat elke keer gevul is met liefde.
<br> <br>

<h3>Wiskunde Instituut</h3>

SmileNumber Motors Company beplan om 'n wiskunde-navorsingslaboratorium te bedryf.
Eerstens beplan ek om 'n navorsingspan van dokters in die nagraadse kursus te organiseer wat net 'n paar minute wiskunde doktorsgraad ontvang het.
En ek beplan om baie aangename lees met afgetrede wiskunde professore te organiseer.
Eerstens beplan ek om 'n klein verlate fabriek of pakhuise te huur en daardie plek te verbou.
Met ander woorde, dit is 'n pakhuistipe wiskunde navorsingsinstituut.
Nadat die maatskappy gestabiliseer is, beplan ek om 'n wiskunde navorsingsinstituut, 'n SmileNumber Motors, 
sowel as 'n groot pakhuis soos 'n vliegtuigshangar en 'n groot biblioteek van wiskunde boeke op te rig.
Tans sal dit 'n studiekafé en 'n studiekafé-agtige plek bied met 'n hoek van die plek waar karre gestoor, vertoon en onderhou kan word.
Die oop ruimte sal 'n omgewing bied waar ons ernstig en genotvol wiskunde kan studeer saam met 'n groot swartbord wat geïnstalleer is.
<br> <br>

<h3>Struktuur van SmileNumber Motors(System)</h3>

Die SmileNumber Motors sal die omgekeerde tydstruktuur van die skuifpuzzel spel toepas.
En dit sal met liefde gevul word. Maak nie saak hoeveel 'n motor maatskappy in Afrika en ontwikkelende lande is gemaak nie,
die ekonomiese grootte is te klein. Met ander woorde, maak nie saak hoeveel jy wil koop nie,
die ekonomiese toestande om dit te koop, word nie bereik nie. Die oplossing hiervoor is om 'n werk en 'n werk te voorsien wat plaaslik gedoen kan word elke keer as jy 'n motor verkoop.
Daarom moet jy wanneer jy 'n motor verkoop, ook plaaslike werksgeleenthede en werksgeleenthede voorsien. Met ander woorde, die struktuur van die maatskappy skep die effek van kapitaalvloei wat in die toekoms geskep word.
Dit is dus 'n manier om die konkrete omgekeerde tydstroomalgoritme van die eerste skuifpuzzelspel toe te pas.
Ek dink dit is liefde as jy werk en werksgeleenthede skep vir diegene wat karre koop.
Maak nie saak hoeveel 'n motor maatskappy deur Afrika en 20-30 beleggings maak nie,
dit sal nie die maatskappy kan handhaaf tensy daar geld is nie.
Dit sal 'n effek van kapitaal en 'n vloei van die toekoms skep.
Dit is dus die struktuur van die maatskappy wat die ekonomiese vloei en effek van die tyd in die teenoorgestelde rigting van die gebeurtenis definieer.
(Wiskundig, dit belowe 'n waarskynlikheid gebeurtenis wat nie in die teenoorgestelde rigting van tyd by die tyd van 'n maatskappy se optrede sal plaasvind nie.
Met ander woorde, dit belowe 'n waarskynlikheid gebeurtenis in die teenoorgestelde rigting van tyd en definieer dit in die tyd vloei van tyd.)
Met ander woorde En wanneer ons die omgekeerde tydvloei-algoritme van die skuiwende legkaartspel verstaan, moet ons op iets let. 
In die teenoorgestelde rigting van die intuïtiewe algoritme van die skuiwende legkaartspel, 
definieer ons natuurlike en sosiale strukture 'n waarskynlikheid wat nie in die teenoorgestelde rigting van tyd voorkom nie. 
Daarom definieer die bo genoemde voorbeeld liefde in die verloop van tyd in regte tyd. 
Dus, as daar geen liefde is nie, definieer die struktuur van die maatskappy geen ekonomiese vloei of effek nie.
</p>

  </div>
   </div>

  <div class="MapSearch-grid-container">
  <MapSearchComponent />
</div>

<div class="Map-grid-container">
  <MapVue />
</div>
</template>

<script>
import LanguageDropdown from '@/views/LanguageDropdown'; // 경로는 실제 프로젝트에 맞게 변경해주세요
import RainbowMenu from '@/views/RainbowMenu.vue';
import MapVue from '@/views/MapVue.vue';
import MapSearchComponent from '@/components/MapSearchComponent.vue';

export default {
  components: {
    LanguageDropdown,
    RainbowMenu,
    MapVue,
    MapSearchComponent,
  },
  data() {
    return {
      selectedLanguage: 'ko', // 초기 선택 언어 설정
    };
  },
  methods: {
    handleLanguageChanged(language) {
      this.selectedLanguage = language;
    },
  },
};
</script>

<style scoped>
.text-container {
  width: 850px; /* 프레임 너비 설정 */
  margin: 20px auto; /* 상단 여백과 가운데 정렬 */
  padding: 15px; /* 내부 여백 */
  background-color: #87ceeb; /* 하늘색 배경 */
  text-align: left; /* 텍스트 왼쪽 정렬 */
  color: white; /* 텍스트 색상 */
  font-weight: bold; /* 글꼴 굵기 */
}

h2 {
  color: black; /* 제목 색상을 검정색으로 설정 */
  text-align: center; /* 제목들을 중앙 정렬 */
}

h1, h3{
  text-align: center; /* 텍스트 왼쪽 정렬 */
  color: white; /* 텍스트 색상 */
}
</style>
