export default defineEventHandler((event) => {
  return [
    {
      id: 1,
      name: 'Иван Петров',
      avatarUrl: 'https://randomuser.me/api/portraits/men/34.jpg',
      isVerified: true,
      rating: 4.9,
      reviews: 12,
      description: 'Специалист по организации прощальных церемоний. Опыт работы более 10 лет. Помогу в трудную минуту.'
    },
    {
      id: 2,
      name: 'Елена Сидорова',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      isVerified: true,
      rating: 4.8,
      reviews: 7,
      description: 'Организация и юридическое сопровождение. Индивидуальный подход к каждому клиенту.'
    },
    {
      id: 3,
      name: 'Алексей Иванов',
      avatarUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
      isVerified: false,
      rating: 4.8,
      reviews: 9,
      description: 'Новый сотрудник. Ответственно подхожу к выполнению поставленных задач.'
    },
    {
      id: 4,
      name: 'Мария Кузнецова',
      avatarUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
      isVerified: true,
      rating: null,
      reviews: null,
      description: 'Помогу с оформлением всех необходимых документов.'
    },
    {
      id: 5,
      name: 'Сергей Васильев',
      avatarUrl: 'https://randomuser.me/api/portraits/men/36.jpg',
      isVerified: false,
      rating: 4.7,
      reviews: 5,
      description: 'Опытный агент с хорошими отзывами.'
    },
    {
      id: 6,
      name: 'Ольга Попова',
      avatarUrl: 'https://randomuser.me/api/portraits/women/46.jpg',
      isVerified: false,
      rating: null,
      reviews: null,
      description: 'Стажер, готова учиться и помогать.'
    },
    {
      id: 7,
      name: 'Дмитрий Соколов',
      avatarUrl: 'https://randomuser.me/api/portraits/men/37.jpg',
      isVerified: true,
      rating: 5.0,
      reviews: 2,
      description: 'Высочайший сервис и внимание к деталям.'
    }
  ]
})
