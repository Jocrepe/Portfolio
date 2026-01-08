import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [
        {
            id: 'aire',
            name
            : 'Aire Fullstack E-Commerce Platform',
            description 
            : 'Aire is a full-stack e-commerce platform built to simulate a real-world online store, Including authentication, role-based access (admin/user), product management, and cart system.',
            th_description 
            : 'Aire คือเว็บ e-commerce ที่ผมออกแบบและพัฒนาตั้งแต่ backend ถึง frontend เพื่อจำลองระบบร้านค้าออนไลน์จริง',
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
                'Resolved an issue where cookies were not being sent in the production environment by properly configuring the secure and sameSite attributes for production use.',
                'Designed a centralized error-handling system using middleware with a custom AppError class to standardize error responses and HTTP status codes across the entire application.',
                'Implemented route guards and middleware to validate user roles from cookies, ensuring secure admin-only access and clear separation of user roles (Admin / User).'
            ],
            th_challenges : [
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
            livedemo : 'https://aire-nu.vercel.app/'
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