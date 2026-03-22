🚀 MÜHÜR Rezervasyon Sistemi - Kurulum Rehberi
Bu projeyi yerel bilgisayarınızda çalıştırmak için 2 ayrı terminal açmanız gerekmektedir (Biri Frontend, diğeri Backend için).

📋 Ön Gereksinimler
Bilgisayarınızda Node.js (v18+) kurulu olmalıdır.

Firebase üzerinde bir projeniz ve .env dosyalarınız hazır olmalıdır.

1. Terminal: Backend (Sunucu) Kurulumu
Backend tarafı, Firebase ile iletişim kuran Node.js/Express yapısıdır.

Klasöre gidin:

Bash
cd restaurant-reservation/backend
Gerekli paketleri yükleyin:

Bash
npm install
Çalıştırın:

Bash
npm run dev
Not: Sunucu genellikle http://localhost:5000 portunda çalışmaya başlar.

2. Terminal: Frontend (React) Kurulumu
Frontend tarafı, Ant Design ve Vite kullanılan kullanıcı arayüzüdür.

Klasöre gidin (Ana dizinden):

Bash
cd restaurant-reservation
Gerekli paketleri yükleyin:

Bash
npm install
Uygulamayı başlatın:

Bash
npm run dev
Not: Tarayıcınızda otomatik olarak http://localhost:5173 (veya 3000) adresi açılacaktır.

📦 Yüklenen Temel Paketler
Eğer sıfırdan kuruyorsanız, projenin bel kemiğini oluşturan paketler şunlardır:

Frontend (React):

antd: UI bileşenleri (Tablo, Buton, Kartlar).

@ant-design/icons: Dashboard ikonları.

axios: API istekleri için.

@emailjs/browser: Onay mailleri göndermek için.

Backend (Node.js):

express: Sunucu çatısı.

firebase-admin: Veritabanı yönetimi.

cors: Frontend-Backend arası güvenli iletişim.

dotenv: Gizli anahtarları okumak için.

💡 Önemli Not: .env Dosyaları
Proje GitHub'dan çekildiğinde .env dosyaları gelmeyecektir. Kurulumu yapan kişi, ana dizine ve backend dizinine kendi Firebase anahtarlarını içeren .env dosyalarını oluşturmalıdır.
