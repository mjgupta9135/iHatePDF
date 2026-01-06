import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ToolCard({ icon: Icon, title, description, to, color = 'primary' }) {
  const colorClasses = {
    primary: 'hover:border-primary/50 hover:shadow-primary/10',
    organize: 'hover:border-tool-organize/50 hover:shadow-tool-organize/10',
    convert: 'hover:border-tool-convert/50 hover:shadow-tool-convert/10',
    optimize: 'hover:border-tool-optimize/50 hover:shadow-tool-optimize/10',
    security: 'hover:border-tool-security/50 hover:shadow-tool-security/10',
    edit: 'hover:border-tool-edit/50 hover:shadow-tool-edit/10',
  };

  const iconColors = {
    primary: 'text-primary',
    organize: 'text-tool-organize',
    convert: 'text-tool-convert',
    optimize: 'text-tool-optimize',
    security: 'text-tool-security',
    edit: 'text-tool-edit',
  };

  return (
    <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Link
        to={to}
        className={`block p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:shadow-xl ${colorClasses[color]}`}
      >
        <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 ${iconColors[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-semibold text-lg mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </Link>
    </motion.div>
  );
}
