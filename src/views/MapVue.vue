<template>
  <footer class="footer-menu">
    <div class="footer-container">
      <h3 class="footer-title">STORY OF SMILENUMBER UNIVERSITY & YOU</h3>
      <div class="footer-grid">
        <div
          class="footer-card"
          v-for="(section, index) in menuSections"
          :key="index"
          :class="{ open: expandedCard === index }"
        >
          <div class="card-header" @click="toggleCard(index)">
            <router-link
              :to="section.main.to"
              @click.native="scrollToTop"
              class="card-title"
            >
              {{ section.main.label }}
            </router-link>
            <span class="toggle-icon">▼</span>
          </div>
          <ul class="card-submenu">
            <li v-for="(item, idx) in section.sub" :key="idx">
              <component
                :is="item.isExternal ? 'a' : 'router-link'"
                :to="!item.isExternal ? item.to : null"
                :href="item.isExternal ? item.href : null"
                target="_blank"
                @click.native="scrollToTop"
              >
                {{ item.label }}
              </component>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterMenu",
  data() {
    return {
      expandedCard: null,
      menuSections: [
        {
          main: { to: "/", label: "Main & The Idea" },
          sub: [
            { to: { name: "AfricaStory1", params: { id: 1 } }, label: "Thinking" },
            { to: { name: "AfricaStory2", params: { id: 2 } }, label: "Our World" },
            { href: "https://joohyewang.wixsite.com/mathematics", label: "Mathematics", isExternal: true },
            { to: { name: "MonkeyRun", params: { id: 4 } }, label: "Monkey Run" },
            { to: { name: "HelloSmileMonkey", params: { id: 5 } }, label: "Hello Smile!" },
            { to: { name: "scheduleDetail", params: { id: 6 } }, label: "Project!" },
            { to: { name: "scheduleDetail", params: { id: 7 } }, label: "Work Mate" },
            { to: { name: "scheduleDetail", params: { id: 8 } }, label: "Solution" },
            { to: { name: "scheduleDetail", params: { id: 9 } }, label: "School" },
            { to: { name: "scheduleDetail", params: { id: 10 } }, label: "Church" },
          ],
        },
        {
          main: { to: "/ShipSchedule", label: "Shipping Schedule" },
          sub: Array.from({ length: 10 }, (_, i) => ({
            to: { name: `ShipSchedule${i + 1}`, params: { id: i + 1 } },
            label: `Africa ${["Kenya", "Malawi", "Rwanda", "Congo", "Ghana", "Uganda", "Niger", "Algeria", "Sudan", "Tchad"][i]}`,
          })),
        },
        {
          main: { to: "/AboutVue", label: "About Our Love Story" },
          sub: Array.from({ length: 10 }, (_, i) => ({
            to: { name: "scheduleDetail", params: { id: i + 1 } },
            label: `Smile! diary ${i + 1}`,
          })),
        },
        {
          main: { to: "/Grid", label: "World's Children & Love" },
          sub: [
            "Smile", "Dream", "Love", "Water", "Food", "Medicine", "Our Child & Any", "Future", "Edu", "Math"
          ].map((topic, i) => ({
            to: { name: "childrenDetail", params: { id: i + 1 } },
            label: `${topic} & Child`
          })),
        },
        {
          main: { to: "/HowToBuyCar", label: "How to Buy Car" },
          sub: Array.from({ length: 10 }, (_, i) => ({
            to: { name: `OurCar${(i + 4) % 10 || 10}`, params: { id: i + 1 } },
            label: `Our Car ${i + 1}`
          })),
        },
        {
          main: { to: "/CarSales", label: "Car Sales & Dream" },
          sub: [
            "Child's Dream", "Child's Story", "Child's Smile", "Child's Mobile", "Child's Home",
            "Child's Family", "Child's Friend", "Child's World", "Child's Society", "Child's Think"
          ].map((label, i) => ({
            to: { name: "scheduleDetail", params: { id: i + 1 } },
            label
          })),
        },
        {
          main: { to: "/JesusSaid", label: "Always Grateful" },
          sub: [
            { name: "SunFlowerText", label: "Our GOD" },
            { name: "SunFlowerText1", label: "Jesus" },
            { name: "SunFlowerText2", label: "Holy Spirit" },
            { name: "SunFlowerText3", label: "Bible" },
            { name: "scheduleDetail", label: "Faith" },
            { name: "scheduleDetail", label: "Religion" },
            { name: "scheduleDetail", label: "The World" },
            { name: "scheduleDetail", label: "The Love" },
            { name: "scheduleDetail", label: "The Cross" },
            { name: "scheduleDetail", label: "Our Road" },
          ].map((item, i) => ({
            to: { name: item.name, params: { id: i + 1 } },
            label: item.label
          })),
        },
        {
          main: { to: "/ContactVue", label: "Contact & With Us" },
          sub: [
            "With Us", "Friend", "With Work", "With Eat", "With Smile",
            "Family", "Community", "Any Story", "With Love", "Big Smile"
          ].map((label, i) => ({
            to: { name: "scheduleDetail", params: { id: i + 1 } },
            label
          })),
        },
      ]
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    toggleCard(index) {
      this.expandedCard = this.expandedCard === index ? null : index;
    }
  }
};
</script>

<style scoped>
.footer-menu {
  background: linear-gradient(to right, #e0e0e0, #cfcfcf); /* 옅은 회색 그라디언트 */
  color: #333;
  padding: 60px 20px;
  font-family: 'Segoe UI', 'Noto Sans KR', sans-serif;
  font-weight: bold;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-title {
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 40px;
  color: #333; /* 진한 회색 */
  letter-spacing: 1px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;
}

.footer-card {
  background-color: rgba(255, 255, 255, 0.6); /* 카드 배경도 밝은 회색톤 */
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.footer-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #444; /* 진한 회색 */
  text-decoration: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 6px;
  transition: color 0.3s;
}

.card-title:hover {
  color: #333;
}

.toggle-icon {
  font-size: 16px;
  margin-left: 10px;
  transition: transform 0.3s ease;
}

.footer-card.open .toggle-icon {
  transform: rotate(180deg);
}

.card-submenu {
  font-weight: bold;
  list-style: none;
  padding-left: 0;
  margin-top: 12px;
  display: block;
}

.card-submenu li {
  margin-bottom: 8px;
}

.card-submenu a,
.card-submenu router-link {
  color: #666;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.card-submenu a:hover,
.card-submenu router-link:hover {
  color: #000;
}

/* 모바일: 아코디언 토글 */
@media (max-width: 768px) {
  .card-submenu {
    display: none;
  }

  .footer-card.open .card-submenu {
    display: block;
  }

  .card-header {
    cursor: pointer;
  }
}
</style>
