<template>
  <div class="container">
    <nav>
      <div class="site-map-title">STORY OF SMILENUMBER UNIVERSITY & YOU</div>
      <ul>
        <li><router-link to="/" @click.native="scrollToTop">Main & The Idea</router-link>
          <ul class="vertical-list">
            <li><router-link :to="{ name: 'AfricaStory1', params: { id: 1 }}" @click.native="scrollToTop">Thinking  </router-link></li>
            <li><router-link :to="{ name: 'AfricaStory2', params: { id: 2 }}" @click.native="scrollToTop">Our World  </router-link></li>
            
            <li><a :href="externalUrl" @click="scrollToTop" target="_blank">Mathematics</a></li>
            
            <li><router-link :to="{ name: 'MonkeyRun', params: { id: 4 }}" @click.native="scrollToTop"> Monkey Run  </router-link></li>
            <li><router-link :to="{ name: 'HelloSmileMonkey', params: { id: 5 }}" @click.native="scrollToTop"> Hello Smile!  </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 6 }}" @click.native="scrollToTop">Project!  </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 7 }}" @click.native="scrollToTop">Work Mate  </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 8 }}" @click.native="scrollToTop">Solution  </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 9 }}" @click.native="scrollToTop">School  </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 10 }}" @click.native="scrollToTop">Church </router-link></li>
          </ul>
        </li>
      
        
        <li><router-link to="/ShipSchedule" @click.native="scrollToTop">Shipping Schedule</router-link>
          <ul class="vertical-list">
            <li><router-link :to="{ name: 'ShipSchedule1', params: { id: 1 }}" @click.native="scrollToTop">Africa Kenya</router-link></li>
            <li><router-link :to="{ name: 'ShipSchedule2', params: { id: 2 }}" @click.native="scrollToTop">Africa Malawi</router-link></li>
            <li><router-link :to="{ name: 'ShipSchedule3', params: { id: 3 }}" @click.native="scrollToTop">Africa Rwanda</router-link></li>
            <li><router-link :to="{ name: 'ShipSchedule4', params: { id: 4 }}" @click.native="scrollToTop">Africa Congo</router-link></li>
            <li><router-link :to="{ name: 'ShipSchedule5', params: { id: 5 }}" @click.native="scrollToTop">Africa Ghana</router-link></li>
            <li><router-link :to="{ name: 'ShipSchedule6', params: { id: 6 }}" @click.native="scrollToTop">Africa Uganda</router-link></li>
            <li><router-link :to="{ name: 'ShipSchedule7', params: { id: 7 }}" @click.native="scrollToTop">Africa Niger</router-link></li>
            <li><router-link :to="{ name: 'ShipSchedule8', params: { id: 8 }}" @click.native="scrollToTop">Africa Algeria</router-link></li>
            <li><router-link :to="{ name: 'ShipSchedule9', params: { id: 9 }}" @click.native="scrollToTop">Africa Sudan</router-link></li>
            <li> <router-link :to="{ name: 'ShipSchedule10', params: { id: 10 }}" @click.native="scrollToTop">Africa Tchad</router-link></li>
          </ul>
        </li>
        <li><router-link to="/AboutVue" @click.native="scrollToTop">Abot Our Love Story</router-link>
          <ul class="vertical-list">
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 1 }}" @click.native="scrollToTop">Smile! diary 1 </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 2 }}" @click.native="scrollToTop">Smile! diary 2</router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 3 }}" @click.native="scrollToTop">Smile! diary 3</router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 4 }}" @click.native="scrollToTop">Smile! diary 4 </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 5 }}" @click.native="scrollToTop">Smile! diary 5 </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 6 }}" @click.native="scrollToTop">Smile! diary 6 </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 7 }}" @click.native="scrollToTop">Smile! diary 7 </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 8 }}" @click.native="scrollToTop">Smile! diary 8 </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 9 }}" @click.native="scrollToTop">Smile! diary 8 </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 10 }}" @click.native="scrollToTop">Smile! diary 10</router-link></li>
          </ul>
          </li>
        <li><router-link to="/Grid" @click.native="scrollToTop">World's Children & Love</router-link>
          <ul class="vertical-list">
            <li><router-link :to="{ name: 'childrenDetail', params: { id: 1 }}" @click.native="scrollToTop">Smile & Child </router-link></li>
            <li><router-link :to="{ name: 'childrenDetail', params: { id: 2 }}" @click.native="scrollToTop">Dream & Child </router-link></li>
            <li><router-link :to="{ name: 'childrenDetail', params: { id: 3 }}" @click.native="scrollToTop">Love & Child </router-link></li>
            <li><router-link :to="{ name: 'childrenDetail', params: { id: 4 }}" @click.native="scrollToTop">Water & Child </router-link></li>
            <li><router-link :to="{ name: 'childrenDetail', params: { id: 5 }}" @click.native="scrollToTop">Food & Child </router-link></li>
            <li><router-link :to="{ name: 'childrenDetail', params: { id: 6 }}" @click.native="scrollToTop">Medicine & Child </router-link></li>
            <li><router-link :to="{ name: 'childrenDetail', params: { id: 7 }}" @click.native="scrollToTop">Our Child & Any </router-link></li>
            <li><router-link :to="{ name: 'childrenDetail', params: { id: 8 }}" @click.native="scrollToTop">Future & Child </router-link></li>
            <li><router-link :to="{ name: 'childrenDetail', params: { id: 9 }}" @click.native="scrollToTop">Edu & Child </router-link></li>
            <li> <router-link :to="{ name: 'childrenDetail', params: { id: 10 }}" @click.native="scrollToTop">Math & Child </router-link></li>
          </ul>
        </li>
        <li><router-link to="/HowToBuyCar" @click.native="scrollToTop">How to Buy Car</router-link>
          <ul class="vertical-list">
            <li><router-link :to="{ name: 'OurCar4', params: { id: 1 }}" @click.native="scrollToTop">Our Car 1</router-link></li>
            <li><router-link :to="{ name: 'OurCar5', params: { id: 2 }}" @click.native="scrollToTop">Our Car 2</router-link></li>
            <li><router-link :to="{ name: 'OurCar6', params: { id: 3 }}" @click.native="scrollToTop">Our Car 3</router-link></li>
            <li><router-link :to="{ name: 'OurCar7', params: { id: 4 }}" @click.native="scrollToTop">Our Car 4</router-link></li>
            <li><router-link :to="{ name: 'OurCar1', params: { id: 5 }}" @click.native="scrollToTop">Our Car 5</router-link></li>
            <li><router-link :to="{ name: 'OurCar2', params: { id: 6 }}" @click.native="scrollToTop">Our Car 6</router-link></li>
            <li><router-link :to="{ name: 'OurCar3', params: { id: 7 }}" @click.native="scrollToTop">Our Car 7</router-link></li>
            <li><router-link :to="{ name: 'OurCar8', params: { id: 8 }}" @click.native="scrollToTop">Our Car 8</router-link></li>
            <li><router-link :to="{ name: 'OurCar9', params: { id: 9 }}" @click.native="scrollToTop">Our Car 9</router-link></li>
            <li><router-link :to="{ name: 'OurCar10', params: { id: 10 }}" @click.native="scrollToTop">Our Car 10</router-link></li>
          </ul>
        </li>
        <li><router-link to="/CarSales" @click.native="scrollToTop">Car Sales & Dream</router-link>
          <ul class="vertical-list">
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 1 }}" @click.native="scrollToTop">Child's Dream </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 2 }}" @click.native="scrollToTop">Child's Story </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 3 }}" @click.native="scrollToTop">Child's Smile </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 4 }}" @click.native="scrollToTop">Child's Mobile </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 5 }}" @click.native="scrollToTop">Child's Home </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 6 }}" @click.native="scrollToTop">Child's Family </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 7 }}" @click.native="scrollToTop">Child's Friend </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 8 }}" @click.native="scrollToTop">Child's World </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 9 }}" @click.native="scrollToTop">Child's Society </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 10 }}" @click.native="scrollToTop">Child's Think </router-link></li>
          </ul>
        </li>
  
        <li><router-link to="/JesusSaid" @click.native="scrollToTop">Always GrateFul</router-link>
          <ul class="vertical-list">
            <li><router-link :to="{ name: 'SunFlowerText', params: { id: 1 }}" @click.native="scrollToTop">Our GOD </router-link></li>
            <li><router-link :to="{ name: 'SunFlowerText1', params: { id: 2 }}" @click.native="scrollToTop">Jesus </router-link></li>
            <li><router-link :to="{ name: 'SunFlowerText2', params: { id: 3 }}" @click.native="scrollToTop">Holy Spirit </router-link></li>
            <li><router-link :to="{ name: 'SunFlowerText3', params: { id: 4 }}" @click.native="scrollToTop">Bible </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 5 }}" @click.native="scrollToTop">faith </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 6 }}" @click.native="scrollToTop">Religion </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 7 }}" @click.native="scrollToTop">The World </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 8 }}" @click.native="scrollToTop">The Love </router-link></li>
            <li><router-link :to="{ name: 'scheduleDetail', params: { id: 9 }}" @click.native="scrollToTop">The Cross </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 10 }}" @click.native="scrollToTop">Our Road </router-link></li>
          </ul>
        </li>
        
          
        
        <li><router-link to="/ContactVue" @click.native="scrollToTop">Contact & With Us</router-link>
          <ul class="vertical-list">
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 1 }}" @click.native="scrollToTop">With Us </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 2 }}" @click.native="scrollToTop">Friend </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 3 }}" @click.native="scrollToTop">With Work </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 4 }}" @click.native="scrollToTop">With Eat </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 5 }}" @click.native="scrollToTop">With Smile </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 6 }}" @click.native="scrollToTop">Family </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 7 }}" @click.native="scrollToTop">Community </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 8 }}" @click.native="scrollToTop">Any Story </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 9 }}" @click.native="scrollToTop">With Love </router-link></li>
            <li> <router-link :to="{ name: 'scheduleDetail', params: { id: 10 }}" @click.native="scrollToTop">Big Smile </router-link></li>
          </ul>
        </li>
       
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      externalUrl: 'https://joohyewang.wixsite.com/mathematics'
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style>
.container {
  background-color: #DAA520;
  padding: 20px;
}

nav {
  padding: 20px;
}

.site-map-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

nav ul li {
  font-weight: bold;
  color: white;
  text-align: left; /* Align text to the left */
  margin-right: 20px; /* Optional: Adjust right margin if needed */
}

nav ul li ul.vertical-list {
  display: block;
  margin-top: 10px;
}

nav ul li ul.vertical-list li {
  display: list-item;
  margin-bottom: 5px;
  margin-left: 20px;
  color: white;
}

nav ul li a {
  text-decoration: none;
  color: white;
}

nav ul li a:hover,
nav ul li router-link:hover {
  color: indigo;
}
</style>
