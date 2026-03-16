import type { SiteContent } from "./types";

export const zh: SiteContent = {
  meta: {
    title: "林季謙 George Lin - 資深軟體工程師 & 系統分析師",
    description:
      "8年以上前後端開發經驗，擅長系統分析、專案管理與全端開發。專精 .NET、Vue.js、React，橫跨金融、倉儲、CRM & ERP 等領域。",
  },
  nav: {
    about: "關於我",
    skills: "技術棧",
    experience: "工作經歷",
    contact: "聯繫我",
    resume: "下載履歷",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "林季謙",
    title: "資深軟體工程師 & 系統分析師",
    subtitle:
      "8 年以上全端開發經驗，專精系統分析與架構設計。從需求訪談到產品上線，打造高品質的軟體解決方案。",
    cta: "聯繫我",
    ctaSecondary: "查看經歷",
    stats: [
      { value: "8+", label: "年開發經驗" },
      { value: "5", label: "年金融領域" },
      { value: "124+", label: "完成需求數" },
      { value: "9", label: "人團隊管理" },
    ],
  },
  about: {
    label: "About",
    title: "關於我",
    paragraphs: [
      "擁有 8 年以上的前後端開發經驗，涵蓋金融、倉儲、CRM & ERP 等多元產業。不僅是技術開發者，更是具備系統分析、專案管理與團隊建置能力的全方位軟體工程師。",
      "曾在台達電子擔任架構團隊資深工程師，也在鴻揚科技從軟體工程師一路成長為系統分析師，帶領 9 人團隊同時執行 3 個專案。擅長與不同部門溝通協作，從 PM、Sales 到 DevOps 都有豐富的合作經驗。",
      "目前以自由接案為主，同時經營程式教學，學生從國中生到社會人士皆有。熱衷於將複雜的系統需求轉化為清晰的架構設計。",
    ],
    highlights: [
      { value: "5 年", label: "系統分析經驗" },
      { value: "3 年", label: "專案管理經驗" },
      { value: "3 年", label: "程式教學經驗" },
      { value: "20 人", label: "最大團隊規模" },
    ],
  },
  skills: {
    label: "Skills",
    title: "技術棧",
    subtitle: "多年實戰積累的技術能力",
    categories: [
      {
        name: "後端",
        items: [
          { name: "C#/.NET", level: 95 },
          { name: "C++", level: 80 },
          { name: "PHP", level: 70 },
          { name: "Node.js", level: 60 },
          { name: "Python", level: 55 },
          { name: "Go", level: 45 },
        ],
      },
      {
        name: "前端",
        items: [
          { name: "JavaScript", level: 90 },
          { name: "Vue.js", level: 85 },
          { name: "jQuery", level: 85 },
          { name: "React", level: 65 },
          { name: "CSS/Bootstrap", level: 80 },
        ],
      },
      {
        name: "資料庫 & 中間件",
        items: [
          { name: "MSSQL", level: 90 },
          { name: "MySQL", level: 80 },
          { name: "Redis", level: 70 },
          { name: "Kafka", level: 60 },
        ],
      },
      {
        name: "工具 & 平台",
        items: [
          { name: "Git/SVN/TFS", level: 90 },
          { name: "GCP", level: 70 },
          { name: "Docker", level: 55 },
          { name: "NUnit", level: 75 },
        ],
      },
    ],
  },
  experience: {
    label: "Experience",
    title: "工作經歷",
    jobs: [
      {
        company: "自由接案",
        role: "Full-Stack Developer & System Analyst",
        period: "2023/08 - 現在",
        type: "Freelance",
        bullets: [
          "獨立評估專案開發範圍與時程規劃",
          "執行需求訪談與系統分析，產出完整 SA 文件",
          "負責系統設計、資料庫設計與全端開發",
          "進行使用者教育訓練，確保系統順利交付",
        ],
      },
      {
        company: "台達電子",
        role: "Software Design Sr. Engineer",
        period: "2023/03 - 2023/08",
        type: "全職",
        bullets: [
          "架構團隊資深工程師，負責 AI 系統前後端開發",
          "設計系統元件架構",
          "使用 Java Spring + React 技術棧",
        ],
      },
      {
        company: "鴻揚科技",
        role: "System Analyst",
        period: "2019/06 - 2023/03",
        type: "全職",
        bullets: [
          "擔任部門系統分析師，帶領 9 人團隊",
          "同時管理 3 個專案的系統分析、設計與交付",
          "完成 124 個新需求功能、39 個重構與重大 Issue 解決",
          "協助 PM 進行時程控管、資源整合與團隊管理",
          "串接 AI 智慧數據分析、人臉辨識、多元驗證等系統",
        ],
      },
      {
        company: "智理管理顧問",
        role: "Chief Engineer",
        period: "2018/06 - 2019/04",
        type: "全職",
        bullets: [
          "負責內部系統全面重構，涵蓋 6 大分項、25 個主功能",
          "創建並管理 3 人 IT 團隊",
          "前端 Vue.js + 後端 .NET Framework 4.5，實現前後端分離",
          "系統建置於 GCP，搭配 Google 企業帳號運作",
        ],
      },
      {
        company: "鴻揚科技",
        role: "Software Engineer & System Analyst",
        period: "2015/04 - 2018/03",
        type: "全職",
        bullets: [
          "執行 7 個以上專案，從開發人員成長為開發負責人",
          "協助 4 個企業系統開發與建置",
          "橫跨金融、倉儲、通訊門市、政府單位等領域",
          "開發範圍含前後端、WebAPI、Socket 通訊等",
        ],
      },
    ],
  },
  other: {
    label: "More",
    title: "其他經驗",
    items: [
      {
        title: "程式教學",
        period: "2019 - 現在",
        bullets: [
          "APCS、CPE 及程式能力教學",
          "教學語言：C++、C#、.NET 6、JavaScript、jQuery、SQL",
          "遠端教學，穩定教學 5 人，學生從國中生到社會人士",
        ],
      },
      {
        title: "接案開發",
        period: "2016 - 現在",
        bullets: [
          "獨立開發系統（.NET、MSSQL、Vue.js、jQuery）",
          "網站與視窗程式開發",
          "既有系統 SA 文件重製與邏輯漏洞分析，協助系統重構",
        ],
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "與我聯繫",
    subtitle: "無論是專案合作、技術諮詢或程式教學，歡迎隨時聯繫。",
    email: "fgtyu2001@gmail.com",
    phone: "0928-352-553",
    github: "https://github.com/redseye",
    cta: "寄送 Email",
  },
  footer: {
    copyright: "林季謙 George Lin. All rights reserved.",
    status: "Open to Work",
  },
};
