# IVKHK Schedule Helper

**IVKHK Schedule Helper** is a Progressive Web App (PWA) that allows students and teachers to view and manage their schedules conveniently. The app looks like a native mobile app but runs entirely in the browser.  

---

## **Features**

- **Login** via email/password, Google, or Apple ID  
- **Favorites**: save your preferred groups, teachers, or rooms  
- **Offline mode**: access schedules even without an internet connection  
- **Notifications**: receive reminders 5 minutes before lessons start  
- **Schedule updates**: get notified when schedules change  
- **Minimal & modern UI**: designed for clarity and ease of use  

---

## **Stack**

- **Frontend**  
  - Next.js (with SSR) – PWA support  
  - React + TailwindCSS + [shadcn/ui](https://ui.shadcn.com/) – component library and styling  

- **Backend**  
  - Supabase – authentication, database, realtime updates  
  - PHP – fetches and parses schedule data from the school website  

---

## **Installation / Setup**

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ivkhk-schedule-helper.git
