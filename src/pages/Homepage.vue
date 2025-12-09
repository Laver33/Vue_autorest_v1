<template>
  <div>
    <Hero />
    <Services />
    <Cases />
    <Technologies />
    <ContactForm />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Services from '@/components/Services.vue'
import Cases from '@/components/Cases.vue'
import Technologies from '@/components/Technologies.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'HomePage',
  components: {
    Hero,
    Services,
    Cases,
    Technologies,
    ContactForm
  }
}
</script>