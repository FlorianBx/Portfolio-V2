// directives/scrollTo.ts
import { Directive } from 'vue'

export const scrollTo: Directive = {
  beforeMount(el, binding) {
    el.addEventListener('click', () => {
      const target = document.querySelector(binding.value)
      if (target instanceof HTMLElement) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth',
        })
      }
    })
  },
}
