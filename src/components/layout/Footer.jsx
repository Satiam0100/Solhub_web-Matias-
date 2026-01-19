import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../AppIcon';
import Button from '../ui/Button';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = ({ variant = 'default' }) => {
  const currentYear = new Date()?.getFullYear();

  const navigationSections = {
    solhub: [
      { name: 'Soluciones', path: '/modules-showcase', icon: 'Grid3X3' },
      { name: 'IA Center', path: '/ai-intelligence-center', icon: 'Brain' },
      { name: 'Seguridad', path: '/security-fortress', icon: 'Shield' },
      { name: 'Precios', path: '/pricing-calculator', icon: 'DollarSign' }
    ],
    contact: [
      { name: 'Solicitar Demo', path: '/demo-experience', icon: 'Play' },
      { name: 'WhatsApp', href: 'https://wa.me/584129974533', external: true, icon: 'MessageCircle' },
      { name: 'Instagram', href: 'https://www.instagram.com/solware_/?igsh=MTg4OTdwM3k3d2o4cA%3D%3D#', external: true, icon: 'instagram' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/agencia-solware/', external: true, icon: 'linkedin' }
    ]
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  if (variant === 'simple') {
    return (
      <footer className="py-12 border-t border-border">
        <div className="container-medical">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/assets/images/solhub-logo.webp" 
                alt="SolHub Logo" 
                className="w-24 h-12 object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} SolHub by{' '}
              <a 
                href="https://www.solware.agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Solware
              </a>
              . Transformando la medicina diagnóstica en Venezuela.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <motion.footer 
      className="glass-medium border-t border-glass-border py-8 sm:py-12 lg:py-16 backdrop-blur-glass-strong"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container-medical">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2 text-center md:text-left md:ml-[80px]">
            <motion.div 
              className="flex items-center justify-center md:justify-start space-x-3 mb-6"
              variants={footerVariants}
            >
              <img 
                src="/assets/images/solhub-logo.webp" 
                alt="SolHub Logo" 
                className="w-24 h-12 object-contain"
              />
            </motion.div>
            <motion.p 
              className="text-muted-foreground mb-6 max-w-md mx-auto md:mx-0 text-sm sm:text-base text-justify"
              variants={footerVariants}
            >
              Transformando laboratorios médicos en Venezuela con tecnología de vanguardia, 
              inteligencia artificial y seguridad avanzada. Desarrollado por Solware con el respaldo 
              de profesionales médicos venezolanos.
            </motion.p>
          </div>

          {/* Quick Links */}
          <motion.div variants={footerVariants} className="text-center md:text-left">
            <motion.h3 
              className="font-semibold text-foreground mb-4 text-xl sm:text-2xl cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              SolHub
            </motion.h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {navigationSections?.solhub?.map((item) => (
                <Link key={item?.path} to={item?.path}>
                  <Button
                    variant="ghost"
                    size="lg"
                    iconName={item?.icon}
                    iconPosition="left"
                    iconSize={24}
                    className="text-muted-foreground hover:text-primary hover:bg-primary/10 text-sm sm:text-base py-3 px-4"
                  >
                    {item?.name}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={footerVariants} className="text-center md:text-left">
            <motion.h3 
              className="font-semibold text-foreground mb-4 text-xl sm:text-2xl cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Contacto
            </motion.h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {navigationSections?.contact?.map((item) => (
                <div key={item?.path || item?.href}>
                  {item?.external ? (
                    <a 
                      href={item?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item?.icon === 'instagram' || item?.icon === 'linkedin' ? (
                        <Button
                          variant="ghost"
                          size="lg"
                          className={`text-muted-foreground hover:bg-primary/10 text-sm sm:text-base py-3 px-4 ${
                            item?.name === 'WhatsApp' ? 'hover:text-success' : 'hover:text-primary'
                          }`}
                        >
                          {item?.icon === 'instagram' ? (
                            <FaInstagram className="w-6 h-6 mr-2" />
                          ) : (
                            <FaLinkedin className="w-6 h-6 mr-2" />
                          )}
                          {item?.name}
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="lg"
                          iconName={item?.icon}
                          iconPosition="left"
                          iconSize={24}
                          className={`text-muted-foreground hover:bg-primary/10 text-sm sm:text-base py-3 px-4 ${
                            item?.name === 'WhatsApp' ? 'hover:text-success' : 'hover:text-primary'
                          }`}
                        >
                          {item?.name}
                        </Button>
                      )}
                    </a>
                  ) : (
                    <Link to={item?.path}>
                      <Button
                        variant="ghost"
                        size="lg"
                        iconName={item?.icon}
                        iconPosition="left"
                        iconSize={24}
                        className="text-muted-foreground hover:text-primary hover:bg-primary/10 text-sm sm:text-base py-3 px-4"
                      >
                        {item?.name}
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-glass-border mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4"
          variants={footerVariants}
        >
          <div className="text-xs sm:text-sm text-muted-foreground text-center">
            © {currentYear} SolHub by{' '}
            <a 
              href="https://www.solware.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Solware
            </a>
            . Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <Link to="/legal/privacidad">
              <Button
                variant="ghost"
                size="sm"
                iconName="Lock"
                iconPosition="left"
                iconSize={20}
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 text-sm py-2 px-3"
              >
                Privacidad
              </Button>
            </Link>
            <Link to="/legal/terminos">
              <Button
                variant="ghost"
                size="sm"
                iconName="FileText"
                iconPosition="left"
                iconSize={20}
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 text-sm py-2 px-3"
              >
                Términos
              </Button>
            </Link>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a 
              href="https://www.solware.agency" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="sm"
                iconName="ExternalLink"
                iconPosition="left"
                iconSize={20}
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 text-sm font-medium py-2 px-3"
              >
                Solware Agency
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;