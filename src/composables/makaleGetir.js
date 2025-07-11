//id'si bilinen bir makaleyi getirme.
import {ref} from 'vue'
//
import {db} from '../firebase/config';
import moment from 'moment';
//id parametresini alacak olan fonksiyon
const makaleGetir=(id)=>{

    const makale=ref(null);
    const hatalar=ref(null);

    const makaleYukle=async ()=>{
        try{
            //bir cevap bekleyelim. makaleler koleksiyonunda id'sini bildiğimiz dosyayı get metoduyla çalıştıracağız.
            let res=await db.collection('makaleler').doc(id).get()
            //cevap gelmemişse hata oluştur
            if(!res.exists){
                throw Error('Makale bulunamadı')
            }

            const tarih=res.data().olusturulmaTarihi.toDate()
            const formatlanmisTarih=moment(tarih).locale('tr').format('LLLL')
            console.log(formatlanmisTarih);

            makale.value={...res.data(),id:res.id,
            olusturulmaTarihi:formatlanmisTarih}
        }catch(error){
            hatalar.value=error.message
        }
    }
    return {makale,hatalar,makaleYukle}
}
export default makaleGetir   