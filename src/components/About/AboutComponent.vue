<script setup lang="ts">
import StatsComponent from '../Stats/StatsComponent.vue'
</script>

<template>
  <!-- Content section -->
  <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h2 class="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">About Me</h2>
      <div class="mt-6 flex flex-col gap-x-8 gap-y-20">
        <div class="w-full max-w-2xl flex-auto">
          <p class="text-xl leading-8 text-white-600">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p>
          <div class="mt-10 max-w-xl text-base leading-7 text-white-700">
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
              vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
              erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
              sed amet vitae sed turpis id.
            </p>
            <p class="mt-10">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
              fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
              adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
            </p>
          </div>
        </div>
        <div class="">
          <dl class="w-full space-y-8 xl:w-96">
            <StatsComponent />
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
