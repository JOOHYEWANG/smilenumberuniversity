
<template>
  <div class="rainbow-text-container">
    <svg width="500" height="350" viewBox="0 0 500 350">
      <defs>
        <path id="rainbowPath1" d="M10,100 Q250,-50 490,100" />
        <path id="rainbowPath2" d="M10,130 Q250,-20 490,130" />
        <path id="rainbowPath3" d="M10,160 Q250,10 490,160" />
        <path id="rainbowPath4" d="M10,190 Q250,40 490,190" />
        <path id="rainbowPath5" d="M10,220 Q250,70 490,220" />
        <path id="rainbowPath6" d="M10,250 Q250,100 490,250" />
        <path id="rainbowPath7" d="M10,280 Q250,130 490,280" />
      </defs>
      <linearGradient id="rainbowGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="500" y2="0">
        <stop offset="0%" stop-color="#FF0000" />
        <stop offset="16.66%" stop-color="#FF7F00" />
        <stop offset="33.33%" stop-color="#FFFF00" />
        <stop offset="50%" stop-color="#00FF00" />
        <stop offset="66.66%" stop-color="#0000FF" />
        <stop offset="83.33%" stop-color="#4B0082" />
        <stop offset="100%" stop-color="#9400D3" />
      </linearGradient>
      <a :href="linkToGrid" style="text-decoration: none; color: green;">
        <text font-size="20" fill="url(#rainbowGradient)">
          <textPath href="#rainbowPath1">
            Master Of All Time Is That SmileNumber Motors! SMILE!
          </textPath>
        </text>
      </a>

      <router-link to="/Aboutvue" style="text-decoration: none; color: green;">
      <text font-size="20" fill="url(#rainbowGradient)">
        <textPath href="#rainbowPath2" startOffset="12%">
          Drive with passion and purpose! smile!love
        </textPath>
      </text>
    </router-link>

    <router-link to="/JesusSaid" style="text-decoration: none; color: green;">
      <text font-size="20" fill="url(#rainbowGradient)">
        <textPath href="#rainbowPath3" startOffset="20%">
          We bring joy to every ride! smile!
        </textPath>
      </text>
    </router-link>

    <router-link to="/ContactVue" style="text-decoration: none; color: green;">
      <text font-size="20" fill="url(#rainbowGradient)">
        <textPath href="#rainbowPath4" startOffset="27%">
          Excellence in every smile!
        </textPath>
      </text>
    </router-link>

    <router-link to="/CarSales" style="text-decoration: none; color: green;">
      <text font-size="20" fill="url(#rainbowGradient)">
        <textPath href="#rainbowPath5" startOffset="32%">
          Our mission is smile!
        </textPath>
      </text>
      </router-link>

      <router-link to="/Dream" style="text-decoration: none; color: green;">
      <text font-size="20" fill="url(#rainbowGradient)">
        <textPath href="#rainbowPath6" startOffset="36%">
          Our dream is
        </textPath>
      </text>
    </router-link>

    <router-link to="/ShipSchedule" style="text-decoration: none; color: green;">
      <text font-size="20" fill="url(#rainbowGradient)">
        <textPath href="#rainbowPath7" startOffset="42%">
          Smile!
        </textPath>
      </text>
    </router-link>
    
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkToGrid: "/Grid"
    };
  }
};
</script>


<style scoped>
.rainbow-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

a {
  text-decoration: none;
  color: green;
  transition: font-size 0.5s ease-in-out; /* 글자 크기 전환에 대한 전이 효과 설정 */
}

/* 마우스를 오버할 때 글자 크기를 조금 키우는 스타일 */
a:hover text {
  font-size: 28px; /* 조정할 글자 크기 */
}

</style>
