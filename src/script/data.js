import Dasar from '../assets/BackEndDasar.png';
import Lanjut from '../assets/CloudDasar.png';

export const dataProjects = [
    {
        id: 1,
        href:"https://felienz-resto-app.onrender.com/",
        name: "Resto App",
        genre: "Full Stack Web",
        tags: [{year: 2025, dev:"FelienZ"}],
        description :`"FelienZ Resto-App" adalah sebuah aplikasi layanan web yang menyediakan layanan pemesanan Menu secara Daring. Pembuatan Web ini menggunakan beberapa tools yaitu:`,
        tools: ["MongoDB", "ExpressJs", "EJS", "NodeJs"],
        Features: ["Basic Authentication", "Transaction Schema", "Live Search Box", "Interactive Comment Section"]
    },
    {
        id: 2,
        href:'',
        name: "LokaStore",
        genre: "Full Stack Web",
        tags: [{year: 2025, dev: "FelienZ"}],
        description :`"LokaStore" adalah sebuah aplikasi layanan web yang menyediakan layanan Belanja Online. Pembuatan Web ini menggunakan beberapa tools yaitu:`,
        tools: ["MongoDB", "ExpressJs", "React", "NodeJs"],
        Features: ["Oauth Google Authentication", "Transaction Schema", "Live Search Box", "Interactive Comment Section"]
    }
]

export const dataAchieve = [
    {
        id:1,
        href: "https://www.dicoding.com/certificates/KEXL2E4Y0ZG2",
        title: "Back-End Developer Beginner" ,
        genre: "Achievements",
        tags: [{year: 2025, dev: "FelienZ", prov: "Dicoding"}],
        src: Dasar
    },
    {
        id:2,
        href: "https://www.dicoding.com/certificates/KEXL2E4Y0ZG2",
        title: "Cloud Engineer Beginner" ,
        genre: "Achievements",
        tags: [{year: 2025, dev: "FelienZ", prov: "Dicoding"}],
        src: Lanjut
    }
]
