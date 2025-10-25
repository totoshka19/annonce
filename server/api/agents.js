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
      rating: null,
      reviews: null,
      description: 'Новый сотрудник. Ответственно подхожу к выполнению поставленных задач.'
    },
  ]
})
