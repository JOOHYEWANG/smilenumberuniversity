<template>
  <div class="menu-bar">
    <ul>
      <li><a href="/">{{ menuItems[0].text }}</a></li>
      <li><a href="/ShipSchedule">{{ menuItems[1].text }}</a></li>
      <li><a href="/AboutVue">{{ menuItems[2].text }}</a></li>
      <li><a href="/Grid">{{ menuItems[3].text }}</a></li>
      <li><a href="/HowToBuyCar">{{ menuItems[4].text }}</a></li>
      <li><a href="/CarSales">{{ menuItems[5].text }}</a></li>
      <li><a href="/JesusSaid">{{ menuItems[6].text }}</a></li>
      <li><a href="/ContactVue">{{ menuItems[7].text }}</a></li>
      <li><a href="/Dream">{{ menuItems[8].text }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { text: 'Main' },
        { text: 'Shipping Schedule' },
        { text: "Our Story" },
        { text: "World's Children" },
        { text: 'How to Buy a Car' },
        { text: 'Car Sales' },
        { text: 'Always Grateful' },
        { text: 'Contact' },
        { text: 'Our Dream' }
      ]
    };
  }
};
</script>

<style scoped>
.menu-bar {
  background-color: skyblue;
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
