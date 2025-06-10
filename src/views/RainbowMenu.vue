<template>
  <div class="menu-bar">
    <ul>
      <li><a href="/">{{ $t('menu.main') }}</a></li>
      <li><a href="/ShipSchedule">{{ $t('MathWriting') }}</a></li>
      <li><a href="/AboutVue">{{ $t('SlidingPuzzleGame Program') }}</a></li>
      <li><a href="/Grid">{{ $t('Garage Center math') }}</a></li>
      <li><a href="/HowToBuyCar">{{ $t('Hundred later Math') }}</a></li>
      <li><a href="/CarSales">{{ $t('SlidingPuzzleGame') }}</a></li>
      <li><a href="/JesusSaid">{{ $t('FractalGeometry') }}</a></li>
      <li><a href="/ContactVue">{{ $t('menu.contact') }}</a></li>
      <li><a href="/Dream">{{ $t('menu.ourDream') }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent'
};
</script>

<style scoped>
.menu-bar {
  background-color: #DAA520;
  padding: 10px 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

li {
  display: inline;
  margin: 0 10px;
}

a {
  text-decoration: none;
  color: whitesmoke;
  font-weight: bold;
}

a:hover {
  color: indigo; /* 호버시 색상 변경 예시 */
}
</style>
