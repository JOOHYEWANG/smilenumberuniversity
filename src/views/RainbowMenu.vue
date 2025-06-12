<template>
  <nav class="menu-bar">
    <ul class="menu-links">
      <!-- 모바일 메인 버튼 -->
      <li class="mobile-main" @click="toggleMobileMenu">
        <span>{{ $t('menu.main') }}</span>
      </li>

      <!-- 전체 메뉴 (모바일에서는 토글, 데스크탑에서는 항상 표시) -->
      <transition name="fade">
        <div v-if="isMobileMenuOpen || isDesktop" class="submenu">
          <li><a href="/">{{ $t('menu.main') }}</a></li>
          <li><a href="/ShipSchedule">{{ $t('MathWriting') }}</a></li>
          <li><a href="/AboutVue">{{ $t('SlidingPuzzleGame Program') }}</a></li>
          <li><a href="/Grid">{{ $t('Garage Center math') }}</a></li>
          <li><a href="/HowToBuyCar">{{ $t('Hundred later Math') }}</a></li>
          <li><a href="/CarSales">{{ $t('SlidingPuzzleGame') }}</a></li>
          <li><a href="/JesusSaid">{{ $t('FractalGeometry') }}</a></li>
          <li><a href="/ContactVue">{{ $t('menu.contact') }}</a></li>
          <li><a href="/Dream">{{ $t('menu.ourDream') }}</a></li>
        </div>
      </transition>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MenuComponent',
  data() {
    return {
      isMobileMenuOpen: false,
      isDesktop: window.innerWidth >= 769
    };
  },
  mounted() {
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    toggleMobileMenu() {
      if (!this.isDesktop) {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      }
    },
    checkScreenSize() {
      this.isDesktop = window.innerWidth >= 769;
      if (this.isDesktop) this.isMobileMenuOpen = false;
    }
  }
};
</script>

<style scoped>
.menu-bar {
  background-color: #999;
  padding: 1rem;
  font-family: 'Segoe UI', 'Noto Sans KR', sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.menu-links {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.submenu li {
  margin: 0.5rem 1rem;
}

.submenu a {
  color: whitesmoke;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.submenu a:hover {
  color: indigo;
}

/* 모바일 메인 메뉴 버튼 */
.mobile-main {
  display: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: whitesmoke;
  padding: 0.5rem 0;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

/* 데스크탑 */
@media (min-width: 769px) {
  .menu-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .submenu {
    display: flex;
  }

  .mobile-main {
    display: none;
  }
}

/* 모바일 */
@media (max-width: 768px) {
  .menu-links {
    display: block;
  }

  .submenu {
    display: block;
  }

  .mobile-main {
    display: block;
  }

  .submenu li {
    margin: 0.75rem 0;
  }
}

/* fade 애니메이션 */
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
