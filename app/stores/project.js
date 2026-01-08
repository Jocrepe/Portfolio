import { defineStore } from 'pinia'
import Github from '~/assets/icon/github.vue'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [
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
            challenges : [
                'แก้ไขปัญหา Cookie ไม่ถูกส่งเมื่อ Deploy ระบบจริง พบว่าต้องจัดการค่า secure และ sameSite ให้เหมาะสมกับ Production',
                'ออกแบบระบบจัดการ Error แบบ Middleware โดยใช้ AppError เพื่อควบคุมรูปแบบ Error และ HTTP status code ให้เป็นมาตรฐานเดียวกันทั้งระบบ',
                'ออกแบบ Route guard และ Middleware สำหรับเช็ค role ใน Cookie เพื่อควบคุมการเข้าถึงหน้า Admin และแยกบทบาทผู้ใช้ (Admin/User)อย่างชัดเจน'
            ] ,
            image : [
                '/project/aire.png',
                '/project/aire2.png',
                '/project/aire3.png',
                '/project/aire5.png',
                '/project/aire6.png',
                '/project/aire7.png',
                '/project/aire8.png',
            ],
            livedemo : 'https://aire-nu.vercel.app/',
            Github : 'https://github.com/Jocrepe/Aire',
            techstack : [
                'Frontend: Vue, Pinia, Vue Router, TailwindCSS (No responsive yet)',
                'Backend: Node.js, Express.js',
                'Database: SQLite'
            ],
            other: [
                'สามารถเข้าใช้งาน Admin Panel (Demo) ได้ที่ https://aire-nu.vercel.app/admin-login โดยใช้ข้อมูลเข้าสู่ระบบดังนี้:Email: aa , Password: aa',
                'โปรเจกต์นี้ช่วยให้ผมเข้าใจการทำงานร่วมกันระหว่าง Frontend และ Backend มากขึ้นได้เรียนรู้การจัดการปัญหาที่เกิดขึ้นจริงในขั้นตอน Deploy และการออกแบบระบบที่มากกว่าการทำ CRUD ทั่วไป'
            ]
        },
        {
            id: 'wonsuk',
            name
            : 'Wonsuk-Website',
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
            challenges : [
                'แก้ไขปัญหา Cookie ไม่ถูกส่งเมื่อ Deploy ระบบจริง พบว่าต้องจัดการค่า secure และ sameSite ให้เหมาะสมกับ Production',
                'ออกแบบระบบจัดการ Error แบบ Middleware โดยใช้ AppError เพื่อควบคุมรูปแบบ Error และ HTTP status code ให้เป็นมาตรฐานเดียวกันทั้งระบบ',
                'ออกแบบ Route guard และ Middleware สำหรับเช็ค role ใน Cookie เพื่อควบคุมการเข้าถึงหน้า Admin และแยกบทบาทผู้ใช้ (Admin/User)อย่างชัดเจน'
            ] ,
            image : [
                '/project/aire.png',
                '/project/aire2.png',
                '/project/aire3.png',
                '/project/aire5.png',
                '/project/aire6.png',
                '/project/aire7.png',
                '/project/aire8.png',
            ],
            livedemo : 'https://aire-nu.vercel.app/',
            Github : 'https://github.com/Jocrepe/Aire',
            techstack : [
                'Frontend: Vue, Pinia, Vue Router, TailwindCSS (No responsive yet)',
                'Backend: Node.js, Express.js',
                'Database: SQLite'
            ],
            other: [
                'สามารถเข้าใช้งาน Admin Panel (Demo) ได้ที่ https://aire-nu.vercel.app/admin-login โดยใช้ข้อมูลเข้าสู่ระบบดังนี้:Email: aa , Password: aa',
                'โปรเจกต์นี้ช่วยให้ผมเข้าใจการทำงานร่วมกันระหว่าง Frontend และ Backend มากขึ้นได้เรียนรู้การจัดการปัญหาที่เกิดขึ้นจริงในขั้นตอน Deploy และการออกแบบระบบที่มากกว่าการทำ CRUD ทั่วไป'
            ]
        }
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