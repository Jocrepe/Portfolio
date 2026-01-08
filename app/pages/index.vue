<script setup lang="ts">
import Navbar from '~/layouts/Navbar.vue';
import email from '~/assets/icon/email.vue'
import github from '~/assets/icon/github.vue';

const Email = 'krittapolcrepe@outlook.com'

const copyEmail = async () => {
  await navigator.clipboard.writeText(Email)
  alert('Email copied!')
}
</script>

<template>
    <div id="home"></div>
    <Navbar>
        <!-- Container ปรับขนาดตามหน้าจอ -->
        <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Hero Section -->
            <div class="flex flex-col w-full items-center mt-10 md:mt-16 lg:mt-20">
                <!-- Profile Image -->
                <div>
                    <img class="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
                        src="https://fastly.picsum.photos/id/264/200/300.jpg?hmac=WstI9vAV1F8_R_954p04hcid4meCHkzTSQYIZwtIYz0"
                        alt="Profile Picture">
                </div>

                <!-- Text Content -->
                <div class="text-center mt-8 md:mt-12 lg:mt-16 px-4">
                    <!-- Title -->
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        <p>Hi, I am</p>
                        <p class="text-[#C778DD]">Krittapol Nammungkun</p>
                    </div>

                    <!-- Subtitle -->
                    <div class="mt-4 md:mt-6">
                        <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            Computer Engineering Student & Junior Fullstack Developer.
                        </p>
                    </div>

                    <!-- Description -->
                    <div class="mt-6 md:mt-8">
                        <p class="text-base sm:text-lg md:text-xl text-gray-500">
                            Experienced in building full-stack web applications
                        </p>
                        <p class="text-base sm:text-lg md:text-xl text-gray-500">
                            with CRUD systems, authentication, admin system and real-world deployment.
                        </p>
                    </div>
                </div>

                <!-- Social Icons -->
                <div class="flex gap-4 mt-8 md:mt-10">
                    <email @click="copyEmail" class="cursor-pointer w-8 h-8 sm:w-10 sm:h-10"></email>
                    <a href="https://github.com/Jocrepe" target="_blank">
                        <github class="cursor-pointer w-8 h-8 sm:w-10 sm:h-10"></github>
                    </a>
                </div>
            </div>

            <!-- Projects Section -->
            <div class="mt-16 md:mt-24 lg:mt-32 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4" id="project">
                <div class="flex items-center text-2xl sm:text-3xl">
                    <p class="text-[#C778DD]">#</p>
                    <p>my-projects</p>
                    <div class="ml-3 sm:ml-5 mt-2 w-20 sm:w-32 md:w-48 border-t-2 border-[#C778DD]"></div>
                </div>
                <button class="btn btn-soft text-sm sm:text-base">See All →</button>
            </div>

            <Projectcard></Projectcard>

            <!-- About Section -->
            <div class="mt-16 md:mt-24 lg:mt-32 flex items-center" id="about">
                <div class="flex items-center text-2xl sm:text-3xl">
                    <p class="text-[#C778DD]">#</p>
                    <p>about-me</p>
                    <div class="ml-3 sm:ml-5 mt-2 w-20 sm:w-32 md:w-48 border-t-2 border-[#C778DD]"></div>
                </div>
            </div>

            <!-- About Content -->
            <div class="mt-8 md:mt-10 max-w-4xl">
                <p class="text-base sm:text-lg md:text-xl mb-4">Hello,</p>
                <p class="text-base sm:text-lg md:text-xl mb-6">
                    I am a Computer Engineering student and a junior full-stack developer who enjoys
                    building real-world web applications.
                    I have experience developing both frontend and backend, including CRUD operations, authentication
                    systems, admin panel, REST APIs, and deployment
                    to production environments.
                </p>
                <p class="text-base sm:text-lg md:text-xl">
                    I am continuously improving my skills by building projects, solving real problems, and learning from
                    debugging and deployment challenges.
                    My goal is to grow into a professional full-stack developer who can deliver reliable and
                    maintainable systems.
                </p>
                <p class="mt-10 text-base sm:text-lg md:text-xl">
                    This portfolio website is fully responsive and optimized for mobile, tablet, and desktop devices.
                </p>
            </div>

            <!-- Skills Section -->
            <div class="mt-16 md:mt-24 lg:mt-32 flex items-center">
                <div class="flex items-center text-2xl sm:text-3xl">
                    <p class="text-[#C778DD]">#</p>
                    <p>Tech/Skills</p>
                    <div class="ml-3 sm:ml-5 mt-2 w-20 sm:w-32 md:w-48 border-t-2 border-[#C778DD]"></div>
                </div>
            </div>

            <!-- Skills Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mt-8 md:mt-10">
                <!-- Languages -->
                <div class="border border-gray-300 text-center">
                    <div class="border-b border-gray-300 p-3 text-lg sm:text-xl font-semibold ">Languages</div>
                    <div class="text-base sm:text-lg md:text-xl p-4 space-y-2">
                        <p>C#</p>
                        <p>C</p>
                        <p>C++</p>
                        <p>Javascript</p>
                        <p>Python</p>
                        <p>HTML/CSS</p>
                    </div>
                </div>

                <!-- Database -->
                <div class="border border-gray-300 text-center">
                    <div class="border-b border-gray-300 p-3 text-lg sm:text-xl font-semibold ">Database</div>
                    <div class="text-base sm:text-lg md:text-xl p-4 space-y-2">
                        <p>SQL</p>
                        <p>MySQL</p>
                        <p>MongoDB</p>
                        <p>SQLite</p>
                    </div>
                </div>

                <!-- Tools -->
                <div class="border border-gray-300 text-center">
                    <div class="border-b border-gray-300 p-3 text-lg sm:text-xl font-semibold ">Tools</div>
                    <div class="text-base sm:text-lg md:text-xl p-4 space-y-2">
                        <p>VS Code</p>
                        <p>Git</p>
                        <p>Figma</p>
                        <p>Postman</p>
                        <p>Tailwind CSS (Fully responsive)</p>
                    </div>
                </div>

                <!-- Frameworks -->
                <div class="border border-gray-300 text-center">
                    <div class="border-b border-gray-300 p-3 text-lg sm:text-xl font-semibold ">Frameworks</div>
                    <div class="text-base sm:text-lg md:text-xl p-4 space-y-2">
                        <p>Vue.js</p>
                        <p>Nuxt.js</p>
                        <p>React.js<br/>(Learning)</p>
                    </div>
                </div>

                <!-- Other -->
                <div class="border border-gray-300 text-center sm:col-span-2 lg:col-span-1">
                    <div class="border-b border-gray-300 p-3 text-lg sm:text-xl font-semibold ">Other</div>
                    <div class="text-base sm:text-lg md:text-xl p-4 space-y-2">
                        <p>Node.js</p>
                        <p>Express.js</p>
                    </div>
                </div>
            </div>

        </div>
    </Navbar>
</template>