<!--Bu sayfa makaleleri tutcak bir component sayfası-->
<template>
  <div class="makale-listesi">
    <div v-for="makale in makaleler" :key="makale.id">
        <!--makaleyi makale componentine gönderiyoruz-->
        <Makale :makale="makale" />
    </div>
  </div>
</template>
<script>
//Makale.vue dosyasını bu sayfada kullanacağımız için import etmemiz gerek.
import Makale from './Makale';
export default {
    //makaleler'i HomeView sayfasında props yardımıyla makalelelri gönderiyorduk o yüzden probs aktif olmalı.
    props:['makaleler'],
    //çektiğimiz makaleyi tanımlıyoruz:
    components:{Makale},
    setup(props){
        // console.log(props.makaleler);
    }
}
</script>

<style>
.makale-listesi{
    margin-left:120px !important;
}
</style>