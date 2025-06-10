<template>
  <div class="rainbow-text-container">
    <svg width="1000" height="550" viewBox="0 0 1000 450">
      <defs>
        <path id="rainbowPath1" d="M10,90 Q500,-100 910, 90" />
        <path id="rainbowPath2" d="M10,130 Q500,-50 890,125" />
        <path id="rainbowPath3" d="M10,160 Q500,0 890,160" />
        <path id="rainbowPath4" d="M10,190 Q500,50 890,190" />
        <path id="rainbowPath5" d="M10,220 Q500,100 890,220" />
        <path id="rainbowPath6" d="M10,250 Q500,150 890,250" />
        <path id="rainbowPath7" d="M10,280 Q500,200 890,280" />
      </defs>
      <linearGradient id="rainbowGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1000" y2="0">
        <stop offset="0%" stop-color="#FF0000" />
        <stop offset="16.66%" stop-color="#FF7F00" />
        <stop offset="33.33%" stop-color="#FFFF00" />
        <stop offset="50%" stop-color="#00FF00" />
        <stop offset="66.66%" stop-color="#0000FF" />
        <stop offset="83.33%" stop-color="#4B0082" />
        <stop offset="100%" stop-color="#9400D3" />
      </linearGradient>
      <a :href="linkToHome" style="text-decoration: none; color: green;">Go to Home
        <text font-size="16" fill="url(#rainbowGradient)">
          <textPath href="#rainbowPath1" startOffset="6%">
            Master of all time is that SmileNumber Motors! Smile! Master of all time is that SmileNumber Motors! Smile!Smile!Smile!Smile!
          </textPath>
        </text>
      </a>

      <router-link to="/ShipSchedule" style="text-decoration: none; color: green;">
      <text font-size="16" fill="url(#rainbowGradient)">
        <textPath href="#rainbowPath2" startOffset="11%">
          Drive with passion and purpose! smile!love Drive with passion and purpose! smile!love!smile!Do smile!Smile!
        </textPath>
      </text>
    </router-link>

    <router-link to="/AboutVue" style="text-decoration: none; color: green;">
      <text font-size="16" fill="url(#rainbowGradient)">
        <textPath href="#rainbowPath3" startOffset="19%">
          We bring joy to every ride! smile! We bring joy to every ride! smile!smile!smile!smile!Smile!
        </textPath>
      </text>
    </router-link>

    <router-link to="/Grid" style="text-decoration: none; color: green;">
      <text font-size="16" fill="url(#rainbowGradient)">
        <textPath href="#rainbowPath4" startOffset="26%">
          Excellence in every smile! Excellence in every smile!smile!smile!smile!Smile!
        </textPath>
      </text>
    </router-link>

    <router-link to="/JesusSaid" style="text-decoration: none; color: green;">
      <text font-size="16" fill="url(#rainbowGradient)">
        <textPath href="#rainbowPath5" startOffset="31%">
          Our mission is smile! Our mission is smile!smile!smile!smile!
        </textPath>
      </text>
      </router-link>

      <router-link to="/CarSales" style="text-decoration: none; color: green;">
      <text font-size="16" fill="url(#rainbowGradient)">
        <textPath href="#rainbowPath6" startOffset="35%">
          Our dream and love and faith is smile!Do it smile!
        </textPath>
      </text>
    </router-link>

    <a href="/Dream" style="text-decoration: none; color: green;">
  <text font-size="16" fill="url(#rainbowGradient)">
    <textPath href="#rainbowPath7" startOffset="48%">
     Smile!Smile!Smile!
    </textPath>
  </text>
</a>

    
    </svg>
  </div>
</template>

<script>

export default {
  data() {
    return {
      linkToHome: "/"
    };
  }
};
</script>


<style scoped>
.rainbow-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
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
