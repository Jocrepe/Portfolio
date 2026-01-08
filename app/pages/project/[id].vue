<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Pagination, Navigation]

import Navbar from '~/layouts/Navbar.vue';

const projectStore = useProjectStore()

const route = useRoute()

const project = computed(() =>
    projectStore.getProjectById(route.params.id)
)

</script>

<template>
    <Navbar>
        <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mt-20 items-center mb-10">
                <div class="flex items-center text-2xl sm:text-3xl">
                    <p class="text-[#C778DD]">#</p>
                    <p>Project</p>
                    <div class="ml-3 sm:ml-5 mt-2 w-20 sm:w-32 md:w-48 border-t-2 border-[#C778DD]"></div>
                </div>
            </div>

            <div class="w-full mb-10">
                <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
                    clickable: true,
                }" :navigation="true" :modules="modules" class="mySwiper w-full">
                    <swiper-slide v-for="image in project?.image"><img :src="image" alt=""></swiper-slide>
                </swiper>
            </div>

            <div class="w-full px-5">
                <div class="text-[#C778DD] text-2xl font-bold sm:text-3xl flex">
                    <p>{{ project?.name }}</p>
                </div>
                <div class="flex flex-col">
                    <div><a :href="project?.livedemo">Live demo: {{ project?.livedemo }}</a></div>
                    <div><a :href="project?.Github">Github: {{ project?.Github }}</a></div>
                </div>
                <div class="text-xl sm:text-2xl mt-10">
                    <p>{{ project?.description }}</p>

                    <p class="my-15">{{ project?.th_description }}</p>
                </div>

                <div class="text-xl sm:text-2xl font-bold mb-5 text-gray-500 underline">Features</div>
                <div v-for="(items, category) in project?.features" :key="category" class="mb-6">
                    <h3 class="text-xl sm:text-2xl font-semibold capitalize mb-2">
                        {{ category }}
                    </h3>

                    <ul class="list-disc pl-5 text-xl">
                        <li v-for="(item, i) in items" :key="i">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <div class="text-xl sm:text-2xl font-bold mb-5 text-gray-500 underline mt-10">Challenges and Solutions</div>
                <div class="w-full">
                    <ul class="list-disc pl-5 text-xl">
                        <li v-for="c in project?.challenges">{{ c }}</li>
                    </ul>
                 
                </div>

                <div class="text-xl sm:text-2xl font-bold mb-5 text-gray-500 underline mt-10">Tech Stack</div>
                <div>
                    <ul class="list-disc pl-5 text-xl">
                        <li v-for="i in project?.techstack">{{ i }}</li>
                    </ul>
                </div>

                <div class="text-xl sm:text-2xl mt-30">
                    
                    <div  v-for="other in project?.other" class="my-10"><p>{{ other }}</p></div>
                </div>
            </div>


        </div>
    </Navbar>
</template>