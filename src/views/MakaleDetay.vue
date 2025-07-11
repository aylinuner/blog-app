<template>
  <h1>Makale Detay</h1>
    <div v-if="hatalar">
        {{ hatalar }}
    </div>
    <div v-if="makale" class="detay content">
        <h2><i>Makale Başlık:</i> {{ makale.baslik }}</h2>
        <div class="content">
            <i>Makale içerik:</i>
            <!--bu kısmı formatlamak için momentjs kullanıyoruz-->
            <p>{{ makale.icerik }}</p>
        </div>
        <div class="content">
            <i>Oluşturulma Tarihi:</i>
            <!--bu kısmı formatlamak için momentjs kullanıyoruz-->
            <p>{{ makale.olusturulmaTarihi }}</p>
        </div>
        <a class="sil" @click="makaleSil">
            <img src="/trash.svg" alt="makale sil"/>
        </a>
    </div>
    <div v-else>
        Yükleniyor...
    </div>
</template>

<script>
import {ref} from 'vue';
import { useRoute,useRouter } from 'vue-router';
import makaleGetir from '../composables/makaleGetir';
import {db} from '../firebase/config'
export default {
    setup(){
        //route'n params özelliği bulunuyor. params'ın içerisindeki id'ye eriştiğimizde props id ile eriştiğimize denk gelecek o yüzden referans kullanıyoruz
        const route=useRoute();
        const router=useRouter();


        const id=ref(route.params.id)
        //makaleGetir()fonksiyonu içerisine id'ye göre getiriyoruz.
        const{makale,hatalar, makaleYukle}=makaleGetir(route.params.id)
        makaleYukle()

        const makaleSil=async()=>{
            await db.collection('makaleler').doc(route.params.id).delete().then(()=>{
                router.push('/')
            })
        }
        //makale ve hataları return edeceğiz template alanında kullanmak için.
        return{makale,hatalar,makaleSil}
    }
}
</script>

<style>
.detay {
    position: relative;
}
.content{
margin-bottom:30px;
}
.sil{
    position:absolute;
    top:0;
    right:0;
    border-radius: 50%;
    padding: 8px;
    cursor:pointer;
}

</style>