<script setup>
const projectStore = useProjectStore()

</script>
<template>
    <div class="grid mt-10 gap-15 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="project in projectStore.projects" class="border border-gray-300">
            <div class="w-full">
                <img :src="project.image[5]" class="w-full h-70" alt="">
            </div>
            <div class="p-3">
                <p class="text-2xl">{{ project.name }}</p>
                <p class="text-gray-400 mt-2 mb-5">{{ project.description }}</p>
                <NuxtLink :to="`/project/${project.id}`">
                    <button class="btn btn-soft btn-info w-full">View Project</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>