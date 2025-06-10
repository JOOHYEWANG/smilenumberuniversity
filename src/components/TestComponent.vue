<template>
  <div class="image-grid-container">
    <h1 class="title">MASTER OF ALL TIME IS THAT SMILENUMBER MOTORS</h1>
    <h1 class="title">SMILE! SMILE! SMILE! </h1>
    <div class="grid-container">
      <div class="grid-item" v-for="(item, index) in items" :key="index">
        <a :href="item.url" target="_blank">
          <div class="image-wrapper">
            <img :src="item.imgSrc" :alt="item.altText" class="grid-image">
            <div class="block"></div>
          </div>
        </a>
      </div>
      <!-- 추가된 이미지 항목 -->
      <div class="grid-item">
        <a :href="a1Link" target="_blank">
          <div class="image-wrapper">
            <img :src="a1Image" alt="SMILE! SMILE! SMILE!" class="grid-image" style="width: 330%; height: 330%;">
            <div class="block"></div>
          </div>
        </a>
      </div>
    </div>
    <div class="marketing-text">
      <p style="font-weight:bolder;">SMILENUMBER MOTORS</p>
    </div>
    <P>
      HelloWorld
    </P>
  </div>
</template>

<script>
export default {
  name: 'ImageGrid',
  data() {
    return {
      items: [
        { imgSrc: require('@/assets/1.png'), url: 'https://example.com/image1', altText: 'Image 1' },
        { imgSrc: require('@/assets/2.png'), url: 'https://example.com/image2', altText: 'Image 2' },
        { imgSrc: require('@/assets/3.png'), url: 'https://example.com/image3', altText: 'Image 3' },
        { imgSrc: require('@/assets/4.png'), url: 'https://example.com/image4', altText: 'Image 4' },
        { imgSrc: require('@/assets/5.png'), url: 'https://example.com/image5', altText: 'Image 5' },
        { imgSrc: require('@/assets/6.png'), url: 'https://example.com/image6', altText: 'Image 6' },
        { imgSrc: require('@/assets/7.png'), url: 'https://example.com/image7', altText: 'Image 7' },
        { imgSrc: require('@/assets/8.png'), url: 'https://example.com/image8', altText: 'Image 8' },
        { imgSrc: require('@/assets/9.png'), url: 'https://example.com/image9', altText: 'Image 9' }
      ],
      a1Link: 'https://www.unicef.org/press-releases',
      a1Image: require('@/assets/a1.jpg')
    };
  }
}
</script>

<style scoped>
.image-grid-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 2em;
  margin-bottom: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 가로로 3개의 열로 설정 */
  grid-template-rows: repeat(3, 1fr); /* 세로로 3개의 행으로 설정 */
  gap: 20px; /* 그림 간격 추가 */
  justify-content: center;
  align-items: center;
  max-width: 600px; /* 최대 너비 설정 */
  margin: auto; /* 가운데 정렬 */
}

.grid-item {
  margin: 0; /* 기존의 margin 제거 */
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 프레임에 맞게 조정되도록 설정 */
}

.block {
  position: absolute;
  top: 0;
  left: 0;
  width: 30%; /* 블록의 크기를 1/3로 설정 */
  height: 30%; /* 블록의 크기를 1/3로 설정 */
  background-color: rgba(0, 0, 0, 0); /* 블록 색상 및 투명도 설정 */
}

.marketing-text {
  margin-top: 70px;
  text-align: left;
}
</style>