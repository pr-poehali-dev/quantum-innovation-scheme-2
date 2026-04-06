import HeroSection from '@/components/HeroSection';
import Icon from '@/components/ui/icon';

const audiences = [
  {
    icon: 'BookOpen',
    title: 'Ученикам',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-500',
    items: [
      'Интерактивные тренажёры',
      'Памятки для решения задач',
      'Словарные слова в картинках',
      'Чек-листы подготовки к ВПР',
    ],
  },
  {
    icon: 'Heart',
    title: 'Родителям',
    color: 'bg-rose-50 border-rose-200',
    iconColor: 'text-rose-500',
    items: [
      'Рекомендации психолога по адаптации к школе',
      'Секреты выполнения домашних заданий без слёз',
      'Материалы для развития функциональной грамотности',
      'Советы по поддержке ребёнка дома',
    ],
  },
  {
    icon: 'GraduationCap',
    title: 'Коллегам',
    color: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-500',
    items: [
      'Технологические карты уроков по ФГОС НОО',
      'Разработки внеурочных занятий',
      'Шаблоны рабочих программ',
      'Авторские приёмы работы с детьми с ОВЗ',
    ],
  },
];

const Index = () => {
  return (
    <main>
      <HeroSection />

      {/* Intro */}
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-light text-gray-800 mb-4">О сайте</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Этот ресурс создан как открытое информационно-образовательное пространство для учеников, их родителей и коллег.
            Цель — сделать обучение в начальной школе <span className="text-gray-800 font-medium">прозрачным, увлекательным и эффективным</span>.
          </p>
        </div>
      </section>

      {/* Audiences */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-light text-gray-800 text-center mb-12">Здесь вы найдёте</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className={`rounded-2xl border-2 p-8 ${audience.color} flex flex-col gap-4`}
              >
                <div className={`${audience.iconColor}`}>
                  <Icon name={audience.icon} size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">{audience.title}</h3>
                <ul className="flex flex-col gap-2">
                  {audience.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600">
                      <Icon name="CheckCircle" size={18} className={`mt-0.5 shrink-0 ${audience.iconColor}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16 px-6 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-light text-white mb-4">Присоединяйтесь к нашему классному сообществу!</h2>
          <p className="text-white/60 text-lg mb-8">Все материалы — в открытом доступе, бесплатно.</p>
          <button className="bg-white text-gray-900 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Связаться с учителем
          </button>
        </div>
      </section>
    </main>
  );
};

export default Index;