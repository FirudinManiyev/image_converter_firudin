# Image Converter

Brauzerdə işləyən bu Vite + React + TypeScript tətbiqi şəkilləri fərqli formatlara çevirməyə, ölçülərini dəyişməyə və nəticəni dərhal endirməyə imkan verir. Serverə fayl göndərilmir.

## Əsas xüsusiyyətlər

- PNG, JPG/JPEG, WEBP və SVG fayllarının yüklənməsi
- PNG, JPG/JPEG və WEBP formatlarına çevirmə
- En və hündürlüyün fərdi və ya hazır ölçülərlə dəyişdirilməsi
- JPG və WEBP üçün keyfiyyət tənzimləməsi
- Orijinal və çevrilmiş şəkillərin önizlənməsi
- Çevrilmiş faylın birbaşa endirilməsi
- 20 MB ölçü limiti və uyğun olmayan fayllar üçün aydın xəta bildirişləri

## Texnologiyalar

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- react-dropzone
- sonner
- lucide-react

## Layihə strukturu

- `src/components` — interfeys komponentləri
  - `converter` — çevirmə idarəetmələri
  - `layout` — naviqasiya və açılış ekranı
  - `preview` — önizləmə və fayl məlumatları
  - `upload` — fayl yükləmə sahəsi
- `src/hooks` — xüsusi React hook-ları
- `src/services/image` — şəkil emalı və endirmə məntiqi
- `src/types` — TypeScript tipləri
- `src/utils` — yardımçı funksiyalar
- `src/pages` — səhifələr

## Yerli işə salma

```bash
npm install
npm run dev
```

İstehsal build-i və lint yoxlaması:

```bash
npm run build
npm run lint
```

## İstifadə

1. Açılış ekranından “Başlayaq” düyməsinə basın.
2. Şəkli sürükləyib buraxın və ya fayl seçin.
3. Ölçü, keyfiyyət və çıxış formatını təyin edin.
4. “Şəkli çevir” düyməsinə basın.
5. Hazır nəticəni endirin.

## Qeydlər

- Bütün emal brauzerdə aparılır.
- SVG faylları canvas vasitəsilə rasterləşdiyi üçün bəzi mürəkkəb SVG-lərdə nəticə məhdud ola bilər.
- Tətbiq yaradılmış `Object URL` ünvanlarını təmizləyir ki, uzun istifadə sessiyalarında yaddaş lazımsız tutulmasın.
