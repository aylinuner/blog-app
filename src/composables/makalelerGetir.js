import {ref} from 'vue'
import {db} from '../firebase/config';

const makalelerGetir=()=>{
    //bir dizi alacağı için boş bir dizi tanımlıyoruz öncelikle.
    const makaleler=ref([])
    const hatalar=ref(null)

        //makale listesini yükle diye fonksiyon oluşturacağız.
    const makaleListesiniYukle=async()=>{
        try{
            //sıralama işlemi için orderBy()kullanılır. 
            let res=await db.collection('makaleler').orderBy('olusturulmaTarihi','desc').get()
            //oluşturduğumuz makaleler referansına gelen verileri ekliyoruz. 
            makaleler.value=res.docs.map(doc=>{
                //üç nokta diyerek array içersisindeki verilere ulaşıyoruz,aktarıyoruz.
            return {...doc.data(),id:doc.id }
            })
        }catch(error){
            hatalar.value=error.message
        }
    }
    //makalelerGetir fonksiyonu içerisinde return edeceğiz.
    return{makaleler,hatalar,makaleListesiniYukle}
}

export default makalelerGetir