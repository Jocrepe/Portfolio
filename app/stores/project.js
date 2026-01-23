import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
    state: () => ({
        projects: [
            {
                id: 'orderra',
                name
                    : 'Orderra Restaurant Ordering Web App',
                description
                    : 'Orderra คือ Web Application สำหรับสั่งอาหารและจัดการออเดอร์ภายในร้าน โดยผมพัฒนาแบบ Fullstack โดยในเวอร์ชั่นถัดไปมีแผนจะเพิ่ม WebSocket เพื่อรองรับการอัปเดตสถานะออเดอร์แบบ Real Time ระหว่างลูกค้าและครัว',
                features: {
                    authentication: [
                        'Login / Register / Logout',
                        'JWT + HttpOnly Cookies',
                        'Role-based access control (Admin / User)',
                    ],
                    ecommerce: [
                        'Product listing and category management',
                        'Product detail page',
                        'Add to cart and quantity update',
                    ],
                    admin: [
                        'Admin-only access',
                        'Product CRUD (Create / Read / Update / Delete)',
                        'Image upload for products',
                    ],
                    deployment: [
                        'Frontend deployed on Vercel',
                        'Backend deployed on Render',
                        'Handled cookie and CORS configuration for production',
                    ],
                },
                challenges: [
                    'แก้ไขปัญหา Cookie ไม่ถูกส่งเมื่อ Deploy ระบบจริง พบว่าต้องจัดการค่า secure และ sameSite ให้เหมาะสมกับ Production',
                    'ออกแบบระบบจัดการ Error แบบ Middleware โดยใช้ AppError เพื่อควบคุมรูปแบบ Error และ HTTP status code ให้เป็นมาตรฐานเดียวกันทั้งระบบ',
                    'ออกแบบ Route guard และ Middleware สำหรับเช็ค role ใน Cookie เพื่อควบคุมการเข้าถึงหน้า Admin และแยกบทบาทผู้ใช้ (Admin/User)อย่างชัดเจน',
                    'Refector backend folder stucture ใหม่ทั้งหมด'
                ],
                main_img: '/project/Orderra/orderra1.png',
                image: [
                    '/project/Orderra/orderra1.png',
                    '/project/Orderra/orderra2.png',
                    '/project/Orderra/orderra3.png'
                ],
                livedemo: 'https://aire-nu.vercel.app/',
                Github: 'https://github.com/Jocrepe/Aire',
                techstack: [
                    'Frontend: Vue, Pinia, Vue Router, TailwindCSS (No responsive yet)',
                    'Backend: Node.js, Express.js',
                    'Database: SQLite'
                ],
                other: [
                    'สามารถเข้าใช้งาน Admin Panel (Demo) ได้ที่ https://aire-nu.vercel.app/admin-login โดยใช้ข้อมูลเข้าสู่ระบบดังนี้:Email: admin01@mail.com , Password: admin1234  ***ในมือถือยังเข้าหน้า admin ไม่ได้นะครับเพราะติดเรื่อง browser ในมือถือมันบล็อค third party cookie',
                    'โปรเจกต์นี้ช่วยให้ผมเข้าใจการทำงานร่วมกันระหว่าง Frontend และ Backend มากขึ้นได้เรียนรู้การจัดการปัญหาที่เกิดขึ้นจริงในขั้นตอน Deploy และการออกแบบระบบที่มากกว่าการทำ CRUD ทั่วไป'
                ]
            },

            {
                id: 'aire',
                name
                    : 'Aire Fullstack E-Commerce Platform',
                description
                    : 'Aire คือโปรเจกต์ Fullstack E-Commerce ที่ผมออกแบบและพัฒนาตั้งแต่ Backend ถึง Frontend เพื่อจำลองระบบร้านค้าออนไลน์ในโลกจริง ครอบคลุมตั้งแต่ระบบผู้ใช้ การจัดการสินค้า ไปจนถึงระบบ Admin และการ Deploy ใช้งานจริง โปรเจกต์นี้มุ่งเน้นการเข้าใจการทำงานร่วมกันของ Frontend และ Backend รวมถึงการแก้ไขปัญหาที่เกิดขึ้นจริงใน Production environment ไม่ใช่เพียงแค่การทำ CRUD',
                features: {
                    authentication: [
                        'Login / Register / Logout',
                        'JWT + HttpOnly Cookies',
                        'Role-based access control (Admin / User)',
                    ],
                    ecommerce: [
                        'Product listing and category management',
                        'Product detail page',
                        'Add to cart and quantity update',
                    ],
                    admin: [
                        'Admin-only access',
                        'Product CRUD (Create / Read / Update / Delete)',
                        'Image upload for products',
                    ],
                    deployment: [
                        'Frontend deployed on Vercel',
                        'Backend deployed on Render',
                        'Handled cookie and CORS configuration for production',
                    ],
                },
                challenges: [
                    'แก้ไขปัญหา Cookie ไม่ถูกส่งเมื่อ Deploy ระบบจริง พบว่าต้องจัดการค่า secure และ sameSite ให้เหมาะสมกับ Production',
                    'ออกแบบระบบจัดการ Error แบบ Middleware โดยใช้ AppError เพื่อควบคุมรูปแบบ Error และ HTTP status code ให้เป็นมาตรฐานเดียวกันทั้งระบบ',
                    'ออกแบบ Route guard และ Middleware สำหรับเช็ค role ใน Cookie เพื่อควบคุมการเข้าถึงหน้า Admin และแยกบทบาทผู้ใช้ (Admin/User)อย่างชัดเจน',
                    'Refector backend folder stucture ใหม่ทั้งหมด'
                ],
                main_img: '/project/Aire/aire2.png',
                image: [
                    '/project/Aire/aire.png',
                    '/project/Aire/aire2.png',
                    '/project/Aire/aire3.png',
                    '/project/Aire/aire5.png',
                    '/project/Aire/aire6.png',
                    '/project/Aire/aire7.png',
                    '/project/Aire/aire8.png',
                ],
                livedemo: 'https://aire-nu.vercel.app/',
                Github: 'https://github.com/Jocrepe/Aire',
                techstack: [
                    'Frontend: Vue, Pinia, Vue Router, TailwindCSS (No responsive yet)',
                    'Backend: Node.js, Express.js',
                    'Database: SQLite'
                ],
                other: [
                    'สามารถเข้าใช้งาน Admin Panel (Demo) ได้ที่ https://aire-nu.vercel.app/admin-login โดยใช้ข้อมูลเข้าสู่ระบบดังนี้:Email: admin01@mail.com , Password: admin1234  ***ในมือถือยังเข้าหน้า admin ไม่ได้นะครับเพราะติดเรื่อง browser ในมือถือมันบล็อค third party cookie',
                    'โปรเจกต์นี้ช่วยให้ผมเข้าใจการทำงานร่วมกันระหว่าง Frontend และ Backend มากขึ้นได้เรียนรู้การจัดการปัญหาที่เกิดขึ้นจริงในขั้นตอน Deploy และการออกแบบระบบที่มากกว่าการทำ CRUD ทั่วไป'
                ]
            },

            {
                id: 'wonsuk',
                name
                    : 'Wonsuk-Website Frontend Project',
                description
                    : 'Wonsuk เป็นโปรเจกต์ Frontend Website ที่ผมร่วมกันสร้างขึ้นกับเพื่อนๆเพื่อฝึกและแสดงทักษะด้าน Frontend Development โดยเน้นการออกแบบ UI ที่เรียบง่ายแต่ทันสมัย (Modern UI) พร้อม Interaction ที่ลื่นไหล โปรเจกต์นี้ช่วยให้ผมเข้าใจการจัดโครงสร้างหน้าเว็บ การจัดการ Layout ขึ้นเป็นอย่างมาก',
                features: {
                    ui: [
                        'Modern and minimal UI design',
                        'Clean layout with clear content hierarchy',
                        'Consistent color palette and typography',
                    ],
                    interaction: [
                        'Smooth hover effects and transitions',
                        'Scroll-based animations for better user experience',
                    ],
                },
                challenges: [
                    'ออกแบบ Layout โดยไม่ทำให้ UI แตกหรือดูอึดอัด',
                ],
                main_img: '/project/wonsuk/wonsuk1.png',
                image: [
                    '/project/wonsuk/wonsuk1.png',
                    '/project/wonsuk/wonsuk2.png',
                    '/project/wonsuk/wonsuk3.png',
                    '/project/wonsuk/wonsuk4.png',
                    '/project/wonsuk/wonsuk5.png',
                    '/project/wonsuk/wonsuk6.png',
                ],
                livedemo: 'https://wonsuk.netlify.app/',
                Github: 'https://github.com/Jocrepe/Wonsuk-website',
                techstack: [
                    'Frontend: Vue.js, Pinia, TailwindCSS, JavaScript',
                    'Deployment: Netlify',
                ],
                other: [
                    'โปรเจกต์นี้เน้นการฝึก Frontend Fundamentals (ยังไม่รองรับ responsive)',
                    'เป็นโปรเจกต์ที่ช่วยพัฒนาทักษะด้านการออกแบบหน้าเว็บให้ดูเป็นมืออาชีพและใช้งานได้จริง',
                ]
            },
        ],
        loading: null,
    }),

    getters: {
        getProjectById: (state) => {
            return (id) => state.projects.find(p => p.id === id)
        }
    },

    actions: {}
})