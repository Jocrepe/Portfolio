<script setup>
import Fire from '~/assets/icon/fire.vue';

const projectStore = useProjectStore()
</script>
<template>
    <div class="grid mt-10 gap-16 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="project in projectStore.projects" class="relative border border-gray-300 flex flex-col justify-between">
            <div v-if="project.id === 'orderra'"
                class="absolute flex top-3 left-3 border border-gray-300 bg-gray-700 items-center gap-2 p-2 rounded-4xl">
                <Fire></Fire>
                <div>
                    <p class="">Featured Project</p>
                </div>

            </div>
            <div>
                <div class="w-full">
                    <img :src="project.main_img" class="w-full h-[300px]" alt="">
                </div>
                <div class="p-3 flex flex-col flex-1">
                    <p class="text-2xl">{{ project.name }}</p>
                    <p class="text-gray-400 mt-2 mb-5">{{ project.description }}</p>
                </div>
            </div>
            <div class="w-full p-6">
                <NuxtLink :to="`/project/${project.id}`">
                    <button class=" btn btn-primary w-full">View Project</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>