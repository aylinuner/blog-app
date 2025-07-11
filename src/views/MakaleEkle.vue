<template>
  <div class="makale-ekle">
    <!--forma submit ekliyoruz ki makaleEkleyi çalıştırsın. sonrasında baslik ve içerik kısmını v-model olarak inputlara ekle-->
    <form @submit.prevent="makaleEkle">
      <label>Makale Başlık</label>
      <input type="text" id="baslik" v-model="baslik" name="baslik" required/>
      <label>Makale İçerik</label>
      <textarea type="text" id="icerik" v-model="icerik" name="icerik" required></textarea>
      <button>Oluştur</button>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
//makale içerisinde veritabanına ulaşmak için import db diyerek ulaşabiliriz 
import {db,timestamp} from '../firebase/config'; 
//yönlendirme için router'ı import ediyoruz
import {useRouter} from 'vue-router';  
export default {
  setup(){
    //başlangıç veriisnde boş string olarak oluşturuyoruz
    const baslik=ref('')
    const icerik=ref('')

    const router=useRouter();

    //ekleme esnasında oluşturulma tarihi olacağı için fonksiyon yazıyoruz. baslik ve icerigi de kullanıcıdan alacağız.
    const makaleEkle=async()=>{
        const makale={
          baslik:baslik.value,
          icerik:icerik.value,
          //olusturulmaTarihi için Date.now kullanıyorduk ama server saatini kullanmak için config.js dosyasındaki timestamp kullanacağız.
          olusturulmaTarihi:timestamp()
        }
        // console.log(makale)
        //makaleler koleksiyonuna makale nesnesini ekle sonra anasayfaya yönlendir(isme göre yçnlendirdik {name:'Home'}),'then' anlamı eğer bir hata yoksa çalış.hata olursa catch ile yazdır. 
        const res=await db.collection('makaleler').add(makale).then(()=>{
          router.push({name:"Home"})
        }).catch((err)=>{
          console.log(err.message);
        })
      }
      return {baslik,icerik,makaleEkle}
    }
}
</script>

<style>
.makale-ekle form{
  max-width:400px;
  margin:0 auto;
}
.makale-ekle input,
.makale-ekle textarea{
  display: block;
  width:100%;
  margin:10px 0;
  padding: 8px; 
}
.makale-ekle label{
  display: block;
  margin-top: 24px;
}
textarea{height: 120px;
}
.makale-ekle button{
  margin-top:20px;
  background:#eb4d4b;
  color:white;
  padding:6px;
  border-radius: 10px;
  font-size: 1.2em;
  cursor:pointer;
}
</style>