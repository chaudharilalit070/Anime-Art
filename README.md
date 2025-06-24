# 🧠 Anime Art – AI-Powered Image to Anime Converter

⚡ *Transform your real-world photos into anime-style art instantly using AI.*

A full-stack application built with **React + Vite** for the frontend, **Spring Boot** for the backend, and **Stability AI** for artistic transformation — all secured with **Clerk** authentication.


## 🎨 Output Preview

> Convert your ordinary images into dreamy anime worlds ✨

<!-- Add actual screenshots or generated examples here -->
![image](https://github.com/user-attachments/assets/37cdd0b9-1baf-4193-b957-3614df6e34aa)

---

## 📦 Project Overview

**Anime Art** is a smart and stylish AI SaaS that takes real-world images and turns them into stunning anime visuals using cutting-edge models. From a modern single-page frontend to a secure backend that calls AI services, this app provides:

- Seamless image upload and transformation

- Framer-motion-powered animations

- Clerk-based user authentication

- Style presets like *Ghibli*, *Dreamlike*, and more

---
## 🚀 Technologies Used

| 🧱 Layer        | 🛠️ Technologies                                                                                                                                     |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 🎨 Frontend     | [React](https://reactjs.org), [Vite](https://vitejs.dev), [Tailwind CSS](https://tailwindcss.com), [Clerk](https://clerk.dev), [Framer Motion](https://www.framer.com/motion/) |
| 🧠 Backend      | [Spring Boot](https://spring.io/projects/spring-boot), [Feign Client](https://docs.spring.io/spring-cloud-openfeign/docs/current/reference/html/)  |
| 🤖 AI Provider  | [Stability AI](https://platform.stability.ai)                                                                                                       |
| 🧰 Other Tools  | [Axios](https://axios-http.com), REST APIs, DTO Mapping                                                                                             |

## ✨ Features

- 📸 Upload any image
- 🎨 Convert to anime in seconds via AI
- 🌗 Dark/Light theme switch
- 🔐 Secure user access with Clerk
- 🎞 Smooth animation using Framer Motion
- 🖼️ Multiple style support (*ghibli*, *dreamlike*, etc.)
- 🌌 Background animations for immersive UX


## 🏗️ Project Structure

### 🧠 Backend – `ghbliapi/`

```bash
ghbliapi/
├── pom.xml
└── src/
    └── main/
        ├── java/in/project/ghbliapi/
        │   ├── controller/             # Handles HTTP requests
        │   │   └── GenerationController.java
        │   ├── service/                # Business logic
        │   │   └── GhibliArtService.java
        │   ├── dto/                    # Data transfer objects
        │   │   ├── TextGenerationRequestDto.java
        │   │   └── TextToImageRequest.java
        │   ├── client/                 # Feign client to Stability AI
        │   │   └── StabilityAiClient.java
        │   └── config/
        │       └── feginConfig.java
        └── resources/
            └── application.properties
````

---

### 🎨 Frontend – `ghbliui/`

```bash
ghbliui/
├── index.html
├── vite.config.js
├── src/
│   ├── main.jsx                     # Entry point
│   ├── App.jsx                      # Layout & routes
│
│   ├── api/                         # API service
│   │   └── ghibliApi.js
│
│   ├── context/                     # Global state management
│   │   └── AppContext.jsx
│
│   ├── dto/                         # Matches backend DTOs
│   │   ├── textRequest.js
│   │   └── imageRequest.js
│
│   ├── components/                  # UI components
│   │   ├── Header.jsx
│   │   ├── BgSlider.jsx
│   │   ├── TryNow.jsx
│   │   ├── Pricing.jsx
│   │   ├── BgRemovalSteps.jsx
│   │   └── Testimonials.jsx   
│
│   ├── pages/
│   │   └── Home.jsx
│
│   ├── styles/
│   │   └── global.css
│
│   └── assets/
│       └── logo.svg, icons, images...
```

---

## 🌐 Environment Setup

### 📦 Prerequisites

| Tool    | Version  | Required For  |
| ------- | -------- | ------------- |
| Node.js | >= 18.x  | Frontend      |
| Java    | >= 17    | Backend       |
| Maven   | >= 3.8.x | Build Backend |

---

### 🚀 Run the App Locally

#### Frontend

```bash
cd ghbliui
npm install
npm run dev
# Runs on http://localhost:5173
```

#### Backend

```bash
cd ghbliapi
./mvnw spring-boot:run
# Runs on http://localhost:8080
```

---

## 🔑 Clerk Configuration

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

---

## 📡 AI Integration (Stability AI)

* Uses Feign Client in backend (`StabilityAiClient.java`)
* Accepts prompts or image input and sends to Stability AI
* Styles like `ghibli`, `anime`, etc. configured in frontend

---




## 🔄 User Workflow Diagram

```mermaid
%%{ init: { "theme": "default", "themeVariables": { "primaryColor": "#6366f1", "edgeLabelBackground": "#ffffff", "fontSize": "16px" } } }%%
graph TD
    A[User Sign In ] --> B[Upload Image or Text Prompt]
    B --> C[Frontend Sends API Call Axios]
    C --> D[Spring Boot Backend]
    D --> E[Feign Client → Stability AI]
    E --> F[AI Generates Anime Art]
    F --> G[Anime Image Returned to Frontend]
    G --> H[Display with Animation Framer Motion]
    H --> I[Theme Toggle, Auth Control, Feedback]

```

## 📸 Screenshots

1️⃣ Home Screen

![image](https://github.com/user-attachments/assets/37cdd0b9-1baf-4193-b957-3614df6e34aa)

2️⃣ Login Screen

![image](https://github.com/user-attachments/assets/0f59888d-5654-419a-ad2d-ec4345dade00)



3️⃣ Step Screen

![image](https://github.com/user-attachments/assets/4b944a8a-0fc3-458d-b4e5-da175da21e5a)

5️⃣  Pricing Screen

![image](https://github.com/user-attachments/assets/73859141-6931-4510-8506-b64946922be2)

 6️⃣  Silder Screen 

![image](https://github.com/user-attachments/assets/2e3f2dc7-4a17-44b4-8b96-fe800c9e3426)

7️⃣ User Screen

![image](https://github.com/user-attachments/assets/7f67c8a4-b4e6-432e-87bc-e5d6d583ae18)

8️⃣ TryNow Screen

![image](https://github.com/user-attachments/assets/e1ffc4ae-c12d-437d-9c61-e229fadb8797)

9️⃣ Photo+Prompt Screen 
![image](https://github.com/user-attachments/assets/b9b228ea-135c-476c-9b9f-2e99b33249ce)



🔟 Text+Style Screen

![image](https://github.com/user-attachments/assets/5711fe60-834b-4c95-b83d-07c0cd266869)




---

## 🙌 Acknowledgements

We gratefully acknowledge:

* ⚛️ React + Vite for the blazing frontend
* ☕ Spring Boot for clean and modular backend
* 🎨 Tailwind CSS for sleek styling
* 🛡️ Clerk.dev for secure, modern auth
* 🤖 Stability AI for powering the image transformation
* 💡 Open Source contributors and tools

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙋‍♂️ Author & Contact

**Lalit Chaudhari**
📧 [chaudharilalit717@gmail.com](mailto:chaudharilalit717@gmail.com)

🔗 [LinkedIn](https://www.linkedin.com/in/lalit-chaudhari-a16a10246)

📱 +91 7058097985

---
