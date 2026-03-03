# 🚲 BlablaBike MVP (Next.js)

---

| ** )| | ** _| |** | | ** _| ** )(\_) | \_\_\_**
| _ \| |/ _` | '_ \| |/ _` | _ \| | |/ / _ \
 | |_) | | (_| | |_) | | (_| | |_) | | < **/
|\_\_**/|_|\__,_|_.\_\_/|_|\__,_|\_**_/|_|\_|\_\_**|

Проект по аренде велосипедов для школьной практики. Сервис для поиска, выбора и быстрого бронирования велосипедов.

## 👥 Наша Команда

- **Developers (5):** Dumitru Gangan, Vladyslav Kravchenko, Dmitrii Evdokimov, Kateryna Matvieieva, Stepan Serbin
- **QA (4):** Dariia Boiko, Daryna Suk, Vladimir Dinu, Hanna Kozlianska

## 🛠 Технологии

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Prisma (PostgreSQL)
- **UI Components:** Lucide-react (icons)

---

## 🚦 Правила разработки (Git Flow)

Чтобы наш код не превратился в хаос, соблюдаем эти правила:

1. **Никаких коммитов напрямую в `main`!** Ветка защищена.
2. **Создаем ветку** от `main` для каждой задачи:
   - `feat/название-фичи` (например: `feat/catalog-page`)
   - `fix/описание-бага` (например: `fix/booking-button`)
3. **После завершения задачи** делаем `git push` своей ветки и создаем **Pull Request (PR)** на GitHub.
4. **Code Review:** PR должен быть одобрен (Approve) как минимум одним другим разработчиком.
5. **QA проверка:** Тестировщики проверяют функционал в ветке перед слиянием.
6. Только после аппрувов делаем **Merge**.

---

## 🚀 Запуск проекта

1. Склонировать репозиторий:
   git clone [https://github.com/vkadi-budetak/blablabike.git](https://github.com/vkadi-budetak/blablabike.git)
2. Установить зависимости:
   npm install
3. Запустить локально:
   npm run dev
4. Открыть в браузере:
   http://localhost:3000
