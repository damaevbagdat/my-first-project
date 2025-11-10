import { motion } from 'framer-motion'
import { 
  Award, 
  BookOpen, 
  Users, 
  Clock, 
  CheckCircle,
  Star,
  Quote
} from 'lucide-react'

const About = () => {
  const achievements = [
    { icon: Award, text: 'Лучший юрист года 2023', color: 'text-yellow-500' },
    { icon: BookOpen, text: '15+ лет практики', color: 'text-blue-500' },
    { icon: Users, text: '500+ довольных клиентов', color: 'text-green-500' },
    { icon: Clock, text: '24/7 поддержка', color: 'text-purple-500' },
  ]

  const values = [
    'Профессионализм и экспертность',
    'Индивидуальный подход к каждому делу',
    'Прозрачность в работе и ценообразовании',
    'Конфиденциальность и защита данных',
    'Быстрое решение сложных вопросов',
    'Доступные цены и гибкая оплата'
  ]

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Предприниматель',
      text: 'Помогли решить сложный корпоративный спор. Профессионально, быстро, результативно. Рекомендую!',
      rating: 5
    },
    {
      name: 'Михаил Иванов',
      role: 'Частное лицо',
      text: 'Отличная работа по семейному праву. Развод прошел без лишних проблем. Спасибо за поддержку.',
      rating: 5
    },
    {
      name: 'Елена Сидорова',
      role: 'Директор ООО',
      text: 'Консультация по трудовому праву была очень полезной. Теперь знаю, как защитить свои права.',
      rating: 5
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            О нашей практике
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Мы — команда опытных юристов с многолетним стажем работы.
            Наша цель — защитить ваши права и интересы.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Users className="w-16 h-16 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-800">Александр Петров</h3>
                  <p className="text-primary-600 font-semibold">Ведущий юрист</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-500 rounded-full"
              />
            </motion.div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg"
                >
                  <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                  <span className="text-sm font-medium text-secondary-700">
                    {achievement.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-secondary-800 mb-6">
                Наши принципы работы
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-secondary-700">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <Quote className="w-8 h-8 text-primary-600 mb-4" />
              <p className="text-secondary-700 italic mb-4">
                "Каждый клиент уникален, и каждое дело требует индивидуального подхода. 
                Мы не просто решаем правовые вопросы — мы защищаем ваши интересы."
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-secondary-600">5.0 из 5</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-secondary-800 mb-12">
            Отзывы наших клиентов
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-secondary-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About