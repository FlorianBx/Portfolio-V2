<script setup lang="ts">
import StatsComponent from '../Stats/StatsComponent.vue'
import CardComponent from '../../components/Card/CardComponent.vue'
</script>

<template>
  <div class="mt-32 max-w-full sm:mt-40 px-8">
    <div class="mx-auto max-w-md md:max-w-5xl">
      <h2 class="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">About Me</h2>
      <div class="mt-6 flex flex-col gap-x-8 gap-y-20">
        <div class="max-w-6xl flex gap-4">
          <div class="hidden md:block flex-end w-3xl">
            <CardComponent />
          </div>
          <div class="flex flex-col">
            <p class="text-xl leading-8 text-white-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, quibusdam iure ipsam minus modi rerum
              mollitia iusto commodi voluptatibus eaque odit vitae. Nisi sint suscipit vitae ipsum eius modi id.
            </p>
            <div class="mt-0 text-base leading-7 text-white-700">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id.
              </p>
              <p class="mt-10">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full">
          <dl class="w-full space-y-8">
            <StatsComponent />
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
