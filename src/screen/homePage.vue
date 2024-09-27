<script setup>
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Accordion from 'primevue/accordion';
import { ref } from 'vue';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

</script>

<template>
  <div class="flex justify-center w-full p-10">
  <Splitter :pt="{root:{class:'flex w-full'}}"  style="border-radius: 6rem;">
    <SplitterPanel class="flex items-center justify-center" :size="25" :minSize="10"> 
      <img alt="programmeur" class="logo h-[300px]" src="./../assets/programmeur.jpg"/> 
    </SplitterPanel>
    <SplitterPanel class="flex items-center justify-center" :size="60"> 
    <Accordion :pt="{root:{class:'w-full p-10'}}"  value="0" >
    <AccordionPanel value="0">
        <AccordionHeader>Qui suis-je</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
              Je suis un développeur orienté front comme back et j'ai énormément d'intérêt pour l'innovation et les nouvelles technologies. De plus, j'adore me former sur des nouveaux langages.  
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
        <AccordionHeader>Mes connaissances  </AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2">
        <AccordionHeader>Header III</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </AccordionContent>
    </AccordionPanel>
</Accordion>
 </SplitterPanel>
</Splitter>
</div>
<div class="flex justify-center animate-bounce">
    <svg class="animate-bounce w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#e24329" d="m127.999 220.001l37.562-113.192h-75.12L128 219.997z"/><path fill="#fc6d26" d="M127.999 220.001L90.441 106.809h-52.64l90.198 113.188z"/><path fill="#fca326" d="m37.8 106.806l-11.417 34.4c-1.043 3.136.094 6.574 2.822 8.513L128 220.001L37.8 106.809z"/><path fill="#e24329" d="M37.8 106.805h52.641L67.817 38.63c-1.164-3.507-6.235-3.507-7.397 0L37.8 106.808z"/><path fill="#fc6d26" d="m128 220.001l37.562-113.192h52.643L128 219.997z"/><path fill="#fca326" d="m218.203 106.806l11.416 34.4c1.041 3.136-.1 6.574-2.824 8.513L128 220.001l90.203-113.192z"/><path fill="#e24329" d="M218.202 106.805h-52.64l22.622-68.175c1.165-3.506 6.235-3.506 7.397 0l22.624 68.178z"/></g></svg>
</div>
</template>

<style scoped>
@keyframes move {
  0% { transform: translate(0, 0); }
  25% { transform: translate(100px, 50px); }
  50% { transform: translate(0, 100px); }
  75% { transform: translate(-100px, 50px); }
  100% { transform: translate(0, 0); }
}

.animate-bounce {
  animation: move 2s ease-in-out infinite;
}
</style>