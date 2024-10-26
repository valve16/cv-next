import styles from './page.module.css';

export default function Page() 
{
  return (
    <div className={styles.container}>
      {/* Личная информация */}
      <section className={styles.section}>
        <h1 className={styles.name}>Глушков Олег</h1>
        <p className={styles.jobTitle}>Backend-разработчик</p>
        <p className={styles.contactInfo}>Email: glushkovoleg2004@yandex.ru</p>
      </section>

      {/* Навыки */}
      <section className={styles.section}>
        <h2>Навыки</h2>
        <ul className={styles.skillsList}>
          <li>JavaScript, TypeScript</li>
          <li>C++</li>
          <li>React, Next.js</li>
          <li>HTML, CSS</li>
          <li>Git, GitHub, CI/CD</li>
          <li>REST API, GraphQL</li>
        </ul>
      </section>

      {/* Опыт работы */}
      <section className={styles.section}>
        <h2>Опыт работы</h2>
        <div className={styles.job}>
          <h3>Backend-разработчик, ИИ, Базы знаний</h3>
          <p className={styles.company}>Moneta, платформа для организации расчётов</p>
          <p className={styles.dates}>Июль 2024</p>
          <ul>
            <li><span className={styles.firstWord}>Стек:</span> Python, YandexGPT, ChatGPT, Neo4j</li>
            <li><span className={styles.firstWord}>Задачи:</span> Исследование применения Large Language Models (LLM) в кампании с использованием YandexGPT и 
              ChatGPT. Создание базы знаний на основе Neo4j для обеспечения ответов пользователей.</li>
            <li><span className={styles.firstWord}>Достижения:</span> Получил ценный опыт работы с LLM и Neo4j. Идентифицировал ключевые вызовы в процессе создания графа и поиска информации в нем.</li>
          </ul>
        </div>
      </section>

      {/* Образование */}
      <section className={styles.section}>
        <h2>Образование</h2>
        <div className={styles.education}>
          <p>ПГТУ Волгатех, Йошкар-Ола</p>
          <p>3 курса бакалавриата. Сентябрь  2022 – Н. В.</p>
          <p>ФИиВТ, Программная инженерия.</p>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Языки</h2>
        <div className={styles.education}>
          <p>Русский, Английский B1.</p>
        </div>
      </section>
    </div>
  );
}