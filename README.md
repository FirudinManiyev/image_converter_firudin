# Image Converter

Bu layihə istifadəçilərə şəkilləri fərqli formatlara çevirməyə, ölçüsünü dəyişməyə və nəticəni dərhal müqayisə etməyə imkan verən Vite + React + TypeScript tətbiqidir.

## Əsas xüsusiyyətlər

- PNG, JPG/JPEG, WEBP və SVG şəkillərini yükləmək
- Şəkli digər formatlara çevirmək
- İstəyə bağlı olaraq eni və hündürlüyü dəyişmək
- JPG/WebP üçün keyfiyyət dərəcəsini tənzimləmək
- Orijinal və çevrilmiş şəkli müqayisə etmək
- Çevrilmiş faylı endirmək

## Texnologiyalar

- React 19
- TypeScript
- Vite
- Tailwind CSS
- react-dropzone
- browser-image-compression
- sonner
- lucide-react

## Proyektin strukturu

- src/components – UI komponentlər
  - components/converter – çevirmə ilə əlaqəli kontrol elementləri
  - components/preview – önizləmə və müqayisə komponentləri
  - components/upload – fayl yükləmə sahəsi
  - components/layout – layout komponentləri
- src/hooks – xüsusi React hook-lar
- src/services/image – şəkil emalı və endirmə işləri
- src/types – TypeScript tipləri
- src/utils – köməkçi funksiyalar
- src/pages – səhifələr

## Yerli inkişaf

1. Dependencies quraşdırın:
   ```bash
   npm install
   ```
2. Development serveri başladın:
   ```bash
   npm run dev
   ```
3. Build etmə:
   ```bash
   npm run build
   ```
4. Lint yoxlaması:
   ```bash
   npm run lint
   ```

## İstifadə qaydası

1. Proqramı açın.
2. Şəkil yükləyin.
3. İstədiyiniz formatı seçin.
4. Lazım gələrsə eni/hündürlüyü dəyişdirin.
5. Keyfiyyəti tənzimləyin.
6. “Çevirmək” düyməsini basın.
7. Nəticəni endirin.

## Qeydlər

- Tətbiq yalnız brauzer daxilində işləyir; server tələb etmir.
- Maksimum yüklənə bilən fayl ölçüsü 20 MB-dir.
- SVG kimi vector formatlar üçün çevrilmə nəticəsi canvas əsaslı işlədiyi üçün bəzi hallarda məhdudiyyət ola bilər.

## Müəllif
Firudin Maniyev  
Full-Stack Developer  
Email: firudinmaniyev@gmail.com