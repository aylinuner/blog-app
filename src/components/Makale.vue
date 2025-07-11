<!--Her bir makale için oluşturulan dosya-->
<template>
  <div class="makale">
    <!--yönlendirme işlemi için :to . parametreli özelliği ile yönleneceği için params özelliğinde oluşturuyoruz. -->
    <router-link :to="{name:'Detay',params:{id:makale.id}}">
      <h3>{{ makale.baslik }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
    props:['makale']
}
</script>

<style>
.makale a{
    display:block;
    margin:40px 0;
    padding:20px;
    border-left: 6px solid #eb4d4b;
    cursor:pointer;
}

.makale a:hover h3{
    color:#eb4d4b;
}
</style>