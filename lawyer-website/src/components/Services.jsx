import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Scale, 
  Building, 
  Users, 
  FileText, 
  Shield, 
  Home,
  Car,
  Heart,
  Briefcase,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      icon: Scale,
      title: 'Гражданское право',
      description: 'Семейные споры, наследство, договоры, недвижимость',
      features: ['Развод и раздел имущества', 'Наследственные дела', 'Договорные споры', 'Недвижимость'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building,
      title: 'Корпоративное право',
      description: 'Регистрация ООО, ИП, корпоративные споры',
      features: ['Регистрация бизнеса', 'Корпоративные споры', 'Договоры с партнерами', 'Ликвидация'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Трудовое право',
      description: 'Трудовые споры, увольнение, зарплата',
      features: ['Незаконное увольнение', 'Задержка зарплаты', 'Трудовые договоры', 'Компенсации'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Административное право',
      description: 'Штрафы ГИБДД, административные дела',
      features: ['Штрафы ГИБДД', 'Административные дела', 'Обжалование решений', 'Защита прав'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Уголовное право',
      description: 'Защита по уголовным делам',
      features: ['Защита обвиняемых', 'Досудебное урегулирование', 'Смягчение наказания', 'Реабилитация'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Home,
      title: 'Недвижимость',
      description: 'Сделки с недвижимостью, споры',
      features: ['Покупка/продажа', 'Аренда', 'Споры с застройщиками', 'Приватизация'],
      color: 'from-teal-500 to-teal-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-white">
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
            Наши услуги
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Полный спектр юридических услуг для физических и юридических лиц.
            Мы решаем любые правовые вопросы профессионально и эффективно.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className="card p-8 h-full cursor-pointer">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-secondary-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: hoveredCard === index ? 1 : 0.7,
                        x: hoveredCard === index ? 0 : -10
                      }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center space-x-2 text-sm text-secondary-600"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300"
                >
                  <span>Подробнее</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredCard === index ? 0.1 : 0 
                  }}
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
              Не нашли нужную услугу?
            </h3>
            <p className="text-secondary-600 mb-6">
              Свяжитесь с нами для индивидуальной консультации
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Получить консультацию
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services