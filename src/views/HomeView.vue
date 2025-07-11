<template>
  <div class="home">
    <!--eğer hata varsa ekrana hatalar'ı yazdır-->
    <div v-if="hatalar">
      {{ hatalar }}
    </div>
    <!--hata yoksa makaleleri ekrana yazdır.-->
    <div v-else-if="makaleler.length">
      <!--Makale listesi içerisine :makaleler diyerek probsunu oluşturup verisini "makaleler" olarak ayarlıyoruz."-->
      <MakaleListesi :makaleler="makaleler"/>
    </div>
    <div v-else>
      Yükleniyor...
    </div>
  </div>
</template>

<script>
import MakaleListesi from '../components/MakaleListesi.vue';
import makalelerGetir from '../composables/makalelerGetir';
export default {
    name:'Home',
    components:{
        MakaleListesi
    },
    setup(){
        const {makaleler,hatalar,makaleListesiniYukle}=makalelerGetir();
        // console.log(makaleler);
        makaleListesiniYukle();
        
        return {makaleler,hatalar}
    }
}
</script>

<style>

</style>