<template>
  <div id="app">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup>
import { provideLanguage } from './composables/useLanguage'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import EducationSection from './components/EducationSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

provideLanguage()
</script>

<style scoped>
#app {
  min-height: 100vh;
}
</style>

